import React from "react";
import Hero from "./_components/Hero";
import AccessoriesRepairPage from "./_components/accessories_repaire/AccessoriesRepair";
import SubscriptionPage from "./_components/Subscription";
import NewArrivalProducts from "./_components/products/NewArrivalProducts";
import TopSellingProducts from "./_components/products/TopSellingProduct";
import FeatureProducts from "./_components/products/FeatureProducts";
import AppleProductBanner from "./_components/products/AppleProductBanner";
import { generateSEO } from "@/config/seo/seo";
export const metadata = generateSEO({
  title: "Ecommerce - Home",
  description: "Ecommerce - Home",
});
const page = () => {
  return (
    <div>
      <Hero />
      <div className="bg-gray-50">
        <NewArrivalProducts />
        <TopSellingProducts />
        <AppleProductBanner />
        <FeatureProducts />
        <SubscriptionPage />
        <AccessoriesRepairPage />
      </div>
    </div>
  );
};

export default page;
