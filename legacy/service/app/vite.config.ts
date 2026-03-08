import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths({})],
  build: {
    outDir: "./dist",
    rollupOptions: {
      input: {
        common: "./src/entry/deploy/client/common.ts",
        home: "./src/entry/deploy/client/home.tsx",
        index: "./src/entry/deploy/client/index.tsx",
      },
    },
  },
});
