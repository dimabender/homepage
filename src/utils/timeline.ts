type CareerItem = { slug: string } & Pick<CareerModule, "meta">;

export function getUniquesYears(career: CareerItem[]): number[] {
  return [...new Set(career.flatMap((item) => item.meta.period))].sort(
    (a, b) => a - b,
  );
}

export function buildYearsIndex(career: CareerItem[]) {
  const years = getUniquesYears(career);
  const index = new Map<number, number>();

  years.forEach((year, i) => {
    index.set(year, i);
  });

  return { years, index };
}

export function assignLevels(
  career: CareerItem[],
): (CareerItem & { level: number })[] {
  const sorted = [...career].sort(
    (a, b) => a.meta.period[0] - b.meta.period[0],
  );

  const lastEndPerLevel: number[] = [];
  const result: (CareerItem & { level: number })[] = [];

  for (const item of sorted) {
    const [start, end] = item.meta.period;
    let level = 0;

    while (level < lastEndPerLevel.length && start < lastEndPerLevel[level]) {
      level++;
    }

    lastEndPerLevel[level] = end;
    result.push({ ...item, level });
  }

  return result;
}
