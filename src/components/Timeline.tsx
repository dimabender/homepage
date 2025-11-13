import career from "@/data/career.json";
import {
  assignLevels,
  buildYearsIndex,
  getUniquesYears,
} from "@/utils/timeline";
import { For } from "solid-js";
import "@/styles/components/Timeline.css";
import { A } from "@solidjs/router";

const LABEL_WIDTH = 42;
const HALF_LABEL = LABEL_WIDTH / 2;

export default function Timeline() {
  const items = assignLevels(career);
  const rowsCount = Math.max(...items.map((i) => i.level)) + 1;

  const { years, index } = buildYearsIndex(career);
  const segments = Math.max(years.length - 1, 1);

  const calcLeft = (startYear: number) => {
    const i = index.get(startYear) ?? 0;
    const ratio = segments === 0 ? 0 : i / segments;

    return `calc((100% - ${LABEL_WIDTH}px) * ${ratio} + ${HALF_LABEL}px)`;
  };

  const calcWidth = (startYear: number, endYear: number) => {
    const iStart = index.get(startYear) ?? 0;
    const iEnd = index.get(endYear) ?? iStart;
    const ratio = segments === 0 ? 0 : (iEnd - iStart) / segments;

    return `calc((100% - ${LABEL_WIDTH}px) * ${ratio})`;
  };

  return (
    <div class="timeline-container">
      <div
        class="timeline-list"
        style={{
          "--rows": rowsCount,
        }}
      >
        <For each={items}>
          {(item) => {
            const [start, end] = item.period;

            return (
              <div
                class="timeline-item"
                style={{
                  left: calcLeft(start),
                  width: calcWidth(start, end),
                  bottom: `calc(var(--row-height) * ${item.level})`,
                }}
              >
                <A href="/" class="timeline-link">
                  {item.name}
                </A>
              </div>
            );
          }}
        </For>
      </div>
      <div class="years-container">
        <For each={getUniquesYears(career)}>
          {(year) => <span>{year}</span>}
        </For>
      </div>
    </div>
  );
}
