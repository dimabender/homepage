import { A } from "@solidjs/router";
import { useScrollMetricsContext } from "~/contexts/ScrollMetricsContext";
import "~/styles/components/Header.css";
import mapRange from "~/utils/mapRange";

export default function Header() {
  const { progress, viewportSize } = useScrollMetricsContext();

  return (
    <header>
      <div
        class="header-inner"
        style={{ padding: `${mapRange(progress() ?? 1, 16, 0)}px` }}
      >
        <nav
          style={{
            width: `${mapRange(progress() ?? 1, 340, viewportSize()?.x ?? 0)}px`,
            height: `${mapRange(progress() ?? 1, 64, 96)}px`,
            "border-radius": `${mapRange(progress() ?? 1, 64, 0)}px`,
            "background-color": `rgba(229, 229, 229, ${mapRange(progress() ?? 1, 0.2, 0)})`,
            border: `2px solid rgba(243, 243, 243, ${mapRange(progress() ?? 1, 0.2, 0)})`,
            "box-shadow": `0px 4px 20px 0px rgba(0, 0, 0, ${mapRange(progress() ?? 1, 0.2, 0)}), inset 0px 0px 32px 0px rgba(255, 255, 255, ${mapRange(progress() ?? 1, 0.6, 0)})`,
          }}
        >
          <ul>
            <li class="link">
              <A href="/works">works</A>
            </li>
            <li>
              <A class="logo" href="/">
                DIMABENDER
              </A>
            </li>
            <li class="link">
              <A href="/career">career</A>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
