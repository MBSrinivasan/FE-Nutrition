"use client";
import React from "react";
import { Card } from "@mui/material";
import "./vendorHome.css";


export default function MarketplaceSpotlight() {
  return (
    <>
      <Card
        sx={{
          borderRadius: "18px",
          border: "1px solid #E5E5E5",
          marginTop: "10px",
          backgroundColor: "#FFF",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-2"
          >
            <path
              d="M8.2 1.5L9.8 5.8L14.5 6.2L11.2 9.2L12.1 13.8L8.2 11.5L4.3 13.8L5.2 9.2L1.9 6.2L6.6 5.8L8.2 1.5Z"
              stroke="#7A1F3D"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500  text-[#4F4F4F]">
            Vendor Rating
          </h1>
        </div>
        <div class="border-b border-[#ADADAD] mb-[10px]"></div>

        <div className="row">
          <div class="col">
            <div className="d-flex justify-center items-center w-full">
              <h1 className=" text-[40px] sm:text-[42px] md:text-[44px] lg:text-[48px] xl:text-[50px] text-[#4F454F] weight-600">
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
          <p class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-medium text-[#4F454F]">
            Based on 47 reviews
          </p>
        </div>
        <div className="d-flex items-center justify-center mb-2">
          <button
            className="btn btn-outline-secondary px-4 py-2"
            style={{
              borderColor: "#B8B8B8",
              color: "#7A1F3D",
              borderRadius: "5px",
              fontSize: "12px",
              fontWeight: "600",
            }}
          >
            View Reviews
          </button>
        </div>
      </Card>
      <Card
        sx={{
          borderRadius: "18px",
          border: "1px solid #E5E5E5",
          marginTop: "10px",
          backgroundColor: "#FFF",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "16px",
          }}
        >
          <svg
            width="21"
            height="15"
            viewBox="0 0 21 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="me-3"
          >
            <path
              d="M2 12L7 7L10 10L19 1"
              stroke="#7A1F3D"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
            <path
              d="M15 1H19V5"
              stroke="#7A1F3D"
              strokeWidth="2"
              fill="none"
              strokeLinejoin="round"
              strokeLinecap="round"
            />
          </svg>
          <h1 className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-500 weight-500 text-[#4F4F4F]">
            Marketplace Spotlight
          </h1>
        </div>
        <div class="border-b border-[#ADADAD] mb-[10px]"></div>

        <div>
          {/* Top 5 Active RFPs */}
          <h6
            className="fw-semibold mb-2"
            style={{ color: "#4F4F4F", fontSize: "12px" }}
          >
            Top 5 Active RFPs
          </h6>

          {/* Subtitle */}
          <p className="mb-4" style={{ color: "#4F4F4F", fontSize: "12px" }}>
            Projects you may qualify for:
          </p>
          <div className="border border-[#E5E5E5] p-2 rounded mb-2">
            <div className="mb-1">
              <p class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-600 text-[#4F454F]">
                Organic Protein Manufacturing
              </p>
            </div>
            <div className="mb-1">
              <p class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-400 text-[#4F454F]">
                Budget: $50K-100K
              </p>
            </div>
            <div>
              <div
                className="bg-[#E5E5E5] p-1 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] rounded w-1/4 text-center
                      "
              >
                New
              </div>
            </div>
          </div>
          <div className="border border-[#E5E5E5] p-2 rounded mb-2">
            <div className="mb-1">
              <p class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-600 text-[#4F454F]">
                Organic Protein Manufacturing
              </p>
            </div>
            <div className="mb-1">
              <p class="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] weight-400 text-[#4F454F]">
                Budget: $50K-100K
              </p>
            </div>
            <div>
              <div
                className="bg-[#E5E5E5] p-1 text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] rounded w-1/4 text-center
                      "
              >
                New
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
}
