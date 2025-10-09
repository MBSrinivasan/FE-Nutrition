"use client";
import { Card } from "@mui/material";
import "./profileMain.css";
import { Col, Collapse, Progress, Row, Tag } from "antd";
import {
  CheckCircleOutlined,
  CheckSquareOutlined,
  CrownOutlined,
  EyeOutlined,
  MailOutlined,
} from "@ant-design/icons";
import Button from "../reusableComponents/button/page";
const { Panel } = Collapse;

export default function VendorMainPage() {
  return (
    <div>
      {" "}
      <div className="mb-[40px]">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-12 "
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <Card
                sx={{
                  borderRadius: 5,
                  border: "1px solid #D8D8D8",
                  marginTop: "20px",
                  padding: "20px 20px",
                }}
              >
                <Row gutter={[16, 16]} align="middle">
                  <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <Row gutter={[8, 8]}>
                      <Col xs={24} sm={3}>
                        <div className="border border-[#D8D8D8] bg-[#F6F6F6]  h-full rounded d-flex justify-center items-center">
                          <span className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] text-[#C36382] weight-700">
                            VP
                          </span>
                        </div>
                      </Col>
                      <Col xs={24} sm={21}>
                        <div className="d-flex gap-3 ">
                          <div className="d-flex flex-col">
                            <div className="text-[20px] sm:text-[22px] md:text-[24px] lg:text-[26px] xl:text-[30px] text-[#7A1F3D] weight-700">
                              VendorPro Inc.
                            </div>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                              Vendor ID: VEN-2024-001
                            </div>
                          </div>
                          <div>
                            <div className="border border-[#B9F8CF] bg-[#F0FDF4] rounded inline-flex p-1 items-center w-auto h-auto">
                              <div className="marginRight-5">
                                <CheckCircleOutlined
                                  style={{ color: "#008236" }}
                                />
                              </div>

                              <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#008236] weight-600">
                                Gold verfied
                              </div>
                            </div>
                          </div>
                          <div>
                            <div className="border border-[#8200DB] bg-[#FAF5FF] rounded inline-flex p-1 items-center w-auto h-auto">
                              <div className="marginRight-5">
                                <CrownOutlined style={{ color: "#8200DB" }} />
                              </div>

                              <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#8200DB] weight-600">
                                Gold verfied
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={24} sm={24} md={8} lg={8} xl={8}>
                    <Row gutter={[8, 8]} align="middle">
                      <Col xs={24} sm={16}>
                        <div className="">
                          <div className="d-flex flex-col  paddingRight-10 h-full">
                            <div className="text-end text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] text-[#7A1F3D] weight-600 underline cursor-pointer">
                              Complete your profile
                            </div>
                            <div>
                              <Progress percent={30} strokeColor="#7A1F3D" />
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={24}
                        sm={8}
                        style={{ borderLeft: "1px solid #D8D8D8" }}
                      >
                        <div className="d-flex flex-col gap-1 paddingLeft-10">
                          <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#000000] weight-400">
                            Premium Plan
                          </div>
                          <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#000000] weight-600">
                            Expires: Dec 2025
                          </div>
                          <div>
                            <div className="border border-[#8200DB] bg-[#FAF5FF] rounded inline-flex p-1 items-center w-auto h-auto flex-wrap">
                              <div className="marginRight-5">
                                <CrownOutlined style={{ color: "#8200DB" }} />
                              </div>

                              <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] text-[#4F4F4F] weight-600">
                                Upgrade
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[30px]">
          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            className="rounded-2xl shadow-md bg-white"
          >
            <Panel
              key="1"
              header={
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons-images/buildingImage.svg"
                    alt="Icon"
                    className="w-6 h-6"
                  />
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] weight-600 text-[#4F454F]">
                    Basic Details
                  </div>
                </div>
              }
            >
              <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-4 ">
                <Row gutter={[16, 16]}>
                  {/* Left Column */}
                  <Col xs={24} sm={12} md={8}>
                    <div className="flex flex-col gap-2 ">
                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Legal Entity Type
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          Private Limited Company
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Business Registration Number
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          U72200DL2015PTC123456
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          D-U-N-S Number
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          DUNS: 123456789
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Year Established
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          2015
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Registered Address
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          123 Innovation Drive, Tech Park, CA 94043, US
                        </p>
                      </div>

                      <div className="">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Operating Address
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          Same as registered address
                        </p>
                      </div>
                    </div>
                  </Col>

                  {/* Middle Column */}
                  <Col xs={24} sm={12} md={8}>
                    <div className="flex flex-col gap-2">
                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Factory / Production Site
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          123 Innovation Drive, Tech Park, CA 94043, US
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Production Capabilities
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          Monthly Volume: 500,000 units
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Export Markets Served
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Tag
                            color="#FAF5FF"
                            style={{
                              color: "#8200DB",
                              border: "1px solid #8200DB",
                            }}
                          >
                            EU
                          </Tag>
                          <Tag
                            color="#FAF5FF"
                            style={{
                              color: "#8200DB",
                              border: "1px solid #8200DB",
                            }}
                          >
                            US
                          </Tag>
                          <Tag
                            color="#FAF5FF"
                            style={{
                              color: "#8200DB",
                              border: "1px solid #8200DB",
                            }}
                          >
                            Middle East
                          </Tag>
                          <Tag
                            color="#FAF5FF"
                            style={{
                              color: "#8200DB",
                              border: "1px solid #8200DB",
                            }}
                          >
                            Asia
                          </Tag>
                        </div>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Sustainability
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            <CheckCircleOutlined />
                            Fair Trade
                          </Tag>
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            <CheckCircleOutlined />
                            Organic Certified
                          </Tag>
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            <CheckCircleOutlined />
                            RSPO
                          </Tag>
                        </div>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Primary Categories
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                            }}
                          >
                            Food & Beverages
                          </Tag>
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                            }}
                          >
                            Nutraceuticals
                          </Tag>
                        </div>
                      </div>

                      <div className="">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Affiliate Status
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                            }}
                          >
                            Yes
                          </Tag>
                        </div>
                      </div>
                    </div>
                  </Col>

                  {/* Right Column */}
                  <Col xs={24} sm={24} md={8}>
                    <div className="flex flex-col gap-2">
                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Parent Company
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          Global Foods Ltd., UK
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Company Size
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          250-1000 employees
                        </p>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Category of Supply
                        </p>
                        <div className="flex flex-wrap gap-2">
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                            }}
                          >
                            Raw Material
                          </Tag>
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                            }}
                          >
                            Equipment
                          </Tag>
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                            }}
                          >
                            Service
                          </Tag>
                        </div>
                      </div>

                      <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-2 w-3/4">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Annual Turnover
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          $50M - $100M
                        </p>
                      </div>

                      <div className="">
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600 marginBottom-5">
                          Region of Operation
                        </p>
                        <p className="text-[#4F4F4F] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                          Global (US, UK, Singapore, India)
                        </p>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
              <div className="d-flex justify-center paddingTop-20">
                <Button>More</Button>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="mb-[30px]">
          <Collapse
            defaultActiveKey={["2"]}
            expandIconPosition="end"
            className="rounded-2xl shadow-md bg-white"
          >
            <Panel
              key="2"
              header={
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons-images/buildingImage.svg"
                    alt="Icon"
                    className="w-6 h-6"
                  />
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] weight-600 text-[#4F454F]">
                    Certificate & Compliance
                  </div>
                </div>
              }
            >
              <div>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={12}>
                    <div className="d-flex gap-2 m-0">
                      <div>
                        <img
                          src="/assets/images/icons-images/certificate.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                        Certifications
                      </div>
                    </div>
                    <div className="d-flex flex-col gap-3 mb-[20px]">
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={12}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <img
                                  src="/assets/images/icons-images/bgcertificate.svg"
                                  alt="icon"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                  ISO 27001
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Information Security • Global
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Expires: 6/15/2025
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex flex-wrap gap-2">
                              <Tag
                                color="#F0FDF4"
                                style={{
                                  border: "1px solid #B9F8CF",
                                  color: "#008236",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <CheckSquareOutlined />
                                Valid
                              </Tag>
                              <Tag
                                color="#FFFFFF"
                                style={{
                                  border: "1px solid #E5E5E5",
                                  color: "#0A0A0A",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <EyeOutlined />
                                Valid
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={12}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <img
                                  src="/assets/images/icons-images/bgcertificate.svg"
                                  alt="icon"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                  ISO 27001
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Information Security • Global
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Expires: 6/15/2025
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex flex-wrap gap-2">
                              <Tag
                                color="#F0FDF4"
                                style={{
                                  border: "1px solid #B9F8CF",
                                  color: "#008236",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <CheckSquareOutlined />
                                Valid
                              </Tag>
                              <Tag
                                color="#FFFFFF"
                                style={{
                                  border: "1px solid #E5E5E5",
                                  color: "#0A0A0A",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <EyeOutlined />
                                Valid
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={12}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <img
                                  src="/assets/images/icons-images/bgcertificate.svg"
                                  alt="icon"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                  ISO 27001
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Information Security • Global
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Expires: 6/15/2025
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex flex-wrap gap-2">
                              <Tag
                                color="#F0FDF4"
                                style={{
                                  border: "1px solid #B9F8CF",
                                  color: "#008236",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <CheckSquareOutlined />
                                Valid
                              </Tag>
                              <Tag
                                color="#FFFFFF"
                                style={{
                                  border: "1px solid #E5E5E5",
                                  color: "#0A0A0A",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <EyeOutlined />
                                Valid
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mb-[10px]">
                      <div>
                        <img
                          src="/assets/images/icons-images/certificate.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                        Auto Reminders
                      </div>
                    </div>
                    <div>
                      <Row gutter={[16, 16]}>
                        <Col xs={24} sm={12} md={8}>
                          <div className=" h-full border border-[#B9F8CF] bg-[#F0FDF4] rounded p-2 ">
                            <div className="d-flex justify-between mb-[10px]">
                              <div style={{ color: "#016630" }}>
                                <CheckCircleOutlined />
                              </div>
                              <div className="text-[#016630] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600">
                                Active
                              </div>
                            </div>
                            <div className="text-[#016630] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                              30-day renewal reminders enabled
                            </div>
                          </div>
                        </Col>

                        <Col xs={24} sm={12} md={8}>
                          <div className=" h-full border border-[#BEDBFF] bg-[#EFF6FF] rounded p-2 ">
                            <div className="d-flex justify-between mb-[10px]">
                              <div style={{ color: "#193CC8" }}>
                                <MailOutlined />
                              </div>
                              <div className="text-[#193CC8] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600">
                                Mail
                              </div>
                            </div>
                            <div className=" text-[#193CC8] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                              Notification sent to compliance team
                            </div>
                          </div>
                        </Col>

                        <Col xs={24} sm={12} md={8}>
                          <div className="h-full border border-[#E9D4FF] bg-[#FAF5FF] rounded p-2 ">
                            <div className="d-flex justify-between mb-[10px]">
                              <div style={{ color: "#6E11B0" }}>
                                <CheckCircleOutlined />
                              </div>
                              <div className="text-[#6E11B0] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600">
                                Active
                              </div>
                            </div>
                            <div className="text-[#6E11B0] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                              30-day renewal reminders enabled
                            </div>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} md={12}>
                    <div className="d-flex gap-2 m-0">
                      <div>
                        <img
                          src="/assets/images/icons-images/certificate.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                        Insurance Coverage
                      </div>
                    </div>
                    <div className="d-flex flex-col gap-3 mb-[20px]">
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={12}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <img
                                  src="/assets/images/icons-images/bgcertificate.svg"
                                  alt="icon"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                  ISO 27001
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Information Security • Global
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Expires: 6/15/2025
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex flex-wrap gap-2">
                              <Tag
                                color="#F0FDF4"
                                style={{
                                  border: "1px solid #B9F8CF",
                                  color: "#008236",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <CheckSquareOutlined />
                                Valid
                              </Tag>
                              <Tag
                                color="#FFFFFF"
                                style={{
                                  border: "1px solid #E5E5E5",
                                  color: "#0A0A0A",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <EyeOutlined />
                                Valid
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={12}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <img
                                  src="/assets/images/icons-images/bgcertificate.svg"
                                  alt="icon"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                  ISO 27001
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Information Security • Global
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Expires: 6/15/2025
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex flex-wrap gap-2">
                              <Tag
                                color="#F0FDF4"
                                style={{
                                  border: "1px solid #B9F8CF",
                                  color: "#008236",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <CheckSquareOutlined />
                                Valid
                              </Tag>
                              <Tag
                                color="#FFFFFF"
                                style={{
                                  border: "1px solid #E5E5E5",
                                  color: "#0A0A0A",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <EyeOutlined />
                                Valid
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={12}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <img
                                  src="/assets/images/icons-images/bgcertificate.svg"
                                  alt="icon"
                                  style={{ height: "100%" }}
                                />
                              </div>
                              <div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                  ISO 27001
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Information Security • Global
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  Expires: 6/15/2025
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12}>
                            <div className="flex flex-wrap gap-2">
                              <Tag
                                color="#F0FDF4"
                                style={{
                                  border: "1px solid #B9F8CF",
                                  color: "#008236",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <CheckSquareOutlined />
                                Valid
                              </Tag>
                              <Tag
                                color="#FFFFFF"
                                style={{
                                  border: "1px solid #E5E5E5",
                                  color: "#0A0A0A",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                <EyeOutlined />
                                Valid
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                    <div className="d-flex gap-2 mb-[10px]">
                      <div>
                        <img
                          src="/assets/images/icons-images/certificate.svg"
                          alt="icon"
                        />
                      </div>
                      <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                        Trust Badges
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                          <Tag
                            color="#FEF9C2"
                            style={{
                              border: "1px solid #FFDF20",
                              color: "#894B00",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                           <CrownOutlined />
                            Gold Verified Vendor
                          </Tag>
                          <Tag
                            color="#F0FDF4"
                            style={{
                              border: "1px solid #B9F8CF",
                              color: "#008236",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            <CheckCircleOutlined />
                            Sustainability Verified
                          </Tag>
                          <Tag
                            color="#EFF6FF"
                            style={{
                              border: "1px solid #BEDBFF",
                              color: "#193CC8",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            <CheckCircleOutlined />
                            Premium Partner
                          </Tag>
                        </div>

                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </div>
      </div>
    </div>
  );
}
