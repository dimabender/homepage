import Button from "@/components/Button";
import MetaHead from "@/components/MetaHead";
import Reveal from "@/components/Reveal";
import { useNavigate, useParams } from "@solidjs/router";
import { For, Show } from "solid-js";

const files = import.meta.glob("@/content/career/*.mdx", {
  eager: true,
});

export default function CareerPage() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const entry = Object.entries(files).find(([path]) =>
    path.includes(`${slug}.mdx`),
  );

  if (!entry) {
    navigate("/404", { replace: true });
    return null;
  }

  const mod = entry[1] as CareerModule;
  const Post = mod.default;

  return (
    <main>
      <MetaHead title={mod.meta.title} />
      <div class="container">
        <Reveal>
          <div class="blog-container">
            <div class="blog-header">
              <div class="blog-title">
                <h1>{mod.meta.title}</h1>
                <span>
                  {mod.meta.period[0]}-{mod.meta.period[1]}
                </span>
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
