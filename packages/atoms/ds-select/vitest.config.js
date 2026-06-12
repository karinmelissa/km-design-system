import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    passWithNoTests: true,
    exclude: ["**/node_modules/**", "**/dist/**", "src/components/Select.spec.tsx"],
    coverage: {
      include: ["src/**/*.{js,ts,jsx,tsx}"]
    }
  }
});
