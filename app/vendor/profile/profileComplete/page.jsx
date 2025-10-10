"use client";
import React from "react";

import VendorHeaderNav from "@/components/vendorHeaderNav/headerNav";
import VendorCompletePage from "../../../../components/profileComplete/page";

export default function VendorHomePage() {
  return (
    <VendorHeaderNav>
      <div className="" style={{ marginTop: "48px", width: "100%" }}>
        <VendorCompletePage />
      </div>
    </VendorHeaderNav>
  );
}
