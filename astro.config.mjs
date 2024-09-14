import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import icon from "astro-icon";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
    integrations: [
        mdx(),
        tailwind(),
        preact({
            include: ["**/preact/*"],
        }),
        react({
            include: ["**/react/*"],
        }),
        icon(),
    ],
    output: "hybrid",
    adapter: node({
        mode: "standalone",
    }),
});
