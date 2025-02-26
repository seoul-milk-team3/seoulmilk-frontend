import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: [
    "../packages/ui/src/**/*.stories.@(js|jsx|ts|tsx)",
    "../apps/main/src/stories/**/*.stories.@(js|jsx|ts|tsx)",
    "../apps/admin/src/**/*.stories.@(js|jsx|ts|tsx)",
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
        "@/apis": path.resolve(__dirname, "../src/apis"),
        "@/assets": path.resolve(__dirname, "../src/assets"),
        "@/components": path.resolve(__dirname, "../src/components"),
        "@/stories": path.resolve(__dirname, "../src/stories"),
        "@/constants": path.resolve(__dirname, "../src/constants"),
        "@/hooks": path.resolve(__dirname, "../src/hooks"),
        "@/pages": path.resolve(__dirname, "../src/pages"),
        "@/routes": path.resolve(__dirname, "../src/routes"),
        "@/types": path.resolve(__dirname, "../src/types"),
        "@/styles": path.resolve(__dirname, "../src/styles"),
        "@/utils": path.resolve(__dirname, "../src/utils"),
        "@seoulmilk/ui": path.resolve(__dirname, "../packages/ui/src"),
        "@seoulmilk/utils": path.resolve(__dirname, "../packages/utils/src"),
      };
    }

    config.optimizeDeps = {
      include: ["@seoulmilk/ui", "@seoulmilk/utils"],
    };

    return config;
  },
};

export default config;
