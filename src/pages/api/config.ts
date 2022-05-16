import * as fs from "node:fs";
import { APIRoute } from "../../types/admin/types";
import { parseJSONRequestBody } from "../../utils/admin/utils";

export const get = async () => ({ body: "" });

export const post: APIRoute = async ({ params, request }) => {
  try {
    const requestBody = await parseJSONRequestBody(request.body);

    const changedConfigs = JSON.parse(requestBody);

    const configPath = "./src/data/adminConfigs.json",
      layoutPath = "./src/layouts/AdminLayout.astro";

    const adminConfigs = JSON.parse(
      await fs.promises.readFile(configPath, "utf-8")
    );

    const updatedConfigs = {
      ...adminConfigs,
      ...changedConfigs,
    };

    await fs.promises.writeFile(
      configPath,
      JSON.stringify(updatedConfigs, null, 2)
    );

    // Force Astro to display changed content
    await fs.promises.writeFile(
      layoutPath,
      await fs.promises.readFile(layoutPath)
    );

    const response = {
      body: JSON.stringify({
        message: "Updated configs",
        success: true,
      }),
    };

    return response;
  } catch (error) {
    const response = {
      body: JSON.stringify({
        message: error.message,
        success: false,
      }),
    };

    return response;
  }
};
