const sveltePreprocess = require("svelte-preprocess");
//const node = require("@sveltejs/adapter-node");
const static = require("@sveltejs/adapter-static");
const pkg = require("./package.json");

const dev = process.env.NODE_ENV == "development"

/** @type {import("@sveltejs/kit").Config} */
module.exports = {
  kit: {
    //adapter: node()
    adapter: { adapt: static },
    target: "#svelte",

    vite: {
      compilerOptions: { dev },
      ssr: { noExternal: Object.keys(pkg.dependencies || {}) },
    }
  },

  preprocess: sveltePreprocess(),
};
