import atomico from "@atomico/vite"
import { defineConfig } from "vite"

export default defineConfig({
  build: {
    target: "esnext",
  },
  optimizeDeps: {
    exclude: ["/__web-dev-server__web-socket.js"],
  },
  plugins: [
    atomico({ cssLiterals: { minify: true, postcss: true } }),
  ],
})
