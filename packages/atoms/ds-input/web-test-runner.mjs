import vite from "vite-web-test-runner-plugin";

export default {
  plugins: [vite()],
  files: "test/**/*.test.{js, jsx}",
  nodeResolve: true,
  preserveSymlinks: true,
  coverageConfig: {
    report: true,
    reportDir: "coverage",
  },
};
