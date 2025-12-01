import { MetaProvider } from "@solidjs/meta";
import { Router } from "@solidjs/router";
import { FileRoutes } from "@solidjs/start/router";
import { Suspense } from "solid-js";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./styles/vars.css";
import "./styles/global.css";
import "./styles/works.css";
import "./styles/career.css";
import Actions from "./components/Actions";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <Router
      root={(props) => (
        <MetaProvider>
          <ThemeProvider>
            <Navbar />
            <Actions />
            <Suspense>{props.children}</Suspense>
            <Footer />
          </ThemeProvider>
        </MetaProvider>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
