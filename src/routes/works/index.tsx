import { A } from "@solidjs/router";
import { For } from "solid-js";
import Contacts from "@/components/Contacts";
import { CaseIcon } from "@/components/icons";
import MetaHead from "@/components/MetaHead";
import Reveal from "@/components/Reveal";
import formatDate from "@/utils/formatDate";

const files = import.meta.glob("@/content/works/*.mdx", {
  eager: true,
});

export default function WorksPage() {
  const works = Object.entries(files).map(([path, mod]) => {
    const m = mod as WorkModule;
    const slug = path.split("/").pop()!.replace(".mdx", "");

    return {
      slug,
      meta: m.meta,
    };
  });

  works.sort((a, b) => b.meta.date.localeCompare(a.meta.date));

  return (
    <main>
      <MetaHead
        title="Works"
        description="A collection of my projects, experiments, and builds — the stuff I’ve crafted, shipped, and kept improving over time. Dive in and see what I’ve been working on."
      />
      <div class="container">
        <Reveal>
          <div class="works-container">
            <div class="title-container">
              <CaseIcon size={40} />
              <h1>Works</h1>
            </div>
            <div class="works-list">
              <For each={works}>
                {(work) => (
                  <A class="work-link" href={`/works/${work.slug}`}>
                    <img
                      alt="work image"
                      width={300}
                      height={200}
                      src={work.meta.image}
                    />
                    <div class="work-text-container">
                      <h2>{work.meta.title}</h2>
                      <p>{work.meta.description}</p>
                      <span>{formatDate(work.meta.date)}</span>
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
