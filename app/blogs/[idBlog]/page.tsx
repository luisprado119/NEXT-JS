import Link from "next/link";
import { notFound } from "next/navigation";
import { PageContainer } from "@/components/page-container";

type BlogDetailPageProps = {
  params: Promise<{
    idBlog: string;
  }>;
};

type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { idBlog } = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${idBlog}`, {
    cache: "no-store",
  });

  if (!response.ok) {
    notFound();
  }

  const blog = (await response.json()) as Post;

  return (
    <PageContainer>
      <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <p className="text-sm text-slate-400">Detalle del Blog</p>
        <h1 className="text-3xl font-semibold text-white">{blog.title}</h1>
        <p className="text-slate-300">
          <span className="font-medium text-slate-200">ID:</span> {blog.id}
        </p>
        <p className="text-slate-300">
          <span className="font-medium text-slate-200">Usuario:</span> {blog.userId}
        </p>
        <p className="text-slate-300">
          <span className="font-medium text-slate-200">Contenido:</span> {blog.body}
        </p>

        <Link href="/blogs" className="inline-block text-sky-400 hover:text-sky-300">
          Volver a la lista de blogs
        </Link>
      </section>
    </PageContainer>
  );
}
