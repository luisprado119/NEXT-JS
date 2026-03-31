export function PortfolioTheory() {
  return (
    <section className="mt-8 rounded-xl border border-slate-800 bg-slate-900/40 p-5">
      <h2 className="text-lg font-medium text-white">Teoria aplicada en esta practica</h2>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-300">
        <li>
          Enrutamiento con App Router: rutas estaticas como <code>/blogs</code> y dinamicas
          como <code>/blogs/[idBlog]</code>.
        </li>
        <li>
          <strong>Client Component</strong> con <code>&quot;use client&quot;</code> para usar{" "}
          <code>useEffect</code>, <code>useState</code> y navegacion desde eventos del
          navegador.
        </li>
        <li>
          <strong>Server Component</strong> para leer <code>searchParams</code> y consultar
          la API en el servidor con <code>fetch</code>.
        </li>
        <li>
          Navegacion entre paginas usando <code>Link</code> y filtros por query params (
          <code>/?idBlog=2</code>).
        </li>
        <li>
          Consumo de API REST externa:{" "}
          <code>https://jsonplaceholder.typicode.com/posts</code>.
        </li>
      </ul>

      <div className="mt-4 border-t border-slate-800 pt-4 text-sm text-slate-300">
        <p>
          <span className="font-medium text-slate-100">Autor:</span> Luis Rafael Prado
          Quintero
        </p>
        <p>
          <span className="font-medium text-slate-100">Academia:</span> Acedemia Code Crypto
        </p>
      </div>
    </section>
  );
}
