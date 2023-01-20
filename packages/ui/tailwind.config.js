/** @type {import('tailwindcss').Config} */
const tailwind_config = require("tailwind-config/tailwind.config");

module.exports = {
  ...tailwind_config,
  content: ["./src/components/**/*.tsx", "./src/index.tsx"],
};
