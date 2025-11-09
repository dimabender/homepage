import { A } from "@solidjs/router";
import "./Navbar.css";
import { ExternalLink } from "../icons";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul>
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
              <ExternalLink size={18} />
            </A>
          </li>
        </ul>
      </nav>
    </header>
  );
}
