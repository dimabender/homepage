import { Meta, Title } from "@solidjs/meta";
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
        <Meta name="title" content="dimabender" />
        <Meta
          name="description"
          content="Full-stack dev from Latvia — projects, experiments, and my journey in code."
        />
        <Meta property="og:type" content="website" />
        <Meta property="og:url" content="https://dimabender.com/" />
        <Meta property="og:title" content="dimabender" />
        <Meta
          property="og:description"
          content="Full-stack dev from Latvia — projects, experiments, and my journey in code."
        />
        <HeroSection />
        <SkillsSection />
        <CareerSection />
        <PersonalSection />
        <Socials />
      </div>
    </main>
  );
}
