import { LinkIcon } from "./icons";
import Button from "./Button";

export default function Socials() {
  return (
    <div class="socials-container">
      <LinkIcon size={40} />
      <p>Useful links</p>
      <div class="socials-links">
        <Button
          type="external"
          title="GitHub"
          href="https://github.com/dimabender"
        />
      </div>
    </div>
  );
}
