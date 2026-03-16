export default function mapRange(
  value: number,
  min: number,
  max: number,
): number {
  return min + (max - min) * value;
}
