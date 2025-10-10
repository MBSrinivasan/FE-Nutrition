"use client";
import React from "react";
import { Card } from "@mui/material";
import "./vendorHome.css";

export default function ProjectsOverview() {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 5,
        border: "1px solid #e0e0e0",
        marginTop: "10px",
        backgroundColor: "#FFF",
        padding: "20px 20px",
      }}
    >
      <div className="mb-[10px]">
        <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500 font-bold text-[#4F4F4F]">
          Payments Overview
        </h1>
      </div>
      <div className="d-flex items-center mb-[10px]">
        <div className="donut-chart mx-auto">
          <svg viewBox="0 0 100 100">
            {/* Received - Green (65%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#22C55E"
              strokeWidth="12"
              strokeDasharray="251.2"
              strokeDashoffset="87.92"
              strokeLinecap="round"
            />
            {/* Pending - Orange (25%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="12"
              strokeDasharray="251.2"
              strokeDashoffset="150.72"
              strokeLinecap="round"
            />
            {/* Overdue - Red (10%) */}
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#EF4444"
              strokeWidth="12"
              strokeDasharray="251.2"
              strokeDashoffset="226.08"
              strokeLinecap="round"
            />
          </svg>
          <div className="donut-center">
            <div className="total-amount">3.4 Cr</div>
            <div className="total-label">Total Value</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="flex bg-[#F0FDF4] rounded-[10px] w-full  items-center p-[10px] justify-between"
          style={{ width: "100%" }}
        >
          <div style={{ width: "40%" }}>
            <div className="d-flex mr-[12px] items-center">
              <div className="mr-[6px]">
                {" "}
                <img src="/assets/images/icons-images/tickIcon.svg" />
              </div>
              <h2 className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-500">
                Received
              </h2>
            </div>
          </div>
          <div style={{ width: "60%" }}>
            <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#016630] d-flex justify-end items-end weight-600">
              ₹2.1 Cr
            </p>
          </div>
        </div>

        <div
          className="flex bg-[#FFFBEB] rounded-[10px] w-full  items-center p-[10px] justify-between"
          style={{ width: "100%" }}
        >
          <div style={{ width: "40%" }}>
            <div className="d-flex mr-[12px] items-center">
              <div className="mr-[6px]">
                {" "}
                <img src="/assets/images/icons-images/pendingIcon.svg" />
              </div>
              <h2 className="font-medium weight-500 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F]">
                Pending
              </h2>
            </div>
          </div>
          <div style={{ width: "60%" }} className="">
            <p class="d-flex justify-end items-end weight-600 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]  text-[#BB4D00] ">
              ₹1.0 Cr
            </p>
            <p class="d-flex justify-end items-end weight-400 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]  text-[#E88200] ">
              Next Due: 27 Sep 2025
            </p>
          </div>
        </div>

        <div
          className="flex bg-[#FEF2F2] rounded-[10px] w-full  items-center p-[10px] justify-between"
          style={{ width: "100%" }}
        >
          <div style={{ width: "40%" }}>
            <div className="d-flex mr-[12px] items-center">
              <div className="mr-[6px]">
                {" "}
                <img src="/assets/images/icons-images/dangerIcon.svg" />
              </div>
              <h2 className="font-medium weight-500 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F]">
                Overdue
              </h2>
            </div>
          </div>
          <div style={{ width: "60%" }}>
            <p class="d-flex justify-end items-end weight-600 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]  text-[#C10007] ">
              ₹0.3 Cr
            </p>
            <p class="d-flex justify-end items-end weight-400 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]  text-[#C10007] ">
              Invoice #456-Due 10 Sep
            </p>
          </div>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="mb-[10px]">
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-[#4F454F] m-0">
          Recent Transactions
        </h2>
      </div>
      <div className="flex flex-col gap-3">
        <div
          className="flex bg-[#F5F6F7] rounded-[10px] w-full  items-center p-[10px] justify-between"
          style={{ width: "100%" }}
        >
          <div style={{ width: "90%" }}>
            <div className="d-flex mr-[12px] items-center">
              <div className="mr-[6px]">
                <div className="status-dot paid"></div>
              </div>
              <div className="d-flex flex-col">
                <h2 className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-600">
                  50,000 - Client X
                </h2>
                <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F4F4F] d-flex justify-start items-end weight-600">
                  20 Sep 2025
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "10%" }}>
            <div className="status-badge paid text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]">
              Paid
            </div>
          </div>
        </div>

        <div
          className="flex bg-[#F5F6F7] rounded-[10px] w-full  items-center p-[10px] justify-between"
          style={{ width: "100%" }}
        >
          <div style={{ width: "60%" }}>
            <div className="d-flex mr-[12px] items-center">
              <div className="mr-[6px]">
                <div className="status-dot pending"></div>
              </div>
              <div className="d-flex flex-col">
                <h2 className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-600">
                  2,10,000 - Client Y
                </h2>
                <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F4F4F] d-flex justify-start items-end weight-600">
                  18 Sep 2025
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: "40%" }}>
            <div className="d-flex justify-end w-full">
              {" "}
              <p className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-500 text-[4F4F4F] ">
                Pending (Due 25 Sep)
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-line"></div>
      <div className="d-flex mb-[10px]">
        <svg className="performance-icon" viewBox="0 0 24 24">
          <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
        </svg>
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-600 rightSpacing">
          Performance Dashboard
        </h2>
      </div>
      <div className="tab-content mb-[10px]" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-allcountries"
          role="tabpanel"
          aria-labelledby="pills-allcountries-tab"
          tabIndex={0}
        >
          <div className="countries4-section-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="d-flex justify-center items-center w-full">
                  <div className="d-flex flex-col justify-center items-center">
                    <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-[#7A1F3D] weight-600">
                      21%
                    </div>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-500">
                      {" "}
                      Conversion Rate
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="d-flex justify-center items-center w-full">
                  <div className="d-flex flex-col justify-center items-center">
                    <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-[#155DFC] weight-600">
                      1.8d
                    </div>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-500">
                      {" "}
                      Avg Response Time
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="tab-content" id="pills-tabContent">
        <div
          className="tab-pane fade show active"
          id="pills-allcountries"
          role="tabpanel"
          aria-labelledby="pills-allcountries-tab"
          tabIndex={0}
        >
          <div className="countries4-section-area">
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <div className="d-flex justify-center items-center w-full">
                  <div className="d-flex flex-col justify-center items-center">
                    <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-[#00A63E] weight-600">
                      90%
                    </div>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-500">
                      {" "}
                      On-Time Delivery
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6">
                <div className="d-flex justify-center items-center w-full">
                  <div className="d-flex flex-col justify-center items-center">
                    <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[28px] text-[#E17100] weight-600">
                      78%
                    </div>
                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F] weight-500">
                      {" "}
                      Compliance Health
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
      <div className="vendor-rank-card mb-[10px]">
        <div className="vendor-rank-title">Vendor Rank</div>
        <div className="vendor-rank-desc">Top 25% Nutra Suppliers</div>
      </div>
    </Card>
  );
}
