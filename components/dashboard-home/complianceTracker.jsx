"use client";
import React from "react";
import { Card } from "@mui/material";
import { Progress  } from "antd";
import "./vendorHome.css";
import Button from "@/components/reusableComponents/button/page";
import {  UploadOutlined } from "@ant-design/icons";
import IconBorder from "@/components/reusableComponents/borderBox/page";
import HighchartsWrapper from "@/components/Charts/HighchartsWrapper";



export default function ComplianceTracker() {
  // Donut chart configuration for Compliance Tracker
  const donutChartOptions = {
    chart: {
      type: "pie",
      height: 120,
      width: 120,
    },
    title: {
      text: null,
    },
    plotOptions: {
      pie: {
        innerSize: "60%",
        dataLabels: {
          enabled: false,
        },
        showInLegend: false,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Compliance",
        data: [
          { name: "Valid", y: 78, color: "#10B981" },
          { name: "Invalid", y: 22, color: "#E5E7EB" },
        ],
      },
    ],
    credits: {
      enabled: false,
    },
    tooltip: {
      enabled: false,
    },
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
                        <div
                          className="flex justify-between items-start mb-2 "
                          
                        >
                          <div
                            className="d-flex flex-col justify-between"
                           
                          >
                            <div>
                              <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500 font-bold">
                                Compliance Tracker
                              </h1>
                            </div>
                            
                          </div>
                          
                        </div>
                        <div
                            className="relative flex items-center justify-center"
                           
                          >
                            <HighchartsWrapper
                              options={donutChartOptions}
                              type="pie"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-[#4F454F]">
                              78%
                            </div>
                          </div>
                          <div className="mb-2">
                              <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-[#4F454F] m-0 weight-600">
                                Total Certificates: 15
                              </h2>
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
                                  Valid: 9
                                </h2>
                              </div>
                            </div>
                            <div style={{ width: "60%" }}>
                              <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F454F] d-flex justify-end items-end weight-500">
                                Next renewal: ISO 22000 — 18 Jan 2026
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
                                  Expiring: 3
                                </h2>
                              </div>
                            </div>
                            <div style={{ width: "60%" }}>
                              <p class="d-flex justify-end items-end weight-500 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F454F] ">
                                T-SSAl=25Nov2025, GMP - 02 Dec 2025
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
                                  Missing: 2
                                </h2>
                              </div>
                            </div>
                            <div style={{ width: "60%" }}>
                              <p class="d-flex justify-end items-end weight-500 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#4F454F]">
                                (CoA – Product X, Product Y
                              </p>
                            </div>
                          </div>

                          <div
                            className="flex bg-[#EFF6FF] rounded-[10px] w-full  items-center p-[10px] justify-between"
                            style={{ width: "100%" }}
                          >
                            <div>
                              <div className="d-flex mr-[12px] d-flex justify-start items-center weight-500">
                                <div className="mr-[6px]">
                                  {" "}
                                  <img src="/assets/images/icons-images/pendingIcon.svg" />
                                </div>
                                <h2 className="font-medium text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] text-[#4F454F]">
                                  Pending Review: 1
                                </h2>
                              </div>
                            </div>
                          </div>

                          <Progress percent={60} success={{ percent: 30 }} />
                          <div className="d-flex justify-end">
                            <p className="font-medium weight-500 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F454F]">
                              Export License – <br></br>Submitted 5 Sep 2025,
                              <br></br> est. review 20 Sep 2025
                            </p>
                          </div>

                          {/* Capa Request Section */}
                          <div className=" pt-5 border-t border-gray-200">
                            <div className="d-flex justify-between mb-3">
                              <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-[#4F4F4F] weight-600">
                                CAPA Requests
                              </h2>
                              <div>
                                <IconBorder
                                  width="154px"
                                  height="33px"
                                  backgroundColor="#D4183D"
                                  text="Due: 30 Sep 2025"
                                />
                              </div>
                            </div>
                            <div className="d-flex mb-[13px]">
                              <div className="font-medium weight-500 text-sm text-[#4F4F4F] mr-[30px]">
                                2 Open
                              </div>
                              <div className="font-medium weight-500 text-sm text-[#4F4F4F] ">
                                5 Closed
                              </div>
                            </div>
                            <div className="d-flex mb-[40px]">
                              <div className=" mr-[30px]">
                                {" "}
                                <Button
                                  icon={<UploadOutlined />}
                                  fullWidth
                                  textColor="#FFF"
                                  bgColor="#7A1F3D"
                                  fontWeight="600"
                                >
                                  Verified Vendor
                                </Button>
                              </div>
                              <div className="font-medium text-sm text-[#4F4F4F] ">
                                {/* 5 Closed */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
  );
}
