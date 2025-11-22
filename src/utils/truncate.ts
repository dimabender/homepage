export default function truncate(text: string, max: number): string {
  if (text.length <= max) return text;

  let cut = text.slice(0, max);
  const lastSpace = cut.lastIndexOf(" ");

  if (lastSpace !== -1) {
    cut = cut.slice(0, lastSpace);
  }

  return cut + "...";
}
