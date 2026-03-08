import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "design/utility/state" as state;`,
      },
    },
  },
  build: {
    modulePreload: false,
    rollupOptions: {
      external: ["./module", "types/test"],
    },
  },
});
