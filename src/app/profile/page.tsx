"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { FiLogOut, FiUser } from "react-icons/fi";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();

  const user = session?.user;
  const [name, setName] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);
  const [message, setMessage] = useState("");

  const firstLetter =
    user?.name?.trim().charAt(0).toUpperCase() ||
    user?.email?.trim().charAt(0).toUpperCase() ||
    "U";

  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const trimmedName = name.trim();

    if (!trimmedName) {
      setMessage("আপনার নাম লিখুন।");
      return;
    }

    setIsUpdating(true);

    try {
      const result = await authClient.updateUser({
        name: trimmedName,
      });

      if (result.error) {
        setMessage("নাম আপডেট করা যায়নি। আবার চেষ্টা করুন।");
      } else {
        setMessage("আপনার নাম সফলভাবে আপডেট হয়েছে।");
      }
    } catch {
      setMessage("একটি সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    } finally {
      setIsUpdating(false);
    }
  };

  const handleSignOut = async () => {
    setIsSigningOut(true);

    try {
      await authClient.signOut();
      router.replace("/signin");
      router.refresh();
    } catch {
      setMessage("সাইন আউট করা যায়নি। আবার চেষ্টা করুন।");
      setIsSigningOut(false);
    }
  };

  if (isPending) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <p className="text-sm text-slate-500">প্রোফাইল লোড হচ্ছে...</p>
      </main>
    );
  }

  if (!user) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-10">
        <h1 className="text-2xl font-bold text-slate-800">আমার প্রোফাইল</h1>
        <p className="mt-2 text-sm text-slate-500">
          প্রোফাইল দেখতে প্রথমে সাইন ইন করুন।
        </p>
        <button
          onClick={() => router.push("/signin")}
          className="mt-5 rounded-lg bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800"
        >
          সাইন ইন
        </button>
      </main>
    );
  }

  return (
    <main className="mx-auto w-full max-w-3xl px-4 py-8 sm:py-10">
      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-800 sm:text-3xl">
          আমার প্রোফাইল
        </h1>
        <p className="mt-2 text-sm text-slate-500 sm:text-base">
          আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
        </p>
      </div>

      {/* User Information */}
      <section className="mt-7 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex min-w-0 items-center gap-3 sm:gap-4">
            {/* Profile Avatar */}
            {user.image ? (
              <Image
                src={user.image}
                alt={user.name || "প্রোফাইল"}
                width={64}
                height={64}
                unoptimized
                referrerPolicy="no-referrer"
                className="h-14 w-14 shrink-0 rounded-full border-2 border-green-100 object-cover sm:h-16 sm:w-16"
              />
            ) : (
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-green-100 bg-green-50 text-xl font-bold text-green-700 sm:h-16 sm:w-16">
                {firstLetter}
              </div>
            )}

            {/* Name and Email */}
            <div className="min-w-0">
              <h2 className="truncate text-lg font-bold text-slate-800 sm:text-xl">
                {user.name || "ব্যবহারকারী"}
              </h2>
              <p className="mt-1 break-all text-sm text-slate-500">
                {user.email}
              </p>
            </div>
          </div>

          {/* Sign Out Button */}
          <button
            type="button"
            onClick={handleSignOut}
            disabled={isSigningOut}
            className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-red-100 bg-white px-3 py-2 text-sm font-medium text-red-600 transition hover:bg-red-50 disabled:cursor-not-allowed disabled:opacity-60 sm:px-4"
          >
            <FiLogOut size={16} />
            <span>{isSigningOut ? "সাইন আউট..." : "সাইন আউট"}</span>
          </button>
        </div>
      </section>

      {/* Personal Information Form */}
      <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <div className="mb-5 flex items-center gap-2">
          <FiUser className="text-green-700" size={20} />
          <h2 className="text-lg font-bold text-slate-800 sm:text-xl">
            ব্যক্তিগত তথ্য
          </h2>
        </div>

        <form onSubmit={handleUpdate}>
          <label
            htmlFor="profile-name"
            className="mb-2 block text-sm font-medium text-slate-700"
          >
            নাম
          </label>

          <input
            id="profile-name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="আপনার সম্পূর্ণ নাম লিখুন"
            maxLength={100}
            required
            className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
          />

          {message && (
            <p
              role="status"
              className={`mt-3 text-sm ${
                message.includes("সফলভাবে") ? "text-green-700" : "text-red-600"
              }`}
            >
              {message}
            </p>
          )}

          <button
            type="submit"
            disabled={isUpdating}
            className="mt-5 inline-flex w-full items-center justify-center rounded-lg bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
          >
            {isUpdating ? "আপডেট হচ্ছে..." : "তথ্য আপডেট করুন"}
          </button>
        </form>
      </section>
    </main>
  );
};

export default ProfilePage;
