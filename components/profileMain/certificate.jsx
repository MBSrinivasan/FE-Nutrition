"use client";
import "./profileMain.css";
import { Col, Collapse, Row, Tag } from "antd";
import {
  CheckCircleOutlined,
  CheckSquareOutlined,
  CrownOutlined,
  EyeOutlined,
  MailOutlined,
} from "@ant-design/icons";

const { Panel } = Collapse;

export default function Certificate() {
  return (
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
  );
}
