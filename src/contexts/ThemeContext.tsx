import {
  createContext,
  createSignal,
  JSX,
  onMount,
  useContext,
} from "solid-js";
import { isServer } from "solid-js/web";

type Theme = "light" | "dark";

type ThemeContextValue = {
  theme: () => Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue>();

export function ThemeProvider(props: { children: JSX.Element }) {
  const [theme, setThemeSignal] = createSignal<Theme>("light");

  const applyTheme = (next: Theme) => {
    if (isServer) return;

    const root = document.documentElement;
    root.dataset.theme = next;
    root.classList.toggle("dark", next === "dark");

    try {
      localStorage.setItem("theme", next);
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error(error.message);
      } else {
        console.log("Theme provider unknown error");
      }
    }

    setThemeSignal(next);
  };

  const toggleTheme = () => {
    const next: Theme = theme() === "dark" ? "light" : "dark";
    applyTheme(next);
  };

  onMount(() => {
    const current =
      (document.documentElement.dataset.theme as Theme | undefined) ?? "light";
    setThemeSignal(current);
  });

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside <ThemeProvider>");
  return ctx;
}
