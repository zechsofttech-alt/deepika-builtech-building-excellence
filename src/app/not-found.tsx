"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function NotFound() {
  const pathname = usePathname();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", pathname);
  }, [pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface-subtle">
      <div className="text-center">
        <h1 className="mb-4 text-6xl font-heading font-black text-ink">404</h1>
        <p className="mb-6 text-xl text-ink-muted">Oops! Page not found</p>
        <Link href="/" className="text-amber hover:underline font-bold text-sm uppercase tracking-wider">
          Return to Home
        </Link>
      </div>
    </div>
  );
}
