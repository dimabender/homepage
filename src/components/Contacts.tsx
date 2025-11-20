import { PhoneIcon } from "./icons";
import Button from "./Button";

export default function Contacts() {
  return (
    <div class="contacts-container">
      <PhoneIcon size={40} />
      <p>Chat with me</p>
      <div class="contacts-links">
        <Button
          type="mail"
          title="Mail"
          href={`mailto:contact@dimabender.com?subject=${encodeURIComponent("Hello")}&body=${encodeURIComponent("Hey, let's work together.")}`}
        />
        <Button
          type="external"
          title="Telegram"
          href="https://t.me/thatsameuser"
        />
      </div>
    </div>
  );
}
