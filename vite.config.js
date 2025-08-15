import { defineConfig } from "vite";

export default defineConfig({
  base: "/elections-timeline/",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
});
