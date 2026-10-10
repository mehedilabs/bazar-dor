import Link from "next/link";

const CategoryLoading = () => {
  return (
    <main className="mx-auto min-h-screen max-w-6xl px-4 py-8 sm:py-10">
      {/* Breadcrumb Skeleton */}
      <div className="mb-5 h-4 w-36 animate-pulse rounded bg-slate-200" />

      {/* Category Heading Skeleton */}
      <div className="mb-8">
        <div className="h-9 w-48 animate-pulse rounded-lg bg-slate-200" />
        <div className="mt-3 h-4 w-64 max-w-full animate-pulse rounded bg-slate-100" />
      </div>

      {/* Count + Sort Skeleton */}
      <div className="mb-7 flex items-center justify-between gap-3">
        <div className="h-4 w-36 animate-pulse rounded bg-slate-200" />

        <div className="h-8 w-[120px] animate-pulse rounded-md bg-slate-200 sm:w-48" />
      </div>

      {/* Product Cards Skeleton */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="animate-pulse rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
          >
            {/* Image + Price Change */}
            <div className="flex items-start justify-between gap-3">
              <div className="h-14 w-14 rounded-2xl bg-green-50" />
              <div className="h-6 w-16 rounded-full bg-slate-100" />
            </div>

            {/* Product Name */}
            <div className="mt-5 h-5 w-3/4 rounded bg-slate-200" />

            {/* Unit */}
            <div className="mt-2 h-4 w-1/3 rounded bg-slate-100" />

            {/* Price + Details */}
            <div className="mt-5 flex items-end justify-between gap-3">
              <div className="space-y-2">
                <div className="h-3 w-20 rounded bg-slate-100" />
                <div className="h-7 w-28 rounded bg-slate-200" />
              </div>

              <div className="h-4 w-20 rounded bg-green-50" />
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default CategoryLoading;
