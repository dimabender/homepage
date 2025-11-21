import Button from "@/components/Button";
import MetaHead from "@/components/MetaHead";
import Reveal from "@/components/Reveal";
import formatDate from "@/utils/formatDate";
import { useNavigate, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";

const files = import.meta.glob("@/content/works/*.mdx", {
  eager: true,
});

export default function WorkPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const entry = Object.entries(files).find(([path]) =>
    path.includes(`${slug}.mdx`),
  );

  if (!entry) {
    navigate("/404", { replace: true });
    return null;
  }

  const mod = entry[1] as WorkModule;
  const Post = mod.default;

  return (
    <main>
      <MetaHead
        title={mod.meta.title}
        description={mod.meta.description}
        image={mod.meta.image}
      />
      <div class="container">
        <Reveal>
          <div class="blog-container">
            <div class="blog-header">
              <div class="blog-title">
                <h1>{mod.meta.title}</h1>
                <span>{formatDate(mod.meta.date)}</span>
              </div>
              <p>{mod.meta.description}</p>
              <div class="blog-stacks-container">
                <For each={mod.meta.stacks}>
                  {(stack) => <span>{stack}</span>}
                </For>
              </div>
              <div class="blog-links-container">
                <Show when={mod.meta.website}>
                  <Button
                    type="external"
                    title="Website"
                    href={mod.meta.website!}
                  />
                </Show>
                <Show when={mod.meta.source}>
                  <Button
                    type="external"
                    title="Source"
                    href={mod.meta.source!}
                  />
                </Show>
              </div>
            </div>
            <div class="blog-content">
              <Post />
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}
