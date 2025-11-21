import type { Media } from "@content-island/api-client";

export interface Post {
  id: string;
  title: string;
  slug: string;
  date: string;
  author: string;
  summary: string;
  image: Media;
  content: string;
}
