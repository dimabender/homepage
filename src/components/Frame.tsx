import "@/styles/components/Frame.css";
import { JSX } from "solid-js";

interface Props {
  frameSize: number;
  lineSize: number;
  children?: JSX.Element;
}

export default function Frame(props: Props) {
  const { frameSize, lineSize, children } = props;

  return (
    <div
      class="frame-wrapper"
      style={{
        "--l": `${frameSize}px`,
        "--w0": `${lineSize}px`,
      }}
    >
      <div class="frame">{children}</div>
    </div>
  );
}
