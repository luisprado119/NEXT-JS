"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { API_POSTS_URL } from "@/lib/api";
import type { Post } from "@/types/post";

export function ClientPostsTable() {
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const controller = new AbortController();

    fetch(API_POSTS_URL, {
      signal: controller.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("No se pudo obtener la lista de blogs.");
        }

        return response.json();
      })
      .then((data: Post[]) => {
        setPosts(data.slice(0, 10));
      })
      .catch((fetchError: Error) => {
        if (fetchError.name !== "AbortError") {
          setError(fetchError.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  if (loading) {
    return <p className="text-slate-300">Cargando blogs...</p>;
  }

  if (error) {
    return <p className="text-red-400">{error}</p>;
  }

  return (
    <div className="overflow-hidden rounded-xl border border-slate-800">
      <table className="min-w-full divide-y divide-slate-800">
        <thead className="bg-slate-900/80">
          <tr>
            <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">ID</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Titulo</th>
            <th className="px-4 py-3 text-left text-sm font-medium text-slate-300">Body</th>
          </tr>
        </thead>

        <tbody className="divide-y divide-slate-800">
          {posts.map((post) => (
            <tr
              key={post.id}
              className="cursor-pointer hover:bg-slate-800/40"
              onClick={() => router.push(`/?idBlog=${post.id}`)}
            >
              <td className="px-4 py-3 text-sm text-slate-300">
                <Link href={`/?idBlog=${post.id}`} className="text-sky-400 hover:text-sky-300">
                  {post.id}
                </Link>
              </td>
              <td className="px-4 py-3 text-sm text-slate-200">{post.title}</td>
              <td className="px-4 py-3 text-sm text-slate-300">
                {post.body.length > 80 ? `${post.body.slice(0, 80)}...` : post.body}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
