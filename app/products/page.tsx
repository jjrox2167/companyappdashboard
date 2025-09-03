import React from "react";

import ProductsSection  from "@/components/ProductsSection"
import { UserProfile } from "@clerk/nextjs";
import Features01Page from "@/components/features-01";

const ProductsPage = () => {
  return (
    <div className="justify-items-center">
    <Features01Page />
    <ProductsSection />
    </div>
  )
};

export default ProductsPage;