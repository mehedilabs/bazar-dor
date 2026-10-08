import Hero from "@/components/home/Hero";
import ProductSections from "@/components/home/ProductSections";
import { getProducts } from "@/lib/api";

export default async function HomePage() {
  const products = await getProducts();

  return (
    <main>
      <Hero />
      <ProductSections products={products} />
    </main>
  );
}
