"use client";
import "./profileMain.css";
import { Col, Row } from "antd";
import VendorProMain from "../../components/profileMain/vendorProMain";
import CredibilityIndex from "../../components/profileMain/credibilityIndex";
import SystemFeatures from "../../components/profileMain/systemFeatures";
import BasicDetails from "../../components/profileMain/basicDetails";
import Certificate from "../../components/profileMain/certificate";
import TeamandContacts from "../../components/profileMain/teamsContacts";
import MediaCaseStudies from "../../components/profileMain/mediaCaseStudies";
import Documents from "../../components/profileMain/documents";

export default function VendorMainPage() {
  return (
    <div>
      {" "}
      <div className="mb-[40px]">
        <div class="container-fluid">
          <div class="row">
            <div
              class="col-12 "
              style={{ paddingLeft: "0px", paddingRight: "0px" }}
            >
              <VendorProMain />
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="mb-[30px]">
          <Row gutter={[16, 16]}>
            {/* Left Column */}
            <Col xs={24} sm={24} md={12}>
              <CredibilityIndex />
            </Col>

            <Col xs={24} sm={24} md={12}>
              <SystemFeatures />
            </Col>
          </Row>
        </div>
        <BasicDetails />
        <Certificate />
        <TeamandContacts />
        <MediaCaseStudies />
        <Documents />
      </div>
    </div>
  );
}
