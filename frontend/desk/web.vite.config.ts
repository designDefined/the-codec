import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const SRC_DIR = resolve(__dirname, "web");
const OUT_DIR = resolve(__dirname, "web/out");

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    plugins: [react()],
    root: resolve(SRC_DIR, "renderer"),
    build: {
      outDir: OUT_DIR,
      rollupOptions: {
        input: {
          main: resolve(SRC_DIR, "renderer/index.html"),
        },
      },
    },
  };
});
