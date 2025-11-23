import client from "../../lib/client";
import type { Travel } from "../../models/trip.model";

export async function getTrips(): Promise<Travel[]> {
  const trips = await client.getContentList<Travel>({
    contentType: "Travel",
  });
  return trips;
}

export async function GET(): Promise<Response> {
  const trips = await getTrips();
  return new Response(JSON.stringify(trips), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
