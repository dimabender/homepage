import { Title } from "@solidjs/meta";
import HeroSection from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <main>
      <div class="container">
        <Title>Homepage | dimabender</Title>
        <HeroSection />
      </div>
    </main>
  );
}
