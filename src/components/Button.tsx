import { A } from "@solidjs/router";

type LinkType = "default" | "external" | "mail";

interface Props {
  type?: LinkType;
  title: string;
  href: string;
}

export default function Button(props: Props) {
  const { type = "default", title, href } = props;

  if (type === "mail") {
    return <a href={href}>{title}</a>;
  } else {
    return (
      <A href={href} {...(type === "external" && { target: "_blank" })}>
        {title}
      </A>
    );
  }
}
