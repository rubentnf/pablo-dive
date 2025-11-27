import type { Media } from "@content-island/api-client";

export interface Project {
  id: string;
  title: string;
  image: Media;
  isEnabled: boolean;
  webURL?: string;
  twitterURL?: string;
  tiktokURL?: string;
  instagramURL?: string;
  facebookURL?: string;
}
