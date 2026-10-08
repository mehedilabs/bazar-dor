import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";

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
    <html lang="bn">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
