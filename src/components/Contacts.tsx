import "@/styles/components/Contacts.css";
import { PhoneIcon } from "./icons";
import Button from "./Button";

export default function Contacts() {
  return (
    <div class="contacts-container">
      <PhoneIcon size={40} />
      <p>Chat with me</p>
      <div class="contact-links">
        <Button
          type="mail"
          title="Mail"
          href="mailto:donotforgettochangethisemail@gmail.com"
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
