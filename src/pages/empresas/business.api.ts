import client from "../../lib/client";
import type { Business } from "../../models/business.model";

export async function getBusiness(): Promise<Business[]> {
  const response = await client.getContentList<Business>({
    contentType: "Business",
  });
  return response;
}

export async function getEnabledBusinesses(): Promise<Business[]> {
  const businesses = await getBusiness();
  return businesses.filter((business) => business.isEnabled);
}

export async function GET(): Promise<Response> {
  const businesses = await getBusiness();
  return new Response(JSON.stringify(businesses), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
