"use client";
import React from "react";
import { Card } from "@mui/material";
import { Avatar } from "antd";
import "./vendorHome.css";
import { MessageOutlined } from "@ant-design/icons";

export default function QuickSupport() {
  return (
    <div className="d-flex flex-col gap-4" style={{ height: "100%" }}>
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
            <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500 font-bold text-[#4F4F4F]">
              Quick Supports
            </h1>
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
            <MessageOutlined style={{ marginRight: "5px" }} /> Start Chat
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
            <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500 font-bold text-[#4F4F4F]">
              Knowledge Hub Highlights
            </h1>
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
  );
}
