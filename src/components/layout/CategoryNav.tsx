import Link from "next/link";
import type { Category } from "@/types/product";

interface CategoryNavProps {
  categories: Category[];
  activeSlug?: string;
}

const CategoryNav = ({ categories, activeSlug }: CategoryNavProps) => {
  return (
    <nav className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl gap-1 overflow-x-auto px-4 py-2">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/category/${category.slug}`}
            className={`shrink-0 rounded-md  px-3 py-1 text-sm font-medium transition-colors ${
              activeSlug === category.slug
                ? "bg-green-600 text-white"
                : "text-slate-700 hover:bg-slate-200 hover:text-green-700"
            }`}
          >
            {category.icon} {category.nameBn}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default CategoryNav;
