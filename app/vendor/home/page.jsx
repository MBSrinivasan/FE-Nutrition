"use client";
import React from "react";
import { Card } from "@mui/material";

import VendorHeaderNav from "../../../components/vendorHeaderNav/headerNav";
import { Col, Progress, Row } from "antd";
import "./vendorHome.css";
import StarIcon from "@mui/icons-material/Star";
import Button from "@/components/reusableComponents/button/page";
import { UploadOutlined } from "@ant-design/icons";

export default function VendorHomePage() {
  return (
    <VendorHeaderNav>
      <div className="" style={{ marginTop: "48px", width: "100%" }}>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 5,
                    border: "1px solid #e0e0e0",
                    marginTop: "10px",
                    backgroundColor: "#FFF5F8",
                    padding: "20px 30px",
                  }}
                >
                  <Row style={{borderBottom:"1px solid #ADADAD"}}>
                    <Col span={18}>
                      <div className="d-flex mainVendor">
                        <div className="vendorPro">
                          Welcome back, VendorPro Inc.!
                        </div>
                        <div className="d-flex">
                          {" "}
                          <div>
                            {" "}
                            <StarIcon
                              sx={{
                                fontSize: "19px",
                                marginTop: "5px",
                                color: "#FFC107",
                                marginRight: "5px",
                                marginLeft: "5px",
                              }}
                            />{" "}
                          </div>
                          <div className="ratingStar">4.5</div>
                        </div>
                      </div>

                      <div className="overViewText">
                        Here's your vendor performance overview
                      </div>
                      <div className="d-flex mb-[14px]">
                        <div className="verifiedSpace">
                          <Button
                            icon={
                              <img
                                src="/assets/images/icons-images/startWithOutline.svg"
                                alt="icon"
                              />
                            }
                            width="130px"
                            textColor="#1D6630"
                            bgColor="#DBFCE7"
                          >
                            Verified Vendor
                          </Button>
                        </div>
                        <div>
                          <Button
                            width="111px"
                            textColor="#666"
                            bgColor="#F6F6F6"
                          >
                            Standard Plan
                          </Button>
                        </div>
                      </div>
                      <div className="totalProducts mb-[14px]">
                        Total Products: 28 total
                      </div>
                    </Col>
                    <Col span={6}>
                      <div className="d-flex justify-content-end align-items-end">
                        <div className="profileCompletion mb-[11px]">
                          Profile Completion: 85%
                        </div>
                        <div></div>
                      </div>
                      <div className="mb-[10px] d-flex justify-content-end align-items-end">
                        {" "}
                        <Progress
                          percent={60}
                          percentPosition={{ align: "end", type: "inner" }}
                          size={[300, 20]}
                          strokeColor="#7A1F3D"
                          style={{display:"flex", justifyContent:"end", alignItems:"end"}}
                        />
                      </div>
                      <div className="uploadText d-flex justify-content-end align-items-end mb-[15px]">
                        Upload CoA to reach 90% - 3x more leads
                      </div>
                      <div className=" d-flex justify-content-end align-items-end mb-[15px]">
                        <Button
                          icon={<UploadOutlined />}
                          width="130px"
                          textColor="#FFF"
                          bgColor="#7A1F3D"
                          fontWeight="600"
                        >
                          Verified Vendor
                        </Button>
                      </div>
                    </Col>
                  </Row>
                  <Row >
                    <Col span={18}>
                    <div className="mt-[18px] d-flex ">
                    <div className="d-flex mr-[12px]"> 
                      <div className="mr-[6px]"> <img src="/assets/images/icons-images/tickIcon.svg"/></div>
                      <div className="iconTextCheck">Verified: 20</div>
                     </div>
                     <div className="d-flex mr-[12px]"> 
                      <div className="mr-[6px]"> <img src="/assets/images/icons-images/pendingIcon.svg"/></div>
                      <div className="iconTextCheck">Pending: 20</div>
                     </div>
                     <div className="d-flex mr-[12px]"> 
                      <div className="mr-[6px]"> <img src="/assets/images/icons-images/dangerIcon.svg"/></div>
                      <div className="iconTextCheck">Incomplete: 20</div>
                     </div>
                    </div>
                    
                    </Col>
                    <Col span={6}>
                    <div className="mt-[18px] d-flex totalVerification justify-content-end align-items-end">Next Verification Due: 12 Oct 2025</div>
                    </Col>
                  </Row>
                </Card>
              </div>
              <div class="col-3">
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
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
                    <img 
                      src="/assets/images/icons-images/alertIcon.svg" 
                      alt="Alert Icon" 
                      style={{ width: "20px", height: "20px", marginRight: "8px" }}
                    />
                    <h3 style={{ 
                      margin: 0, 
                      fontSize: "16px", 
                      fontWeight: "600", 
                      color: "#4F454F",
                    }}>
                      Quick Alerts
                    </h3>
                  </div>
                  
                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#FB2C36",
                        marginRight: "8px"
                      }}></div>
                      <span style={{ fontSize: "14px", color: "#000" }}>2 Pending Quotes</span>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#FE9A00",
                        marginRight: "8px"
                      }}></div>
                      <span style={{ fontSize: "14px", color: "#000" }}>1 Payment Due</span>
                    </div>
                    
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <div style={{
                        width: "8px",
                        height: "8px",
                        borderRadius: "50%",
                        backgroundColor: "#FE9A00",
                        marginRight: "8px"
                      }}></div>
                      <span style={{ fontSize: "14px", color: "#000" }}>Certificate Renewal</span>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 18,
                    border: "1px solid #e0e0e0",
                    marginTop: "10px",
                    backgroundColor: "#FFF",
                    padding: "20px 17px",
                  }}
                >
                  {" "}
                  first second
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
                <Card
                  sx={{
                    height: "100%",
                    borderRadius: 18,
                    border: "1px solid #e0e0e0",
                    marginTop: "10px",
                    backgroundColor: "#FFF",
                    padding: "20px 17px",
                  }}
                >
                  {" "}
                  first second
                </Card>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-[20px]">
          <div class="container-fluid">
            <div class="row">
              <div class="col-9">
                <div class="container-fluid">
                  <div class="row">
                    <div class="col-6">
                      <Card
                        sx={{
                          height: "100%",
                          borderRadius: 18,
                          border: "1px solid #e0e0e0",
                          marginTop: "10px",
                          backgroundColor: "#FFF",
                          padding: "20px 17px",
                        }}
                      >
                        {" "}
                        first second
                      </Card>
                    </div>
                    <div class="col-6">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-3">
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </VendorHeaderNav>
  );
}
