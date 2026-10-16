/**
 * Safe API URL helper that resolves absolute URLs on server (SSR) and relative paths on browser
 */
export function getApiEndpoint(path: string): string | null {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  const envUrl = (import.meta.env.VITE_API_BASE_URL as string | undefined)?.trim();

  if (envUrl) {
    return `${envUrl.replace(/\/$/, "")}${cleanPath}`;
  }

  // On client browser, relative path resolves against window.location.origin
  if (typeof window !== "undefined") {
    return `/api${cleanPath}`;
  }

  // On server (SSR) without absolute base URL, relative fetch throws Invalid URL
  return null;
}
