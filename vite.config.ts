import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";

export default defineConfig(({ mode, command }) => {
  console.log(command, mode);
  return {
    resolve: {
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url)),
      },
    },

    build: {
      lib: {
        entry: {
          index: "./src/index.ts",
          string: "./src/modules/string.ts",
          array: "./src/modules/array.ts",
          other: "./src/modules/other.ts",
        },
        formats: ["es"],
        fileName(format, entryName) {
          if (entryName === "index") {
            return `utils.js`;
          } else {
            return `es/${entryName}.js`;
          }
        },
      },
      rollupOptions: {},
    },
  };
});
