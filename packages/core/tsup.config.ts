import { defineConfig, Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["src/index.ts"],
  banner: {
    js: `"use client";`,
  },
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  external: ["react", "scheduler", "react/jsx-runtime"],
  injectStyle: true,
  shims: false,
  ...options,
}));
