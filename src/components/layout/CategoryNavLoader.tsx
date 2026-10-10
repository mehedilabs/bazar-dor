import { Suspense } from "react";
import CategoryNav from "@/components/layout/CategoryNav";
import { getCategories } from "@/lib/api";

const CategoryNavContent = async () => {
  const categories = await getCategories();

  return <CategoryNav categories={categories} />;
};

const CategoryNavLoader = () => {
  return (
    <Suspense fallback={null}>
      <CategoryNavContent />
    </Suspense>
  );
};

export default CategoryNavLoader;
