import type { APIRoute } from "astro";

function streamTobuffer(stream): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    const _buf = [];

    stream.on("data", (chunk) => _buf.push(chunk));
    stream.on("end", () => resolve(Buffer.concat(_buf)));
    stream.on("error", (err) => reject(err));
  });
}

async function parseJSONRequestBody(requestBody) {
  const requestBodyBuffer = await streamTobuffer(requestBody);

  const requestBodyJSON = requestBodyBuffer.toString();

  return requestBodyJSON;
}

export const post: APIRoute = async ({ params, request }) => {
  const requestBody = await parseJSONRequestBody(request.body);

  const response = {
    body: requestBody,
  };

  return response;
};
