import { defineConfig } from "vite";
import eslint from "vite-plugin-eslint";
import VitePluginNode from "vite-plugin-node";

export default defineConfig({
  plugins: [
    eslint(),
    ...VitePluginNode({
      adapter: "nest",
      appPath: "./src/main.ts",
      exportName: "viteNodeApp",
      tsCompiler: "esbuild",
    }),
  ],
});
