import { A } from "@solidjs/router";
import { For, Show } from "solid-js";
import Contacts from "@/components/Contacts";
import { CaseIcon, PuzzleIcon, SchoolIcon } from "@/components/icons";
import MetaHead from "@/components/MetaHead";
import Reveal from "@/components/Reveal";

const files = import.meta.glob("@/content/career/*.mdx", {
  eager: true,
});

export default function CareerPage() {
  const career = Object.entries(files).map(([path, mod]) => {
    const m = mod as CareerModule;
    const slug = path.split("/").pop()!.replace(".mdx", "");

    return {
      slug,
      meta: m.meta,
    };
  });

  career.sort((a, b) => a.meta.period[0] - b.meta.period[0]);

  return (
    <main>
      <MetaHead
        title="Career"
        description="A quick overview of my journey — where I studied, worked, and leveled up along the way."
      />
      <div class="container">
        <Reveal>
          <div class="career-container">
            <div class="title-container">
              <PuzzleIcon size={40} />
              <h1>Career</h1>
            </div>
            <div class="career-list">
              <For each={career}>
                {(career) => (
                  <A class="career-link" href={`/career/${career.slug}`}>
                    <Show when={career.meta.type === "work"}>
                      <CaseIcon size={40} />
                    </Show>
                    <Show when={career.meta.type === "education"}>
                      <SchoolIcon size={40} />
                    </Show>
                    <div class="career-link-text">
                      <h2>{career.meta.title}</h2>
                      <span>
                        {career.meta.period[0]}-{career.meta.period[1]}
                      </span>
                    </div>
                  </A>
                )}
              </For>
            </div>
          </div>
        </Reveal>
        <Reveal>
          <Contacts />
        </Reveal>
      </div>
    </main>
  );
}
