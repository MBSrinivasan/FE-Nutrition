"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Form, Input, Button, message } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { renderLabel } from "../../utils/constant";
import { useRouter } from "next/navigation";

const ForgetPassword = () => {
  const [form] = Form.useForm();
  const router = useRouter();

  
  const handleSubmit = (values) => {
    const { newPassword, confirmPassword } = values;

    if (newPassword !== confirmPassword) {
      message.error("Passwords do not match");
      return;
    }

    // Here you can call your API to change the password
    console.log("Password changed:", values);
    message.success("Password successfully changed!");

    // Redirect to login page
    router.push("/login");
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .tablet-centered-card {
            margin: 0 auto !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      `}</style>

      <div
        className="min-vh-100 d-flex align-items-center justify-content-center"
        style={{ backgroundColor: "#F6F7F8" }}
      >
        <div className="container-fluid px-2 px-sm-3 px-md-4">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* Main Card */}
              <div
                className="card border-0 shadow-sm tablet-centered-card"
                style={{
                  borderRadius: "24px",
                  border: "0.3px solid #B9B9B9",
                  maxWidth: "500px",
                  width: "100%",
                 
                  margin: "0 auto",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <div className="card-body p-0">
                  {/* Logo Section */}
                  <div
                    className="text-center"
                    style={{
                      paddingTop: "20px",
                      paddingBottom: "15px",
                      paddingLeft: "15px",
                      paddingRight: "15px",
                    }}
                  >
                    <Image
                      src="/assets/images/logo/beetloop-logo-40c6df.png"
                      alt="Beetloop Logo"
                      width={250}
                      height={48}
                      style={{
                        objectFit: "contain",
                        maxWidth: "100%",
                        height: "auto",
                        width: "clamp(200px, 60vw, 250px)",
                      }}
                    />
                  </div>

                  {/* Divider */}
                  <div
                    style={{
                      width: "95%",
                      maxWidth: "420px",
                      height: "1px",
                      backgroundColor: "#D8D8D8",
                      margin: "0 auto 15px auto",
                    }}
                  />

                  {/* Form Container */}
                  <div
                    style={{
                      width: "95%",
                      maxWidth: "420px",
                      margin: "0 auto",
                      padding: "0 15px",
                    }}
                  >
                    <Form
                      layout="vertical"
                      form={form}
                      onFinish={handleSubmit}
                      autoComplete="off"
                      requiredMark={false}
                    >
                      {/* New Password */}
                      <Form.Item
                        label={renderLabel("Enter New Password", true)}
                        name="newPassword"
                        rules={[
                          { required: true, message: "Please enter your new password" },
                          { min: 8, message: "Password must be at least 8 characters" },
                        ]}
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 600,
                          color: "#606060",
                        }}
                      >
                        <Input.Password
                          placeholder="Enter your new password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                          style={{
                            height: "clamp(50px, 10vw, 65px)",
                            borderRadius: "8px",
                            border: "0.6px solid #D5D5D5",
                            fontSize: "clamp(14px, 4vw, 16px)",
                            fontWeight: "600",
                            color: "#606060",
                            fontFamily: "Nunito Sans, sans-serif",
                          }}
                        />
                      </Form.Item>

                      {/* Confirm Password */}
                      <Form.Item
                        
                        label={renderLabel("Confirm Password", true)}

                        name="confirmPassword"
                        dependencies={["newPassword"]}
                        hasFeedback
                        rules={[
                          { required: true, message: "Please confirm your password" },
                          ({ getFieldValue }) => ({
                            validator(_, value) {
                              if (!value || getFieldValue("newPassword") === value) {
                                return Promise.resolve();
                              }
                              return Promise.reject(new Error("Passwords do not match!"));
                            },
                          }),
                        ]}
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          fontWeight: 600,
                          color: "#606060",
                        }}
                      >
                        <Input.Password
                          placeholder="Re-enter your new password"
                          iconRender={(visible) =>
                            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                          }
                          style={{
                            height: "clamp(50px, 10vw, 65px)",
                            borderRadius: "8px",
                            border: "0.6px solid #D5D5D5",
                            fontSize: "clamp(14px, 4vw, 16px)",
                            fontWeight: "600",
                            color: "#606060",
                            fontFamily: "Nunito Sans, sans-serif",
                          }}
                        />
                      </Form.Item>

                      {/* Submit Button */}
                      <Form.Item>
                        <Button
                          htmlType="submit"
                          type="primary"
                          block
                          style={{
                            height: "clamp(45px, 7vw, 50px)",
                            borderRadius: "8px",
                            backgroundColor: "#7A1F3D",
                            fontSize: "clamp(16px, 4vw, 18px)",
                            fontWeight: "700",
                            color: "white",
                            fontFamily: "Nunito Sans, sans-serif",
                            border: "none",
                            maxWidth: "350px",
                            margin: "0 auto",
                            display: "block",
                            transition: "all 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = "#6B1A35";
                            e.currentTarget.style.transform = "translateY(-1px)";
                            e.currentTarget.style.boxShadow =
                              "0 4px 8px rgba(122, 31, 61, 0.3)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = "#7A1F3D";
                            e.currentTarget.style.transform = "translateY(0)";
                            e.currentTarget.style.boxShadow = "none";
                          }}
                        >
                          Change Password
                        </Button>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
