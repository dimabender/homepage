import Frame from "../Frame";
import Contacts from "../Contacts";
import "@/styles/components/sections/HeroSection.css";

export default function HeroSection() {
  return (
    <section>
      <div class="hero-container">
        <Frame frameSize={256} lineSize={32} />
        <div class="hero-content">
          <p>Hi, im Nikita</p>
          <h1>
            I build digital
            <br />
            systems that
            <br />
            feel alive
          </h1>
          <p>
            Full-stack developer crafting reliable and thoughtful
            <br />
            solutions where every detail matters.
          </p>
        </div>
      </div>
      <div class="line" />
      <Contacts />
    </section>
  );
}
