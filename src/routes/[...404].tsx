import Button from "@/components/Button";
import MetaHead from "@/components/MetaHead";
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
        <h1>Page Not Found</h1>
        <Button type="default" title="Return to home" href="/" />
      </div>
    </main>
  );
}
