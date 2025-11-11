import "@/styles/components/Frame.css";

interface Props {
  frameSize: number;
  lineSize: number;
}

export default function Frame(props: Props) {
  const { frameSize, lineSize } = props;

  return (
    <div
      class="frame-wrapper"
      style={{
        "--l": `${frameSize}px`,
        "--w0": `${lineSize}px`,
      }}
    >
      <div class="frame" />
    </div>
  );
}
