import { Title } from "@solidjs/meta";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PersonalSection from "@/components/sections/PersonalSection";

export default function Home() {
  return (
    <main>
      <div class="container">
        <Title>Homepage | dimabender</Title>
        <HeroSection />
        <SkillsSection />
        <PersonalSection />
      </div>
    </main>
  );
}
