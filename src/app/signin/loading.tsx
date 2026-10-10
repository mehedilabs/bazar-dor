const Loading = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#f0f5ef] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">
        {/* Page Heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mx-auto h-8 w-28 rounded-md bg-gray-300 sm:h-9" />
          <div className="mx-auto mt-3 h-4 w-full max-w-xl rounded bg-gray-200" />
          <div className="mx-auto mt-2 h-4 w-52 rounded bg-gray-200" />
        </div>

        {/* Sign In Card */}
        <div className="mx-auto w-full max-w-xl rounded-xl border border-[#e0e8df] bg-white/80 p-4 sm:p-5 md:p-6">
          {/* Email */}
          <div className="mb-4">
            <div className="mb-2 h-4 w-12 rounded bg-gray-300" />
            <div className="h-11 w-full rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Password */}
          <div className="mb-4">
            <div className="mb-2 h-4 w-20 rounded bg-gray-300" />
            <div className="h-11 w-full rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Sign In Button */}
          <div className="h-11 w-full rounded-lg bg-[#07883f]/25 shadow-[0_3px_0_#b7ddc1]" />

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <div className="h-3 w-10 rounded bg-gray-200" />
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Google & GitHub Buttons */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="h-11 rounded-lg border border-[#dce2db] bg-gray-100" />
            <div className="h-11 rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Sign Up Link */}
          <div className="mt-5 flex justify-center gap-2">
            <div className="h-4 w-24 rounded bg-gray-200" />
            <div className="h-4 w-28 rounded bg-green-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
