import Button from "@/components/Button";
import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <div class="container">
        <Title>Not Found</Title>
        <HttpStatusCode code={404} />
        <h1>Page Not Found</h1>
        <Button type="default" title="Return to home" href="/" />
      </div>
    </main>
  );
}
