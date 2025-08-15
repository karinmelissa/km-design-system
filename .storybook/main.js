import { join, dirname } from "path";
import { mergeConfig } from "vite";
/**
 * This function is used to resolve the absolute path of a package.
 * It is needed in projects that use Yarn PnP or are set up within a monorepo.
 */
function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, "package.json")));
}
const config = {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    getAbsolutePath("@storybook/addon-links"),
    getAbsolutePath("@storybook/addon-onboarding"),
    getAbsolutePath("@storybook/addon-essentials"),
    getAbsolutePath("@storybook/addon-interactions"),
    getAbsolutePath("@etchteam/storybook-addon-css-variables-theme"),
  ],
  framework: {
    name: getAbsolutePath("@storybook/web-components-vite"),
    options: {},
  },
  async viteFinal(config, { configType }) {
    // 📌 return the customized config
    return mergeConfig(config, {
      plugins: [
        ...(await import("@atomico/vite")).default({
          // 📌 needed to define files that use JSX/TSX
          storybook: { include: ["packages/**/src/*.tsx"] },
        }),
      ],
    });
  },
  docs: {},
  staticDirs: ["./assets"],
};
export default config;
