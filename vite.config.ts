import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 3000,
  },
  nitro: {
    preset: process.env.VERCEL ? "vercel" : "node-server",
  },
  tanstackStart: {
    server: { entry: "server" },
  },
});
