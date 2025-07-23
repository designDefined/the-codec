import { resolve } from "node:path";

import react from "@vitejs/plugin-react";
import { defineConfig, externalizeDepsPlugin } from "electron-vite";
import tsconfigPaths from "vite-tsconfig-paths";

const SRC_DIR = resolve(__dirname, "desktop");
const OUT_DIR = resolve(__dirname, "desktop/out");

export default defineConfig(() => {
  return {
    main: {
      plugins: [externalizeDepsPlugin()],
      publicDir: resolve(SRC_DIR, "resource"),
      build: {
        outDir: resolve(OUT_DIR, "main"),
        lib: {
          entry: resolve(SRC_DIR, "main/index.ts"),
        },
      },
    },
    preload: {
      plugins: [externalizeDepsPlugin()],
      publicDir: resolve(SRC_DIR, "resource"),
      build: {
        outDir: resolve(OUT_DIR, "preload"),
        lib: {
          entry: resolve(SRC_DIR, "preload/index.ts"),
        },
      },
    },
    renderer: {
      plugins: [react(), tsconfigPaths()],
      root: resolve(SRC_DIR, "renderer"),
      build: {
        outDir: resolve(OUT_DIR, "renderer"),
        rollupOptions: {
          input: {
            main: resolve(SRC_DIR, "renderer/index.html"),
          },
        },
      },
    },
  };
});
