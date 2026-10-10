const ProfileLoadingSkeleton = () => {
  return (
    <main className="mx-auto w-full max-w-3xl animate-pulse px-4 py-8 sm:py-10">
      {/* Page Heading */}
      <div>
        <div className="h-8 w-44 rounded-md bg-slate-200 sm:h-9" />
        <div className="mt-3 h-4 w-64 max-w-full rounded bg-slate-100 sm:h-5" />
      </div>

      {/* User Information */}
      <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            <div className="h-14 w-14 shrink-0 rounded-full border-2 border-green-100 bg-slate-200 sm:h-16 sm:w-16" />

            <div className="min-w-0 flex-1">
              <div className="h-5 w-32 max-w-full rounded bg-slate-200 sm:h-6" />
              <div className="mt-3 h-4 w-40 max-w-full rounded bg-slate-100" />
            </div>
          </div>

          <div className="h-9 w-24 shrink-0 rounded-lg bg-red-50 sm:w-28" />
        </div>
      </section>

      {/* Personal Information */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <div className="h-5 w-5 rounded bg-green-100" />
          <div className="h-6 w-36 rounded bg-slate-200" />
        </div>

        <div className="mb-2 h-4 w-12 rounded bg-slate-200" />
        <div className="h-12 w-full rounded-lg border border-slate-200 bg-slate-50" />
        <div className="mt-5 h-12 w-full rounded-lg bg-green-100 sm:w-36" />
      </section>
    </main>
  );
};

export default ProfileLoadingSkeleton;
