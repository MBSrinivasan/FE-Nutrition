"use client";
import { Card } from "@mui/material";
import { Progress } from "antd";
import React from "react";
import IconBorder from "../reusableComponents/borderBox/page";
import "./profileComplete.css"
export default function VendorCompletePage() {
  return (
    <div>
      {" "}
      <div className="mb-[40px]">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 ">
              <Card
                sx={{
                  borderRadius: 5,
                  border: "1px solid #D8D8D8",
                  marginTop: "20px",
                  backgroundColor: "#F5F6FA",
                  padding: "20px 20px",
                }}
              >
                <div className="mb-[5px]">
                  <h1 className="text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500 text-[#7A1F3D]">
                    Vendor Onboarding & Compliance Questionnaire
                  </h1>
                </div>
                <div>
                  <h2 className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px]  text-[#4F4F4F] weight-500">
                    Complete your vendor registration to join our platform
                  </h2>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-[40px] border-b border-[#ADADAD] pb-[20px]">
        <div className="d-flex w-full outerSpacing">
          <div className="w-1/2 d-flex h-full items-center">
            <div style={{ marginRight: "10px" }}>
              {" "}
              <IconBorder
                icon={
                  <img
                    src="/assets/images/icons-images/company.svg"
                    alt="icon"
                    width={100}
                    height={100}
                  />
                }
              />
            </div>
            <h1 className="text-[20px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 text-[#4F4F4F]">
              Vendor ID: SUP-2025-001
            </h1>
          </div>
          <div className="w-1/2">
            <div className="d-flex justify-content-end align-items-end mb-2">
              <p class="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-medium text-[#000] d-flex justify-end items-end weight-500">
                75% Complete
              </p>
              <div></div>
            </div>
            <div className="mb-[10px] d-flex justify-content-end align-items-end">
              {" "}
              <Progress
                percent={60}
                percentPosition={{ align: "end", type: "inner" }}
                size={[200, 10]}
                strokeColor="#7A1F3D"
                style={{
                  display: "flex",
                  justifyContent: "end",
                  alignItems: "end",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
