import * as fs from "node:fs";
import { APIRoute } from "../../types/admin/types";
import { parseJSONRequestBody } from "../../utils/admin/utils";

export const get = async () => ({ body: "" });

export const post: APIRoute = async ({ params, request }) => {
  const requestBody = await parseJSONRequestBody(request.body);

  const changedConfigs = JSON.parse(requestBody);

  const configPath = "./src/data/adminConfigs.json";

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

  const response = {
    body: JSON.stringify({
      message: "Updated configs",
      success: true,
    }),
  };

  return response;
};
