import Frame from "../Frame";
import ThreeCanvas from "../ThreeCanvas";

export default function PersonalSection() {
  return (
    <section>
      <div class="content-title">
        <h2>Beyond the code</h2>
        <p>A glimpse into who I am when I’m not building things.</p>
      </div>
      <div class="content-container odd">
        <Frame
          frameSize={128}
          lineSize={16}
          color="#ad66ff"
          colorMuted="#c999ff"
        >
          <ThreeCanvas path="/models/guitar/scene.gltf" size={128} />
        </Frame>
        <div class="content-text">
          <p>
            I was born in Latvia and have spent most of my life creating things
            — whether it’s code, music, or video. Outside of work, I play
            guitar, learn music production, and edit videos for my group of
            friends. I enjoy coming up with my own projects and bringing them to
            life — from an idea to a finished result.
          </p>
          <p>
            I keep developing my creative side and try to bring everything I
            know into what I do. I care about structure, clarity, and meaning —
            that’s what makes every project feel alive.
          </p>
        </div>
      </div>
    </section>
  );
}
