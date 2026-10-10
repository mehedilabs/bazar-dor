"use client";

import { useEffect } from "react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

const OAuthSuccessToast = () => {
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;

    const normalLoginSuccess = sessionStorage.getItem("normal-login-success");
    const provider = sessionStorage.getItem("oauth-login-provider");

    if (!session?.user) return;

    if (normalLoginSuccess === "true") {
      sessionStorage.removeItem("normal-login-success");
      toast.success("সফলভাবে লগইন হয়েছে");
      return;
    }

    if (provider === "google") {
      sessionStorage.removeItem("oauth-login-provider");
      toast.success("সফলভাবে Google দিয়ে লগইন হয়েছে");
    } else if (provider === "github") {
      sessionStorage.removeItem("oauth-login-provider");
      toast.success("সফলভাবে GitHub দিয়ে লগইন হয়েছে");
    }
  }, [isPending, session]);

  return null;
};

export default OAuthSuccessToast;
