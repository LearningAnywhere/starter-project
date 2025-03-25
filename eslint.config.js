const { defineConfig } = require("eslint/config");

module.exports = defineConfig([
  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js"],
    rules: {
      semi: "error",
      "prefer-const": "error",
    },
  },
]);