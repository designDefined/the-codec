import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [],
  build: {
    modulePreload: false,
    rollupOptions: {
      external: ["./module", "types/test"],
    },
  },
});
