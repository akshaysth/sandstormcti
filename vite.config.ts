import Markdown from "@pity/vite-plugin-react-markdown";
import react from "@vitejs/plugin-react";
import prism from "markdown-it-prism";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/sandstormcti",
  plugins: [
    react(),
    Markdown({
      wrapperComponentName: "ReactMarkdown",
      wrapperComponentPath: "./src/components/page",
      // importComponentsPath: {
      //   Mdtest: './src/components/pages/mdtest',
      // },
      markdownItUses: [prism],
    }),
  ],
});
