import Link from "next/link";
import "./register.css";
import { useState } from "react";
import IconBorder from "../reusableComponents/borderBox/page";
import { Button, Checkbox, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { renderLabel } from "@/utils/constant";
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
                          <Select placeholder="Select business type">
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
                          <Select placeholder="Select Country">
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
                          rows={2}
                          placeholder="Enter your complete business address"
                        />
                      </Form.Item>

                      <Form.Item
                        name="website"
                        label="Website URL"
                        rules={[{ type: "url", message: "Enter a valid URL" }]}
                      >
                        <Input placeholder="https://www.yourcompany.com" />
                      </Form.Item>

                      {/* =================== Primary Contact =================== */}
                  
                      <div className="d-flex">
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
                          <Input placeholder="Enter your full name" />
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
                          <Input placeholder="e.g., QA Manager, Sales Representative" />
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
                          <Input placeholder="your.email@company.com" />
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
                          <Input placeholder="+1 (555) 123-4567" />
                        </Form.Item>
                      </div>

                      {/* =================== Compliance & Legal =================== */}
                      <h2 className="text-xl font-semibold mt-8 mb-6">
                        Compliance & Legal
                      </h2>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item name="taxId" label="Local Tax ID">
                          <Input placeholder="Example: PAN, VAT, ITN" />
                        </Form.Item>

                        <Form.Item name="duns" label="DUNS Number">
                          <Input placeholder="Enter DUNS number (if applicable)" />
                        </Form.Item>
                      </div>

                      <Form.Item name="nda" label="Upload NDA Document">
                        <Upload>
                          <Button icon={<UploadOutlined />}>
                            Click to Upload
                          </Button>
                        </Upload>
                      </Form.Item>

                      <Form.Item name="agreement" valuePropName="checked">
                        <Checkbox>
                          I have read, understood, and agree to the terms of the
                          Non-Disclosure Agreement (NDA).
                        </Checkbox>
                      </Form.Item>

                      {/* =================== Portal Credentials =================== */}
                      <h2 className="text-xl font-semibold mt-8 mb-6">
                        Portal Credentials
                      </h2>

                      <Form.Item
                        name="username"
                        label="Username"
                        rules={[
                          { required: true, message: "Please enter username" },
                        ]}
                      >
                        <Input placeholder="Choose a username (usually your email)" />
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
                          <Input.Password placeholder="Create a strong password" />
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
                          <Input.Password placeholder="Confirm your password" />
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
                          <Select placeholder="Select a security question">
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
                          <Input placeholder="Enter your answer" />
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
                        <Button
                          type="primary"
                          htmlType="submit"
                          style={{
                            backgroundColor: "#7A1F3D",
                            borderRadius: "8px",
                            padding: "0 24px",
                          }}
                        >
                          Complete Registration
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
}
