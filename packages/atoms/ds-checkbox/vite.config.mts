import { resolve } from "path"
import atomico from "@atomico/vite"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    target: "esnext",
    sourcemap: true,
    minify: true,
    lib: {
      entry: resolve(__dirname, "src/index.tsx"),
      name: "ds-checkbox",
      fileName: "index",
    },
  },
  optimizeDeps: {
    exclude: ["/__web-dev-server__web-socket.js"],
  },
  plugins: [
    atomico({ cssLiterals: { minify: true, postcss: true } }),
  ],
  test: {
    globals: true,
    environment: "jsdom",
    exclude: ["node_modules/**"],
  },
})
