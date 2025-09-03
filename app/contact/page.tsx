import React from "react";

import { UserProfile } from "@clerk/nextjs";
import { ContactSection } from "@/components/ContactSection";

const ContactPage = () => {
  return (
    <div className="justify-items-center">
    <ContactSection />
    </div>
  )
};

export default ContactPage;