import { Meta, Title } from "@solidjs/meta";
import { useLocation } from "@solidjs/router";
import { Show } from "solid-js";

interface Props {
  title: string;
  description: string;
  image?: string;
}

export default function MetaHead(props: Props) {
  const { title, description, image } = props;

  const location = useLocation();
  const url = () => `https://dimabender.com${location.pathname}`;

  const formatedTitle = `${title} | dimabender`;

  return (
    <>
      <Title>{formatedTitle}</Title>
      <Meta name="title" content={formatedTitle} />
      <Meta property="og:title" content={formatedTitle} />
      <Meta name="description" content={description} />
      <Meta property="og:description" content={description} />
      <Meta property="og:type" content="website" />
      <Meta property="og:url" content={url()} />
      <Show when={image}>
        <Meta property="og:image" content={image!} />
      </Show>
    </>
  );
}
