import client from "../../lib/client";
import type { Post } from "../../models/post.model";

export async function getPosts(): Promise<Post[]> {
  const posts = await client.getContentList<Post>({
    contentType: "post",
  });
  return posts;
}

export async function GET(): Promise<Response> {
  const posts = await getPosts();
  return new Response(JSON.stringify(posts), {
    headers: {
      "Content-Type": "application/json",
    },
  });
}
