import Link from "next/link";

const NotFound = () => {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="text-center">
        <p className="text-7xl font-black text-green-600">404</p>

        <h1 className="mt-4 text-2xl font-bold text-slate-900">
          পেজটি পাওয়া যায়নি
        </h1>

        <p className="mt-2 text-slate-500">
          আপনি যে পেজটি খুঁজছেন সেটি হয়তো আর নেই।
        </p>

        <Link href="/" className="btn btn-success mt-6 text-white">
          হোমে ফিরে যান
        </Link>
      </div>
    </main>
  );
};

export default NotFound;
