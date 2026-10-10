"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { FcGoogle } from "react-icons/fc";
import { DiGithub } from "react-icons/di";

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries()) as {
      email: string;
      password: string;
    };

    if (!user.email.trim()) {
      toast.warn("আপনার ইমেইল লিখুন");
      return;
    }

    if (!user.password) {
      toast.warn("পাসওয়ার্ড লিখুন");
      return;
    }

    try {
      const { data, error } = await authClient.signIn.email({
        ...user,
        callbackURL: "/",
      });

      if (error) {
        if (error.code === "INVALID_EMAIL_OR_PASSWORD") {
          toast.error("ইমেইল অথবা পাসওয়ার্ড ভুল হয়েছে");
        } else {
          toast.error("লগইন করা যায়নি। আবার চেষ্টা করুন");
        }

        return;
      }

      if (data) {
        sessionStorage.setItem("normal-login-success", "true");
        router.push("/");
      }
    } catch {
      toast.error("লগইন করা যায়নি। আবার চেষ্টা করুন");
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
            সাইন ইন
          </h1>

          <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-gray-600">
            বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে প্রবেশ করুন।
          </p>
        </div>

        <div className="mx-auto w-full max-w-xl rounded-xl border border-[#e0e8df] bg-white/80 p-4 sm:p-5 md:p-6">
          <form onSubmit={onSubmit} noValidate className="space-y-4">
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                ইমেইল
              </label>

              <input
                type="email"
                name="email"
                placeholder="you@example.com"
                required
                className="input h-11 w-full rounded-lg border border-[#dce2db] bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-green-700 focus:ring-2 focus:ring-green-100"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm font-medium text-gray-800">
                পাসওয়ার্ড
              </label>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="আপনার পাসওয়ার্ড লিখুন"
                  required
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

            <button
              type="submit"
              className="btn h-11 min-h-11 w-full rounded-lg border-0 bg-[#07883f] text-sm font-semibold text-white shadow-[0_3px_0_#b7ddc1] transition duration-200 hover:bg-[#067536]"
            >
              সাইন ইন
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
            অ্যাকাউন্ট নেই?{" "}
            <Link
              href="/signup"
              className="font-semibold text-[#07883f] transition hover:text-green-900 hover:underline"
            >
              সাইন আপ করুন
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

export default SignIn;
