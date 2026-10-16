import express, { Express } from "express";
import cors from "cors";
import helmet from "helmet";
import { env } from "./config/env.js";
import routes from "./routes/index.js";
import { notFoundMiddleware } from "./middleware/notFound.middleware.js";
import { errorMiddleware } from "./middleware/error.middleware.js";
import { loggerMiddleware } from "./middleware/logger.middleware.js";
import { globalRateLimiter } from "./middleware/rateLimit.middleware.js";

const app: Express = express();

app.disable("x-powered-by");

app.use(
  helmet({
    contentSecurityPolicy: false,
    crossOriginResourcePolicy: { policy: "cross-origin" },
  }),
);

// Support multiple FRONTEND_URL origins (comma separated) as well as Vercel preview domains (*.vercel.app)
const allowedOrigins = (env.FRONTEND_URL || "")
  .split(",")
  .map((url) => url.trim().replace(/\/$/, ""))
  .filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow server-to-server requests, mobile clients, and tools with no origin header
      if (!origin) {
        return callback(null, true);
      }

      const cleanOrigin = origin.replace(/\/$/, "");

      // Match explicit configured URLs, Vercel deployments (*.vercel.app), localhost, or dev mode
      const isAllowedUrl = allowedOrigins.includes(cleanOrigin);
      const isVercelDomain =
        /\.vercel\.app$/.test(cleanOrigin) || cleanOrigin.endsWith(".vercel.app");
      const isLocalhost =
        /^https?:\/\/localhost(:\d+)?$/.test(cleanOrigin) ||
        /^https?:\/\/127\.0\.0\.1(:\d+)?$/.test(cleanOrigin);

      if (isAllowedUrl || isVercelDomain || isLocalhost || env.NODE_ENV === "development") {
        callback(null, true);
      } else {
        callback(new Error(`Origin ${origin} not allowed by CORS`));
      }
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "X-Request-ID"],
  }),
);

app.use(express.json({ limit: "10kb" }));
app.use(express.urlencoded({ limit: "10kb", extended: true }));

app.use(loggerMiddleware);

app.use("/api", globalRateLimiter, routes);

app.use(notFoundMiddleware);

app.use(errorMiddleware);

export default app;
