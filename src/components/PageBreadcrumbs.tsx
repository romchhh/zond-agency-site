import Link from "next/link";

export type PageCrumb = {
  label: string;
  href?: string;
};

type PageBreadcrumbsProps = {
  items: PageCrumb[];
  className?: string;
};

export default function PageBreadcrumbs({
  items,
  className = "post-breadcrumbs sp-eyebrow",
}: PageBreadcrumbsProps) {
  if (items.length === 0) return null;

  return (
    <nav className={className} aria-label="Breadcrumb">
      {items.map((item, index) => (
        <span key={`${item.label}-${index}`} className="post-breadcrumbs-item">
          {index > 0 ? <span className="post-breadcrumbs-sep"> / </span> : null}
          {item.href ? (
            <Link href={item.href}>{item.label}</Link>
          ) : (
            <span className="post-breadcrumbs-current">{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
