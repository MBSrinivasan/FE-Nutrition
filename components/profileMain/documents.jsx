"use client";
import "./profileMain.css";
import {  Col, Collapse, Row, Tag, Upload } from "antd";
import {
  CheckCircleOutlined,
  DownloadOutlined,
  EyeOutlined,
  FileTextOutlined,
  PlusOutlined,
  UploadOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import Button from "../reusableComponents/button/page";

const { Panel } = Collapse;


export default function Documents() {
  return (
    <div className="mb-[30px]">
          <Collapse
            defaultActiveKey={["5"]}
            expandIconPosition="end"
            className="rounded-2xl shadow-md bg-white"
          >
            <Panel
              key="5"
              header={
                <div className="d-flex justify-between ">
                  <div className="flex items-center gap-2">
                    <img
                      src="/assets/images/icons-images/documents.svg"
                      alt="Icon"
                      className="w-6 h-6"
                    />
                    <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] weight-600 text-[#4F454F]">
                      Documents
                    </div>
                  </div>
                  <div className="d-flex gap-2">
                    <Upload>
                      <Button icon={<UploadOutlined />}>Bulk Uplaod</Button>
                    </Upload>
                    <Upload>
                      <Button icon={<PlusOutlined />}>Add Documents</Button>
                    </Upload>
                  </div>
                </div>
              }
            >
              <Row gutter={[16, 16]}>
                <Col xs={24} sm={24} md={24}>
                  <div className="flex justify-center w-full ">
                    <div className="w-[90%] mx-auto">
                      <div className="mb-[20px]">
                        <Row gutter={[16, 16]}>
                          <Col xs={24} sm={12} md={6}>
                            <div className=" h-full border border-[#B9F8CF]  rounded p-2 ">
                              <div className="d-flex justify-between mb-[10px]">
                                <div className="text-[#000] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]  weight-600">
                                  24
                                </div>
                                <div style={{ color: "#2B7FFF" }}>
                                  <FileTextOutlined />
                                </div>
                              </div>
                              <div className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                                Total Documents
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12} md={6}>
                            <div className=" h-full border border-[#B9F8CF]  rounded p-2 ">
                              <div className="d-flex justify-between mb-[10px]">
                                <div className="text-[#00A63E] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]  weight-600">
                                  24
                                </div>
                                <div style={{ color: "#00A63E" }}>
                                  <CheckCircleOutlined />
                                </div>
                              </div>
                              <div className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                                Valid
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12} md={6}>
                            <div className=" h-full border border-[#B9F8CF]  rounded p-2 ">
                              <div className="d-flex justify-between mb-[10px]">
                                <div className="text-[#D08700] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]  weight-600">
                                  18
                                </div>
                                <div style={{ color: "#D08700" }}>
                                  <CheckCircleOutlined />
                                </div>
                              </div>
                              <div className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                                Expiring Soon
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={12} md={6}>
                            <div className=" h-full border border-[#B9F8CF]  rounded p-2 ">
                              <div className="d-flex justify-between mb-[10px]">
                                <div className="text-[#E7000B] text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px]  weight-600">
                                  2
                                </div>
                                <div style={{ color: "#E7000B" }}>
                                  <WarningOutlined />
                                </div>
                              </div>
                              <div className="text-[#000] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                                Expired
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div>
                        <Row gutter={[16, 16]}>
                          <Col xs={24} sm={24} md={24}>
                            <div className="d-flex gap-2 items-center mb-[20px]">
                              <div>
                                <img
                                  src="/assets/images/icons-images/case-study.svg"
                                  alt="icon"
                                />
                              </div>
                              <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F]  ]">
                                Documentry Registry
                              </div>
                            </div>
                            <div className="d-flex flex-col gap-3 mb-[20px]  pb-3">
                              <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                                <Row gutter={[8, 8]} align="middle">
                                  <Col xs={24} sm={16}>
                                    <div className="d-flex  gap-2 items-center">
                                      <div>
                                        {" "}
                                        <img
                                          src="/assets/images/icons-images/documentFiles.svg"
                                          alt="icon"
                                          style={{ height: "100%" }}
                                        />
                                      </div>
                                      <div>
                                        <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                          Sustainable Packaging Solution for
                                          FoodCorp
                                        </div>
                                        <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                          PDF • 2.4 MB • 9/15/2024
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col
                                    xs={24}
                                    sm={8}
                                    className="d-flex justify-end"
                                  >
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
                                        View
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
                                        <DownloadOutlined />
                                        Download
                                      </Tag>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                                <Row gutter={[8, 8]} align="middle">
                                  <Col xs={24} sm={16}>
                                    <div className="d-flex  gap-2 items-center">
                                      <div>
                                        {" "}
                                        <img
                                          src="/assets/images/icons-images/documentFiles.svg"
                                          alt="icon"
                                          style={{ height: "100%" }}
                                        />
                                      </div>
                                      <div>
                                        <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                          Sustainable Packaging Solution for
                                          FoodCorp
                                        </div>
                                        <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                          PDF • 2.4 MB • 9/15/2024
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col
                                    xs={24}
                                    sm={8}
                                    className="d-flex justify-end"
                                  >
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
                                        View
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
                                        <DownloadOutlined />
                                        Download
                                      </Tag>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                              <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                                <Row gutter={[8, 8]} align="middle">
                                  <Col xs={24} sm={16}>
                                    <div className="d-flex  gap-2 items-center">
                                      <div>
                                        {" "}
                                        <img
                                          src="/assets/images/icons-images/documentFiles.svg"
                                          alt="icon"
                                          style={{ height: "100%" }}
                                        />
                                      </div>
                                      <div>
                                        <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                          Sustainable Packaging Solution for
                                          FoodCorp
                                        </div>
                                        <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                          PDF • 2.4 MB • 9/15/2024
                                        </div>
                                      </div>
                                    </div>
                                  </Col>
                                  <Col
                                    xs={24}
                                    sm={8}
                                    className="d-flex justify-end"
                                  >
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
                                        View
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
                                        <DownloadOutlined />
                                        Download
                                      </Tag>
                                    </div>
                                  </Col>
                                </Row>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </div>
  );
}
