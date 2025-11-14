import { Title } from "@solidjs/meta";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CareerSection from "@/components/sections/CareerSection";
import Socials from "@/components/Socials";

export default function Home() {
  return (
    <main>
      <div class="container">
        <Title>Homepage | dimabender</Title>
        <HeroSection />
        <SkillsSection />
        <CareerSection />
        <PersonalSection />
        <Socials />
      </div>
    </main>
  );
}
