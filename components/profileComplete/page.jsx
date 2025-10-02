"use client";
import { Card } from "@mui/material";
import { Progress } from "antd";
import React from "react";
import IconBorder from "../reusableComponents/borderBox/page";
import "./profileComplete.css";
import { renderLabel } from "@/utils/constant";
import { Collapse, Form, Input, Select, Row, Col, Button } from "antd";
const { Panel } = Collapse;
const { Option } = Select;
export default function VendorCompletePage() {
  const [form] = Form.useForm(); // <-- useForm hook

  const onFinish = (values) => {
    console.log("Form submitted:", values);
  };
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
      <Form
        layout="vertical"
        requiredMark={false}
        form={form}
        onFinish={onFinish}
      >
        <div>
          <Collapse
            defaultActiveKey={["1"]}
            expandIconPosition="end"
            className="bg-white rounded-2xl shadow-md"
          >
            <Panel
              header={
                <div className="font-semibold text-[16px] text-[#4F454F]">
                  Company Information
                </div>
              }
              key="1"
            >
              <Row gutter={16}>
                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Company Name", true)} // mandatory
                    name="companyName"
                    rules={[
                      { required: true, message: "Please enter company name" },
                    ]}
                  >
                    <Input placeholder="Company Name" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Business Type", true)} // mandatory
                    name="businessType"
                    rules={[
                      {
                        required: true,
                        message: "Please select business type",
                      },
                    ]}
                  >
                    <Select placeholder="Business Type">
                      <Option value="private">Private</Option>
                      <Option value="public">Public</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Company Registration Number", true)} // mandatory
                    name="companyRegNo"
                    rules={[
                      { required: true, message: "Enter registration number" },
                    ]}
                  >
                    <Input placeholder="Company Registration Number" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Year of Establishment", false)} // optional
                    name="year"
                  >
                    <Input placeholder="2015" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Number of Employees", false)} // optional
                    name="employees"
                  >
                    <Select placeholder="Select range">
                      <Option value="200-500">200 - 500</Option>
                      <Option value="500-1000">500 - 1000</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Annual Turnover", false)} // optional
                    name="turnover"
                  >
                    <Select placeholder="Select range">
                      <Option value="500m">500M - 600M</Option>
                      <Option value="600m+">600M+</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Parent", false)} // optional
                    name="parent"
                  >
                    <Input placeholder="Parent Company" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Subsidiary Information", false)} // optional
                    name="subsidiary"
                  >
                    <Input placeholder="Subsidiary Details" />
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel("Ownership Type", false)} // optional
                    name="ownershipType"
                  >
                    <Select placeholder="Select ownership">
                      <Option value="private">Private</Option>
                      <Option value="public">Public</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col span={8}>
                  <Form.Item
                    label={renderLabel(
                      "Certifying Authority for Registration No",
                      false
                    )} // optional
                    name="certifyingAuthority"
                  >
                    <Input placeholder="MCA in India, Companies House in UK" />
                  </Form.Item>
                </Col>
              </Row>
            </Panel>
          </Collapse>
        </div>
      </Form>
    </div>
  );
}
