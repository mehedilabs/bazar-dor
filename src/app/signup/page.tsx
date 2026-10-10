"use client";

import { useState } from "react";
import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { DiGithub } from "react-icons/di";

const SignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    const user = Object.fromEntries(formData.entries()) as {
      name: string;
      email: string;
      password: string;
      confirmPassword: string;
    };

    if (!user.name.trim()) {
      toast.warn("আপনার নাম লিখুন");
      return;
    }

    if (!user.email.trim()) {
      toast.warn("আপনার ইমেইল লিখুন");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email)) {
      toast.warn("সঠিক ইমেইল ঠিকানা দিন");
      return;
    }

    if (!user.password) {
      toast.warn("পাসওয়ার্ড লিখুন");
      return;
    }

    if (user.password.length < 8) {
      toast.warn("পাসওয়ার্ড কমপক্ষে ৮ অক্ষরের হতে হবে");
      return;
    }

    if (user.password !== user.confirmPassword) {
      toast.error("পাসওয়ার্ড দুটি একই নয়");
      return;
    }

    const { data, error } = await authClient.signUp.email({
      name: user.name,
      email: user.email,
      password: user.password,
      callbackURL: "/",
    });

    if (error) {
      if (error.code === "USER_ALREADY_EXISTS_USE_ANOTHER_EMAIL") {
        toast.error("এই ইমেইলে অ্যাকাউন্ট আছে");
      } else {
        toast.error("অ্যাকাউন্ট তৈরি করা যায়নি। আবার চেষ্টা করুন");
      }

      return;
    }

    if (data) {
      toast.success("সফলভাবে অ্যাকাউন্ট তৈরি হয়েছে");
      router.push("/");
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      sessionStorage.setItem("oauth-login-provider", "google");

      const { error } = await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });

      if (error) {
        sessionStorage.removeItem("oauth-login-provider");
        toast.error("Google দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
      }
    } catch {
      sessionStorage.removeItem("oauth-login-provider");
      toast.error("Google দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  const handleGithubSignIn = async () => {
    try {
      sessionStorage.setItem("oauth-login-provider", "github");

      const { error } = await authClient.signIn.social({
        provider: "github",
        callbackURL: "/",
      });

      if (error) {
        sessionStorage.removeItem("oauth-login-provider");
        toast.error("GitHub দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
      }
    } catch {
      sessionStorage.removeItem("oauth-login-provider");
      toast.error("GitHub দিয়ে লগইন করা যায়নি। আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f5ef] px-4 py-8 sm:py-10">
      <div className="mx-auto w-full max-w-3xl">
        <div className="mb-5 text-center sm:mb-6">
          <h1 className="text-2xl font-bold tracking-tight text-[#202820] sm:text-3xl">
            অ্যাকাউন্ট তৈরি করুন
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
            বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-xl border border-[#e0e8df] bg-white/80 p-4 shadow-sm sm:p-5 md:p-6">
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                নাম
              </label>

              <input
                name="name"
                type="text"
                placeholder="আপনার নাম"
                required
                autoComplete="name"
                className="input h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                ইমেইল
              </label>

              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                autoComplete="email"
                className="input h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="কমপক্ষে ৮ অক্ষর"
                  required
                  minLength={8}
                  autoComplete="off"
                  className="input h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 pr-10 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-green-700"
                  aria-label={
                    showPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                  }
                >
                  {showPassword ? <FiEyeOff size={17} /> : <FiEye size={17} />}
                </button>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                পাসওয়ার্ড নিশ্চিত করুন
              </label>

              <div className="relative">
                <input
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  placeholder="আবার লিখুন"
                  required
                  minLength={8}
                  autoComplete="off"
                  className="input h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 pr-10 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 transition-colors hover:text-green-700"
                  aria-label={
                    showConfirmPassword ? "পাসওয়ার্ড লুকান" : "পাসওয়ার্ড দেখুন"
                  }
                >
                  {showConfirmPassword ? (
                    <FiEyeOff size={17} />
                  ) : (
                    <FiEye size={17} />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="btn h-11 min-h-11 w-full rounded-lg border-0 bg-[#07883f] text-sm font-semibold text-white shadow-[0_3px_0_#b7ddc1] transition duration-200 hover:bg-[#067536]"
            >
              অ্যাকাউন্ট তৈরি করুন
            </button>
          </form>

          <div className="my-5 flex items-center gap-3">
            <div className="h-px flex-1 bg-gray-300" />
            <span className="shrink-0 text-xs text-gray-600">অথবা</span>
            <div className="h-px flex-1 bg-gray-300" />
          </div>

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="btn h-11 min-h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 text-sm font-medium text-gray-800 transition hover:border-green-600 hover:bg-green-50"
            >
              <FcGoogle className="shrink-0 text-lg" />
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="btn h-11 min-h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 text-sm font-medium text-gray-800 transition hover:border-green-600 hover:bg-green-50"
            >
              <DiGithub className="shrink-0 text-lg" />
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          <p className="mt-5 text-center text-sm leading-6 text-gray-600">
            ইতোমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link
              href="/signin"
              className="font-semibold text-[#07883f] transition hover:text-green-900 hover:underline"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
      <p className="mt-6 text-center">
        <Link
          href="/"
          className="text-sm font-medium text-gray-600 transition hover:text-green-700 hover:underline"
        >
          ← হোম পেজে ফিরে যান
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
