import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import postcss from "@vituum/vite-plugin-postcss";
import jsconfigPaths from "vite-jsconfig-paths";

import path from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
alias: {
  '@assets' : path.resolve(__dirname, './assets'),
},
  },
  plugins: [react(), jsconfigPaths()],
  css: {
    modules: {
      localsConvention: "camelCase",
    }
  }
});
