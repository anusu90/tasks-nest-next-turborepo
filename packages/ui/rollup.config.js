import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
const config = {
  input: "./src/index.tsx",
  output: {
    file: "./dist/index.js",
    format: "cjs",
  },
  plugins: [
    typescript({ tsconfig: "./tsconfig.json" }),
    postcss({
      config: {
        path: "./postcss.config.js",
      },
      extensions: [".css"],
      minimize: true,
      inject: {
        insertAt: "top",
      },
    }),
  ],
  external: ["react", "react-dom"],
};

export default config;
