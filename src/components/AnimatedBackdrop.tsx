import { type Accessor, createSignal, onCleanup, onMount } from "solid-js";
import "~/styles/components/AnimatedBackdrop.css";
import mapRange from "~/utils/mapRange";

interface Props {
  progress: Accessor<number | undefined>;
  viewportSize: Accessor<{ x: number; y: number } | undefined>;
}

export default function AnimatedBackdrop(props: Props) {
  const { progress, viewportSize } = props;

  const [parentWidth, setParentWidth] = createSignal<number>(0);

  let backdropRef!: HTMLDivElement;

  onMount(() => {
    const updateWidth = () => {
      if (backdropRef?.parentElement) {
        setParentWidth(backdropRef.parentElement.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    onCleanup(() => window.removeEventListener("resize", updateWidth));
  });

  return (
    <div
      class="backdrop-container"
      style={{
        top: `${(1 - progress()!) * (viewportSize()!.y - 64)}px`,
      }}
    >
      <div
        ref={backdropRef}
        class="backdrop"
        style={{
          "border-radius": `${(1 - progress()!) * 32}px`,
          "max-width": `${768 + progress()! * (parentWidth() - 768)}px`,
          "box-shadow": `0px 4px 20px 0px rgba(0, 0, 0, ${mapRange(progress() ?? 1, 0.2, 0)})`,
        }}
      />
    </div>
  );
}
