import Button from "@/components/Button";
import MetaHead from "@/components/MetaHead";
import Reveal from "@/components/Reveal";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <MetaHead
        title="Page Not Found"
        description="The page you’re looking for doesn’t exist — maybe it moved, maybe it never existed at all."
      />
      <HttpStatusCode code={404} />
      <div class="container">
        <Reveal>
          <div class="not-found-container">
            <div class="not-found-text-container">
              <h1>Page Not Found</h1>
              <p>
                This page either moved or never existed in the first place.
                Chances are the URL has a typo. You can go back or head to the
                homepage — everything’s in order there.
              </p>
            </div>
            <Button type="default" title="Return to home" href="/" />
          </div>
        </Reveal>
      </div>
    </main>
  );
}
