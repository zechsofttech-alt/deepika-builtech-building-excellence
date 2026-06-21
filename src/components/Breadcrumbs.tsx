import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="py-4 px-6 lg:px-12 bg-surface-subtle border-b border-surface-mid"
    >
      <div className="container mx-auto flex items-center gap-2 flex-wrap text-sm text-ink-muted">
        {/* Home Item */}
        <Link 
          href="/" 
          className="flex items-center gap-1 hover:text-amber transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm"
          aria-label="Home"
        >
          <Home className="w-4 h-4" />
          <span className="sr-only">Home</span>
        </Link>

        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <ChevronRight className="w-3.5 h-3.5 text-ink-muted/40 shrink-0" />
            {item.href ? (
              <Link 
                href={item.href} 
                className="hover:text-amber transition-colors font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-amber rounded-sm"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-semibold text-ink text-ellipsis overflow-hidden whitespace-nowrap max-w-[200px] md:max-w-none" aria-current="page">
                {item.label}
              </span>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Breadcrumbs;


