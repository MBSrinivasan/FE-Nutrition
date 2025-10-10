"use client";
import "./profileMain.css";
import { Col, Collapse, Row, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import Button from "../reusableComponents/button/page";

const { Panel } = Collapse;

export default function BasicDetails() {
  return (
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
  );
}
