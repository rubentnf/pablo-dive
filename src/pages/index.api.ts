import client from "../lib/client";
import type { About } from "../models/about.model";

export async function getAbout(): Promise<About> {
  const aboutContent = await client.getContent<About>({
    contentType: "about",
  });
  return aboutContent;
}

export async function GET(): Promise<Response> {
  const about = await getAbout();
  return new Response(JSON.stringify(about), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
