export default function assetPath(path: string) {
  const base = import.meta.env.SERVER_BASE_URL ?? "/";
  const normalizedBase = base === "/" ? "/" : base.replace(/\/+$/, "") + "/";
  const clean = path.replace(/^\/+/, "");

  return `${normalizedBase}${clean}`;
}
