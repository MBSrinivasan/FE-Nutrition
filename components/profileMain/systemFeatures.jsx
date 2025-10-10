"use client";
import { Card } from "@mui/material";
import "./profileMain.css";
import { Col, Row, Upload } from "antd";
import {
  DownloadOutlined,
  EditOutlined,
  EyeOutlined,
  FundProjectionScreenOutlined,
  SyncOutlined,
  UploadOutlined,
} from "@ant-design/icons";
import Button from "../reusableComponents/button/page";

export default function SystemFeatures() {
  return (
    <>
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
              A paragraph is a self-contained unit of discourse in writing
              dealing with a particular point or idea. Though not required by
              the orthographic conventions of any language with a writing
              system, paragraphs are a conventional means of organizing extended
              segments of prose
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
                <Button icon={<UploadOutlined />}>Upload Documents</Button>
              </Upload>
            </div>
          </Col>
        </Row>
      </Card>
    </>
  );
}
