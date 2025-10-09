import Link from "next/link";
import "./register.css";
import { useMemo, useState } from "react";
import IconBorder from "../reusableComponents/borderBox/page";
import { Checkbox, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { renderLabel } from "@/utils/constant";
import Button from "../reusableComponents/button/page";
import { CheckCircleOutlined } from "@ant-design/icons";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useRouter } from "next/navigation";

const { Option } = Select;

export default function RegisterForm() {
  const router = useRouter();
  const [active, setActive] = useState("buyer");
  const [phone, setPhone] = useState("");
  const [selectedCountryCode, setSelectedCountryCode] = useState("in"); // Default to India
  const [selectedCountry, setSelectedCountry] = useState("IN"); // Track selected country for Tax ID validation

  const options = useMemo(() => countryList().getData(), []);
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Navigate to verify page after successful registration
    router.push("/verify");
  };
  const handleValuesChange = (changedValues) => {
    if (changedValues.email) {
      form.setFieldsValue({ username: changedValues.email });
    }
  };

  // Tax ID validation patterns for different countries
  const taxIdPatterns = {
    IN: {
      pattern: /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/,
      placeholder: "Enter PAN (e.g., ABCDE1234F)",
      label: "PAN Number (India)",
      message: "Invalid PAN format. Must be 10 characters (e.g., ABCDE1234F)",
    },
    US: {
      pattern: /^\d{2}-?\d{7}$/,
      placeholder: "Enter EIN (e.g., 12-3456789)",
      label: "EIN Number (USA)",
      message: "Invalid EIN format. Must be 9 digits (e.g., 12-3456789)",
    },
    GB: {
      pattern: /^(GB)?([0-9]{9}([0-9]{3})?|[A-Z]{2}[0-9]{3})$/,
      placeholder: "Enter VAT (e.g., GB123456789)",
      label: "VAT Number (UK)",
      message: "Invalid VAT format (e.g., GB123456789)",
    },
    CA: {
      pattern: /^\d{9}(RT\d{4})?$/,
      placeholder: "Enter BN (e.g., 123456789RT0001)",
      label: "Business Number (Canada)",
      message: "Invalid BN format. Must be 9 digits or 15 characters with RT",
    },
    AU: {
      pattern: /^\d{11}$/,
      placeholder: "Enter ABN (e.g., 12345678901)",
      label: "ABN Number (Australia)",
      message: "Invalid ABN format. Must be 11 digits",
    },
    DE: {
      pattern: /^DE\d{9}$/,
      placeholder: "Enter VAT (e.g., DE123456789)",
      label: "VAT Number (Germany)",
      message: "Invalid VAT format. Must be DE followed by 9 digits",
    },
    FR: {
      pattern: /^FR[A-Z0-9]{2}\d{9}$/,
      placeholder: "Enter VAT (e.g., FRXX123456789)",
      label: "VAT Number (France)",
      message: "Invalid VAT format (e.g., FRXX123456789)",
    },
    SG: {
      pattern: /^\d{8}[A-Z]$/,
      placeholder: "Enter UEN (e.g., 12345678A)",
      label: "UEN Number (Singapore)",
      message: "Invalid UEN format. Must be 8 digits followed by a letter",
    },
    AE: {
      pattern: /^\d{15}$/,
      placeholder: "Enter TRN (e.g., 123456789012345)",
      label: "TRN Number (UAE)",
      message: "Invalid TRN format. Must be 15 digits",
    },
    CN: {
      pattern: /^\d{15}$|^\d{18}$|^\d{20}$/,
      placeholder: "Enter USCC (e.g., 91110000000000000A)",
      label: "USCC Number (China)",
      message: "Invalid USCC format. Must be 15, 18, or 20 characters",
    },
    JP: {
      pattern: /^T\d{13}$/,
      placeholder: "Enter Corporate Number (e.g., T1234567890123)",
      label: "Corporate Number (Japan)",
      message: "Invalid format. Must be T followed by 13 digits",
    },
    BR: {
      pattern: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
      placeholder: "Enter CNPJ (e.g., 00.000.000/0000-00)",
      label: "CNPJ Number (Brazil)",
      message: "Invalid CNPJ format (e.g., 00.000.000/0000-00)",
    },
    MX: {
      pattern: /^[A-Z&Ñ]{3,4}\d{6}[A-V1-9][A-Z1-9][0-9A]$/,
      placeholder: "Enter RFC (e.g., ABC123456XXX)",
      label: "RFC Number (Mexico)",
      message: "Invalid RFC format",
    },
    IT: {
      pattern: /^IT\d{11}$/,
      placeholder: "Enter VAT (e.g., IT12345678901)",
      label: "VAT Number (Italy)",
      message: "Invalid VAT format. Must be IT followed by 11 digits",
    },
    ES: {
      pattern: /^ES[A-Z0-9]\d{7}[A-Z0-9]$/,
      placeholder: "Enter CIF/NIF (e.g., ESA12345678)",
      label: "CIF/NIF Number (Spain)",
      message: "Invalid CIF/NIF format",
    },
    NL: {
      pattern: /^NL\d{9}B\d{2}$/,
      placeholder: "Enter BTW (e.g., NL123456789B01)",
      label: "BTW Number (Netherlands)",
      message: "Invalid BTW format (e.g., NL123456789B01)",
    },
    SE: {
      pattern: /^SE\d{10}01$/,
      placeholder: "Enter VAT (e.g., SE123456789001)",
      label: "VAT Number (Sweden)",
      message: "Invalid VAT format",
    },
    CH: {
      pattern: /^CHE-\d{3}\.\d{3}\.\d{3}$/,
      placeholder: "Enter UID (e.g., CHE-123.456.789)",
      label: "UID Number (Switzerland)",
      message: "Invalid UID format (e.g., CHE-123.456.789)",
    },
    ZA: {
      pattern: /^\d{10}$/,
      placeholder: "Enter Tax Reference (e.g., 1234567890)",
      label: "Tax Reference (South Africa)",
      message: "Invalid Tax Reference. Must be 10 digits",
    },
    KR: {
      pattern: /^\d{3}-\d{2}-\d{5}$/,
      placeholder: "Enter Business Number (e.g., 123-45-67890)",
      label: "Business Number (South Korea)",
      message: "Invalid format (e.g., 123-45-67890)",
    },
    MY: {
      pattern: /^[A-Z0-9]{10,12}$/,
      placeholder: "Enter SSM (e.g., 202001234567)",
      label: "SSM Number (Malaysia)",
      message: "Invalid SSM format. Must be 10-12 characters",
    },
    // Default for other countries
    default: {
      pattern: null,
      placeholder: "Enter Local Tax ID (e.g., PAN, VAT, EIN)",
      label: "Local Tax ID",
      message: "Please enter a valid tax ID",
    },
  };

  // Get tax ID config based on selected country
  const getTaxIdConfig = (countryCode) => {
    return taxIdPatterns[countryCode] || taxIdPatterns.default;
  };

  // Handle country selection and update phone country code
  const handleCountryChange = (countryCode) => {
    // Convert 2-letter ISO code to lowercase for react-phone-input-2
    if (countryCode) {
      setSelectedCountryCode(countryCode.toLowerCase());
      setSelectedCountry(countryCode); // Store uppercase for tax validation
      
      // Clear tax ID field when country changes to re-validate with new rules
      form.setFieldsValue({ taxId: "" });
    }
  };
  return (
    <>
      <div className="contact1-section-area section-padding5 registerForm">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-main-box margin-b38">
                <div className="contact-header">
                  <h1 className=" font-16 weight-600 lineh-26 color-18 margin-b">
                    Account Type
                  </h1>
                  <p className=" font-16 weight-400 color-18 lineh26 margin-b1">
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
              <div className="font-lora font-14  weight-400 margin-b28 color100">
                Feel free to contuct us for any{" "}
              </div>
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

                    <Form
                      form={form}
                      layout="vertical"
                      onFinish={onFinish}
                      requiredMark={false}
                      onValuesChange={handleValuesChange}
                    >
                      <Form.Item
                        name="companyName"
                        rules={[
                          {
                            required: true,
                            message: "Please enter company name",
                          },
                        ]}
                        label={renderLabel("Legal Company Name", true)}
                      >
                        <Input
                          placeholder="Enter your legal company name"
                          style={{ height: "48px" }}
                        />
                      </Form.Item>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item name="businessType" label="Business Type">
                          <Select
                            placeholder="Select business type"
                            style={{ height: "48px" }}
                          >
                            <Option value="manufacturer">Manufacturer</Option>
                            <Option value="trader">Trader</Option>
                            <Option value="brand">Brand</Option>
                          </Select>
                        </Form.Item>

                        <Form.Item name="country" label="Country">
                          <Select
                            showSearch
                            placeholder="Select Country"
                            style={{ width: "100%", height: "48px" }}
                            options={options} // array of { label: "India", value: "IN" }, etc.
                            optionFilterProp="label"
                            filterOption={(input, option) =>
                              (option?.label ?? "")
                                .toLowerCase()
                                .startsWith(input.toLowerCase())
                            }
                            onChange={handleCountryChange}
                          />
                        </Form.Item>
                      </div>

                      <Form.Item name="address" label="Business Address">
                        <Input.TextArea
                          rows={5}
                          placeholder="Enter your complete business address"
                        />
                      </Form.Item>

                      <Form.Item
                        name="websiteURL"
                        rules={[
                          {
                            required: true,
                            message: "Please enter Website URL",
                          },
                        ]}
                        label={renderLabel("Website URL", true)}
                      >
                        <Input
                          placeholder="https://www.yourcompany.com"
                          style={{ height: "48px" }}
                        />
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
                          rules={[
                            {
                              required: true,
                              message: "Please enter full name",
                            },
                          ]}
                          label={renderLabel("Full Name", true)}
                        >
                          <Input
                            placeholder="Enter your full name"
                            style={{ height: "48px" }}
                          />
                        </Form.Item>

                        <Form.Item
                          name="designation"
                          rules={[
                            {
                              required: true,
                              message: "Please enter designation",
                            },
                          ]}
                          label={renderLabel("Designation/Role", true)}
                        >
                          <Input
                            placeholder="e.g., QA Manager, Sales Representative"
                            style={{ height: "48px" }}
                          />
                        </Form.Item>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="email"
                          rules={[
                            { required: true, message: "Please enter email" },
                            { type: "email", message: "Enter a valid email" },
                          ]}
                          label={renderLabel("Email Address", true)}
                        >
                          <Input
                            placeholder="your.email@company.com"
                            style={{ height: "48px" }}
                          />
                        </Form.Item>

                        <Form.Item
                          name="phone"
                          rules={[
                            {
                              required: true,
                              message: "Please enter phone number",
                            },
                          ]}
                          label={renderLabel("Phone Number", true)}
                        >
                          {/* <Input
                            type="number"
                            placeholder="+1 (555) 123-4567"
                            style={{ height: "48px" }}
                          /> */}
                          <PhoneInput
                            country={selectedCountryCode} // dynamically updated based on country selection
                            value={phone}
                            onChange={setPhone}
                            enableSearch={true} // ✅ search bar for country list
                            disableSearchIcon={false}
                            inputStyle={{ height: "48px", width: "100%" }}
                            buttonStyle={{ border: "1px solid #d9d9d9" }} // match AntD style
                          />
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
                        <div className="informationMain">
                          Compliance & Legal
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="taxId"
                          label={getTaxIdConfig(selectedCountry).label}
                          rules={[
                            {
                              validator: (_, value) => {
                                if (!value) {
                                  return Promise.resolve(); // Optional field
                                }
                                const config = getTaxIdConfig(selectedCountry);
                                if (config.pattern && !config.pattern.test(value)) {
                                  return Promise.reject(new Error(config.message));
                                }
                                return Promise.resolve();
                              },
                            },
                          ]}
                        >
                          <Input
                            placeholder={getTaxIdConfig(selectedCountry).placeholder}
                            style={{ height: "48px" }}
                          />
                        </Form.Item>

                        <Form.Item name="duns" label="DUNS Number">
                          <Input
                            placeholder="Enter DUNS number (if applicable)"
                            style={{ height: "48px" }}
                          />
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
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              alignItems: "center",
                              gap: "16px",
                            }}
                          >
                            <div
                              style={{
                                width: "48px",
                                height: "48px",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                backgroundColor: "#f3f4f6",
                                borderRadius: "50%",
                              }}
                            >
                              <UploadOutlined
                                style={{ fontSize: "24px", color: "#6b7280" }}
                              />
                            </div>
                            <div>
                              <div
                                style={{
                                  fontSize: "16px",
                                  fontWeight: "600",
                                  color: "#374151",
                                  marginBottom: "8px",
                                }}
                              >
                                Upload NDA Document
                              </div>
                              <div
                                style={{
                                  fontSize: "14px",
                                  color: "#6b7280",
                                }}
                              >
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
                        <div className="informationMain">
                          Portal Credentials
                        </div>
                      </div>

                      <Form.Item
                        name="email"
                        rules={[
                          { required: true, message: "Please enter Email" },
                        ]}
                        label={renderLabel("Email", true)}
                      >
                        <Input
                          placeholder="enter Email"
                          style={{ height: "48px" }}
                        />
                      </Form.Item>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="password"
                          label={renderLabel("Password", true)}
                          rules={[
                            {
                              required: true,
                              message: "Please enter password",
                            },
                            {
                              min: 8,
                              message: "Password must be at least 8 characters",
                            },
                          ]}
                        >
                          <Input.Password
                            placeholder="Create a strong password"
                            style={{ height: "48px" }}
                          />
                        </Form.Item>

                        <Form.Item
                          name="confirmPassword"
                          label={renderLabel("Confirm Password", true)}
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
                          <Input.Password
                            placeholder="Confirm your password"
                            style={{ height: "48px" }}
                          />
                        </Form.Item>
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Form.Item
                          name="securityQuestion"
                          label={renderLabel("Security Question", true)}
                          rules={[
                            {
                              required: true,
                              message: "Please select a question",
                            },
                          ]}
                        >
                          <Select
                            placeholder="Select a security question"
                            style={{ height: "48px" }}
                          >
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
                          label={renderLabel("Security Answer", true)}
                          rules={[
                            { required: true, message: "Please enter answer" },
                          ]}
                        >
                          <Input
                            placeholder="Enter your answer"
                            style={{ height: "48px" }}
                          />
                        </Form.Item>
                      </div>

                      <Form.Item
                        name="mfa"
                        valuePropName="checked"
                        rules={[
                          {
                            validator: (_, value) =>
                              value
                                ? Promise.resolve()
                                : Promise.reject(
                                    new Error("Please enable MFA to continue")
                                  ),
                          },
                        ]}
                      >
                        <Checkbox>
                          Enable Multi-Factor Authentication (MFA) for enhanced
                          security
                        </Checkbox>
                      </Form.Item>

                      {/* =================== Submit =================== */}
                      <Form.Item>
                        <div className="flex justify-center w-100">
                          <Button
                            icon={<CheckCircleOutlined />}
                            width="267px"
                            height="60px"
                            borderRadius="10px"
                            htmlType="submit"
                          >
                            Complete Registration
                          </Button>
                        </div>
                      </Form.Item>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
       
        <div
          style={{
            textAlign: "center",
            padding: "20px 0",
            height: "20px",
          }}
        >
          <span
            style={{ color: "#374151", fontSize: "16px", fontWeight: "600px" }}
          >
            Already have an account?{" "}
          </span>
          <Link
            href="/login"
            style={{
              color: "#7A1F3D",
              textDecoration: "none",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Sign in here
          </Link>
        </div>
      </div>
    </>
  );
}
