"use client";
import { Card } from "@mui/material";
import "./profileMain.css";
import { Collapse } from "antd";
const { Panel } = Collapse;

export default function VendorMainPage() {
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
               dxfcgvhbjnkm
              </Panel>
            </Collapse>
          </div>
      </div>
    </div>
  );
}
