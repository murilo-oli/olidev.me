import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";
import stylistic from "@stylistic/eslint-plugin";
import { defineConfig } from "eslint/config";

export default defineConfig([
  { ignores: ["**/.nuxt/**", "**/.output/**", "**/dist/**"] },
  { files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"], plugins: { js }, extends: ["js/recommended"], languageOptions: { globals: globals.browser } },
  tseslint.configs.recommended,
  pluginVue.configs["flat/recommended"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,vue}"],
    plugins: { "@stylistic": stylistic },
    rules: {
      "@stylistic/indent": ["error", 2],
      "@stylistic/no-tabs": "error",
      "@stylistic/no-mixed-spaces-and-tabs": "error",
    },
  },
  {
    files: ["app/layouts/**/*.vue", "app/pages/**/*.vue"],
    rules: { "vue/multi-word-component-names": "off" },
  },
  {
    files: ["**/*.vue"], languageOptions: { parserOptions: { parser: tseslint.parser } }, rules: {
      "vue/html-indent": ["error", 2],
      "vue/max-attributes-per-line": [
        "error",
        {
          singleline: {
            max: 1,
          },
          multiline: {
            max: 1,
          },
        },
      ]
    }
  },
]);
