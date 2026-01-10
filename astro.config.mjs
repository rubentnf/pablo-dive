// @ts-check
import { fileURLToPath, URL } from "node:url";

import sitemap from "@astrojs/sitemap";
import staticAdapter from '@astrojs/adapter-static';
import playformCompress from "@playform/compress";
import playformFormat from "@playform/format";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, envField } from "astro/config";

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || "https://www.pablodive.es",
  integrations: [sitemap(), playformCompress({
    CSS: true,
    HTML: true,
    JavaScript: true,
    Image: false,
    SVG: true,
  }), playformFormat()],
  vite: {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },
    build: {
      sourcemap: false,
    },
    plugins: [tailwindcss()],
  },
  output: "static",
  adapter: staticAdapter(),
  env: {
    schema: {
      CONTENT_ISLAND_SECRET_TOKEN: envField.string({
        context: "server",
        access: "secret",
        optional: false,
        default: "INFORM_VALID_TOKEN",
      }),
    },
  },
});