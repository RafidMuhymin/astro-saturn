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

  trailingSlash: "always",
  /*
   * Set the route matching behavior of the dev server. Choose from the following options:
   *
   * 'always' - Only match URLs that include a trailing slash (ex: “/foo/“)
   * 'never' - Never match URLs that include a trailing slash (ex: “/foo”)
   * 'ignore' - Match URLs regardless of whether a trailing ”/” exists
   */
});
