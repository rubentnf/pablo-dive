import type { Media } from "@content-island/api-client";

export interface About {
  id: string;
  picture: Media;
  fullname: string;
  shortBio: string;
  extendedBio: string;
}
