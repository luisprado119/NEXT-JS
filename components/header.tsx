import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="border-b border-slate-800 bg-slate-900/70">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="text-sm font-semibold text-slate-100">
          {siteConfig.name}
        </Link>

        <nav className="flex items-center gap-4 text-sm text-slate-300">
          <Link href="/" className="hover:text-white">
            Inicio
          </Link>
          <Link href="/blogs" className="hover:text-white">
            Blogs
          </Link>
        </nav>
      </div>
    </header>
  );
}
