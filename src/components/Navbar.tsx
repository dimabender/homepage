import { A } from "@solidjs/router";
import "./Navbar.css";

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
            <A href="https://google.com" target="_blank">
              source
            </A>
          </li>
        </ul>
      </nav>
    </header>
  );
}
