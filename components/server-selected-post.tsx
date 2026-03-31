import { getPostById } from "@/lib/api";

type ServerSelectedPostProps = {
  idBlog?: string;
};

export async function ServerSelectedPost({ idBlog }: ServerSelectedPostProps) {
  if (!idBlog) {
    return (
      <p className="mt-2 text-sm text-slate-300">
        Selecciona una fila en la tabla de blogs para filtrar aqui.
      </p>
    );
  }

  const selectedPost = await getPostById(idBlog);

  if (!selectedPost) {
    return (
      <p className="mt-2 text-sm text-red-400">No se encontro un post para idBlog={idBlog}.</p>
    );
  }

  return (
    <div className="mt-3 space-y-2 text-sm text-slate-300">
      <p>
        <span className="font-medium text-slate-100">ID:</span> {selectedPost.id}
      </p>
      <p>
        <span className="font-medium text-slate-100">Titulo:</span> {selectedPost.title}
      </p>
      <p>
        <span className="font-medium text-slate-100">Body:</span> {selectedPost.body}
      </p>
    </div>
  );
}
