import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import CategoryNavLoader from "@/components/layout/CategoryNavLoader";
import PriceTickerLoader from "@/components/layout/PriceTickerLoader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Noto_Serif_Bengali } from "next/font/google";
import Footer from "@/components/layout/Footer";
import OAuthSuccessToast from "@/components/auth/OAuthSuccessToast";

const NotoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});

export const metadata: Metadata = {
  title: "বাজার দর | Bazar Dor",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার বাজার দর এক নজরে।",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="bn"
      className={`${NotoSerifBengali.className} h-full antialiased`}
    >
      <body>
        <div className="sticky top-0 z-50 bg-[#FAFCFA]">
          <Header />
          <CategoryNavLoader />
        </div>

        <PriceTickerLoader />

        {children}

        <Footer />

        <OAuthSuccessToast />

        <ToastContainer
          position="top-center"
          toastClassName="!w-fit !min-w-0 !m-0 !rounded-lg !border !border-green-100 !bg-green-50 !px-3.5 !py-2 !text-xs !font-medium !leading-4 !text-slate-700 !shadow-md"
          style={{ width: "auto" }}
          autoClose={2000}
          hideProgressBar
          closeButton={false}
        />
      </body>
    </html>
  );
}
