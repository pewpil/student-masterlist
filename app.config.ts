import { defineConfig } from "@solidjs/start/config";
import { resolve } from "node:path";

export default defineConfig({
  vite: {
    resolve: {
      alias: {
        $: resolve("./src/styles"),
        "%": resolve("./src/data-access"),
      },
    },
  },
});
