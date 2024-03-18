import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";

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
    ],
});
