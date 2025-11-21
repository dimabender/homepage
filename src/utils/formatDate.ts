export default function formatDate(dateStr: string): string {
  const [year, month] = dateStr.split("-");
  const shortMonths = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const monthIndex = Number(month) - 1;
  return `${year} ${shortMonths[monthIndex]}`;
}
