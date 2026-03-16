import { Title } from "@solidjs/meta";
import { HttpStatusCode } from "@solidjs/start";

export default function NotFound() {
  return (
    <main>
      <Title>About</Title>
      <HttpStatusCode code={404} />
      <div class="container">
        <h2>Page Not Found</h2>
      </div>
    </main>
  );
}
