# First App Next.js - Practica de App Router

Proyecto de practica en Next.js para demostrar navegacion, consumo de API y diferencia entre `Client Components` y `Server Components`.

## Autor

- **Nombre:** Luis Rafael Prado Quintero (Estudiantes)
- **Academia:** Acedemia Code Crypto (Donde estoy aprendiendo)

## Objetivo de la practica

- Consumir datos de `https://jsonplaceholder.typicode.com/posts`.
- Mostrar lista en una tabla dentro de `/blogs`.
- Filtrar un post en `/` usando query params (`/?idBlog=2`).
- Separar la implementacion usando componentes cliente y servidor.

## Conceptos aplicados

- **App Router:** rutas estaticas y dinamicas (`/blogs`, `/blogs/[idBlog]`).
- **Client Component (`"use client"`):** uso de `useEffect`, `useState`, eventos de UI y navegacion por click.
- **Server Component:** lectura de `searchParams` y `fetch` del post en servidor.
- **Navegacion:** uso de `Link` y query params para comunicar vistas.
- **Organizacion del proyecto:** separacion por `components`, `lib` y `types`.

## Estructura clave

- `app/page.tsx`: Home (Server Component) y filtro por `idBlog`.
- `app/blogs/page.tsx`: pagina de Blogs (Server Component que renderiza un componente cliente).
- `components/client-posts-table.tsx`: tabla y fetch en cliente (`"use client"`).
- `components/server-selected-post.tsx`: render del post filtrado en servidor.
- `components/portfolio-theory.tsx`: resumen teorico para portafolio.
- `lib/api.ts`: URL base y helper para obtener un post por ID.
- `types/post.ts`: tipo de datos `Post`.

## Scripts

- `npm run dev`: inicia el servidor de desarrollo.
- `npm run build`: genera la build de produccion.
- `npm run start`: ejecuta la build de produccion.
- `npm run lint`: ejecuta ESLint.

## Como probar rapido

1. Ejecuta `npm run dev`.
2. Ve a `http://localhost:3000`.
3. Entra a `Blogs`.
4. Haz click en cualquier fila o en el ID de la tabla.
5. Verifica que vuelva al Home con una URL tipo `/?idBlog=2` y muestre el post filtrado.
