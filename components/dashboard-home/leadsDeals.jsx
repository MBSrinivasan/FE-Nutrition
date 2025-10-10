"use client";
import React from "react";
import { Card } from "@mui/material";
import "./vendorHome.css";
import Button from "@/components/reusableComponents/button/page";
import EChartsWrapper from "@/components/Charts/EChartsWrapper";


export default function VendorLeadsAndDeals() {
  const funnelOptions = {
    // title: {
    //   text: 'Funnel'
    // },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c}%",
    },
    legend: {
      data: ["Show", "Click", "Visit", "Inquiry", "Order"],
    },
    series: [
      {
        name: "Expected",
        type: "funnel",
        left: "10%",
        width: "80%",
        label: {
          formatter: "{b}",
        },
        labelLine: {
          show: false,
        },
        itemStyle: {
          opacity: 0.7,
        },
        emphasis: {
          label: {
            position: "inside",
            formatter: "{b}Expected: {c}%",
          },
        },
        data: [
          { value: 60, name: "Visit" },
          { value: 40, name: "Inquiry" },
          { value: 20, name: "Order" },
          { value: 80, name: "Click" },
          { value: 100, name: "Show" },
        ],
      },
      {
        name: "Actual",
        type: "funnel",
        left: "10%",
        width: "80%",
        maxSize: "80%",
        label: {
          position: "inside",
          formatter: "{c}%",
          color: "#fff",
        },
        itemStyle: {
          opacity: 0.5,
          borderColor: "#fff",
          borderWidth: 2,
        },
        emphasis: {
          label: {
            position: "inside",
            formatter: "{b}Actual: {c}%",
          },
        },
        data: [
          { value: 30, name: "Visit" },
          { value: 10, name: "Inquiry" },
          { value: 5, name: "Order" },
          { value: 50, name: "Click" },
          { value: 80, name: "Show" },
        ],
        // Ensure outer shape will not be over inner shape when hover.
        z: 100,
      },
    ],
  };

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
      {" "}
      <div className="mb-[10px]">
        <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-bold weight-500 text-[#4F4F4F]">
          Leads & Deals
        </h1>
      </div>
      <div className="border-b border-[#ADADAD] pb-3 mb-[5px]">
        <EChartsWrapper options={funnelOptions} type="funnel" />
      </div>
      <div className="mb-[10px]">
        <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-[#4F454F] m-0 weight-500">
          RFP Match Alerts
        </h2>
      </div>
      <div class="container-fluid mb-[10px]">
        <div class="row">
          <div class="col-4">
            <div className="d-flex  flex-col justify-center items-center gap-2">
              <div
                class="bg-[#FFEAF1] text-[#7A1F3D] font-medium text-[18px] 
sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] p-2 rounded h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px]"
              >
                39
              </div>
              <div>
                <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F4F4F] m-0">
                  RFQs Total
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div className="d-flex  flex-col justify-center items-center gap-2">
              <div
                class="bg-[#FFE3C8] text-[#E17100] font-medium text-[18px] 
sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] p-2 rounded h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px]"
              >
                10
              </div>
              <div>
                <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F4F4F] m-0">
                  Active
                </p>
              </div>
            </div>
          </div>
          <div class="col-4">
            <div className="d-flex  flex-col justify-center items-center gap-2">
              <div
                class="bg-[#E3FFED] text-[#00A63E] font-medium text-[18px] 
sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] p-2 rounded  h-[40px] sm:h-[50px] md:h-[60px] lg:h-[70px] xl:h-[80px]"
              >
                1.1 cr
              </div>
              <div>
                <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F4F4F] m-0">
                  Total Value
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[10px]">
        <h3 className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#4F4F4F] m-0">
          Submission due dates
        </h3>
      </div>
      <div className="d-flex justify-between items-center mb-[10px]">
        <div>
          <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#4F4F4F] m-0">
            Nutra Packaging
          </p>
        </div>
        <div>
          <div class="bg-[#D4183D] text-[#FFF] font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]  p-2 rounded">
            28 Sep 2025
          </div>
        </div>
      </div>
      <div className="d-flex justify-between items-center mb-[10px]">
        <div>
          <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#4F4F4F] m-0">
            Herbal Extract
          </p>
        </div>
        <div>
          <div class="bg-[#EFF6FF] text-[#4F4F4F] font-medium text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px]  p-2 rounded">
            28 Oct 2025
          </div>
        </div>
      </div>
      <div class="bg-[#F0FDF4] text-[#00A63E]  p-2 rounded w-full mb-[20px]">
        <div>
          <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#01683C] m-0">
            92% Match
          </p>
        </div>
        <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#5DAF25]">
          Packing vendor A
        </div>
      </div>
      <div className="d-flex justify-center items-center mb-[10px]">
        <Button>Submit Quote</Button>
      </div>
    </Card>
  );
}
