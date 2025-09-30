"use client";
import React from "react";
import { Collapse } from "antd";
import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";
import { Card } from "@mui/material";
import { BuildOutlined } from "@ant-design/icons";
import VendorCompletePage from "../../../components/profileComplete/page";

export default function VendorHomePage() {
  return (
    <VendorHeaderNav>
      <div className="" style={{ marginTop: "48px", width: "100%" }}>
        <div className="mb-[40px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-12 " >
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    border: "1px solid #D8D8D8",
                    marginTop: "20px",
                    backgroundColor: "#FFF",
                    padding: "20px 30px",
                  }}
                >
                  first card
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div class="container-fluid">
          <div class="row">
            <div class="col-9 " style={{ padding: "0px 0px" }}>
              <div className="p-3">
                <div className="mb-[20px]">
                  <Collapse
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        // 👇 custom JSX instead of plain text
                        label: (
                          <div className="flex items-center justify-start w-full">
                            <div className="mr-2">
                              <BuildOutlined />
                            </div>

                            <h1 className="m-0 text-[16px] font-semibold text-[#333]">
                              basic details
                            </h1>
                          </div>
                        ),
                        children: (
                          <div>
                            <p>xdcfvgbhjn</p>
                            <p>More content inside collapse</p>
                            <p>Even long content will fit here…</p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <div className="mb-[20px]">
                  <Collapse
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        // 👇 custom JSX instead of plain text
                        label: (
                          <div className="flex items-center justify-start w-full">
                            <div className="mr-2">
                              <BuildOutlined />
                            </div>

                            <h1 className="m-0 text-[16px] font-semibold text-[#333]">
                              basic details
                            </h1>
                          </div>
                        ),
                        children: (
                          <div>
                            <p>xdcfvgbhjn</p>
                            <p>More content inside collapse</p>
                            <p>Even long content will fit here…</p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <div className="mb-[20px]">
                  <Collapse
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        // 👇 custom JSX instead of plain text
                        label: (
                          <div className="flex items-center justify-start w-full">
                            <div className="mr-2">
                              <BuildOutlined />
                            </div>

                            <h1 className="m-0 text-[16px] font-semibold text-[#333]">
                              basic details
                            </h1>
                          </div>
                        ),
                        children: (
                          <div>
                            <p>xdcfvgbhjn</p>
                            <p>More content inside collapse</p>
                            <p>Even long content will fit here…</p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <div className="mb-[20px]">
                  <Collapse
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        // 👇 custom JSX instead of plain text
                        label: (
                          <div className="flex items-center justify-start w-full">
                            <div className="mr-2">
                              <BuildOutlined />
                            </div>

                            <h1 className="m-0 text-[16px] font-semibold text-[#333]">
                              basic details
                            </h1>
                          </div>
                        ),
                        children: (
                          <div>
                            <p>xdcfvgbhjn</p>
                            <p>More content inside collapse</p>
                            <p>Even long content will fit here…</p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
                <div className="mb-[20px]">
                  <Collapse
                    expandIconPosition="end"
                    items={[
                      {
                        key: "1",
                        // 👇 custom JSX instead of plain text
                        label: (
                          <div className="flex items-center justify-start w-full">
                            <div className="mr-2">
                              <BuildOutlined />
                            </div>

                            <h1 className="m-0 text-[16px] font-semibold text-[#333]">
                              basic details
                            </h1>
                          </div>
                        ),
                        children: (
                          <div>
                            <p>xdcfvgbhjn</p>
                            <p>More content inside collapse</p>
                            <p>Even long content will fit here…</p>
                          </div>
                        ),
                      },
                    ]}
                  />
                </div>
              </div>
            </div>
            <div class="col-3 " style={{ padding: "0px 0px" }}>
                <div className="mb-[20px]">
                <Card
                sx={{
                  
                  borderRadius: 5,
                  border: "1px solid #D8D8D8",
                  marginTop: "10px",
                  backgroundColor: "#FFF",
                  padding: "20px 30px",
                }}
              >
                side one
              </Card>
                </div>
                <div className="mb-[20px]">
                <Card
                sx={{
                  
                  borderRadius: 5,
                  border: "1px solid #D8D8D8",
                  marginTop: "10px",
                  backgroundColor: "#FFF",
                  padding: "20px 30px",
                }}
              >
                side two
              </Card>
                </div>
                <div className="mb-[20px]">
                <Card
                sx={{
                  
                  borderRadius: 5,
                  border: "1px solid #D8D8D8",
                  marginTop: "10px",
                  backgroundColor: "#FFF",
                  padding: "20px 30px",
                }}
              >
                side three
              </Card>
                </div>
             
            </div>
          </div>
        </div>

        <VendorCompletePage/>
      </div>
    </VendorHeaderNav>
  );
}
