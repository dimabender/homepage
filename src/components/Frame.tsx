import "@/styles/components/Frame.css";
import { createSignal, JSX, onMount } from "solid-js";

interface Props {
  frameSize: number;
  lineSize: number;
  color: string;
  colorMuted: string;
  children?: JSX.Element;
}

export default function Frame(props: Props) {
  const { frameSize, lineSize, color, colorMuted, children } = props;

  const [pressed, setPressed] = createSignal(false);
  let mobile = false;

  onMount(() => {
    mobile = window.matchMedia("(hover: none) and (pointer: coarse)").matches;
  });

  const onPointerDown = () => {
    if (!mobile) return;
    setPressed(true);
  };

  const onPointerUp = () => {
    if (!mobile) return;
    setPressed(false);
  };

  const onPointerCancel = () => {
    if (!mobile) return;
    setPressed(false);
  };

  return (
    <div
      class={`frame-wrapper ${pressed() && "pressed"}`}
      style={{
        "--l": `${frameSize}px`,
        "--w0": `${lineSize}px`,
        "--line-color": color,
        "--line-color-muted": colorMuted,
      }}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerCancel}
    >
      <div class="frame">{children}</div>
    </div>
  );
}
