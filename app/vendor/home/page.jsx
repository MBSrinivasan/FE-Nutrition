"use client";
import React from "react";
import { Card } from "@mui/material";

import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";
import { Col, Progress, Row } from "antd";
import "./vendorHome.css";
import StarIcon from "@mui/icons-material/Star";
import Button from "@/components/reusableComponents/button/page";
import { UploadOutlined } from "@ant-design/icons";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import IconBorder from "@/components/reusableComponents/borderBox/page";

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
                              <h3 className="text-[16px] font-semibold text-[#4F454F] m-0">
                                Compliance Tracker
                              </h3>
                            </div>
                            <div>
                              <h3 className="text-[14px] font-semibold text-[#4F454F] m-0">
                                Total Certificates: 15
                              </h3>
                            </div>
                          </div>
                          <div className="relative flex items-center justify-center">
                            <HighchartsReact
                              highcharts={Highcharts}
                              options={donutChartOptions}
                            />
                            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-lg font-semibold text-[#4F454F]">
                              78%
                            </div>
                          </div>
                        </div>

                        <div className="flex flex-col gap-3">
                          <div className="flex bg-[#F0FDF4] rounded-[10px] w-full h-[40px] items-center p-[10px] justify-between">
                            <div>
                              <div className="d-flex mr-[12px] ">
                                <div className="mr-[6px]">
                                  {" "}
                                  <img src="/assets/images/icons-images/tickIcon.svg" />
                                </div>
                                <div className="font-medium text-sm text-[#4F454F]">
                                  Valid: 9
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-[#4F454F]">
                              Next renewal: ISO 22000— 18 Jan 2026
                            </div>
                          </div>
                          <div className="flex bg-[#FFFBEB] rounded-[10px] w-full h-[40px] items-center p-[10px] justify-between">
                            <div>
                              <div className="d-flex mr-[12px] ">
                                <div className="mr-[6px]">
                                  {" "}
                                  <img src="/assets/images/icons-images/pendingIcon.svg" />
                                </div>
                                <div className="font-medium text-sm text-[#4F454F]">
                                  Expiring: 3
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-[#4F454F]">
                              T-SSAl=25Nov2025, GMP - 02 Dec 2025
                            </div>
                          </div>
                          <div className="flex bg-[#FEF2F2] rounded-[10px] w-full h-[40px] items-center p-[10px] justify-between">
                            <div>
                              <div className="d-flex mr-[12px] ">
                                <div className="mr-[6px]">
                                  {" "}
                                  <img src="/assets/images/icons-images/dangerIcon.svg" />
                                </div>
                                <div className="font-medium text-sm text-[#4F454F]">
                                  Missing: 2
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-[#4F454F]">
                              (CoA – Product X, Product Y
                            </div>
                          </div>
                          <div className="flex bg-[#EFF6FF] rounded-[10px] w-full h-[40px] items-center p-[10px] justify-between">
                            <div>
                              <div className="d-flex mr-[12px] ">
                                <div className="mr-[6px]">
                                  {" "}
                                  <img src="/assets/images/icons-images/pendingIcon.svg" />
                                </div>
                                <div className="font-medium text-sm text-[#4F454F]">
                                  Pending Review: 1
                                </div>
                              </div>
                            </div>
                            <div className="text-sm font-medium text-[#4F454F]"></div>
                          </div>

                          <Progress percent={60} success={{ percent: 30 }} />
                          <div className="d-flex justify-end">
                            <div className="font-medium text-sm text-[#4F454F]">
                              Export License – <br></br>Submitted 5 Sep 2025,
                              <br></br> est. review 20 Sep 2025
                            </div>
                          </div>

                          {/* Capa Request Section */}
                          <div className=" pt-5 border-t border-gray-200">
                            <div className="d-flex justify-between mb-3">
                              <div className="text-sm font-semibold text-[#4F4F4F]">
                                CAPA Requests
                              </div>
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
                              <div className="font-medium text-sm text-[#4F4F4F] mr-[30px]">
                                2 Open
                              </div>
                              <div className="font-medium text-sm text-[#4F4F4F] ">
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
                                5 Closed
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
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 18,
                    border: "1px solid #e0e0e0",
                    marginTop: "10px",
                    backgroundColor: "#FFF",
                    padding: "20px 17px",
                  }}
                >
                  {" "}
                  first second
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
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 18,
                    border: "1px solid #e0e0e0",
                    marginTop: "10px",
                    backgroundColor: "#FFF",
                    padding: "20px 17px",
                  }}
                >
                  {" "}
                  first second
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
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
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
