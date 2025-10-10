"use client";
import "./profileMain.css";
import { Avatar, Col, Collapse, Row, Tag } from "antd";
import { MailOutlined, PhoneOutlined } from "@ant-design/icons";
const { Panel } = Collapse;

export default function TeamandContacts() {
  return (
    <div className="mb-[30px]">
      <Collapse
        defaultActiveKey={["3"]}
        expandIconPosition="end"
        className="rounded-2xl shadow-md bg-white"
      >
        <Panel
          key="3"
          header={
            <div className="flex items-center gap-2">
              <img
                src="/assets/images/icons-images/teamsGroup.svg"
                alt="Icon"
                className="w-6 h-6"
              />
              <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[32px] weight-600 text-[#4F454F]">
                Team Contacts & KYC
              </div>
            </div>
          }
        >
          <div>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={24} md={24}>
                <div className="d-flex flex-col gap-3 ">
                  <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                    <Row gutter={[8, 8]} align="middle">
                      <Col xs={24} sm={20}>
                        <div className="d-flex  gap-2 items-center">
                          <div>
                            {" "}
                            <Avatar size={40}>SJ</Avatar>
                          </div>
                          <div>
                            <div className="d-flex gap-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#4F4F4F] weight-600">
                              <div>Sarah Johnson</div>
                              <div>
                                <Tag
                                  style={{
                                    color: "#4F4F4F",
                                  }}
                                >
                                  Account Manager
                                </Tag>
                              </div>
                            </div>
                            <div className="d-flex gap-3">
                              <div className="d-flex gap-2">
                                <div>
                                  <MailOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  sarah@vendorpro.com
                                </div>
                              </div>
                              <div className="d-flex gap-2">
                                <div>
                                  <PhoneOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  +1 (555) 123-4568
                                </div>
                              </div>
                              <div className="d-flex gap-2">
                                <div>
                                  <MailOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  CST (UTC-6) 9:00 AM - 6:00 PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={24}
                        sm={4}
                        className="flex justify-end w-full h-full"
                      >
                        <div className="flex flex-wrap gap-2 items-end">
                          <Tag
                            color="#DCFFE7"
                            style={{
                              border: "1px solid #DCFFE7",
                              color: "#01683C",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            KYC Verified
                          </Tag>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                    <Row gutter={[8, 8]} align="middle">
                      <Col xs={24} sm={20}>
                        <div className="d-flex  gap-2 items-center">
                          <div>
                            {" "}
                            <Avatar size={40}>SJ</Avatar>
                          </div>
                          <div>
                            <div className="d-flex gap-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#4F4F4F] weight-600">
                              <div>Sarah Johnson</div>
                              <div>
                                <Tag
                                  style={{
                                    color: "#4F4F4F",
                                  }}
                                >
                                  Account Manager
                                </Tag>
                              </div>
                            </div>
                            <div className="d-flex gap-3">
                              <div className="d-flex gap-2">
                                <div>
                                  <MailOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  sarah@vendorpro.com
                                </div>
                              </div>
                              <div className="d-flex gap-2">
                                <div>
                                  <PhoneOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  +1 (555) 123-4568
                                </div>
                              </div>
                              <div className="d-flex gap-2">
                                <div>
                                  <MailOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  CST (UTC-6) 9:00 AM - 6:00 PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={24}
                        sm={4}
                        className="flex justify-end w-full h-full"
                      >
                        <div className="flex flex-wrap gap-2 items-end">
                          <Tag
                            color="#DCFFE7"
                            style={{
                              border: "1px solid #DCFFE7",
                              color: "#01683C",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            KYC Verified
                          </Tag>
                        </div>
                      </Col>
                    </Row>
                  </div>
                  <div className="border border-[#E0E1E1] bg-[#F9FAFB] rounded p-2 w-auto h-auto">
                    <Row gutter={[8, 8]} align="middle">
                      <Col xs={24} sm={20}>
                        <div className="d-flex  gap-2 items-center">
                          <div>
                            {" "}
                            <Avatar size={40}>SJ</Avatar>
                          </div>
                          <div>
                            <div className="d-flex gap-2 text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] text-[#4F4F4F] weight-600">
                              <div>Sarah Johnson</div>
                              <div>
                                <Tag
                                  style={{
                                    color: "#4F4F4F",
                                  }}
                                >
                                  Account Manager
                                </Tag>
                              </div>
                            </div>
                            <div className="d-flex gap-3">
                              <div className="d-flex gap-2">
                                <div>
                                  <MailOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  sarah@vendorpro.com
                                </div>
                              </div>
                              <div className="d-flex gap-2">
                                <div>
                                  <PhoneOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  +1 (555) 123-4568
                                </div>
                              </div>
                              <div className="d-flex gap-2">
                                <div>
                                  <MailOutlined style={{ color: "#7A1F3D" }} />
                                </div>
                                <div className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[22px] text-[#4F4F4F] weight-400">
                                  CST (UTC-6) 9:00 AM - 6:00 PM
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </Col>
                      <Col
                        xs={24}
                        sm={4}
                        className="flex justify-end w-full h-full"
                      >
                        <div className="flex flex-wrap gap-2 items-end">
                          <Tag
                            color="#DCFFE7"
                            style={{
                              border: "1px solid #DCFFE7",
                              color: "#01683C",
                              display: "flex",
                              alignItems: "center",
                              gap: "4px", // space between icon and text
                            }}
                          >
                            KYC Verified
                          </Tag>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Panel>
      </Collapse>
    </div>
  );
}
