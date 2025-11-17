import { defineConfig } from "@solidjs/start/config";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";
import pkg from "@vinxi/plugin-mdx";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const { default: mdx } = pkg;

export default defineConfig({
  extensions: ["mdx"],
  ssr: true,
  server: {
    preset: "static",
    prerender: {
      crawlLinks: true,
    },
  },
  vite: {
    plugins: [
      mdx.withImports({})({
        jsx: true,
        jsxImportSource: "solid-js",
        providerImportSource: "solid-mdx",
      }),
    ],
    resolve: {
      alias: {
        "@": resolve(__dirname, "src"),
      },
    },
  },
});
