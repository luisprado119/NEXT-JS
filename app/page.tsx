import Link from "next/link";
import { PageContainer } from "@/components/page-container";
import { PortfolioTheory } from "@/components/portfolio-theory";
import { ServerSelectedPost } from "@/components/server-selected-post";
import { siteConfig } from "@/lib/site";

type HomePageProps = {
  searchParams: Promise<{
    idBlog?: string;
  }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const { idBlog } = await searchParams;

  return (
    <main>
      <PageContainer>
        <section className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-8">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            Proyecto nuevo
          </p>
          <h1 className="text-3xl font-semibold text-white sm:text-4xl">
            {siteConfig.name}
          </h1>
          <p className="max-w-2xl text-slate-300">{siteConfig.description}</p>
          <div className="pt-2">
            <Link
              href="/blogs"
              className="inline-flex rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-slate-950 hover:bg-sky-400"
            >
              Ir a Blogs
            </Link>
          </div>
        </section>

        <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
          <h2 className="text-lg font-medium text-white">Filtro recibido desde Blogs</h2>
          <ServerSelectedPost idBlog={idBlog} />
        </section>

        <section className="mt-8 grid gap-4 sm:grid-cols-2">
          <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-lg font-medium text-white">Componente listo</h2>
            <p className="mt-2 text-sm text-slate-300">
              Empieza creando tus componentes reutilizables en `components/`.
            </p>
          </article>

          <article className="rounded-xl border border-slate-800 bg-slate-900/40 p-5">
            <h2 className="text-lg font-medium text-white">Config central</h2>
            <p className="mt-2 text-sm text-slate-300">
              Ajusta nombre y descripción global en `lib/site.ts`.
            </p>
          </article>
        </section>

        <PortfolioTheory />
      </PageContainer>
    </main>
  );
}
