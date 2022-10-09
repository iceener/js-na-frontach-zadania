import typescript from "@rollup/plugin-typescript";
import { defineConfig } from "vite";
export default defineConfig({
    plugins: [Object.assign(Object.assign({}, typescript()), { apply: "build" })],
});
