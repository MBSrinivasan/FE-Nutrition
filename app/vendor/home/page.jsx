"use client";
import React from "react";
import { Card } from "@mui/material";

import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";
import { Avatar, Col, Progress, Row } from "antd";
import "./vendorHome.css";
import StarIcon from "@mui/icons-material/Star";
import Button from "@/components/reusableComponents/button/page";
import { MessageOutlined, UploadOutlined } from "@ant-design/icons";
import IconBorder from "@/components/reusableComponents/borderBox/page";
import HighchartsWrapper from "@/components/Charts/HighchartsWrapper";
import EChartsWrapper from "@/components/Charts/EChartsWrapper";

export default function VendorHomePage() {
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


  const funnelOptions =  {
    // title: {
    //   text: 'Funnel'
    // },
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c}%'
    },
    legend: {
      data: ['Show', 'Click', 'Visit', 'Inquiry', 'Order']
    },
    series: [
      {
        name: 'Expected',
        type: 'funnel',
        left: '10%',
        width: '80%',
        label: {
          formatter: '{b}'
        },
        labelLine: {
          show: false
        },
        itemStyle: {
          opacity: 0.7
        },
        emphasis: {
          label: {
            position: 'inside',
            formatter: '{b}Expected: {c}%'
          }
        },
        data: [
          { value: 60, name: 'Visit' },
          { value: 40, name: 'Inquiry' },
          { value: 20, name: 'Order' },
          { value: 80, name: 'Click' },
          { value: 100, name: 'Show' }
        ]
      },
      {
        name: 'Actual',
        type: 'funnel',
        left: '10%',
        width: '80%',
        maxSize: '80%',
        label: {
          position: 'inside',
          formatter: '{c}%',
          color: '#fff'
        },
        itemStyle: {
          opacity: 0.5,
          borderColor: '#fff',
          borderWidth: 2
        },
        emphasis: {
          label: {
            position: 'inside',
            formatter: '{b}Actual: {c}%'
          }
        },
        data: [
          { value: 30, name: 'Visit' },
          { value: 10, name: 'Inquiry' },
          { value: 5, name: 'Order' },
          { value: 50, name: 'Click' },
          { value: 80, name: 'Show' }
        ],
        // Ensure outer shape will not be over inner shape when hover.
        z: 100
      }
    ]
  };

  return (
    <VendorHeaderNav>
      <div className="" style={{ marginTop: "48px", width: "100%" }}>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    border: "1px solid #e0e0e0",
                    marginTop: "10px",
                    backgroundColor: "#FFF5F8",
                    padding: "20px 30px",
                  }}
                >
                  <Row style={{ borderBottom: "1px solid #ADADAD" }}>
                    <Col span={18}>
                      <div className="d-flex mainVendor">
                        <div className="vendorPro">
                          Welcome back, VendorPro Inc.!
                        </div>
                        <div className="d-flex">
                          {" "}
                          <div>
                            {" "}
                            <StarIcon
                              sx={{
                                fontSize: "19px",
                                marginTop: "5px",
                                color: "#FFC107",
                                marginRight: "5px",
                                marginLeft: "5px",
                              }}
                            />{" "}
                          </div>
                          <div className="ratingStar">4.5</div>
                        </div>
                      </div>

                      <div className="overViewText">
                        Here's your vendor performance overview
                      </div>
                      <div className="d-flex mb-[14px]">
                        <div className="verifiedSpace">
                          <Button
                            icon={
                              <img
                                src="/assets/images/icons-images/startWithOutline.svg"
                                alt="icon"
                              />
                            }
                            width="130px"
                            textColor="#1D6630"
                            bgColor="#DBFCE7"
                          >
                            Verified Vendor
                          </Button>
                        </div>
                        <div>
                          <Button
                            width="111px"
                            textColor="#666"
                            bgColor="#F6F6F6"
                          >
                            Standard Plan
                          </Button>
                        </div>
                      </div>
                      <div className="totalProducts mb-[14px]">
                        Total Products: 28 total
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="d-flex justify-content-end align-items-end">
                        <div className="profileCompletion mb-[11px]">
                          Profile Completion: 85%
                        </div>
                        <div></div>
                      </div>
                      <div className="mb-[10px] d-flex justify-content-end align-items-end">
                        {" "}
                        <Progress
                          percent={60}
                          percentPosition={{ align: "end", type: "inner" }}
                          size={[300, 20]}
                          strokeColor="#7A1F3D"
                          style={{
                            display: "flex",
                            justifyContent: "end",
                            alignItems: "end",
                          }}
                        />
                      </div>
                      <div className="uploadText d-flex justify-content-end align-items-end mb-[15px]">
                        Upload CoA to reach 90% - 3x more leads
                      </div>
                      <div className=" d-flex justify-content-end align-items-end mb-[15px]">
                        <Button
                          icon={<UploadOutlined />}
                          width="130px"
                          textColor="#FFF"
                          bgColor="#7A1F3D"
                          fontWeight="600"
                        >
                          Verified Vendor
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row>
                    <Col span={18}>
                      <div className="mt-[18px] d-flex ">
                        <div className="d-flex mr-[12px]">
                          <div className="mr-[6px]">
                            {" "}
                            <img src="/assets/images/icons-images/tickIcon.svg" />
                          </div>
                          <div className="iconTextCheck">Verified: 20</div>
                        </div>
                        <div className="d-flex mr-[12px]">
                          <div className="mr-[6px]">
                            {" "}
                            <img src="/assets/images/icons-images/pendingIcon.svg" />
                          </div>
                          <div className="iconTextCheck">Pending: 20</div>
                        </div>
                        <div className="d-flex mr-[12px]">
                          <div className="mr-[6px]">
                            {" "}
                            <img src="/assets/images/icons-images/dangerIcon.svg" />
                          </div>
                          <div className="iconTextCheck">Incomplete: 20</div>
                        </div>
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="mt-[18px] d-flex totalVerification justify-content-end align-items-end">
                        Next Verification Due: 12 Oct 2025
                      </div>
                    </Col>
                  </Row>
                </Card>
              </div>
              <div class="col-3">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: "18px",
                    border: "1px solid #E5E5E5",
                    marginTop: "10px",
                    backgroundColor: "#FFF",
                    padding: "20px",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "16px",
                    }}
                  >
                    <img
                      src="/assets/images/icons-images/alertIcon.svg"
                      alt="Alert Icon"
                      style={{
                        width: "20px",
                        height: "20px",
                        marginRight: "8px",
                      }}
                    />
                    <h3
                      style={{
                        margin: 0,
                        fontSize: "16px",
                        fontWeight: "600",
                        color: "#4F454F",
                      }}
                    >
                      Quick Alerts
                    </h3>
                  </div>
                  <div class="border-b border-[#ADADAD]"></div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: "8px",
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#FB2C36",
                          marginRight: "8px",
                        }}
                      ></div>
                      <span style={{ fontSize: "14px", color: "#000" }}>
                        2 Pending Quotes
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#FE9A00",
                          marginRight: "8px",
                        }}
                      ></div>
                      <span style={{ fontSize: "14px", color: "#000" }}>
                        1 Payment Due
                      </span>
                    </div>

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          backgroundColor: "#FE9A00",
                          marginRight: "8px",
                        }}
                      ></div>
                      <span style={{ fontSize: "14px", color: "#000" }}>
                        Certificate Renewal
                      </span>
                    </div>
                  </div>
                </Card>
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
                          style={{ height: "25%" }}
                        >
                          <div
                            className="d-flex flex-col justify-between"
                            style={{ height: "100%" }}
                          >
                            <div>
                              <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-bold">
                                Compliance Tracker
                              </h1>
                            </div>
                            <div>
                              <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-[#4F454F] m-0 weight-600">
                                Total Certificates: 15
                              </h2>
                            </div>
                          </div>
                          <div
                            className="relative flex items-center justify-center"
                            style={{ height: "100%" }}
                          >
                            <HighchartsWrapper
                              options={donutChartOptions}
                              type="pie"
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-[#4F454F]">
                              78%
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
                                  width="130px"
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
                    </div>
                    <div class="col-6">
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
                          <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-bold weight-600">
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
            sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] p-2 rounded h-[40px]"
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
            sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] p-2 rounded h-[40px]"
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
            sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] p-2 rounded h-[40px]"
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
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <div
                  className="d-flex flex-col gap-4"
                  style={{ height: "100%" }}
                >
                  <div style={{ height: "30%" }}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 5,
                        border: "1px solid #e0e0e0",
                        marginTop: "10px",
                        backgroundColor: "#FFF",
                        padding: "20px 17px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "16px",
                        }}
                      >
                        <img
                          src="/assets/images/icons-images/alertIcon.svg"
                          alt="Alert Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                        />
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#4F454F",
                          }}
                        >
                          Quick Supports
                        </h3>
                      </div>
                      <div class="border-b border-[#ADADAD] mb-[20px]"></div>
                      <div className="d-flex gap-2 mb-[20px]">
                        <div className="">
                          <Avatar
                            style={{
                              backgroundColor: "#7A1F3D",
                              verticalAlign: "middle",
                            }}
                            size="large"
                            gap={2}
                          >
                            CS
                          </Avatar>
                        </div>
                        <div className="">
                          <div>
                            <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0">
                              Customer Support
                            </p>
                          </div>
                          <div>
                            <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0">
                              Usually reposnd in 2-3 hours
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="border border-[#E5E5E5] w-full p-2 rounded-sm d-flex justify-center items-center text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] mb-[10px]">
                        <MessageOutlined style={{ marginRight: "5px" }} /> Start
                        Chat
                      </div>
                      <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-center items-center">
                        Or Call: +987654321
                      </p>
                    </Card>
                  </div>
                  <div style={{ height: "70%" }}>
                    <Card
                      sx={{
                        height: "100%",
                        borderRadius: 5,
                        border: "1px solid #e0e0e0",
                        marginTop: "10px",
                        backgroundColor: "#FFF",
                        padding: "20px 17px",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          marginBottom: "16px",
                        }}
                      >
                        <img
                          src="/assets/images/icons-images/alertIcon.svg"
                          alt="Alert Icon"
                          style={{
                            width: "20px",
                            height: "20px",
                            marginRight: "8px",
                          }}
                        />
                        <h3
                          style={{
                            margin: 0,
                            fontSize: "16px",
                            fontWeight: "600",
                            color: "#4F454F",
                          }}
                        >
                          Knowledge Hub Highlights
                        </h3>
                      </div>
                      <div class="border-b border-[#ADADAD] mb-[20px]"></div>
                      <div className="mb-[10px]">
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-600 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Latest FDA Guidance
                        </p>
                        <p className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] weight-400 text-[#4F4F4F] m-0 d-flex justify-start items-start mb-[10px]">
                          Updated supplement labeling requirements for 2024
                        </p>
                       
                      </div>
                    </Card>
                  </div>
                </div>
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
                          className="container-fluid"
                          style={{ padding: "0" }}
                        >
                          <div className="row">
                            <div className="col-12">
                              <div
                                className="card border-0"
                                style={{
                                  borderRadius: "18px",
                                  backgroundColor: "#FFFFFF",
                                  border: "1px solid #E5E5E5",
                                }}
                              >
                                {/* <div className="card-body p-3"> */}

                                {/* Header */}
                                <div className="text-start mb-3">
                                  <h2
                                    className="mb-0"
                                    style={{
                                      color: "#4F4F4F",
                                      fontSize: "16px",
                                      fontWeight: "400",
                                    }}
                                  >
                                    Projects & Oversight
                                  </h2>
                                </div>

                                {/* Active Projects Section */}
                                <div className="mb-3">
                                  <h5
                                    className="mb-2"
                                    style={{
                                      color: "#4F4F4F",
                                      fontSize: "14px",
                                      fontWeight: "600",
                                    }}
                                  >
                                    Active Projects
                                  </h5>

                                  {/* Metrics Row */}
                                  <div className="row mb-3">
                                    <div className="col-3 text-center">
                                      <div
                                        style={{
                                          fontSize: "20px",
                                          fontWeight: "600",
                                          color: "#7A1F3D",
                                        }}
                                      >
                                        22
                                      </div>
                                      <div
                                        style={{
                                          fontSize: "14px",
                                          color: "#4F4F4F",
                                        }}
                                      >
                                        Total
                                      </div>
                                    </div>
                                    <div className="col-3 text-center">
                                      <div
                                        style={{
                                          fontSize: "20px",
                                          fontWeight: "600",
                                          color: "#155DFC",
                                        }}
                                      >
                                        8
                                      </div>
                                      <div
                                        style={{
                                          fontSize: "14px",
                                          color: "#4F4F4F",
                                        }}
                                      >
                                        Outgoing
                                      </div>
                                    </div>
                                    <div className="col-3 text-center">
                                      <div
                                        style={{
                                          fontSize: "20px",
                                          fontWeight: "600",
                                          color: "#16A63E",
                                        }}
                                      >
                                        10
                                      </div>
                                      <div
                                        style={{
                                          fontSize: "14px",
                                          color: "#4F4F4F",
                                        }}
                                      >
                                        Completed
                                      </div>
                                    </div>
                                    <div className="col-3 text-center">
                                      <div
                                        style={{
                                          fontSize: "20px",
                                          fontWeight: "600",
                                          color: "#E17100",
                                        }}
                                      >
                                        4
                                      </div>
                                      <div
                                        style={{
                                          fontSize: "14px",
                                          color: "#4F4F4F",
                                        }}
                                      >
                                        Under Review
                                      </div>
                                    </div>
                                  </div>

                                  {/* Project Card */}
                                  <div
                                    className="p-2 rounded"
                                    style={{
                                      backgroundColor: "#EFF6FF",
                                      border: "1px solid #BEDBFF",
                                      borderRadius: "6px",
                                    }}
                                  >
                                    <div className="d-flex justify-content-between align-items-start mb-1">
                                      <h6
                                        className="mb-0"
                                        style={{
                                          color: "#4F4F4F",
                                          fontSize: "14px",
                                          fontWeight: "600",
                                        }}
                                      >
                                        Nutra Capsules Project
                                      </h6>
                                      <small
                                        className="px-2 py-1 rounded"
                                        style={{
                                          color: "#4F4F4F",
                                          fontSize: "10px",
                                          fontWeight: "500",
                                          backgroundColor: "#ECEEF2",
                                          borderRadius: "6px",
                                        }}
                                      >
                                        Due: 05 Oct 2025
                                      </small>
                                    </div>
                                    <div
                                      className="d-flex align-items-center"
                                      style={{ gap: "10px" }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#4F4F4F",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        Phase 4/5
                                      </span>
                                      <div className="flex-grow-1">
                                        <div
                                          className="progress"
                                          style={{
                                            height: "6px",
                                            borderRadius: "15px",
                                            backgroundColor: "#D7CBD8",
                                          }}
                                        >
                                          <div
                                            className="progress-bar"
                                            style={{
                                              width: "80%",
                                              backgroundColor: "#7A1F3D",
                                              borderRadius: "15px 0 0 15px",
                                            }}
                                          ></div>
                                        </div>
                                      </div>
                                      <span
                                        style={{
                                          fontSize: "12px",
                                          fontWeight: "600",
                                          color: "#4F4F4F",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        80%
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <hr />

                                {/* Oversight & Escalations Section */}
                                <div className="mb-3">
                                  <div className="d-flex align-items-center mb-1">
                                    <div
                                      className="me-2 d-flex align-items-center"
                                      style={{ width: "13px", height: "11px" }}
                                    >
                                      <svg
                                        width="13"
                                        height="11"
                                        viewBox="0 0 13 11"
                                        fill="none"
                                      >
                                        <path
                                          d="M6.5 0L12.5 10H0.5L6.5 0Z"
                                          stroke="#FB2C36"
                                          strokeWidth="1"
                                          fill="white"
                                        />
                                        <text
                                          x="6.5"
                                          y="8"
                                          textAnchor="middle"
                                          fontSize="6"
                                          fill="#FB2C36"
                                          fontWeight="bold"
                                        >
                                          !
                                        </text>
                                      </svg>
                                    </div>
                                    <h5
                                      className="mb-0"
                                      style={{
                                        color: "#4F4F4F",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      Oversight & Escalations
                                    </h5>
                                  </div>
                                  <div className="mb-2">
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        fontWeight: "600",
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      Issues: 3
                                    </span>
                                    <span
                                      style={{
                                        fontSize: "12px",
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      {" "}
                                      (2 Q Fails), 1 Delay)
                                    </span>
                                  </div>

                                  {/* Issue Cards */}
                                  <div className="mb-2">
                                    <div
                                      className="p-2 rounded d-flex align-items-center justify-content-between"
                                      style={{
                                        backgroundColor: "#FEF2F2",
                                        borderRadius: "6px",
                                      }}
                                    >
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="me-2"
                                          style={{
                                            width: "7px",
                                            height: "7px",
                                            backgroundColor: "#FB2C36",
                                            borderRadius: "50%",
                                          }}
                                        ></div>
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            fontWeight: "600",
                                            color: "#4F4F4F",
                                          }}
                                        >
                                          QC Fail (Batch 123)
                                        </span>
                                      </div>
                                      <div
                                        className="px-2 py-0.2 rounded"
                                        style={{
                                          backgroundColor: "#D4183D",
                                          borderRadius: "6px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            fontWeight: "500",
                                            color: "#FFFFFF",
                                          }}
                                        >
                                          Deadline: 22 Sep 2025
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div>
                                    <div
                                      className="p-2 rounded d-flex align-items-center justify-content-between"
                                      style={{
                                        backgroundColor: "#FFFBEB",
                                        borderRadius: "6px",
                                      }}
                                    >
                                      <div className="d-flex align-items-center">
                                        <div
                                          className="me-2"
                                          style={{
                                            width: "7px",
                                            height: "7px",
                                            backgroundColor: "#FE9A00",
                                            borderRadius: "50%",
                                          }}
                                        ></div>
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            fontWeight: "600",
                                            color: "#4F4F4F",
                                          }}
                                        >
                                          Delivery Delay (Client Z)
                                        </span>
                                      </div>
                                      <div
                                        className="px-2 py-0.2 rounded"
                                        style={{
                                          backgroundColor: "#ECEEF2",
                                          borderRadius: "6px",
                                        }}
                                      >
                                        <span
                                          style={{
                                            fontSize: "10px",
                                            fontWeight: "500",
                                            color: "#4F4F4F",
                                          }}
                                        >
                                          New ETA: 01 Oct 2025
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <hr />
                                {/* CAPA Requests Section */}
                                <div className="mb-3">
                                  <div className="d-flex justify-content-between align-items-center mb-1">
                                    <h5
                                      className="mb-0"
                                      style={{
                                        color: "#4F4F4F",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      CAPA Requests
                                    </h5>
                                    <div
                                      className="px-2 rounded"
                                      style={{
                                        backgroundColor: "#D4183D",
                                        borderRadius: "6px",
                                        marginTop: "5px",
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "10px",
                                          fontWeight: "500",
                                          color: "#FFFFFF",
                                        }}
                                      >
                                        2 Open
                                      </span>
                                    </div>
                                  </div>
                                  <p
                                    className="mb-0"
                                    style={{
                                      fontSize: "12px",
                                      color: "#4F4F4F",
                                    }}
                                  >
                                    Due: 30 Sep 2025
                                  </p>
                                </div>
                                <hr />
                                {/* Communication Center Section */}
                                <div>
                                  <div className="d-flex align-items-center mb-2">
                                    <div
                                      className="me-2"
                                      style={{
                                        width: "16px",
                                        height: "16px",
                                        transform: "translateY(-3px)",
                                      }}
                                    >
                                      <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                      >
                                        <path
                                          d="M14 2C14 0.9 13.1 0 12 0H4C2.9 0 2 0.9 2 2V8C2 9.1 2.9 10 4 10H10L14 14V2Z"
                                          stroke="#7A1F3D"
                                          strokeWidth="1.5"
                                          fill="none"
                                          rx="2"
                                        />
                                      </svg>
                                    </div>
                                    <h5
                                      className="mb-0"
                                      style={{
                                        color: "#4F4F4F",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                      }}
                                    >
                                      Communication Center
                                    </h5>
                                  </div>
                                  <div
                                    className="p-2 rounded"
                                    style={{
                                      backgroundColor: "#F5F6F7",
                                      borderRadius: "6px",
                                    }}
                                  >
                                    <p
                                      className="mb-1"
                                      style={{
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      Active Threads: 5
                                    </p>
                                    <p
                                      className="mb-1"
                                      style={{
                                        fontSize: "12px",
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      Example: "Client A — Label approval
                                      pending"
                                    </p>
                                    <div className="d-flex align-items-center">
                                      <svg
                                        width="13"
                                        height="13"
                                        viewBox="0 0 11 11"
                                        fill="none"
                                        style={{ paddingRight: "3px" }}
                                      >
                                        <circle
                                          cx="5.5"
                                          cy="5.5"
                                          r="4.5"
                                          stroke="#FE9A00"
                                          strokeWidth="1"
                                          fill="none"
                                        />
                                        <path
                                          d="M5.5 3V5.5L7.5 7.5"
                                          stroke="#FE9A00"
                                          strokeWidth="1"
                                          strokeLinecap="round"
                                        />
                                        <circle
                                          cx="5.5"
                                          cy="5.5"
                                          r="0.5"
                                          fill="#FE9A00"
                                        />
                                      </svg>

                                      <span
                                        style={{
                                          fontSize: "12px",
                                          color: "#FE9A00",
                                        }}
                                      >
                                        Response Due: 24 sep 2025
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* </div> */}
                          </div>
                        </div>

                        {/* first second sarvesh */}
                      </Card>
                    </div>
                    <div class="col-6">
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
                        <style
                          dangerouslySetInnerHTML={{
                            __html: `
        .dashboard-card {
          width: 100%;
          // min-height: 695px;
          border-radius: 18px;
          background: #FFFFFF;
          // padding: 12px;
          // box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          overflow: visible;
          position: relative;
        }
        
        @media (max-width: 576px) {
          .dashboard-card {
            padding: 10px;
          }
        }
        
        .payments-title {
          margin-bottom: 16px;
        }
        
        .payments-title h2 {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 18px;
          line-height: 1.2;
          color: #1F2937;
          margin: 0;
          position: relative;
          bottom: 25px;
        }
        
        @media (max-width: 576px) {
          .payments-title h2 {
            font-size: 16px;
          }
        }
        
       
        
        .donut-chart {
          width: 120px;
          height: 120px;
          position: relative;
        }
        
        @media (max-width: 576px) {
          .donut-chart {
            width: 100px;
            height: 100px;
          }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
          .donut-chart {
            width: 110px;
            height: 110px;
          }
        }
        
        .donut-chart svg {
          width: 100%;
          height: 100%;
          transform: rotate(-90deg);
        }
        
        .donut-center {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          text-align: center;
        }
        
        .total-amount {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 18px;
          line-height: 1.2;
          color: #7A1F3D;
          margin: 0;
        }
        
        .total-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 1.2;
          color: #6B7280;
          margin: 0;
        }
        
        .financial-item {
          border-radius: 8px;
          padding: 6px 10px;
          margin-bottom: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          min-height: 32px;
        }
        
        @media (max-width: 576px) {
          .financial-item {
            padding: 4px 8px;
            min-height: 28px;
          }
        }
        
        .financial-item:last-child {
          margin-bottom: 0;
        }
        
        .financial-item.received {
          background: #F0FDF4;
        }
        
        .financial-item.pending {
          background: #FFFBEB;
        }
        
        .financial-item.overdue {
          background: #FEF2F2;
        }
        
        .financial-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .financial-icon {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
        }
        
        .financial-icon.received {
          background: #16A34A;
          color: white;
        }
        
        .financial-icon.pending {
          background: #EA580C;
          color: white;
        }
        
        .financial-icon.overdue {
          background: #DC2626;
          color: white;
        }
        
        .financial-content {
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          text-align: right;
        }
        
        .financial-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 1.2;
          color: #4F4F4F;
          margin: 0 0 4px 0;
        }
        
        .financial-amount {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.2;
          margin: 0 0 4px 0;
        }
        
        .financial-amount.received {
          color: #16A34A;
        }
        
        .financial-amount.pending {
          color: #EA580C;
        }
        
        .financial-amount.overdue {
          color: #DC2626;
        }
        
        .financial-detail {
          font-family: 'Montserrat', sans-serif;
          font-weight: 400;
          font-size: 12px;
          line-height: 1.2;
          margin: 0;
        }
        
        .financial-detail.received {
          color: #16A34A;
        }
        
        .financial-detail.pending {
          color: #EA580C;
        }
        
        .financial-detail.overdue {
          color: #DC2626;
        }
        
        .divider-line {
          width: 100%;
          height: 1px;
          background: #E5E5E5;
          margin: 25px 0;
        }
        
        .section-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 14px;
          line-height: 100%;
          letter-spacing: 0px;
          text-align: left;
          color: #4F4F4F;
          margin: 20px 0 15px 0;
        }
        
        .transaction-item {
          background: #F8F9FA;
          border-radius: 8px;
          padding: 8px 10px;
          margin-bottom: 6px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        @media (max-width: 576px) {
          .transaction-item {
            padding: 6px 8px;
            margin-bottom: 4px;
          }
        }
        
        .transaction-item:last-child {
          margin-bottom: 0;
        }
        
        .transaction-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        
        .status-dot.paid {
          background: #016630;

        }
        
        .status-dot.pending {
          background: #FE9A00;

        }
        
        .transaction-details {
          display: flex;
          flex-direction: column;
        }
        
        .transaction-amount {
          width: 127px;
          height: 13px;
          flex-shrink: 0;
          color: #4F4F4F;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          letter-spacing: 0.48px;
          margin: 0 0 4px 0;
        }
        
        .transaction-date {
          width: 90px;
          height: 13px;
          flex-shrink: 0;
          color: #4F4F4F;
          font-family: 'Montserrat', sans-serif;
          font-size: 12px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.48px;
          margin: 0;
        }
        
        .status-badge {
          padding: 6px 12px;
          border-radius: 20px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 12px;
          line-height: 1.2;
        }
        
        .status-badge.paid {
          color: #DBFCE7;
          background: #016630;

        }
        
        .status-badge.pending {
          background: #F3F4F6;
          color: #6B7280;
        }
        
        .performance-section {
          position: relative;
          top: 5px;
        }
        
        .performance-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 11px;
          margin-top: 15px;
        }
        
        .performance-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 16px;
          line-height: 1.2;
          color: #4F4F4F;
          margin: 0;
        }
        
        .performance-icon {
          width: 16px;
          height: 16px;
          fill: #7A1F3D;
        }
        
        .kpi-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 6px;
          margin-bottom: 8px;
        }
        
        @media (max-width: 576px) {
          .kpi-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 4px;
          }
        }
        
        @media (min-width: 577px) and (max-width: 768px) {
          .kpi-grid {
            gap: 4px;
          }
        }
        
        .kpi-item {
          text-align: center;
          padding: 6px;
          background: transparent;
        }
        
        @media (max-width: 576px) {
          .kpi-item {
            padding: 4px;
          }
        }
        
        .kpi-value {
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          line-height: 1.2;
          margin: 0 0 2px 0;
        }
        
        @media (max-width: 576px) {
          .kpi-value {
            font-size: 14px;
          }
        }
        
        .kpi-value.conversion {
          color: #7A1F3D;
        }
        
        .kpi-value.response {
          color: #2563EB;
        }
        
        .kpi-value.delivery {
          color: #16A34A;
        }
        
        .kpi-value.compliance {
          color: #EA580C;
        }
        
        .kpi-label {
          font-family: 'Montserrat', sans-serif;
          font-weight: 500;
          font-size: 12px;
          line-height: 1.2;
          color: #6B7280;
          margin: 0;
        }
        
        .vendor-rank-card {
          background: #F1E8EB;
          border-radius: 10px;
          padding: 8px;
          text-align: left;
          position: relative;
          top: 20px; /* Pushes the card down visually without affecting its height or content */
        }
        
        @media (max-width: 576px) {
          .vendor-rank-card {
            padding: 6px;
          }
        }
        
        .vendor-rank-title {
          font-family: 'Montserrat', sans-serif;
          font-weight: 600;
          font-size: 12px;
          line-height: 100%;
          color: #7A1F3D;
          margin: 0 0 8px 0;
          width: 81px;
          height: 15px;
          letter-spacing: 0px;
          text-align: center;
        }
        
        .vendor-rank-desc {
          color: #4F4F4F;
          text-align: center;
          font-family: 'Montserrat', sans-serif;
          font-size: 11px;
          font-style: normal;
          font-weight: 500;
          line-height: 100%;
          letter-spacing: 0px;
          width: 130px;
          height: 13px;
          margin: 0;
        }
      `,
                          }}
                        />

                        <div className="container-fluid py-4">
                          <div className="row">
                            <div className="col-12">
                              <div className="dashboard-card">
                                {/* Payments Overview Title */}
                                <div className="payments-title">
                                  <h2>Payments Overview</h2>
                                </div>

                                <div className="row align-items-center">
                                  {/* Left Side - Donut Chart */}
                                  <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
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
                                        <div className="total-amount">
                                          3.4 Cr
                                        </div>
                                        <div className="total-label">
                                          Total Value
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right Side - Financial Breakdown */}
                                  <div className="col-12 col-md-6">
                                    {/* Received */}
                                    <div className="financial-item received">
                                      <div className="financial-left">
                                        <div className="financial-icon received">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                          >
                                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                                          </svg>
                                        </div>
                                        <div className="financial-label">
                                          Received
                                        </div>
                                      </div>
                                      <div className="financial-content">
                                        <div className="financial-amount received">
                                          ₹2.1 Cr
                                        </div>
                                      </div>
                                    </div>

                                    {/* Pending */}
                                    <div className="financial-item pending">
                                      <div className="financial-left">
                                        <div className="financial-icon pending">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                          >
                                            <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.2 16.2L11 13v-6h2v5.2l4.2 4.2-1.4 1.4z" />
                                          </svg>
                                        </div>
                                        <div className="financial-label">
                                          Pending
                                        </div>
                                      </div>
                                      <div className="financial-content">
                                        <div className="financial-amount pending">
                                          ₹1.0 Cr
                                        </div>
                                        <div className="financial-detail pending">
                                          Next Due: 27 Sep 2025
                                        </div>
                                      </div>
                                    </div>

                                    {/* Overdue */}
                                    <div className="financial-item overdue">
                                      <div className="financial-left">
                                        <div className="financial-icon overdue">
                                          <svg
                                            width="16"
                                            height="16"
                                            viewBox="0 0 24 24"
                                            fill="currentColor"
                                          >
                                            <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z" />
                                          </svg>
                                        </div>
                                        <div className="financial-label">
                                          Overdue
                                        </div>
                                      </div>
                                      <div className="financial-content">
                                        <div className="financial-amount overdue">
                                          ₹0.3 Cr
                                        </div>
                                        <div className="financial-detail overdue">
                                          Invoice #456-Due 10 Sep
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>

                                {/* Divider Line */}
                                <div className="divider-line"></div>

                                {/* Recent Transactions Section */}
                                <div>
                                  <h3 className="section-title">
                                    Recent Transactions
                                  </h3>

                                  {/* Transaction 1 - Paid */}
                                  <div className="transaction-item">
                                    <div className="transaction-left">
                                      <div className="status-dot paid"></div>
                                      <div className="transaction-details">
                                        <div className="transaction-amount">
                                          50,000 - Client X
                                        </div>
                                        <div className="transaction-date">
                                          20 Sep 2025
                                        </div>
                                      </div>
                                    </div>
                                    <div className="status-badge paid">
                                      Paid
                                    </div>
                                  </div>

                                  {/* Transaction 2 - Pending */}
                                  <div className="transaction-item">
                                    <div className="transaction-left">
                                      <div className="status-dot pending"></div>
                                      <div className="transaction-details">
                                        <div className="transaction-amount">
                                          2,10,000 - Client Y
                                        </div>
                                        <div className="transaction-date">
                                          18 Sep 2025
                                        </div>
                                      </div>
                                    </div>
                                    <div className="status-badge pending">
                                      Pending (Due 25 Sep)
                                    </div>
                                  </div>
                                </div>

                                {/* Divider Line */}
                                <div className="divider-line"></div>

                                {/* Performance Dashboard Section */}
                                <div className="performance-section">
                                  <div className="performance-header">
                                    <svg
                                      className="performance-icon"
                                      viewBox="0 0 24 24"
                                    >
                                      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
                                    </svg>
                                    <h3 className="performance-title">
                                      Performance Dashboard
                                    </h3>
                                  </div>

                                  <div className="kpi-grid">
                                    <div className="kpi-item">
                                      <div className="kpi-value conversion">
                                        25%
                                      </div>
                                      <div className="kpi-label">
                                        Conversion Rate
                                      </div>
                                    </div>

                                    <div className="kpi-item">
                                      <div className="kpi-value response">
                                        1.8d
                                      </div>
                                      <div className="kpi-label">
                                        Avg Response Time
                                      </div>
                                    </div>

                                    <div className="kpi-item">
                                      <div className="kpi-value delivery">
                                        90%
                                      </div>
                                      <div className="kpi-label">
                                        On-Time Delivery
                                      </div>
                                    </div>

                                    <div className="kpi-item">
                                      <div className="kpi-value compliance">
                                        78%
                                      </div>
                                      <div className="kpi-label">
                                        Compliance Health
                                      </div>
                                    </div>
                                  </div>

                                  <div className="vendor-rank-card">
                                    <div className="vendor-rank-title">
                                      Vendor Rank
                                    </div>
                                    <div className="vendor-rank-desc">
                                      Top 25% Nutra Suppliers
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
              <div className="d-flex flex-column gap-4 py-4" style={{ maxWidth: '400px', margin: '0 auto' }}>
      {/* Vendor Rating Card */}
      <div className="card border-0 shadow-sm" style={{ borderRadius: '18px' }}>
        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex align-items-center mb-3">
            <svg 
              width="17" 
              height="16" 
              viewBox="0 0 17 16" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="me-2"
            >
              <path 
                d="M8.2 1.5L9.8 5.8L14.5 6.2L11.2 9.2L12.1 13.8L8.2 11.5L4.3 13.8L5.2 9.2L1.9 6.2L6.6 5.8L8.2 1.5Z" 
                stroke="#7A1F3D"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <h5 className="mb-0 fw-semibold" style={{ color: '#4F4F4F', fontSize: '14px' }}>
              Vendor Rating
            </h5>
          </div>
          
          {/* Divider */}
          <hr className="my-3" style={{ borderColor: '#ADADAD', opacity: '0.5' }} />
          
          {/* Rating Content */}
          <div className="text-center">
            {/* Rating Number */}
            <div className="mb-2">
              <h2 className="fw-bold mb-0" style={{ color: '#4F4F4F', fontSize: '40px' }}>
                4.8
              </h2>
            </div>
            
            {/* Star Rating */}
            <div className="mb-2">
              <div className="d-flex justify-content-center align-items-center">
                {[...Array(5)].map((_, index) => (
                  <svg
                    key={index}
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="me-1"
                  >
                    <path
                      d="M7.5 0L9.191 5.527H15L10.405 8.946L12.096 14.473L7.5 11.054L2.904 14.473L4.595 8.946L0 5.527H5.809L7.5 0Z"
                      fill={index < 4 ? "#FDC700" : "none"}
                      stroke={index >= 4 ? "#979797" : "none"}
                      strokeWidth="1"
                    />
                  </svg>
                ))}
              </div>
            </div>
            
            {/* Review Count */}
            <p className="mb-4" style={{ color: '#4F4F4F', fontSize: '12px', marginBottom: '15px' }}>
              Based on 47 reviews
            </p>
            
            {/* View Reviews Button */}
            <button 
              className="btn btn-outline-secondary px-4 py-2"
              style={{ 
                borderColor: '#B8B8B8', 
                color: '#7A1F3D',
                borderRadius: '5px',
                fontSize: '12px',
                fontWeight: '600'
              }}
            >
              View Reviews
            </button>
          </div>
        </div>
      </div>

      {/* Marketplace Spotlight Card */}
      <div className="card border-0 shadow-sm" style={{ borderRadius: '18px' }}>
        <div className="card-body p-4">
          {/* Header */}
          <div className="d-flex align-items-center mb-3">
            <svg 
              width="21" 
              height="15" 
              viewBox="0 0 21 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="me-3"
            >
              <path 
                d="M2 12L7 7L10 10L19 1" 
                stroke="#7A1F3D"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
              <path 
                d="M15 1H19V5" 
                stroke="#7A1F3D"
                strokeWidth="2"
                fill="none"
                strokeLinejoin="round"
                strokeLinecap="round"
              />
            </svg>
            <h5 
              className="mb-0 fw-semibold" 
              style={{ 
                color: '#4F4F4F', 
                fontSize: '14px',
                width: '172px',
                height: '17px',
                lineHeight: '17px'
              }}
            >
              Marketplace Spotlight
            </h5>
          </div>
          
          {/* Divider */}
          <hr className="my-3" style={{ borderColor: '#ADADAD', opacity: '0.5' }} />
          
          {/* Content */}
          <div>
            {/* Top 5 Active RFPs */}
            <h6 className="fw-semibold mb-2" style={{ color: '#4F4F4F', fontSize: '12px' }}>
              Top 5 Active RFPs
            </h6>
            
            {/* Subtitle */}
            <p className="mb-4" style={{ color: '#4F4F4F', fontSize: '12px' }}>
              Projects you may qualify for:
            </p>
            
            {/* RFP Listings */}
            <div className="mb-4">
              {/* RFP 1 */}
              <div className="card mb-3" style={{ 
                backgroundColor: '#FFFFFF', 
                borderRadius: '10px',
                width: '279px',
                height: '84px',
                border: '1px solid #E5E5E5'
              }}>
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <h6 className="fw-semibold mb-1" style={{ color: '#4F4F4F', fontSize: '12px' }}>
                        Organic Protein Manufacturing
                      </h6>
                      <p className="mb-0" style={{ color: '#4F4F4F', fontSize: '12px' }}>
                        Budget: $50K-100K
                      </p>
                    </div>
                    <span 
                      className="badge rounded-pill px-2 py-1"
                      style={{ 
                        backgroundColor: '#ECEEF2', 
                        color: '#4F4F4F',
                        fontSize: '10px',
                        fontWeight: '600'
                      }}
                    >
                      New
                    </span>
                  </div>
                </div>
              </div>
              
              {/* RFP 2 */}
              <div className="card mb-3" style={{ 
                backgroundColor: '#FFFFFF', 
                borderRadius: '10px',
                width: '279px',
                height: '81px',
                border: '1px solid #E5E5E5'
              }}>
                <div className="card-body p-3">
                  <div className="d-flex justify-content-between align-items-start">
                    <div className="flex-grow-1">
                      <h6 className="fw-semibold mb-1" style={{ color: '#4F4F4F', fontSize: '12px' }}>
                        Supplement Packaging Services
                      </h6>
                      <p className="mb-0" style={{ color: '#4F4F4F', fontSize: '12px' }}>
                        Budget: $20K-50K
                      </p>
                    </div>
                    <span 
                      className="badge rounded-pill px-2 py-1"
                      style={{ 
                        backgroundColor: '#DBFCE7', 
                        color: '#016630',
                        fontSize: '10px',
                        fontWeight: '600'
                      }}
                    >
                      Trending
                    </span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* View all RFPs Button */}
            <div className="text-center">
              <button 
                className="btn btn-link p-0 text-decoration-none"
                style={{ 
                  color: '#7A1F3D',
                  fontSize: '12px',
                  fontWeight: '600',
                  fontFamily: 'Montserrat',
                  width: '89px',
                  height: '15px',
                  lineHeight: '100%',
                  letterSpacing: '4%',
                  textDecoration: 'underline',
                  textDecorationStyle: 'solid',
                  textDecorationThickness: '1px',
                  background: 'transparent'
                }}
              >
                View all RFPs
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
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
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 5,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {/* Beetloop Intelligence Shortcut */}
                        <div className="text-start mb-4">
                          <span
                            className="fs-4 mr-50"
                            style={{ color: "#555" }}
                          >
                            Beetloop Intelligence Shortcut
                          </span>
                        </div>
                        <div className="row g-3">
                          <div className="col-12 col-md-6">
                            <div
                              className="p-3 rounded"
                              style={{
                                background: "#E8FBF1",
                                minHeight: "100px",
                              }}
                            >
                              <div className="d-flex align-items-start mb-1">
                                <svg
                                  className="me-2"
                                  width="22"
                                  height="20"
                                  viewBox="0 0 32 22"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                  }}
                                >
                                  <polyline
                                    points="2,20 12,10 20,16 30,6"
                                    fill="none"
                                    stroke="#1DB96B"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                  />
                                  <polyline
                                    points="25,6 30,6 30,11"
                                    fill="none"
                                    stroke="#1DB96B"
                                    strokeWidth="3"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                  />
                                </svg>
                                <span
                                  className="fw-semibold"
                                  style={{ fontSize: "1.1rem" }}
                                >
                                  Trending <br /> Ingredient:
                                  <br />
                                  Collagen
                                </span>
                              </div>
                              <div
                                style={{
                                  color: "grey",
                                  fontSize: "0.95rem",
                                  marginLeft: "27px",
                                }}
                              >
                                +18% YoY growth
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div
                              className="p-3 rounded"
                              style={{
                                background: "#EAF3FE",
                                minHeight: "100px",
                              }}
                            >
                              <div className="d-flex align-items-start mb-2">
                                <span
                                  className="me-2"
                                  style={{
                                    fontSize: "1.5rem",
                                    color: "#3B82F6",
                                  }}
                                >
                                  ℹ️
                                </span>
                                <span
                                  className="fw-semibold"
                                  style={{ fontSize: "1.1rem" }}
                                >
                                  Safe Dosage: EFSA Collagen
                                </span>
                              </div>
                              <div
                                style={{
                                  color: "grey",
                                  fontSize: "0.95rem",
                                  marginLeft: "40px",
                                }}
                              >
                                10 g/day <br /> recommended
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div
                              className="p-3 rounded"
                              style={{
                                background: "#FFF7E2",
                                minHeight: "100px",
                              }}
                            >
                              <div className="d-flex align-items-start mb-2">
                                <span
                                  className="me-2"
                                  style={{
                                    fontSize: "1.5rem",
                                    color: "#F59E42",
                                  }}
                                >
                                  ⚠️
                                </span>
                                <span
                                  className="fw-semibold"
                                  style={{ fontSize: "1.1rem" }}
                                >
                                  Regulatory Alert:
                                  <br />
                                  Nisin Approval
                                </span>
                              </div>
                              <div
                                style={{
                                  color: "grey",
                                  fontSize: "0.95rem",
                                  marginLeft: "40px",
                                }}
                              >
                                Limit → 12.5 mg/kg
                                <br />
                                <span
                                  style={{ fontSize: "0.85rem", color: "grey" }}
                                >
                                  (Updated 15 Sep <br /> 2025)
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-12 col-md-6">
                            <div
                              className="p-3 rounded"
                              style={{
                                background: "#F4EDFE",
                                minHeight: "162px",
                              }}
                            >
                              <div className="d-flex align-items-start mb-2 ml-5">
                                <svg
                                  width="24"
                                  height="24"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  style={{
                                    display: "inline-block",
                                    verticalAlign: "middle",
                                    marginLeft: "10px",
                                  }}
                                >
                                  <circle
                                    cx="12"
                                    cy="12"
                                    r="9"
                                    stroke="#A259E6"
                                    strokeWidth="2.5"
                                    fill="none"
                                  />
                                  <line
                                    x1="12"
                                    y1="3"
                                    x2="12"
                                    y2="21"
                                    stroke="#A259E6"
                                    strokeWidth="2"
                                  />
                                  <line
                                    x1="3"
                                    y1="12"
                                    x2="21"
                                    y2="12"
                                    stroke="#A259E6"
                                    strokeWidth="2"
                                  />
                                  <ellipse
                                    cx="12"
                                    cy="12"
                                    rx="9"
                                    ry="4"
                                    stroke="#A259E6"
                                    strokeWidth="2"
                                    fill="none"
                                  />
                                </svg>
                                <span
                                  className="fw-semibold"
                                  style={{
                                    fontSize: "1.1rem",
                                    marginLeft: "10px",
                                  }}
                                >
                                  Export Hotspot:
                                  <br />
                                  UAE
                                </span>
                              </div>
                              <div
                                style={{
                                  color: "grey",
                                  fontSize: "0.95rem",
                                  marginLeft: "47px",
                                }}
                              >
                                Demand +22% this
                                <br />
                                quarter
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Recipe Trend Update Card */}
                        <div className="mt-5">
                          <div
                            className="p-4"
                            style={{
                              backgroundColor: "#F5F5F5",
                              borderRadius: "12px 12px 0 0",
                            }}
                          >
                            <div className="d-flex align-items-center mb-3">
                              <div
                                className="me-3"
                                style={{
                                  width: "24px",
                                  height: "24px",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <span
                                  style={{
                                    fontSize: "1.2rem",
                                    color: "#7A1F3D",
                                  }}
                                >
                                  🕐
                                </span>
                              </div>
                              <h5
                                className="mb-0 fw-bold"
                                style={{ color: "#333" }}
                              >
                                Recipe Trend Update
                              </h5>
                            </div>
                            <p
                              className="mb-0"
                              style={{
                                color: "#666",
                                fontSize: "0.85rem",
                                lineHeight: "1.4",
                              }}
                            >
                              New sweetener blends analysis → Report Due: Oct{" "}
                              <br /> 2025
                            </p>
                          </div>
                          <br></br>
                          <button
                            className="btn w-100"
                            style={{
                              marginTop: "10px",
                              backgroundColor: "#7A1F3D",
                              color: "white",
                              border: "none",
                              borderRadius: "12px",
                              padding: "12px 20px",
                              fontSize: "0.95rem",
                              fontWeight: "600",
                              transition: "all 0.3s ease",
                            }}
                            onMouseEnter={(e) => {
                              e.target.style.backgroundColor = "#6B1A35";
                              e.target.style.transform = "translateY(-1px)";
                            }}
                            onMouseLeave={(e) => {
                              e.target.style.backgroundColor = "#7A1F3D";
                              e.target.style.transform = "translateY(0)";
                            }}
                          >
                            Explore Intelligence
                          </button>
                        </div>

                        {/* Next Release Section */}
                        <div className="mt-5">
                          <h5 className="mb-4" style={{ color: "#333" }}>
                            Next Release:
                            <br />
                            <span
                              style={{
                                marginTop: "3px",
                                display: "inline-block",
                              }}
                            >
                              Checklist - Supplier Audit - 05 Oct 2025
                            </span>
                          </h5>
                          <div className="row g-3">
                            <div className="col-12">
                              <div className="d-flex align-items-center rounded">
                                <input
                                  type="checkbox"
                                  className="form-check-input me-3"
                                  style={{ width: "18px", height: "18px" }}
                                />
                                <span
                                  className="me-3"
                                  style={{ color: "#333" }}
                                >
                                  Supplier 1
                                </span>
                                <div
                                  className="progress flex-grow-1"
                                  style={{ height: "12px", borderRadius: "0" }}
                                >
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: "40%",
                                      backgroundColor: "#007BFF",
                                      borderRadius: "0",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-flex align-items-center rounded">
                                <input
                                  type="checkbox"
                                  className="form-check-input me-3"
                                  style={{ width: "18px", height: "18px" }}
                                />
                                <span
                                  className="me-3"
                                  style={{ color: "#333" }}
                                >
                                  Supplier 2
                                </span>
                                <div
                                  className="progress flex-grow-1"
                                  style={{ height: "12px", borderRadius: "0" }}
                                >
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: "70%",
                                      backgroundColor: "#FFC107",
                                      borderRadius: "0",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="d-flex align-items-center rounded">
                                <input
                                  type="checkbox"
                                  className="form-check-input me-3"
                                  style={{ width: "18px", height: "18px" }}
                                />
                                <span
                                  className="me-3"
                                  style={{ color: "#333" }}
                                >
                                  Supplier 3
                                </span>
                                <div
                                  className="progress flex-grow-1"
                                  style={{ height: "12px", borderRadius: "0" }}
                                >
                                  <div
                                    className="progress-bar"
                                    style={{
                                      width: "95%",
                                      backgroundColor: "#20C997",
                                      borderRadius: "0",
                                    }}
                                  ></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Announcements & Updates Section */}
                        <div className="mt-5">
                          <h5 className="mb-4" style={{ color: "#333" }}>
                            Announcements & Updates
                          </h5>
                          <div className="row g-3">
                            <div className="col-12">
                              <div
                                className="d-flex align-items-center p-2 rounded"
                                style={{
                                  backgroundColor: "#F8F9FA",
                                  border: "1px solid #E9ECEF",
                                }}
                              >
                                <div
                                  className="me-3"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "1.1rem",
                                      color: "#6C757D",
                                    }}
                                  >
                                    📅
                                  </span>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <span
                                        className="fw-semibold"
                                        style={{ color: "#333" }}
                                      >
                                        EFSA Webinar
                                      </span>
                                      <div
                                        className="text-muted"
                                        style={{ fontSize: "0.9rem" }}
                                      >
                                        Webinar
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                      <span
                                        className="badge me-2 mb-1"
                                        style={{
                                          backgroundColor: "#6C757D",
                                          color: "white",
                                          fontSize: "0.7rem",
                                          padding: "3px 6px",
                                          borderRadius: "5px",
                                        }}
                                      >
                                        Upcoming
                                      </span>
                                      <span
                                        className="text-muted"
                                        style={{
                                          fontSize: "0.8rem",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        28 Sep 2025
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="d-flex align-items-center p-2 rounded"
                                style={{
                                  backgroundColor: "#F8F9FA",
                                  border: "1px solid #E9ECEF",
                                  borderRadius: "12px",
                                }}
                              >
                                <div
                                  className="me-3"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "1.1rem",
                                      color: "#6C757D",
                                    }}
                                  >
                                    📅
                                  </span>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <span
                                        className="fw-semibold"
                                        style={{ color: "#333" }}
                                      >
                                        Fi Europe Expo
                                      </span>
                                      <div
                                        className="text-muted"
                                        style={{ fontSize: "0.9rem" }}
                                      >
                                        Expo
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                      <span
                                        className="badge me-2 mb-1"
                                        style={{
                                          backgroundColor: "#6C757D",
                                          color: "white",
                                          fontSize: "0.7rem",
                                          padding: "3px 6px",
                                          borderRadius: "5px",
                                        }}
                                      >
                                        Upcoming
                                      </span>
                                      <span
                                        className="text-muted"
                                        style={{
                                          fontSize: "0.8rem",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        12 Nov 2025
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12">
                              <div
                                className="d-flex align-items-center p-2 rounded"
                                style={{
                                  backgroundColor: "#F8F9FA",
                                  border: "1px solid #E9ECEF",
                                  borderRadius: "12px",
                                }}
                              >
                                <div
                                  className="me-3"
                                  style={{
                                    width: "24px",
                                    height: "24px",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                  }}
                                >
                                  <span
                                    style={{
                                      fontSize: "1.1rem",
                                      color: "#6C757D",
                                    }}
                                  >
                                    📅
                                  </span>
                                </div>
                                <div className="flex-grow-1">
                                  <div className="d-flex justify-content-between align-items-center">
                                    <div>
                                      <span
                                        className="fw-semibold"
                                        style={{ color: "#333" }}
                                      >
                                        Affiliate Module Launch
                                      </span>
                                      <div
                                        className="text-muted"
                                        style={{ fontSize: "0.9rem" }}
                                      >
                                        Feature
                                      </div>
                                    </div>
                                    <div className="d-flex align-items-center flex-wrap">
                                      <span
                                        className="badge me-2 mb-1"
                                        style={{
                                          backgroundColor: "#28A745",
                                          color: "white",
                                          fontSize: "0.7rem",
                                          padding: "3px 6px",
                                          borderRadius: "5px",
                                        }}
                                      >
                                        Launched
                                      </span>
                                      <span
                                        className="text-muted"
                                        style={{
                                          fontSize: "0.8rem",
                                          whiteSpace: "nowrap",
                                        }}
                                      >
                                        20 Sep 2025
                                      </span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Card>
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
