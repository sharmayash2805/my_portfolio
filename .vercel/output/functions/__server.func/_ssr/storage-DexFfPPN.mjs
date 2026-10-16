//#region node_modules/.nitro/vite/services/ssr/assets/storage-DexFfPPN.js
/** Small guarded wrapper around sessionStorage/localStorage (SSR safe). */
function getStore(kind) {
	if (typeof window === "undefined") return null;
	try {
		return kind === "session" ? window.sessionStorage : window.localStorage;
	} catch {
		return null;
	}
}
function readCache(key, kind = "session") {
	const store = getStore(kind);
	if (!store) return null;
	try {
		const raw = store.getItem(key);
		return raw ? JSON.parse(raw) : null;
	} catch {
		return null;
	}
}
function writeCache(key, value, kind = "session") {
	const store = getStore(kind);
	if (!store) return;
	try {
		store.setItem(key, JSON.stringify(value));
	} catch {}
}
//#endregion
export { writeCache as n, readCache as t };
