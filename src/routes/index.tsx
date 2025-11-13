import { Title } from "@solidjs/meta";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CareerSection from "@/components/sections/CareerSection";

export default function Home() {
  return (
    <main>
      <div class="container">
        <Title>Homepage | dimabender</Title>
        <HeroSection />
        <SkillsSection />
        <CareerSection />
        <PersonalSection />
      </div>
    </main>
  );
}
