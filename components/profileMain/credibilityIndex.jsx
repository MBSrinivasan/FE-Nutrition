"use client";
import { Card } from "@mui/material";
import "./profileMain.css";
import {  Progress } from "antd";




export default function CredibilityIndex() {

  return (
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
  );
}
