import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this is where you want the build output
    rollupOptions: {
      // Include specific optimizations or exclusions if needed
      output: {
        manualChunks: {
          // Example of chunk splitting
          vendor: ["react", "react-dom"],
        },
      },
    },
  },
});
