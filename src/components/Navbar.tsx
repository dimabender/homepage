import { A } from "@solidjs/router";
import "@/styles/components/Navbar.css";

export default function Navbar() {
  return (
    <header>
      <nav>
        <ul class="links-list">
          <li>
            <A href="/career">career</A>
          </li>
          <li>
            <A href="/" class="nav-logo">
              DIMABENDER
            </A>
          </li>
          <li>
            <A href="/works">works</A>
          </li>
        </ul>
      </nav>
    </header>
  );
}
