import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Navbar from "./components/Navbar";
import "./styles/global.css";
import "./styles/vars.css";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <Navbar />
          <Suspense>{props.children}</Suspense>
          <Footer />
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
