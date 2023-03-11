import { defineConfig } from "vite";
import { fileURLToPath, URL } from "node:url";
import { readdirSync } from "node:fs";
import { resolve } from "node:path";

const getPagePathList = () => {
  const pages = readdirSync(resolve(__dirname, "src/modules"));
  let map = {};
  pages.forEach((c) => {
    const t = c;
    map[t.replace(".ts", "")] = resolve(__dirname, "src/modules", c);
  });

  return map;
};
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
          ...getPagePathList(),
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
