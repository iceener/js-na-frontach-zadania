// @ts-nocheck
import legacy from "@vitejs/plugin-legacy"
import typescript from "@rollup/plugin-typescript"
import { defineConfig } from "vite"

export default defineConfig({
	plugins: [{ ...typescript(), apply: "build" }],
})
