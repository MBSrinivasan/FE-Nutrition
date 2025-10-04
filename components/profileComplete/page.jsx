"use client";
import { Card } from "@mui/material";
import { Checkbox, Progress, Upload } from "antd";
import React, { useMemo, useRef, useState, useEffect } from "react";
import IconBorder from "../reusableComponents/borderBox/page";
import "./profileComplete.css";
import { renderLabel } from "@/utils/constant";
import {
  Collapse,
  Form,
  Input,
  Select,
  Row,
  Col,
  Button,
  Typography,
  message,
} from "antd";
import countryList from "react-select-country-list";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ButtonTwo from "../reusableComponents/button/page";
import { CheckCircleOutlined } from "@ant-design/icons";
const { Title } = Typography;
const { Panel } = Collapse;
const { Option } = Select;
export default function VendorCompletePage() {
  const [form] = Form.useForm(); // <-- useForm hook
  const options = useMemo(() => countryList().getData(), []);
  const canvasRef = useRef(null);
  const [signatureData, setSignatureData] = useState(null);
  const [hasSignature, setHasSignature] = useState(false);
  const [isDrawing, setIsDrawing] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 2;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";

    const startDrawing = (e) => {
      setIsDrawing(true);
      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      ctx.beginPath();
      ctx.moveTo(
        (e.touches ? e.touches[0].clientX : e.clientX) * scaleX -
          rect.left * scaleX,
        (e.touches ? e.touches[0].clientY : e.clientY) * scaleY -
          rect.top * scaleY
      );
    };

    const draw = (e) => {
      if (!isDrawing) return;

      const rect = canvas.getBoundingClientRect();
      const scaleX = canvas.width / rect.width;
      const scaleY = canvas.height / rect.height;

      ctx.lineTo(
        (e.touches ? e.touches[0].clientX : e.clientX) * scaleX -
          rect.left * scaleX,
        (e.touches ? e.touches[0].clientY : e.clientY) * scaleY -
          rect.top * scaleY
      );
      ctx.stroke();
    };

    const stopDrawing = () => {
      setIsDrawing(false);
    };

    // Add event listeners
    canvas.addEventListener("mousedown", startDrawing);
    canvas.addEventListener("mousemove", draw);
    canvas.addEventListener("mouseup", stopDrawing);
    canvas.addEventListener("mouseout", stopDrawing);

    // Touch events for mobile
    canvas.addEventListener("touchstart", startDrawing);
    canvas.addEventListener("touchmove", draw);
    canvas.addEventListener("touchend", stopDrawing);

    return () => {
      canvas.removeEventListener("mousedown", startDrawing);
      canvas.removeEventListener("mousemove", draw);
      canvas.removeEventListener("mouseup", stopDrawing);
      canvas.removeEventListener("mouseout", stopDrawing);
      canvas.removeEventListener("touchstart", startDrawing);
      canvas.removeEventListener("touchmove", draw);
      canvas.removeEventListener("touchend", stopDrawing);
    };
  }, [isDrawing]);

  const clear = () => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      setSignatureData(null);
      setHasSignature(false);
    }
  };

  const isCanvasEmpty = () => {
    const canvas = canvasRef.current;
    if (!canvas) return true;

    const ctx = canvas.getContext("2d");
    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    const data = imageData.data;

    // Check if any pixel has been drawn on (not white or transparent)
    for (let i = 0; i < data.length; i += 4) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const a = data[i + 3];

      // If pixel is not white (255,255,255) or transparent (0 alpha), there's content
      if (a > 0 && (r !== 255 || g !== 255 || b !== 255)) {
        return false;
      }
    }

    return true; // Canvas is empty
  };

  const save = () => {
    try {
      // Check if canvas is empty
      if (isCanvasEmpty()) {
        message.error("Please provide your signature before saving.");
        return;
      }

      const dataUrl = canvasRef.current.toDataURL("image/png");
      setSignatureData(dataUrl);
      setHasSignature(true);

      // Set form value for signature
      form.setFieldsValue({ signature: dataUrl });

      message.success("E-signature saved successfully!");
    } catch (error) {
      console.error("Error saving signature:", error);
      message.error("Failed to save signature. Please try again.");
    }
  };

  const onFinish = (values) => {
    // Validate signature before form submission
    if (!hasSignature && !signatureData) {
      message.error(
        "Please provide and save your e-signature before submitting the form."
      );
      return;
    }

    console.log("Form submitted:", values);
    message.success("Vendor profile completed successfully!");
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
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["1"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
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
                        {
                          required: true,
                          message: "Please enter company name",
                        },
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
                        {
                          required: true,
                          message: "Enter registration number",
                        },
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
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["2"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
                    Location Information
                  </div>
                }
                key="2"
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Country", true)}
                      name="country"
                      rules={[
                        { required: true, message: "Please select country" },
                      ]}
                    >
                      <Select
                        showSearch
                        placeholder="Select Country"
                        style={{ width: "100%" }}
                        options={options} // array of { label: "India", value: "IN" }, etc.
                        optionFilterProp="label"
                        filterOption={(input, option) =>
                          (option?.label ?? "")
                            .toLowerCase()
                            .startsWith(input.toLowerCase())
                        }
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("State", true)}
                      name="state"
                      rules={[
                        { required: true, message: "Please enter state" },
                      ]}
                    >
                      <Input placeholder="Tamilnadu" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("City / District", true)}
                      name="city"
                      rules={[{ required: true, message: "Please enter city" }]}
                    >
                      <Input placeholder="Chennai" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Postal Code", true)}
                      name="postalCode"
                      rules={[{ required: true, message: "Enter postal code" }]}
                    >
                      <Input placeholder="600001" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Full Address", true)}
                      name="address"
                      rules={[{ required: true, message: "Enter address" }]}
                    >
                      <Input placeholder="Address for communication" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Operational Sites", true)}
                      name="operationalSites"
                      rules={[
                        { required: true, message: "Enter operational sites" },
                      ]}
                    >
                      <Input placeholder="Consulting Offices" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Export/Import Licenses">
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>
                          Upload document
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["3"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
                    Contact Information
                  </div>
                }
                key="3"
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Authorized Contact Person", true)}
                      name="contactPerson"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Name" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Designation", true)}
                      name="designation"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="CEO" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Email", true)}
                      name="email"
                      rules={[{ required: true, type: "email" }]}
                    >
                      <Input placeholder="example@mail.com" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Phone Number", true)}
                      name="phone"
                      rules={[{ required: true }]}
                    >
                      <PhoneInput
                        country={"in"} // default country
                        enableSearch={true} // ✅ search bar for country list
                        disableSearchIcon={false}
                        inputStyle={{ width: "100%" }}
                        buttonStyle={{ border: "1px solid #d9d9d9" }} // match AntD style
                      />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Secondary Contact"
                      name="secondaryContact"
                    >
                      <Input placeholder="+91 9876546666" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Compliance Officer"
                      name="complianceOfficer"
                    >
                      <Input placeholder="Text here" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Emergency Contact"
                      name="emergencyContact"
                    >
                      <Input placeholder="+91 9876543210" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Corporate Website" name="website">
                      <Input placeholder="www.companysite.com" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="LinkedIn" name="linkedin">
                      <Input placeholder="Text here" />
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["4"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
                    Business Scope
                  </div>
                }
                key="4"
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Category of Supply", true)}
                      name="categorySupply"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="Select category">
                        <Option value="raw">Raw Material</Option>
                        <Option value="packaging">Packaging</Option>
                        <Option value="machinery">Machinery</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Primary Product/Service", true)}
                      name="primaryProduct"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Text here" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel(
                        "HS Code / Industry Classification",
                        true
                      )}
                      name="hsCode"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="6-10 digit" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Production Capacity / MOQ"
                      name="productionCapacity"
                    >
                      <Input placeholder="Numeric / text" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Export Markets Served"
                      name="exportMarkets"
                    >
                      <Select mode="multiple" placeholder="Select markets">
                        <Option value="usa">USA</Option>
                        <Option value="eu">EU</Option>
                        <Option value="asia">Asia</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["5"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
                    Tax & Legal Information
                  </div>
                }
                key="5"
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Tax ID", true)}
                      name="taxId"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="GST / PAN" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Local Tax ID (if applicable)"
                      name="localTaxId"
                    >
                      <Input placeholder="Text here" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Tax Residency" name="taxResidency">
                      <Input placeholder="6–10 digit" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Business License No."
                      name="businessLicense"
                    >
                      <Input placeholder="License number" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="D-U-N-S Number (Dun & Bradstreet)"
                      name="duns"
                    >
                      <Input placeholder="D-U-N-S Number" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Beneficial Ownership Disclosure"
                      name="ownershipDisclosure"
                    >
                      <Input placeholder="Text here" />
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["6"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
                    Banking Information
                  </div>
                }
                key="6"
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Account Holder Name", true)}
                      name="accountHolder"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Company name" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Bank Name", true)}
                      name="bankName"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="Bank name" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Branch Name" name="branchName">
                      <Input placeholder="Branch" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Account Number / IBAN", true)}
                      name="accountNumber"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="IBAN / Account number" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="IFSC Code" name="ifsc">
                      <Input placeholder="IFSC code" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Preferred Currency", true)}
                      name="currency"
                      rules={[{ required: true }]}
                    >
                      <Select placeholder="Select currency">
                        <Option value="INR">INR</Option>
                        <Option value="USD">USD</Option>
                        <Option value="EUR">EUR</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item label="Payment Terms" name="paymentTerms">
                      <Select placeholder="Select terms">
                        <Option value="net30">Net 30</Option>
                        <Option value="net60">Net 60</Option>
                        <Option value="net90">Net 90</Option>
                      </Select>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("SWIFT/BIC Code", true)}
                      name="swift"
                      rules={[{ required: true }]}
                    >
                      <Input placeholder="SWIFT/BIC" />
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Bank Letter / Void Cheque Upload"
                      name="bankLetter"
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div className="mb-[30px]">
            <Collapse
              defaultActiveKey={["7"]}
              expandIconPosition="end"
              className="bg-[#D8D8D8] rounded-2xl shadow-md"
            >
              <Panel
                header={
                  <div className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F]">
                    Compliance Uploads
                  </div>
                }
                key="7"
              >
                <Row gutter={16}>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel(
                        "Company Registration Certificate",
                        true
                      )}
                      name="companyCert"
                      rules={[{ required: true }]}
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>
                          File Upload (PDF/JPG/PNG)
                        </Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Tax Certificate", true)}
                      name="taxCert"
                      rules={[{ required: true }]}
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>File Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label={renderLabel("Bank Document", true)}
                      name="bankDoc"
                      rules={[{ required: true }]}
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>File Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Quality Certifications"
                      name="qualityCert"
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>File Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Insurance Certificates"
                      name="insuranceCert"
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>File Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Sustainability / Ethical Certificates"
                      name="sustainCert"
                    >
                      <Upload style={{ width: "100%" }}>
                        <Button style={{ width: "100%" }}>File Upload</Button>
                      </Upload>
                    </Form.Item>
                  </Col>
                  <Col span={8}>
                    <Form.Item
                      label="Certificate Expiry Dates"
                      name="expiryDates"
                    >
                      <Input placeholder="DD-MM-YYYY" />
                    </Form.Item>
                  </Col>
                </Row>
              </Panel>
            </Collapse>
          </div>
          <div className="bg-white rounded-lg  p-6">
            {/* Section Title */}
            <Title
              level={5}
              className="text-[16px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] weight-600 font-semibold  text-[#4F454F] mb-4"
            >
              Declarations
            </Title>

            {/* Declarations in Grid */}
            <Row gutter={[16]}>
              <Col span={24}>
                <Form.Item
                  name="declaration1"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm this declaration",
                    },
                  ]}
                >
                  <Checkbox>
                    I hereby declare that I have no conflict of interest
                    regarding my use of Beetloop.
                  </Checkbox>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="declaration2"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm this declaration",
                    },
                  ]}
                >
                  <Checkbox>
                    I hereby declare that I am not subject to any sanctions,
                    restrictions, or disbursal, and undertake to promptly
                    disclose if such status changes.
                  </Checkbox>
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item
                  name="declaration3"
                  valuePropName="checked"
                  rules={[
                    {
                      required: true,
                      message: "Please confirm this declaration",
                    },
                  ]}
                >
                  <Checkbox>
                    I hereby confirm that I have read, understood, and agree to
                    abide by the Beetloop Code of Conduct.
                  </Checkbox>
                </Form.Item>
              </Col>
            </Row>

            {/* E-Signature Section */}
            <Title
              level={5}
              className="text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] xl:text-[24px] weight-600 font-semibold  text-[#4F454F] mb-4"
            >
              E-Signature *
            </Title>

            <Form.Item
              name="signature"
              rules={[
                {
                  required: true,
                  validator: () => {
                    if (!hasSignature && !signatureData) {
                      return Promise.reject(
                        new Error("Please provide your e-signature")
                      );
                    }
                    return Promise.resolve();
                  },
                },
              ]}
            >
              <div className="border border-gray-300 p-4 rounded-lg">
                <div className="text-start mb-2 text-sm text-gray-600">
                  Please draw your signature in the box below
                </div>

                <canvas
                  ref={canvasRef}
                  width={500}
                  height={200}
                  className="border border-gray-400 rounded cursor-crosshair hover:border-blue-400 focus:border-blue-500 bg-white mx-auto block"
                  style={{
                    cursor: "crosshair",
                    border: "2px solid #d1d5db",
                    borderRadius: "8px",
                    backgroundColor: "white",
                  }}
                />

                {/* Status indicator */}
                {hasSignature && (
                  <div className="text-green-600 text-sm mt-2 text-center">
                    ✓ Signature saved successfully
                  </div>
                )}

                <div className="mt-4 flex gap-2 justify-center">
                  <Button onClick={clear} danger>
                    Clear Signature
                  </Button>
                  <Button type="primary" onClick={save}>
                    {hasSignature ? "Update Signature" : "Save Signature"}
                  </Button>
                </div>
              </div>
            </Form.Item>

            {/* Submit Button */}
            <div className="mt-6 text-center">
              <div className="flex justify-center w-100">
                <ButtonTwo
                  icon={<CheckCircleOutlined />}
                  width="267px"
                  height="60px"
                  borderRadius="10px"
                  htmlType="submit"
                >
                  Complete Vendor Registration
                </ButtonTwo>
              </div>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
