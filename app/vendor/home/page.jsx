"use client";
import React from "react";
import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";
import VendorPro from "../../../components/dashboard-home/vendorPro";
import QuickAlerts from "../../../components/dashboard-home/quickAlerts";
import ComplianceTracker from "../../../components/dashboard-home/complianceTracker";
import VendorLeadsAndDeals from "../../../components/dashboard-home/leadsDeals";
import QuickSupport from "../../../components/dashboard-home/quickSupport";
import ProjectOversights from "../../../components/dashboard-home/projectOversights";
import ProjectsOverview from "../../../components/dashboard-home/paymentOverview";
import MarketplaceSpotlight from "../../../components/dashboard-home/marketplaceSpotlight";
import IntelligenceShorcut from "../../../components/dashboard-home/intelligenceShortcut";

export default function VendorHomePage() {
  return (
    <VendorHeaderNav>
      <div className="" style={{ marginTop: "48px", width: "100%" }}>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <VendorPro />
              </div>
              <div class="col-3">
                <QuickAlerts />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <div class="container-fluid">
                  <div class="row">
                    <div
                      class="col-6"
                      style={{ paddingLeft: "0px", paddingRight: "0px" }}
                    >
                      <ComplianceTracker />
                    </div>
                    <div class="col-6">
                      <VendorLeadsAndDeals />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <QuickSupport />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <ProjectOversights />
                    </div>
                    <div class="col-6">
                      <ProjectsOverview />
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <MarketplaceSpotlight />
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <IntelligenceShorcut />
                    </div>
                    <div class="col-6"></div>
                  </div>
                </div>
              </div>
              <div class="col-3"></div>
            </div>
          </div>
        </div>
      </div>
    </VendorHeaderNav>
  );
}
