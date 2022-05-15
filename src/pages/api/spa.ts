import * as fs from "node:fs";
import type { APIContext, EndpointOutput } from "astro";

type APIRoute = (
  context: APIContext
) => EndpointOutput | Response | Promise<EndpointOutput | Response>;

export const get: APIRoute = async () => {
  try {
    const adminConfigsPath = "./src/data/adminConfigs.json";

    const adminConfigs = JSON.parse(
      await fs.promises.readFile(adminConfigsPath, "utf8")
    );

    await fs.promises.writeFile(
      adminConfigsPath,
      JSON.stringify(
        {
          ...adminConfigs,
          spa: true,
        },
        null,
        2
      )
    );

    const response = {
      body: JSON.stringify({
        message: "Enabled SPA Mode",
        success: true,
      }),
    };

    return response;
  } catch (error) {
    const response = {
      body: JSON.stringify({
        error,
        success: false,
      }),
    };

    return response;
  }
};
