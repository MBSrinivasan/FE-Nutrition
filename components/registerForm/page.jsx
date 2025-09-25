import Link from "next/link";
import "./register.css";
import { useState } from "react";
import IconBorder from "../reusableComponents/borderBox/page";
import { Checkbox, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { renderLabel } from "@/utils/constant";
import Button from "../reusableComponents/button/page";
import { CheckCircleOutlined } from "@ant-design/icons"

const { Option } = Select;

export default function RegisterForm() {
  const [active, setActive] = useState("buyer");
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
  };
  return (
    <>
      <div className="contact1-section-area section-padding5 registerForm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-main-box margin-b38">
                <div className="contact-header">
                  <h1 className="font-lora font-16 weight-600 lineh-26 color-18 margin-b">
                    Account Type
                  </h1>
                  <p className="font-ks font-16 weight-400 color-18 lineh26 margin-b1">
                    Select the type of account you’d like to create
                  </p>
                </div>
                <div className="splitBoxMain">
                  <div className="buttonSplit">
                    <div
                      className={`buttonOne px-4 py-2 cursor-pointer font-medium ${
                        active === "buyer"
                          ? "bg-white text-[#7A1F3D]"
                          : "bg-transparent text-[##374151]"
                      }`}
                      onClick={() => setActive("buyer")}
                    >
                      Buyer
                    </div>
                    <div
                      onClick={() => setActive("vendor")}
                      className={`buttonTwo px-4 py-2 cursor-pointer font-medium ${
                        active === "vendor"
                          ? "bg-white text-[#7A1F3D]"
                          : "bg-transparent text-[##374151]"
                      }`}
                    >
                      Vendor
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="contact1-header text-center">
              <span className="font-34 font-ks lineh26 weight-600 color34 margin-b10  d-inline-block">
                Vendor Registration
              </span>
              <h1 className="font-lora font-14  weight-400 margin-b28 color100">
                Feel free to contuct us for any{" "}
              </h1>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-main-box margin-b38">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex marginSpaceForBorder">
                      <div className="borderMain">
                        {" "}
                        <IconBorder
                          icon={
                            <img
                              src="assets/images/icons-images/Company-Information.svg"
                              alt="icon"
                              width={100}
                              height={100}
                            />
                          }
                        />
                      </div>
                      <div className="informationMain">Company Information</div>
                    </div>
                    

                    <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                      <Form.Item
                        name="companyName"
                        rules={[{ required: true, message: "Please enter company name" }]}
                        label={renderLabel("Legal Company Name", true)}
                      >
                        <Input placeholder="Enter your legal company name" style={{ height: "48px",  }} />
                      </Form.Item>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="businessType"
                          rules={[{ required: true, message: "Please enter company name" }]}
                        label={renderLabel("Business Type", true)}
                        >
                          <Select placeholder="Select business type" style={{ height: "48px" }}>
                            <Option value="manufacturer">Manufacturer</Option>
                            <Option value="trader">Trader</Option>
                            <Option value="brand">Brand</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name="country"
                          label="Country"
                          rules={[
                            {
                              required: true,
                              message: "Please select country",
                            },
                          ]}
                        >
                          <Select placeholder="Select Country" style={{ height: "48px" }}>
                            <Option value="india">India</Option>
                            <Option value="usa">USA</Option>
                            <Option value="uk">UK</Option>
                          </Select>
                        </Form.Item>
                      </div>

                      <Form.Item
                        name="address"
                        label="Business Address"
                        rules={[
                          { required: true, message: "Please enter address" },
                        ]}
                      >
                        <Input.TextArea
                          rows={5}
                          placeholder="Enter your complete business address"
                        />
                      </Form.Item>

                      <Form.Item
                        name="website"
                        label="Website URL"
                        rules={[{ type: "url", message: "Enter a valid URL" }]}
                      >
                        <Input placeholder="https://www.yourcompany.com" style={{ height: "48px" }} />
                      </Form.Item>

                      {/* =================== Primary Contact =================== */}
                      <div className="d-flex marginSpaceForBorder">
                        <div className="borderMain">
                          <IconBorder
                            icon={
                              <img
                                src="assets/images/icons-images/Primary-Contact.svg"
                                alt="icon"
                                width={100}
                                height={100}
                              />
                            }
                          />
                        </div>
                        <div className="informationMain">Primary Contact</div>
                      </div>
 
                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="fullName"
                          label="Full Name"
                          rules={[
                            {
                              required: true,
                              message: "Please enter full name",
                            },
                          ]}
                        >
                          <Input placeholder="Enter your full name" style={{ height: "48px"}} />
                        </Form.Item>

                        <Form.Item
                          name="designation"
                          label="Designation/Role"
                          rules={[
                            {
                              required: true,
                              message: "Please enter designation",
                            },
                          ]}
                        >
                          <Input placeholder="e.g., QA Manager, Sales Representative" style={{ height: "48px" }} />
                        </Form.Item>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="email"
                          label="Email Address"
                          rules={[
                            { required: true, message: "Please enter email" },
                            { type: "email", message: "Enter a valid email" },
                          ]}
                        >
                          <Input placeholder="your.email@company.com" style={{ height: "48px" }} />
                        </Form.Item>

                        <Form.Item
                          name="phone"
                          label="Phone Number"
                          rules={[
                            {
                              required: true,
                              message: "Please enter phone number",
                            },
                          ]}
                        >
                          <Input placeholder="+1 (555) 123-4567" style={{ height: "48px" }} />
                        </Form.Item>
                      </div>

                      {/* =================== Compliance & Legal =================== */}
                      <div className="d-flex marginSpaceForBorder">
                        <div className="borderMain">
                          <IconBorder
                            icon={
                              <img
                                src="assets/images/icons-images/Compliance-Legal.svg"
                                alt="icon"
                                width={100}
                                height={100}
                              />
                            }
                          />
                        </div>
                        <div className="informationMain">Compliance & Legal</div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item name="taxId" label="Local Tax ID">
                          <Input placeholder="Example: PAN, VAT, ITN" style={{ height: "48px" }} />
                        </Form.Item>

                        <Form.Item name="duns" label="DUNS Number">
                          <Input placeholder="Enter DUNS number (if applicable)" style={{ height: "48px" }} />
                        </Form.Item>
                      </div>

                      <Form.Item name="nda" label="Upload NDA Document">
                        <Upload.Dragger
                          name="nda"
                          multiple={false}
                          accept=".pdf,.doc,.docx"
                          beforeUpload={() => false}
                          showUploadList={false}
                          style={{
                            border: "2px dashed #d1d5db",
                            borderRadius: "8px",
                            backgroundColor: "#ffffff",
                            padding: "40px 20px",
                            textAlign: "center",
                            cursor: "pointer",
                            transition: "border-color 0.3s ease",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#7A1F3D";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#d1d5db";
                          }}
                        >
                          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px" }}>
                            <div style={{ 
                              width: "48px", 
                              height: "48px", 
                              display: "flex", 
                              alignItems: "center", 
                              justifyContent: "center",
                              backgroundColor: "#f3f4f6",
                              borderRadius: "50%"
                            }}>
                              <UploadOutlined style={{ fontSize: "24px", color: "#6b7280" }} />
                            </div>
                            <div>
                              <div style={{ 
                                fontSize: "16px", 
                                fontWeight: "600", 
                                color: "#374151", 
                                marginBottom: "8px" 
                              }}>
                                Upload NDA Document
                              </div>
                              <div style={{ 
                                fontSize: "14px", 
                                color: "#6b7280" 
                              }}>
                                PDF, DOC, or DOCX up to 10MB
                              </div>
                            </div>
                          </div>
                        </Upload.Dragger>
                      </Form.Item>

                      <Form.Item name="agreement" valuePropName="checked">
                        <Checkbox>
                          I have read, understood, and agree to the terms of the
                          Non-Disclosure Agreement (NDA).
                        </Checkbox>
                      </Form.Item>

                      {/* =================== Portal Credentials =================== */}
                      <div className="d-flex marginSpaceForBorder">
                        <div className="borderMain">
                          <IconBorder
                            icon={
                              <img
                                src="assets/images/icons-images/Portal-Credentials.svg"
                                alt="icon"
                                width={100}
                                height={100}
                              />
                            }
                          />
                        </div>
                        <div className="informationMain">Portal Credentials</div>
                      </div>

                      <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                          { required: true, message: "Please enter username" },
                        ]}
                      >
                        <Input placeholder="Choose a username (usually your email)" style={{ height: "48px" }} />
                      </Form.Item>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="password"
                          label="Password"
                          rules={[
                            {
                              required: true,
                              message: "Please enter password",
                            },
                          ]}
                        >
                          <Input.Password placeholder="Create a strong password" style={{ height: "48px" }} />
                        </Form.Item>

                        <Form.Item
                          name="confirmPassword"
                          label="Confirm Password"
                          dependencies={["password"]}
                          rules={[
                            {
                              required: true,
                              message: "Please confirm your password",
                            },
                            ({ getFieldValue }) => ({
                              validator(_, value) {
                                if (
                                  !value ||
                                  getFieldValue("password") === value
                                ) {
                                  return Promise.resolve();
                                }
                                return Promise.reject(
                                  new Error("Passwords do not match!")
                                );
                              },
                            }),
                          ]}
                        >
                          <Input.Password placeholder="Confirm your password" style={{ height: "48px" }} />
                        </Form.Item>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="securityQuestion"
                          label="Security Question"
                          rules={[
                            {
                              required: true,
                              message: "Please select a question",
                            },
                          ]}
                        >
                          <Select placeholder="Select a security question" style={{ height: "48px" }}>
                            <Option value="pet">
                              What is your pet's name?
                            </Option>
                            <Option value="school">
                              What is your first school?
                            </Option>
                            <Option value="city">
                              What city were you born in?
                            </Option>
                          </Select>
                        </Form.Item>

                        <Form.Item
                          name="securityAnswer"
                          label="Security Answer"
                          rules={[
                            { required: true, message: "Please enter answer" },
                          ]}
                        >
                          <Input placeholder="Enter your answer" style={{ height: "48px" }} />
                        </Form.Item>
                      </div>

                      <Form.Item name="mfa" valuePropName="checked">
                        <Checkbox>
                          Enable Multi-Factor Authentication (MFA) for enhanced
                          security
                        </Checkbox>
                      </Form.Item>

                      {/* =================== Submit =================== */}
                      <Form.Item>

                        <div className="flex justify-center w-100">

                        <Button icon={<CheckCircleOutlined />} width="267px" height="60px" borderRadius="10px" >Complete Registration</Button>
                        {/* <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            backgroundColor: "#7A1F3D",
                            borderRadius: "8px",
                            padding: "0 24px",
                          }}
                        >
                          Complete Registration
                        </Button> */}
                        </div>
                      </Form.Item>
                    </Form>
                    
                    {/* Sign in link - Outside the form
                    <div style={{ 
                      textAlign: "center", 
                      padding: "20px 0",
                      marginTop: "20px"
                    }}>
                      <span style={{ color: "#374151", fontSize: "14px" }}>
                        Already have an account?{" "}
                      </span>
                      <Link 
                        href="/login" 
                        style={{ 
                          color: "#7A1F3D", 
                          textDecoration: "none",
                          fontSize: "14px",
                          fontWeight: "500"
                        }}
                      >
                        Sign in here
                      </Link>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Sign in link - Outside the form */}
        <div style={{ 
                      textAlign: "center", 
                      padding: "20px 0",
                      height: "20px"
                    }}>
                      <span style={{ color: "#374151", fontSize: "16px",
                        fontWeight: "600px"
                       }}>
                        Already have an account?{" "}
                      </span>
                      <Link 
                        href="/login" 
                        style={{ 
                          color: "#7A1F3D", 
                          textDecoration: "none",
                          fontSize: "16px",
                          fontWeight: "600"
                        }}
                      >
                        Sign in here
                      </Link>
                    </div>
      </div>
    </>
  );
}
