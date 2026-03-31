import type { Post } from "@/types/post";

export const API_POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

export async function getPostById(idBlog: string): Promise<Post | null> {
  const response = await fetch(`${API_POSTS_URL}/${idBlog}`, { cache: "no-store" });

  if (!response.ok) {
    return null;
  }

  return (await response.json()) as Post;
}
