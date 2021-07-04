import type { Options } from "tsup";

export const tsup: Options = {
  splitting: false,
  sourcemap: false,
  minify: true,
  keepNames: true,
  clean: true,
  entryPoints: ["src/index.ts"],
  dts: true,
  outDir: "lib",
};
