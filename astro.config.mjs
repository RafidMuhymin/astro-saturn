// @ts-check
import tailwind from "@astrojs/tailwind";
import { defineConfig } from "astro/config";

// https://astro.build/config
export default defineConfig({
  /*
   * Below are the default values for all the config options Astro supports.
   * The commented out options don't have a default value.
   */

  // Top-Level Options
  root: "." /* The directory that contains the Astro project. */,
  srcDir: "./src" /* The directory that Astro will read the site from. */,
  publicDir: "./public" /* The directory that contains the static assets. */,
  outDir: "./dist" /* The directory that Astro writes the final build to. */,

  // site: "https://yourdomain.tld" /* The final deployed URL of the site. */,

  // base: "/" /* The base path the site will be deployed to. */,

  trailingSlash: "ignore",
  /*
   * Set the route matching behavior of the dev server. Choose from the following options:
   *
   * 'always' - Only match URLs that include a trailing slash (ex: “/foo/“)
   * 'never' - Never match URLs that include a trailing slash (ex: “/foo”)
   * 'ignore' - Match URLs regardless of whether a trailing ”/” exists
   */

  integrations: [tailwind({})],
  // The Astro integrations you want to use. Check https://astro.build/integrations/

  vite: {} /* The config options to pass to Vite. Check https://vitejs.dev/config/ */,

  // adapter: ((await import("@astrojs/node")).default)() /* Add an adapter to build for SSR. */

  // Build Options
  build: {
    format: "directory",
    /*
     * Control the output file format of each page.
     *
     * If ‘file’, Astro will generate an HTML file (ex: “/foo.html”) for each page.
     * If ‘directory’, Astro will generate a directory with a nested index.html file (ex: “/foo/index.html”) for each page.
     */
  },

  /*
   * Server Options
   *
   * Customize the Astro dev server, used by both `astro dev` and `astro preview`.
   *
   * The config options can be passed via an object or a function that returns an object dynamically based on the command run (“dev”, “preview”)
   *
   * Object: { port: 1234, host: true }
   * Function: (command) => ({ port: command === 'dev' ? 3000 : 4000 })
   */
  server: {
    host: false,
    /*
     * Set which network IP addresses the server should listen on (i.e. non-localhost IPs).
     *
     * false - do not expose on a network IP address
     * true - listen on all addresses, including LAN and public addresses
     * [custom-address] - expose on a network IP address at [custom-address] (ex: 192.168.0.1)
     */

    port: 3000 /* The port the server should listen on. If the given port is already in use, Astro will automatically try the next available port. */,
  },

  // Markdown Options
  markdown: {
    drafts: false /* Whether to include draft posts in the final build. */,
    mode: "mdx" /* Control wheater to allow components inside markdown files ('mdx') or not ('md'). */,

    // Shiki Options
    shikiConfig: {
      theme:
        "dracula" /* The theme to use to highlight the code. Choose from Shiki's built-in themes or add your own. Check https://github.com/shikijs/shiki/blob/main/docs/themes.md */,
      langs:
        [] /* Add custom languages. Check https://github.com/shikijs/shiki/blob/main/docs/languages.md */,
      wrap: true /* Whether to enable word wrap to prevent horizontal scrolling */,
    },

    syntaxHighlight: "shiki",
    /*
     * Which syntax highlighter to use, if any.
     *
     * 'shiki' - use the Shiki highlighter
     * 'prism' - use the Prism highlighter
     * false - do not apply syntax highlighting.
     */

    // The following remark plugins are used by Astro to provide support for GitHub-flavored Markdown support, Footnotes syntax, Smartypants. You must explicitly add these plugins to the remarkPlugins config array or omit the remarkPlugins config, if desired.

    remarkPlugins: ["remark-gfm", "remark-smartypants"],
    /*
     * Pass remark plugins to customize how the Markdown is built
     *
     * The above remark plugins are used by Astro to provide support for GitHub-flavored Markdown support, Footnotes syntax, Smartypants.
     *
     * If you want to keep the default features, you must explicitly add these plugins to the remarkPlugins config array if the config is set.
     */

    rehypePlugins:
      [] /* Pass rehype plugins to customize how the Markdown is built */,
  },

  // Experimental Options
  experimental: {
    ssr: false /* Whether to enable experimental SSR */,
    integrations: false /* Whether to enable experimental integrations. Applicable for non-core integrations only */,
  },
});
