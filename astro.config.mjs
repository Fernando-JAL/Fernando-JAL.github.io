import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://Fernando-JAL.github.io",
    base: "/",
    integrations: [tailwind()]
});