import {
  createContext,
  useContext,
  createSignal,
  type ParentComponent,
  type Accessor,
  type Setter,
} from "solid-js";
import useScrollMetrics from "~/hooks/useScrollMetrics";

type ScrollMetricsContextValue = {
  progress: Accessor<number | undefined>;
  viewportSize: Accessor<{ x: number; y: number } | undefined>;
  setScrollRef: Setter<HTMLElement | undefined>;
};

const ScrollMetricsContext = createContext<ScrollMetricsContextValue>();

export const ScrollMetricsProvider: ParentComponent<{ offset: number }> = (
  props,
) => {
  const [scrollRef, setScrollRef] = createSignal<HTMLElement | undefined>();
  const metrics = useScrollMetrics(scrollRef, props.offset);

  return (
    <ScrollMetricsContext.Provider value={{ ...metrics, setScrollRef }}>
      {props.children}
    </ScrollMetricsContext.Provider>
  );
};

export const useScrollMetricsContext = () => {
  const ctx = useContext(ScrollMetricsContext);
  if (!ctx)
    throw new Error(
      "useScrollMetricsContext must be used within ScrollMetricsProvider",
    );
  return ctx;
};
