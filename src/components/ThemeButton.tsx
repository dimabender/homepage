import { useTheme } from "@/contexts/ThemeContext";
import { MoonIcon, SunIcon } from "./icons";
import { Show } from "solid-js";

export default function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button onClick={toggleTheme}>
      <Show when={theme() === "light"}>
        <MoonIcon size={32} />
      </Show>
      <Show when={theme() === "dark"}>
        <SunIcon size={32} />
      </Show>
    </button>
  );
}
