const Loading = () => {
  return (
    <div className="min-h-screen animate-pulse bg-[#f0f5ef] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">
        {/* Page Heading */}
        <div className="mb-5 text-center sm:mb-6">
          <div className="mx-auto h-8 w-52 rounded-md bg-gray-300 sm:h-9" />

          <div className="mx-auto mt-3 h-4 w-full max-w-sm rounded bg-gray-200" />
        </div>

        {/* Sign Up Card */}
        <div className="mx-auto w-full max-w-xl rounded-xl border border-[#e0e8df] bg-white/80 p-4 shadow-sm sm:p-5 md:p-6">
          {/* Name Field */}
          <div className="mb-4">
            <div className="mb-2 h-4 w-10 rounded bg-gray-300" />
            <div className="h-11 w-full rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <div className="mb-2 h-4 w-14 rounded bg-gray-300" />
            <div className="h-11 w-full rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <div className="mb-2 h-4 w-20 rounded bg-gray-300" />
            <div className="h-11 w-full rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Confirm Password Field */}
          <div className="mb-4">
            <div className="mb-2 h-4 w-36 rounded bg-gray-300" />
            <div className="h-11 w-full rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Create Account Button */}
          <div className="h-11 w-full rounded-lg bg-[#07883f]/25 shadow-[0_3px_0_#b7ddc1]" />

          {/* Divider */}
          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <div className="h-3 w-10 rounded bg-gray-200" />
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div className="h-11 rounded-lg border border-[#dce2db] bg-gray-100" />
            <div className="h-11 rounded-lg border border-[#dce2db] bg-gray-100" />
          </div>

          {/* Sign In Link */}
          <div className="mt-5 flex justify-center gap-2">
            <div className="h-4 w-36 rounded bg-gray-200" />
            <div className="h-4 w-24 rounded bg-green-100" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
