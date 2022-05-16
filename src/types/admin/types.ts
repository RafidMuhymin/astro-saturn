import type { APIContext, EndpointOutput } from "astro";

export type APIRoute = (
  context: APIContext
) => EndpointOutput | Response | Promise<EndpointOutput | Response>;
