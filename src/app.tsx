import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import "./styles/vars.css";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Navbar />
          <Suspense>{props.children}</Suspense>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
