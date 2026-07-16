import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import PersonalSection from "@/components/sections/PersonalSection";
import CareerSection from "@/components/sections/CareerSection";
import Socials from "@/components/Socials";
import MetaHead from "@/components/MetaHead";
import Reveal from "@/components/Reveal";
import PageStub from "@/components/sections/PageStub";
import { For } from "solid-js";

export default function Home() {
  const sections = [
    // HeroSection,
    // SkillsSection,
    // CareerSection,
    // PersonalSection,
    // Socials,
    PageStub,
  ];

  return (
    <main>
      <MetaHead
        title="Homepage"
        description="Full-stack dev from Latvia — projects, experiments, and my journey in code."
      />
      <div class="container">
        <For each={sections}>
          {(Section) => (
            <Reveal>
              <Section />
            </Reveal>
          )}
        </For>
      </div>
    </main>
  );
}
