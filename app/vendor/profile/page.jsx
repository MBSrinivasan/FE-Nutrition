"use client";
import React from "react";
import { Collapse } from "antd";
import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";
import { Card } from "@mui/material";
import { BuildOutlined } from "@ant-design/icons";
import VendorCompletePage from "../../../components/profileComplete/page";
import VendorMainPage from "../../../components/profileMain/page";

export default function VendorHomePage() {
  return (
    <VendorHeaderNav>
      <div className="" style={{ marginTop: "48px", width: "100%" }}>
      
<VendorMainPage/>
        {/* <VendorCompletePage/> */}
      </div>
    </VendorHeaderNav>
  );
}
