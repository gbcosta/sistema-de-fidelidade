import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import autoprefixer from "autoprefixer";
import tailwindcdss from "tailwindcss";
import path from "path";
console.log(path.resolve(__dirname, "./"));
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcdss(), autoprefixer()],
    },
  },
  base: "./",
  build: {
    outDir: "build",
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./"),
      "@components": path.resolve(__dirname, "./src/components/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@firebaseApp": path.resolve(__dirname, "./firebase/"),
    },
  },
});
