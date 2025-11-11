import { A } from "@solidjs/router";
import "@/styles/components/Button.css";
import { ExternalLinkIcon } from "./icons";

type LinkType = "default" | "external" | "mail";

interface Props {
  type?: LinkType;
  title: string;
  href: string;
}

export default function Button(props: Props) {
  const { type = "default", title, href } = props;

  if (type === "mail") {
    return (
      <a class="button" href={href}>
        {title}
        <ExternalLinkIcon size={16} />
      </a>
    );
  } else {
    return (
      <A
        class="button"
        href={href}
        {...(type === "external" && { target: "_blank" })}
      >
        {title}
        {type === "external" && <ExternalLinkIcon size={16} />}
      </A>
    );
  }
}
