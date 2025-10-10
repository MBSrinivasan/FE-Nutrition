"use client";
import { Card } from "@mui/material";
import "./profileMain.css";
import { Avatar, Col, Collapse, Image, Progress, Row, Tag, Upload } from "antd";
import {
  CameraOutlined,
  CheckCircleOutlined,
  CheckSquareOutlined,
  CrownOutlined,
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  FileTextOutlined,
  FundProjectionScreenOutlined,
  MailOutlined,
  PhoneOutlined,
  PlusOutlined,
  SyncOutlined,
  TrophyOutlined,
  UploadOutlined,
  VideoCameraOutlined,
  WarningOutlined,
} from "@ant-design/icons";
import Button from "../reusableComponents/button/page";
import { useState } from "react";
import { useRouter } from "next/navigation";
const { Panel } = Collapse;

export default function VendorMainPage() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
  const router = useRouter();
  const handleChange = (info) => {
    if (info.file.status === "uploading") {
      setLoading(true);
      return;
    }
    if (info.file.status === "done") {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };
  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };
  const images = [
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
    "https://placehold.co/100x100",
  ];
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
                            <div
                              className="text-end text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[20px] text-[#7A1F3D] weight-600 underline cursor-pointer"
                              onClick={() =>
                                router.push("/vendor/profile/profileComplete")
                              }
                            >
                               
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
          <Row gutter={[16, 16]}>
            {/* Left Column */}
            <Col xs={24} sm={24} md={12}>
              <Card
                sx={{
                  height: "100%",
                  borderRadius: 5,
                  border: "1px solid #e0e0e0",

                  padding: "20px",
                }}
              >
                <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 text-[#404040]">
                  Vendor Credibility Index
                </div>
                <div className="row">
                  <div class="col">
                    <div className="d-flex justify-center items-center w-full">
                      <h1 className=" text-[40px] sm:text-[42px] md:text-[44px] lg:text-[48px] xl:text-[50px] text-[#00A63E] weight-600">
                        4.8
                      </h1>
                    </div>
                  </div>
                </div>
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
                <div className="d-flex items-center justify-center mb-2">
                  <p class="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-500 text-[#4F454F]">
                    Based on 47 reviews
                  </p>
                </div>
                <div class="border-b border-[#ADADAD] mb-[20px]"></div>
                <div className="d-flex justify-between  mb-[5px]">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-500 text-[#404040]">
                    {" "}
                    On-time Delivery
                  </div>
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-600 text-[#404040]">
                    92%
                  </div>
                </div>
                <div className="mb-[10px]">
                  <Progress
                    percent={30}
                    showInfo={false}
                    strokeColor="#404040"
                  />
                </div>
                <div className="d-flex justify-between  mb-[5px]">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-500 text-[#404040]">
                    {" "}
                    Quality Score
                  </div>
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-600 text-[#404040]">
                    89%
                  </div>
                </div>
                <div className="mb-[10px]">
                  <Progress
                    percent={30}
                    showInfo={false}
                    strokeColor="#404040"
                  />
                </div>
                <div className="d-flex justify-between  mb-[5px]">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-500 text-[#404040]">
                    {" "}
                    SLA Rating
                  </div>
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-600 text-[#404040]">
                    95%
                  </div>
                </div>
                <div className="mb-[10px]">
                  <Progress
                    percent={30}
                    showInfo={false}
                    strokeColor="#404040"
                  />
                </div>
                <div class="border-b border-[#ADADAD] mb-[30px]"></div>
                <div className="d-flex justify-between  mb-[10px]">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-500 text-[#404040]">
                    {" "}
                    Avg. Response Time
                  </div>
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-600 text-[#404040]">
                    2.5 hours
                  </div>
                </div>
                <div className="d-flex justify-between  mb-[10px]">
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-500 text-[#404040]">
                    {" "}
                    Conversion Rate
                  </div>
                  <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] weight-600 text-[#404040]">
                    68%
                  </div>
                </div>
              </Card>
            </Col>

            <Col xs={24} sm={24} md={12}>
              <Card
                sx={{
                  borderRadius: 5,
                  border: "1px solid #e0e0e0",
                  padding: "20px",
                  marginBottom: "20px",
                }}
              >
                <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 text-[#404040] mb-[20px]">
                  System Features & Insights
                </div>
                <div className="d-flex flex-col gap-3 mb-[10px]">
                  <div className="  bg-[#EFF6FF] rounded p-2 w-auto h-auto">
                    <Row gutter={[8, 8]} align="middle">
                      <Col xs={24} sm={18}>
                        <div className="d-flex  gap-2 items-center">
                          <div>
                            {" "}
                            <EyeOutlined style={{ color: "#1C398E" }} />
                          </div>
                          <div>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-500">
                              Profile Views
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={6} className="d-flex justify-end">
                        <div className="flex flex-wrap ">
                          <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#1C398E] weight-600">
                            1,234
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="  bg-[#F0FDF4] rounded p-2 w-auto h-auto">
                    <Row gutter={[8, 8]} align="middle">
                      <Col xs={24} sm={18}>
                        <div className="d-flex  gap-2 items-center">
                          <div>
                            {" "}
                            <SyncOutlined style={{ color: "#0D542B" }} />
                          </div>
                          <div>
                            <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-500">
                              Last Updated
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={6} className="d-flex justify-end">
                        <div className="flex flex-wrap ">
                          <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#0D542B] weight-600">
                            2 hour ago
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className=" h-full border border-[#B9F8CF] bg-[#FEFCE8] rounded p-2 ">
                    <div className="d-flex gap-2 mb-[10px]">
                      <div style={{ color: "#733E0A" }}>
                        <FundProjectionScreenOutlined />
                      </div>
                      <div className="text-[#733E0A] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-600">
                        Internal Notes
                      </div>
                    </div>
                    <div className="text-[#733E0A] text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  weight-500">
                      A paragraph is a self-contained unit of discourse in
                      writing dealing with a particular point or idea. Though
                      not required by the orthographic conventions of any
                      language with a writing system, paragraphs are a
                      conventional means of organizing extended segments of
                      prose
                    </div>
                  </div>
                </div>
              </Card>
              <Card
                sx={{
                  borderRadius: 5,
                  border: "1px solid #e0e0e0",
                  padding: "20px",
                }}
              >
                <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 text-[#404040] mb-[20px]">
                  Utilities & Action
                </div>
                <Row gutter={[16, 16]}>
                  {/* Column 1 */}
                  <Col xs={24} sm={12} md={8}>
                    <div className="flex justify-center">
                      <Upload>
                        <Button icon={<DownloadOutlined />}>
                          Export Profile to PDF
                        </Button>
                      </Upload>
                    </div>
                  </Col>

                  {/* Column 2 */}
                  <Col xs={24} sm={12} md={8}>
                    <div className="flex justify-center">
                      <Upload>
                        <Button icon={<EditOutlined />}>Edit Profile</Button>
                      </Upload>
                    </div>
                  </Col>

                  {/* Column 3 */}
                  <Col xs={24} sm={12} md={8}>
                    <div className="flex justify-center">
                      <Upload>
                        <Button icon={<UploadOutlined />}>
                          Upload Documents
                        </Button>
                      </Upload>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </div>
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
        <div className="mb-[30px]">
          <Collapse
            defaultActiveKey={["3"]}
            expandIconPosition="end"
            className="rounded-2xl shadow-md bg-white"
          >
            <Panel
              key="3"
              header={
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons-images/teamsGroup.svg"
                    alt="Icon"
                    className="w-6 h-6"
                  />
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] weight-600 text-[#4F454F]">
                    Team Contacts & KYC
                  </div>
                </div>
              }
            >
              <div>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={24} md={24}>
                    <div className="d-flex flex-col gap-3 ">
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={20}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <Avatar size={40}>SJ</Avatar>
                              </div>
                              <div>
                                <div className="d-flex gap-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#4F4F4F] weight-600">
                                  <div>Sarah Johnson</div>
                                  <div>
                                    <Tag
                                      style={{
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      Account Manager
                                    </Tag>
                                  </div>
                                </div>
                                <div className="d-flex gap-3">
                                  <div className="d-flex gap-2">
                                    <div>
                                      <MailOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      sarah@vendorpro.com
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <div>
                                      <PhoneOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      +1 (555) 123-4568
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <div>
                                      <MailOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      CST (UTC-6) 9:00 AM - 6:00 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col
                            xs={24}
                            sm={4}
                            className="flex justify-end w-full h-full"
                          >
                            <div className="flex flex-wrap gap-2 items-end">
                              <Tag
                                color="#DCFFE7"
                                style={{
                                  border: "1px solid #DCFFE7",
                                  color: "#01683C",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                KYC Verified
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={20}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <Avatar size={40}>SJ</Avatar>
                              </div>
                              <div>
                                <div className="d-flex gap-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#4F4F4F] weight-600">
                                  <div>Sarah Johnson</div>
                                  <div>
                                    <Tag
                                      style={{
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      Account Manager
                                    </Tag>
                                  </div>
                                </div>
                                <div className="d-flex gap-3">
                                  <div className="d-flex gap-2">
                                    <div>
                                      <MailOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      sarah@vendorpro.com
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <div>
                                      <PhoneOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      +1 (555) 123-4568
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <div>
                                      <MailOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      CST (UTC-6) 9:00 AM - 6:00 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col
                            xs={24}
                            sm={4}
                            className="flex justify-end w-full h-full"
                          >
                            <div className="flex flex-wrap gap-2 items-end">
                              <Tag
                                color="#DCFFE7"
                                style={{
                                  border: "1px solid #DCFFE7",
                                  color: "#01683C",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                KYC Verified
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                      <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                        <Row gutter={[8, 8]} align="middle">
                          <Col xs={24} sm={20}>
                            <div className="d-flex  gap-2 items-center">
                              <div>
                                {" "}
                                <Avatar size={40}>SJ</Avatar>
                              </div>
                              <div>
                                <div className="d-flex gap-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#4F4F4F] weight-600">
                                  <div>Sarah Johnson</div>
                                  <div>
                                    <Tag
                                      style={{
                                        color: "#4F4F4F",
                                      }}
                                    >
                                      Account Manager
                                    </Tag>
                                  </div>
                                </div>
                                <div className="d-flex gap-3">
                                  <div className="d-flex gap-2">
                                    <div>
                                      <MailOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      sarah@vendorpro.com
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <div>
                                      <PhoneOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      +1 (555) 123-4568
                                    </div>
                                  </div>
                                  <div className="d-flex gap-2">
                                    <div>
                                      <MailOutlined
                                        style={{ color: "#7A1F3D" }}
                                      />
                                    </div>
                                    <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                      CST (UTC-6) 9:00 AM - 6:00 PM
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col
                            xs={24}
                            sm={4}
                            className="flex justify-end w-full h-full"
                          >
                            <div className="flex flex-wrap gap-2 items-end">
                              <Tag
                                color="#DCFFE7"
                                style={{
                                  border: "1px solid #DCFFE7",
                                  color: "#01683C",
                                  display: "flex",
                                  alignItems: "center",
                                  gap: "4px", // space between icon and text
                                }}
                              >
                                KYC Verified
                              </Tag>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </div>
        <div className="mb-[30px]">
          <Collapse
            defaultActiveKey={["4"]}
            expandIconPosition="end"
            className="rounded-2xl shadow-md bg-white"
          >
            <Panel
              key="4"
              header={
                <div className="flex items-center gap-2">
                  <img
                    src="/assets/images/icons-images/media.svg"
                    alt="Icon"
                    className="w-6 h-6"
                  />
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] weight-600 text-[#4F454F]">
                    Media & Case Studies
                  </div>
                </div>
              }
            >
              <div>
                <Row gutter={[16, 16]}>
                  <Col xs={24} sm={12} md={12}>
                    <div className="d-flex justify-between mb-[10px]">
                      <div className="d-flex gap-2 m-0">
                        <div>
                          <img
                            src="/assets/images/icons-images/case-study.svg"
                            alt="icon"
                          />
                        </div>
                        <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                          Case Studies
                        </div>
                      </div>
                      <div>
                        <Upload>
                          <Button icon={<UploadOutlined />}>
                            Case Studies
                          </Button>
                        </Upload>
                      </div>
                    </div>

                    <div className="d-flex flex-col gap-3 mb-[20px] border-b border-b-[#E0E0E0] border-b-[2px] pb-3">
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
                                  Sustainable Packaging Solution for FoodCorp
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  PDF • 2.4 MB • 9/15/2024
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={8} className="d-flex justify-end">
                            <div className="flex flex-wrap gap-2">
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
                                  Sustainable Packaging Solution for FoodCorp
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  PDF • 2.4 MB • 9/15/2024
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={8} className="d-flex justify-end">
                            <div className="flex flex-wrap gap-2">
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
                                  Sustainable Packaging Solution for FoodCorp
                                </div>
                                <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                  PDF • 2.4 MB • 9/15/2024
                                </div>
                              </div>
                            </div>
                          </Col>
                          <Col xs={24} sm={8} className="d-flex justify-end">
                            <div className="flex flex-wrap gap-2">
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

                    <div className="d-flex justify-between mb-[10px]">
                      <div className="d-flex gap-2 ">
                        <div>
                          <VideoCameraOutlined />
                        </div>
                        <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                          Virtual Factory Tour
                        </div>
                      </div>
                      <div>
                        <Upload>
                          <Button icon={<UploadOutlined />}>
                            Upload Videos
                          </Button>
                        </Upload>
                      </div>
                    </div>

                    <div className="border border-[#E0E1E1] bg-[#F9FAFB]  p-2 ">
                      <Upload
                        name="avatar"
                        listType="picture-card"
                        className="avatar-uploader"
                        showUploadList={false}
                        action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
                        beforeUpload={beforeUpload}
                        onChange={handleChange}
                        style={{ width: "100%" }}
                      >
                        upload Video
                      </Upload>
                    </div>
                  </Col>

                  <Col xs={24} sm={12} md={12}>
                    <div className="d-flex justify-between mb-[10px] items-center">
                      <div className="d-flex gap-2 m-0 ">
                        <div>
                          <CameraOutlined />
                        </div>
                        <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                          Factory Images & Gallery
                        </div>
                      </div>
                      <div>
                        <Upload>
                          <Button icon={<UploadOutlined />}>
                            Upload Images
                          </Button>
                        </Upload>
                      </div>
                    </div>
                    <div className="border-b border-b-[#E0E0E0] border-b-[2px] pb-3 mb-[10px]">
                      <Row gutter={[16, 16]}>
                        {images.map((src, index) => (
                          <Col xs={12} sm={8} md={6} lg={6} key={index}>
                            <Image
                              width="100%"
                              height={100}
                              src={src}
                              fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAA..."
                              className="rounded-lg object-cover"
                              preview={false}
                              style={{
                                borderRadius: "12px",
                                objectFit: "cover",
                                border: "1px solid #E0E0E0",
                              }}
                            />
                          </Col>
                        ))}
                      </Row>
                    </div>
                    <div className="d-flex justify-between mb-[10px] items-center">
                      <div className="d-flex gap-2 m-0 ">
                        <div>
                          <CameraOutlined />
                        </div>
                        <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-500 text-[#4F454F] marginTop-2 mb-[10px]">
                          Factory Images & Gallery
                        </div>
                      </div>
                      <div>
                        <Upload>
                          <Button icon={<UploadOutlined />}>
                            Upload Images
                          </Button>
                        </Upload>
                      </div>
                    </div>
                    <div className="border border-[#FFF085;] bg-[#FEFCE8] rounded p-2 w-auto h-auto mb-[10px]">
                      <Row gutter={[8, 8]} align="middle">
                        <Col xs={24} sm={16}>
                          <div className="d-flex  gap-2 items-center">
                            <div>
                              {" "}
                              <TrophyOutlined />
                            </div>
                            <div>
                              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                Sustainable Packaging Solution for FoodCorp
                              </div>
                              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                PDF • 2.4 MB • 9/15/2024
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xs={24} sm={8} className="d-flex justify-end">
                          <div className="flex flex-wrap gap-2">
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
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="border border-[#FFF085;] bg-[#FEFCE8] rounded p-2 w-auto h-auto mb-[10px]">
                      <Row gutter={[8, 8]} align="middle">
                        <Col xs={24} sm={16}>
                          <div className="d-flex  gap-2 items-center">
                            <div>
                              {" "}
                              <TrophyOutlined />
                            </div>
                            <div>
                              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                Sustainable Packaging Solution for FoodCorp
                              </div>
                              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                PDF • 2.4 MB • 9/15/2024
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xs={24} sm={8} className="d-flex justify-end">
                          <div className="flex flex-wrap gap-2">
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
                          </div>
                        </Col>
                      </Row>
                    </div>
                    <div className="border border-[#FFF085;] bg-[#FEFCE8] rounded p-2 w-auto h-auto mb-[10px]">
                      <Row gutter={[8, 8]} align="middle">
                        <Col xs={24} sm={16}>
                          <div className="d-flex  gap-2 items-center">
                            <div>
                              {" "}
                              <TrophyOutlined />
                            </div>
                            <div>
                              <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-600">
                                Sustainable Packaging Solution for FoodCorp
                              </div>
                              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] text-[#4F4F4F] weight-400">
                                PDF • 2.4 MB • 9/15/2024
                              </div>
                            </div>
                          </div>
                        </Col>
                        <Col xs={24} sm={8} className="d-flex justify-end">
                          <div className="flex flex-wrap gap-2">
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
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </div>
            </Panel>
          </Collapse>
        </div>
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
      </div>
    </div>
  );
}
