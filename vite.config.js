import { resolve } from "path";
import commonjs from "vite-plugin-commonjs";

export default {
  root: resolve(__dirname, "src"),
  build: {
    outDir: "../dist-olimpus",
  },
  server: {
    port: 8080,
  },
  plugins: [commonjs()],
};
