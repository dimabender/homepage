import { A } from "@solidjs/router";
import { ExternalLinkIcon } from "./icons";
import "@/styles/components/Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul class="links-list">
          <li>
            <A href="/works">works</A>
          </li>
          <li>
            <A href="/" class="nav-logo">
              DIMABENDER
            </A>
          </li>
          <li>
            <A href="https://github.com/dimabender/homepage" target="_blank">
              source
              <ExternalLinkIcon size={18} />
            </A>
          </li>
        </ul>
      </nav>
    </header>
  );
}
