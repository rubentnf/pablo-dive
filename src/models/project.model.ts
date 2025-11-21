import type { Media } from "@content-island/api-client";

export interface Project {
  id: string;
  title: string;
  image: Media;
  url?: string;
  isEnabled: boolean;
  summary?: string;
}
