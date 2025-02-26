import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    path.resolve(__dirname, "../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)"),
    // 추후 main이나 agency 에 스토리북파일 추가한다면 주석 풀기!
    // path.resolve(
    //   __dirname,
    //   "../apps/main/src/stories/**/*.stories.@(js|jsx|ts|tsx)"
    // ),
    // path.resolve(
    //   __dirname,
    //   "../apps/agency/src/stories/**/*.stories.@(js|jsx|ts|tsx)"
    // ),
  ],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config) {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        "@": path.resolve(__dirname, "../packages/ui/src"),
        "@seoulmilk/ui": path.resolve(__dirname, "../packages/ui/src"),
        "@seoulmilk/utils": path.resolve(__dirname, "../packages/utils/src"),
        "@seoulmilk/icon": path.resolve(
          __dirname,
          "../packages/icon/src/index.ts"
        ),
        "@seoulmilk/styles": path.resolve(__dirname, "../packages/styles/src"),
      };
    }

    config.optimizeDeps = {
      include: [
        "@seoulmilk/ui",
        "@seoulmilk/utils",
        "@seoulmilk/icon",
        "@seoulmilk/styles",
      ],
    };

    return config;
  },
};

export default config;
