import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import CategoryNav from "@/components/layout/CategoryNav";
import PriceTicker from "@/components/layout/PriceTicker";
import { getCategories, getProducts } from "@/lib/api";

export const metadata: Metadata = {
  title: "বাজার দর | Bazar Dor",
  description: "চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার বাজার দর এক নজরে।",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);

  return (
    <html lang="bn">
      <body>
        <Header />
        <CategoryNav categories={categories} />
        <PriceTicker products={products} />
        {children}
      </body>
    </html>
  );
}
