"use client";
import React from "react";
import { Card } from "@mui/material";
import "./vendorHome.css";

export default function ProjectOversights() {
  return (
    <Card
      sx={{
        height: "100%",
        borderRadius: 5,
        border: "1px solid #e0e0e0",
        marginTop: "10px",
        backgroundColor: "#FFF",
        padding: "20px 20px",
      }}
    >
      <div className="container-fluid" style={{ padding: "0" }}>
        <div className="row">
          <div className="col-12">
            <div
              className="card border-0"
              style={{
                borderRadius: "18px",
                backgroundColor: "#FFFFFF",
                border: "1px solid #E5E5E5",
              }}
            >
              {/* <div className="card-body p-3"> */}

              {/* Header */}
              <div className="text-start mb-3">
                <h2
                  className="mb-0"
                  style={{
                    color: "#4F4F4F",
                    fontSize: "16px",
                    fontWeight: "400",
                  }}
                >
                  Projects & Oversight
                </h2>
              </div>

              {/* Active Projects Section */}
              <div className="mb-3">
                <h5
                  className="mb-2"
                  style={{
                    color: "#4F4F4F",
                    fontSize: "14px",
                    fontWeight: "600",
                  }}
                >
                  Active Projects
                </h5>

                {/* Metrics Row */}
                <div className="row mb-3">
                  <div className="col-3 text-center">
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#7A1F3D",
                      }}
                    >
                      22
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Total
                    </div>
                  </div>
                  <div className="col-3 text-center">
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#155DFC",
                      }}
                    >
                      8
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Outgoing
                    </div>
                  </div>
                  <div className="col-3 text-center">
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#16A63E",
                      }}
                    >
                      10
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Completed
                    </div>
                  </div>
                  <div className="col-3 text-center">
                    <div
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "#E17100",
                      }}
                    >
                      4
                    </div>
                    <div
                      style={{
                        fontSize: "14px",
                        color: "#4F4F4F",
                      }}
                    >
                      Under Review
                    </div>
                  </div>
                </div>

                {/* Project Card */}
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#EFF6FF",
                    border: "1px solid #BEDBFF",
                    borderRadius: "6px",
                  }}
                >
                  <div className="d-flex justify-content-between align-items-start mb-1">
                    <h6
                      className="mb-0"
                      style={{
                        color: "#4F4F4F",
                        fontSize: "14px",
                        fontWeight: "600",
                      }}
                    >
                      Nutra Capsules Project
                    </h6>
                    <small
                      className="px-2 py-1 rounded"
                      style={{
                        color: "#4F4F4F",
                        fontSize: "10px",
                        fontWeight: "500",
                        backgroundColor: "#ECEEF2",
                        borderRadius: "6px",
                      }}
                    >
                      Due: 05 Oct 2025
                    </small>
                  </div>
                  <div
                    className="d-flex align-items-center"
                    style={{ gap: "10px" }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        color: "#4F4F4F",
                        whiteSpace: "nowrap",
                      }}
                    >
                      Phase 4/5
                    </span>
                    <div className="flex-grow-1">
                      <div
                        className="progress"
                        style={{
                          height: "6px",
                          borderRadius: "15px",
                          backgroundColor: "#D7CBD8",
                        }}
                      >
                        <div
                          className="progress-bar"
                          style={{
                            width: "80%",
                            backgroundColor: "#7A1F3D",
                            borderRadius: "15px 0 0 15px",
                          }}
                        ></div>
                      </div>
                    </div>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: "600",
                        color: "#4F4F4F",
                        whiteSpace: "nowrap",
                      }}
                    >
                      80%
                    </span>
                  </div>
                </div>
              </div>
              <hr />

              {/* Oversight & Escalations Section */}
              <div className="mb-3">
                <div className="d-flex align-items-center mb-1">
                  <div
                    className="me-2 d-flex align-items-center"
                    style={{ width: "13px", height: "11px" }}
                  >
                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none">
                      <path
                        d="M6.5 0L12.5 10H0.5L6.5 0Z"
                        stroke="#FB2C36"
                        strokeWidth="1"
                        fill="white"
                      />
                      <text
                        x="6.5"
                        y="8"
                        textAnchor="middle"
                        fontSize="6"
                        fill="#FB2C36"
                        fontWeight="bold"
                      >
                        !
                      </text>
                    </svg>
                  </div>
                  <h5
                    className="mb-0"
                    style={{
                      color: "#4F4F4F",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Oversight & Escalations
                  </h5>
                </div>
                <div className="mb-2">
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: "600",
                      color: "#4F4F4F",
                    }}
                  >
                    Issues: 3
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    {" "}
                    (2 Q Fails), 1 Delay)
                  </span>
                </div>

                {/* Issue Cards */}
                <div className="mb-2">
                  <div
                    className="p-2 rounded d-flex align-items-center justify-content-between"
                    style={{
                      backgroundColor: "#FEF2F2",
                      borderRadius: "6px",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="me-2"
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "#FB2C36",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "600",
                          color: "#4F4F4F",
                        }}
                      >
                        QC Fail (Batch 123)
                      </span>
                    </div>
                    <div
                      className="px-2 py-0.2 rounded"
                      style={{
                        backgroundColor: "#D4183D",
                        borderRadius: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "500",
                          color: "#FFFFFF",
                        }}
                      >
                        Deadline: 22 Sep 2025
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <div
                    className="p-2 rounded d-flex align-items-center justify-content-between"
                    style={{
                      backgroundColor: "#FFFBEB",
                      borderRadius: "6px",
                    }}
                  >
                    <div className="d-flex align-items-center">
                      <div
                        className="me-2"
                        style={{
                          width: "7px",
                          height: "7px",
                          backgroundColor: "#FE9A00",
                          borderRadius: "50%",
                        }}
                      ></div>
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "600",
                          color: "#4F4F4F",
                        }}
                      >
                        Delivery Delay (Client Z)
                      </span>
                    </div>
                    <div
                      className="px-2 py-0.2 rounded"
                      style={{
                        backgroundColor: "#ECEEF2",
                        borderRadius: "6px",
                      }}
                    >
                      <span
                        style={{
                          fontSize: "10px",
                          fontWeight: "500",
                          color: "#4F4F4F",
                        }}
                      >
                        New ETA: 01 Oct 2025
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              {/* CAPA Requests Section */}
              <div className="mb-3">
                <div className="d-flex justify-content-between align-items-center mb-1">
                  <h5
                    className="mb-0"
                    style={{
                      color: "#4F4F4F",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    CAPA Requests
                  </h5>
                  <div
                    className="px-2 rounded"
                    style={{
                      backgroundColor: "#D4183D",
                      borderRadius: "6px",
                      marginTop: "5px",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: "500",
                        color: "#FFFFFF",
                      }}
                    >
                      2 Open
                    </span>
                  </div>
                </div>
                <p
                  className="mb-0"
                  style={{
                    fontSize: "12px",
                    color: "#4F4F4F",
                  }}
                >
                  Due: 30 Sep 2025
                </p>
              </div>
              <hr />
              {/* Communication Center Section */}
              <div>
                <div className="d-flex align-items-center mb-2">
                  <div
                    className="me-2"
                    style={{
                      width: "16px",
                      height: "16px",
                      transform: "translateY(-3px)",
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path
                        d="M14 2C14 0.9 13.1 0 12 0H4C2.9 0 2 0.9 2 2V8C2 9.1 2.9 10 4 10H10L14 14V2Z"
                        stroke="#7A1F3D"
                        strokeWidth="1.5"
                        fill="none"
                        rx="2"
                      />
                    </svg>
                  </div>
                  <h5
                    className="mb-0"
                    style={{
                      color: "#4F4F4F",
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    Communication Center
                  </h5>
                </div>
                <div
                  className="p-2 rounded"
                  style={{
                    backgroundColor: "#F5F6F7",
                    borderRadius: "6px",
                  }}
                >
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "14px",
                      fontWeight: "600",
                      color: "#4F4F4F",
                    }}
                  >
                    Active Threads: 5
                  </p>
                  <p
                    className="mb-1"
                    style={{
                      fontSize: "12px",
                      color: "#4F4F4F",
                    }}
                  >
                    Example: "Client A — Label approval pending"
                  </p>
                  <div className="d-flex align-items-center">
                    <svg
                      width="13"
                      height="13"
                      viewBox="0 0 11 11"
                      fill="none"
                      style={{ paddingRight: "3px" }}
                    >
                      <circle
                        cx="5.5"
                        cy="5.5"
                        r="4.5"
                        stroke="#FE9A00"
                        strokeWidth="1"
                        fill="none"
                      />
                      <path
                        d="M5.5 3V5.5L7.5 7.5"
                        stroke="#FE9A00"
                        strokeWidth="1"
                        strokeLinecap="round"
                      />
                      <circle cx="5.5" cy="5.5" r="0.5" fill="#FE9A00" />
                    </svg>

                    <span
                      style={{
                        fontSize: "12px",
                        color: "#FE9A00",
                      }}
                    >
                      Response Due: 24 sep 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
    </Card>
  );
}
