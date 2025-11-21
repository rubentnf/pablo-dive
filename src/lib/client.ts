import { createClient } from "@content-island/api-client";

const client = createClient({
  accessToken: import.meta.env.CONTENT_ISLAND_SECRET_TOKEN,
});

export default client;
