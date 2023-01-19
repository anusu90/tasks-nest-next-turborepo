/** @type {import('tailwindcss').Config} */
const tailwind_config = require("tailwind-config/tailwind.config");
module.exports = {
  ...tailwind_config,
  plugins: [require("@tailwindcss/forms")],
};
