import React from "react";

import { UserProfile } from "@clerk/nextjs";
import { ResourceSection } from "@/components/ResourcesSection";
import FAQ02 from "@/components/faq-02";

const ResourcesPage = () => {
  return (
    <div className="px-16 ">
    <FAQ02 />
    <ResourceSection />
    </div>
  )
};

export default ResourcesPage;