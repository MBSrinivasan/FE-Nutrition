"use client";
import { Card } from "@mui/material";
import "./profileMain.css";
import { Col, Progress, Row } from "antd";
import { CheckCircleOutlined, CrownOutlined } from "@ant-design/icons";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VendorProMain() {
  const router = useRouter();

  return (
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
                      <CheckCircleOutlined style={{ color: "#008236" }} />
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
            <Col xs={24} sm={8} style={{ borderLeft: "1px solid #D8D8D8" }}>
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
  );
}
