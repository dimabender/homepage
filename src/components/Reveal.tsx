import { createSignal, onCleanup, onMount, JSX } from "solid-js";

interface Props {
  children: JSX.Element;
}

export default function Reveal(props: Props) {
  const { children } = props;

  let ref!: HTMLDivElement;
  const [visible, setVisible] = createSignal(false);

  onMount(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.15 },
    );

    obs.observe(ref);
    onCleanup(() => obs.disconnect());
  });

  return (
    <div ref={ref} class={`reveal ${visible() && "is-visible"}`}>
      {children}
    </div>
  );
}
