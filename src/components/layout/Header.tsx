import Link from "next/link";
import { GiShoppingCart } from "react-icons/gi";

const Header = () => {
  const date = new Intl.DateTimeFormat("bn-BD", {
    dateStyle: "full",
  }).format(new Date());

  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:py-4">
        {/* Logo + Title + Date */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-600 text-white sm:h-11 sm:w-11">
            <GiShoppingCart size={22} strokeWidth={2} />
          </div>

          <div>
            <h1 className="text-xl font-bold tracking-tight text-slate-800 sm:text-2xl">
              বাজার দর
            </h1>

            <p className="mt-0.5 text-xs text-slate-500 sm:text-sm">{date}</p>
          </div>
        </Link>

        {/* Sign In / Sign Up */}
        <div className="flex items-center gap-3">
          <Link
            href="/signin"
            className="text-sm font-semibold text-slate-700 transition hover:text-green-700 sm:text-base"
          >
            সাইন ইন
          </Link>

          <Link
            href="/signup"
            className="rounded-lg bg-green-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700 sm:px-5 sm:text-base"
          >
            সাইন আপ
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
