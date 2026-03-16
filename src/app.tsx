import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Header from "./components/Header";
import "~/styles/vars.css";
import "~/styles/global.css";
import { ScrollMetricsProvider } from "./contexts/ScrollMetricsContext";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <ScrollMetricsProvider offset={64}>
            <Header />
            <Suspense>{props.children}</Suspense>
          </ScrollMetricsProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
