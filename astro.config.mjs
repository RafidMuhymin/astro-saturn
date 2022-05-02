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
});
