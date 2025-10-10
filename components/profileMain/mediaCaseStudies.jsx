"use client";
import "./profileMain.css";
import { Col, Collapse, Image, Row, Tag, Upload } from "antd";
import {
  CameraOutlined,
  DownloadOutlined,
  EyeOutlined,
  TrophyOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import Button from "../reusableComponents/button/page";
import { useState } from "react";
const { Panel } = Collapse;

export default function MediaCaseStudies() {
  const [loading, setLoading] = useState(false);
  const [imageUrl, setImageUrl] = useState();
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
                      <Button icon={<UploadOutlined />}>Case Studies</Button>
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
                      <Button icon={<UploadOutlined />}>Upload Videos</Button>
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
                      <Button icon={<UploadOutlined />}>Upload Images</Button>
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
                      <Button icon={<UploadOutlined />}>Upload Images</Button>
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
  );
}
