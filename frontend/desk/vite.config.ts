import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig(() => {
  return {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "design/utility/state" as state;`,
        },
      },
    },
    plugins: [react(), tsconfigPaths()],
    server: {
      port: 4768,
    },
  };
});
