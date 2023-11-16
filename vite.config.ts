import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import cssInjectedByJsPlugin from "vite-plugin-css-injected-by-js";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
    cssInjectedByJsPlugin({
      jsAssetsFilterFunction: (asset) => {
        return asset.fileName === "index.es.js";
      },
    }),
    ,
  ],
  build: {
    sourcemap: true,
    cssMinify: true,
    lib: {
      entry: ["src/index.ts", "src/util/index.ts"],
      formats: ["es"],
      fileName: (format, name) => `${name}.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
        entryFileNames: ({ facadeModuleId }) => {
          if (facadeModuleId === path.resolve("src/util/index.ts")) {
            return "util/index.es.js";
          }
          return "[name].es.js";
        },
      },
    },
  },
});
