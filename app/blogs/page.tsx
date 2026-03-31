import { ClientPostsTable } from "@/components/client-posts-table";
import { PageContainer } from "@/components/page-container";
import { API_POSTS_URL } from "@/lib/api";

export default function BlogsPage() {
  return (
    <PageContainer>
      <section className="space-y-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
        <h1 className="text-3xl font-semibold text-white">Lista de Blogs</h1>
        <div className="space-y-1 text-sm text-slate-300">
          <p>
            Ruta de esta pagina: <span className="font-mono text-slate-100">/blogs</span>
          </p>
          <p>
            Ruta para filtrar en home:{" "}
            <span className="font-mono text-slate-100">/?idBlog=2</span>
          </p>
          <p>
            API de datos:{" "}
            <a
              href={API_POSTS_URL}
              target="_blank"
              rel="noreferrer"
              className="font-mono text-sky-400 hover:text-sky-300"
            >
              {API_POSTS_URL}
            </a>
          </p>
        </div>
        <ClientPostsTable />
      </section>
    </PageContainer>
  );
}
