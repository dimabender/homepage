import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CareerSection from "@/components/sections/CareerSection";
import Socials from "@/components/Socials";
import MetaHead from "@/components/MetaHead";

export default function Home() {
  return (
    <main>
      <MetaHead
        title="Homepage"
        description="Full-stack dev from Latvia — projects, experiments, and my journey in code."
      />
      <div class="container">
        <HeroSection />
        <SkillsSection />
        <CareerSection />
        <PersonalSection />
        <Socials />
      </div>
    </main>
  );
}
