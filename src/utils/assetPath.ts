export default function assetPath(path: string) {
  const base = import.meta.env.BASE_URL || "/";
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${base}${clean}`;
}
