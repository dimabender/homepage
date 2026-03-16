import {
  createSignal,
  createMemo,
  onCleanup,
  createEffect,
  type Accessor,
} from "solid-js";

export default function useScrollMetrics(
  ref: Accessor<HTMLElement | undefined>,
  offset: number,
): {
  progress: Accessor<number | undefined>;
  viewportSize: Accessor<{ x: number; y: number } | undefined>;
} {
  const [scrollY, setScrollY] = createSignal<number>(0);
  const [viewportSize, setViewportSize] = createSignal<
    { x: number; y: number } | undefined
  >();
  const [refElement, setRefElement] = createSignal<HTMLElement | undefined>();
  let ticking = false;

  const updateViewportHeight = () => {
    setViewportSize({ x: window.innerWidth, y: window.innerHeight });
  };

  createEffect(() => {
    updateViewportHeight();
    const el = ref();
    if (!el) {
      setRefElement(undefined);
      return;
    }

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrollY(el.scrollTop);
          ticking = false;
        });
        ticking = true;
      }
    };

    setRefElement(el);
    setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateViewportHeight);

    onCleanup(() => {
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateViewportHeight);
    });
  });

  const progress = createMemo(() => {
    const el = refElement();
    if (!el) return undefined;
    const vh = viewportSize()?.y;
    return vh ? Math.min(1, Math.max(0, scrollY() / (vh - offset))) : undefined;
  });

  return { progress, viewportSize };
}
