import esbuild from "esbuild";
import sveltePlugin from "esbuild-svelte";

esbuild
  .build({
    entryPoints: ["src/main.js"],
    mainFields: ["svelte", "browser", "module", "main"],
    bundle: true,
    outfile: "example/widget.js",
    plugins: [sveltePlugin()],
    logLevel: "info",
    format: "esm"
  })
  .catch(() => process.exit(1));