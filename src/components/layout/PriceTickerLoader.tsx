import { Suspense } from "react";
import PriceTicker from "@/components/layout/PriceTicker";
import { getProducts } from "@/lib/api";

const PriceTickerContent = async () => {
  const products = await getProducts();

  return <PriceTicker products={products} />;
};

const PriceTickerLoader = () => {
  return (
    <Suspense fallback={null}>
      <PriceTickerContent />
    </Suspense>
  );
};

export default PriceTickerLoader;
