"use client";
import React from "react";
import { Card } from "@mui/material";
import "./vendorHome.css";

export default function QuickAlerts() {
  return (
    <Card
      sx={{
        height: "100%",
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
          Quick Alerts
        </h1>
      </div>
      <div class="border-b border-[#ADADAD] mb-[10px]"></div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "8px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FB2C36",
              marginRight: "8px",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#000" }}>
            2 Pending Quotes
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FE9A00",
              marginRight: "8px",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#000" }}>1 Payment Due</span>
        </div>

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: "#FE9A00",
              marginRight: "8px",
            }}
          ></div>
          <span style={{ fontSize: "14px", color: "#000" }}>
            Certificate Renewal
          </span>
        </div>
      </div>
    </Card>
  );
}
