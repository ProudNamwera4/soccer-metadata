import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src/",

  build: {
    outDir: "../dist",
    rollupOptions: {
      input: {
        main: resolve(__dirname, "src/index.html"),
        leagues: resolve(__dirname, "src/pages/leagues.html"),
        players: resolve(__dirname, "src/pages/players.html"),
      },
    },
  },
});
