import "@/styles/components/sections/SkillsSection.css";
import Frame from "../Frame";
import Button from "../Button";
import ThreeCanvas from "../ThreeCanvas";

export default function SkillsSection() {
  return (
    <section>
      <div class="content-title">
        <h2>Under the surface</h2>
        <p>The skills, tools, and instincts that drive my work.</p>
      </div>
      <div class="content-container odd">
        <Frame
          frameSize={128}
          lineSize={16}
          color="#ffd400"
          colorMuted="#ffe566"
        >
          <ThreeCanvas path="/models/computer/scene.gltf" size={128} />
        </Frame>
        <div class="content-text">
          <p>
            I’m a full-stack developer building reliable, well-structured
            systems — from backend architecture to interfaces with clear logic
            and clean UX. On the frontend, I work with TypeScript, React,
            Next.js, and SolidJS; on the backend — NestJS, HonoJS, Prisma, and
            PostgreSQL. I focus on performance, structure, and readable code.
          </p>
          <p>
            Beyond web development, I actively work with Rust — building native
            applications, graphics, and integrations, while also exploring Rust
            as a backend language for high-performance services and modular
            systems.
          </p>
        </div>
      </div>
      <div class="line" />
      <div class="content-container">
        <Frame
          frameSize={128}
          lineSize={16}
          color="#ff5500"
          colorMuted="#ff9966"
        >
          <ThreeCanvas path="/models/book/scene.gltf" size={128} />
        </Frame>
        <div class="content-text">
          <p>
            I learn quickly, communicate easily, and keep a balance between
            technical precision and a human-centered approach to work.
          </p>
        </div>
      </div>
      <div class="skills-cta-container">
        <p>Wanna see what I’ve built?</p>
        <Button title="Take a look" href="/works" />
      </div>
    </section>
  );
}
