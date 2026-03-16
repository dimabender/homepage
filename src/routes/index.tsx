import { onCleanup, onMount, Show } from "solid-js";
import { useScrollMetricsContext } from "~/contexts/ScrollMetricsContext";
import AnimatedBackdrop from "~/components/AnimatedBackdrop";
import HeroSection from "~/sections/HeroSections";

export default function Home() {
  let mainRef!: HTMLElement;

  const { progress, viewportSize, setScrollRef } = useScrollMetricsContext();

  onMount(() => {
    mainRef.focus();
    setScrollRef(mainRef);

    onCleanup(() => setScrollRef(undefined));
  });

  return (
    <>
      <main ref={mainRef} class="snap">
        <HeroSection />
        <div class="container snap">
          <h2>Something</h2>
          <p>useless information</p>
          <p>useless information</p>
          <p>useless information</p>
          <p>useless information</p>
          <p>useless information</p>
        </div>
      </main>
      <Show when={progress() !== undefined && viewportSize() !== undefined}>
        <AnimatedBackdrop progress={progress} viewportSize={viewportSize} />
      </Show>
    </>
  );
}
