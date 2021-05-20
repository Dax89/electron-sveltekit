import preprocess from "svelte-preprocess";
import adapter from "@sveltejs/adapter-static";
//import node from "@sveltejs/adapter-node";

const dev = process.env.NODE_ENV == "development"

export default {
  kit: {

    //adapter: node()
    adapter: adapter(),
    target: "#svelte",

    vite: {
      compilerOptions: { dev },
    }
  },

  preprocess: preprocess(),
};
