"use client";
import React from "react";
import { Card } from "@mui/material";
import "./vendorHome.css";

export default function IntelligenceShorcut() {
  return (
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
    {/* Beetloop Intelligence Shortcut */}
    <div className="text-start mb-4">
      <span
        className="fs-4 mr-50"
        style={{ color: "#555" }}
      >
        Beetloop Intelligence Shortcut
      </span>
    </div>
    <div class="container-fluid mb-[20px]">
      <div className="flex gap-4">
        <div className="flex-1 bg-[#DBFCE7] p-2 rounded">
          <div className="flex">
            <div className="w-1/4 flex items-start justify-center">
              <svg
                width="22"
                height="20"
                viewBox="0 0 32 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polyline
                  points="2,20 12,10 20,16 30,6"
                  fill="none"
                  stroke="#1DB96B"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <polyline
                  points="25,6 30,6 30,11"
                  fill="none"
                  stroke="#1DB96B"
                  strokeWidth="3"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
              </svg>
            </div>
            <div className="w-3/4 flex flex-col gap-2">
              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-semibold text-[#4F4F4F]">
                Trending Ingredient: Collagen
              </div>
              <div className="text-[12px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-[#4F4F4F]">
                +18% YoY growth
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#DBEAFE] p-2 rounded">
          <div className="flex">
            <div className="w-1/4 flex items-start justify-center">
              ℹ️
            </div>
            <div className="w-3/4 flex flex-col gap-2">
              <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-[#4F4F4F]">
                Safe Dosage: EFSA Collagen
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-[#4F4F4F]">
                10 g/day recommended
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="container-fluid mb-[20px]">
      <div className="flex gap-4">
        <div className="flex-1 bg-[#FEF3C6] p-2 rounded">
          <div className="flex">
            <div className="w-1/4 flex items-start justify-center">
              ⚠️
            </div>
            <div className="w-3/4 flex flex-col gap-2">
              <div className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-semibold text-[#4F4F4F]">
                Regulatory Alert: Nisin Approval
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-[#4F4F4F]">
                Limit → 12.5 mg/kg (Updated 15 Sep 2025)
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 bg-[#DBEAFE] p-2 rounded">
          <div className="flex">
            <div className="w-1/4 flex items-start justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{
                  display: "inline-block",
                  verticalAlign: "middle",
                }}
              >
                <circle
                  cx="12"
                  cy="12"
                  r="9"
                  stroke="#A259E6"
                  strokeWidth="2.5"
                  fill="none"
                />
                <line
                  x1="12"
                  y1="3"
                  x2="12"
                  y2="21"
                  stroke="#A259E6"
                  strokeWidth="2"
                />
                <line
                  x1="3"
                  y1="12"
                  x2="21"
                  y2="12"
                  stroke="#A259E6"
                  strokeWidth="2"
                />
                <ellipse
                  cx="12"
                  cy="12"
                  rx="9"
                  ry="4"
                  stroke="#A259E6"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
            <div className="w-3/4 flex flex-col gap-2">
              <div className=" text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px]  font-semibold text-[#4F4F4F]">
                Export Hotspot: UAE
              </div>
              <div className="text-[10px] sm:text-[12px] md:text-[14px] lg:text-[16px] xl:text-[18px] font-normal text-[#4F4F4F]">
                Demand +22% this quarter
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Recipe Trend Update Card */}

    <div
      className="p-4"
      style={{
        backgroundColor: "#F5F5F5",
        borderRadius: "12px",
      }}
    >
      <div className="d-flex align-items-center mb-3">
        <div
          className="me-3"
          style={{
            width: "24px",
            height: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span
            style={{
              fontSize: "1.2rem",
              color: "#7A1F3D",
            }}
          >
            🕐
          </span>
        </div>
        <h5
          className="mb-0 weight-600 text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] font-semibold text-[#4F454F] m-0"
          style={{ color: "#333" }}
        >
          Recipe Trend Update
        </h5>
      </div>
      <p
        className="mb-0 weight-400 text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[22px]  text-[#4F454F]"
        style={{
          color: "#666",
          fontSize: "0.85rem",
          lineHeight: "1.4",
        }}
      >
        New sweetener blends analysis → Report Due: Oct 2025
      </p>
    </div>
    <br></br>
    <button
      className="btn w-100"
      style={{
        marginTop: "10px",
        backgroundColor: "#7A1F3D",
        color: "white",
        border: "none",
        borderRadius: "12px",
        padding: "12px 20px",
        fontSize: "0.95rem",
        fontWeight: "600",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#6B1A35";
        e.target.style.transform = "translateY(-1px)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "#7A1F3D";
        e.target.style.transform = "translateY(0)";
      }}
    >
      Explore Intelligence
    </button>

    {/* Next Release Section */}
    <div className="mt-5">
      <h5
        className="mb-4 weight-400 text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] text-[#4F4F4F]"
        style={{ color: "#333" }}
      >
        Next Release:Checklist - Supplier Audit - 05 Oct
        2025
      </h5>
      <div className="row g-3">
        <div className="col-12">
          <div className="d-flex align-items-center rounded">
            <input
              type="checkbox"
              className="form-check-input me-3"
              style={{ width: "18px", height: "18px" }}
            />
            <span
              className="me-3"
              style={{ color: "#333" }}
            >
              Supplier 1
            </span>
            <div
              className="progress flex-grow-1"
              style={{ height: "12px", borderRadius: "0" }}
            >
              <div
                className="progress-bar"
                style={{
                  width: "40%",
                  backgroundColor: "#007BFF",
                  borderRadius: "0",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center rounded">
            <input
              type="checkbox"
              className="form-check-input me-3"
              style={{ width: "18px", height: "18px" }}
            />
            <span
              className="me-3"
              style={{ color: "#333" }}
            >
              Supplier 2
            </span>
            <div
              className="progress flex-grow-1"
              style={{ height: "12px", borderRadius: "0" }}
            >
              <div
                className="progress-bar"
                style={{
                  width: "70%",
                  backgroundColor: "#FFC107",
                  borderRadius: "0",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="d-flex align-items-center rounded">
            <input
              type="checkbox"
              className="form-check-input me-3"
              style={{ width: "18px", height: "18px" }}
            />
            <span
              className="me-3"
              style={{ color: "#333" }}
            >
              Supplier 3
            </span>
            <div
              className="progress flex-grow-1"
              style={{ height: "12px", borderRadius: "0" }}
            >
              <div
                className="progress-bar"
                style={{
                  width: "95%",
                  backgroundColor: "#20C997",
                  borderRadius: "0",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Announcements & Updates Section */}
    <div className="mt-5">
      <h5 className="mb-4" style={{ color: "#333" }}>
        Announcements & Updates
      </h5>
      <div className="row g-3">
        <div className="col-12">
          <div
            className="d-flex align-items-center p-2 rounded"
            style={{
              backgroundColor: "#F8F9FA",
              border: "1px solid #E9ECEF",
            }}
          >
            <div
              className="me-3"
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  color: "#6C757D",
                }}
              >
                📅
              </span>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span
                    className="fw-semibold"
                    style={{ color: "#333" }}
                  >
                    EFSA Webinar
                  </span>
                  <div
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Webinar
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                  <span
                    className="badge me-2 mb-1"
                    style={{
                      backgroundColor: "#6C757D",
                      color: "white",
                      fontSize: "0.7rem",
                      padding: "3px 6px",
                      borderRadius: "5px",
                    }}
                  >
                    Upcoming
                  </span>
                  <span
                    className="text-muted"
                    style={{
                      fontSize: "0.8rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    28 Sep 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="d-flex align-items-center p-2 rounded"
            style={{
              backgroundColor: "#F8F9FA",
              border: "1px solid #E9ECEF",
              borderRadius: "12px",
            }}
          >
            <div
              className="me-3"
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  color: "#6C757D",
                }}
              >
                📅
              </span>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span
                    className="fw-semibold"
                    style={{ color: "#333" }}
                  >
                    Fi Europe Expo
                  </span>
                  <div
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Expo
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                  <span
                    className="badge me-2 mb-1"
                    style={{
                      backgroundColor: "#6C757D",
                      color: "white",
                      fontSize: "0.7rem",
                      padding: "3px 6px",
                      borderRadius: "5px",
                    }}
                  >
                    Upcoming
                  </span>
                  <span
                    className="text-muted"
                    style={{
                      fontSize: "0.8rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    12 Nov 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <div
            className="d-flex align-items-center p-2 rounded"
            style={{
              backgroundColor: "#F8F9FA",
              border: "1px solid #E9ECEF",
              borderRadius: "12px",
            }}
          >
            <div
              className="me-3"
              style={{
                width: "24px",
                height: "24px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  fontSize: "1.1rem",
                  color: "#6C757D",
                }}
              >
                📅
              </span>
            </div>
            <div className="flex-grow-1">
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <span
                    className="fw-semibold"
                    style={{ color: "#333" }}
                  >
                    Affiliate Module Launch
                  </span>
                  <div
                    className="text-muted"
                    style={{ fontSize: "0.9rem" }}
                  >
                    Feature
                  </div>
                </div>
                <div className="d-flex align-items-center flex-wrap">
                  <span
                    className="badge me-2 mb-1"
                    style={{
                      backgroundColor: "#28A745",
                      color: "white",
                      fontSize: "0.7rem",
                      padding: "3px 6px",
                      borderRadius: "5px",
                    }}
                  >
                    Launched
                  </span>
                  <span
                    className="text-muted"
                    style={{
                      fontSize: "0.8rem",
                      whiteSpace: "nowrap",
                    }}
                  >
                    20 Sep 2025
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Card>
  );
}
