import type { Media } from "@content-island/api-client";

export interface AvailableData {
  id: string;
  date: string;
  status: boolean;
  spotsLeft?: boolean;
}

export interface Travel {
  id: string;
  title: string;
  slug: string;
  summary: string;
  destination: string;
  duration: number;
  image: Media;
  gallery?: Media[];
  itinerary?: string;
  included: string;
  excluded: string;
  price?: number;
  maxGroupSize?: number;
  recommendations?: string;
  availableDates?: string | AvailableData[];
}
