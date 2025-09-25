import { Col, Input, Row } from "antd";
import "./footer.css";
import { SendOutlined } from "@ant-design/icons";
import Link from "next/link";

export default function Footer3() {
  return (
    <>
      <div>
        <div className="mainBorderFooter w-full bg-black">
          <div className="mainBorderFooterPadding">
            <Row gutter={[16, 16]}>
              <Col span={6}>
                <div>
                  <div className="text-start text-[24px] text-[#FAFAFA] font-bold mb-6">
                    Exclusive
                  </div>
                  <div className="text-start text-[20px] text-[#FAFAFA] font-medium mb-6">
                    Subscribe
                  </div>
                  <div className="text-start text-[20px] text-[#FAFAFA] font-medium mb-3">
                    Get 10% off your first order
                  </div>
                  <div>
                    <Input
                      placeholder="Enter your Email"
                      style={{
                        width: "100%",
                        maxWidth: "300px",
                        backgroundColor: "transparent",
                        color: "#FAFAFA",
                      }}
                      suffix={<SendOutlined />}
                      className="custom-placeholder"
                    />
                  </div>
                </div>
              </Col>
              <Col span={6}>
                <div className=" text-start">
                  <div className="text-start text-[24px] text-[#FAFAFA] font-bold mb-[24px]">
                    Support
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px] addressWidth">
                    Industrial Estate, 55-E Vakkam, Sidco Industrial Estate,
                    Ambattur, 600058
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    exclusive@beetloop.com
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    +91 98405 25136
                  </div>
                </div>
              </Col>
              <Col span={4}>
                <div className=" text-start">
                  <div className="text-start text-[24px] text-[#FAFAFA] font-bold mb-[24px]">
                    Account
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    My Account
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    Login / Register
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    Cart
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    Shop
                  </div>
                </div>
              </Col>
              <Col span={4}>
                {" "}
                <div className=" text-start">
                  <div className="text-start text-[24px] text-[#FAFAFA] font-bold mb-[24px]">
                    Quick Link
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    Privacy Policy
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    Terms Of Use
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    FAQ
                  </div>
                  <div className="text-start text-[16px] text-[#FAFAFA] font-normal mb-[16px]">
                    Contact
                  </div>
                </div>
              </Col>
              <Col span={4}>
                <div className="text-start">
                  <div className="text-start text-[24px] text-[#FAFAFA] font-bold mb-[24px]">
                    Social Media
                  </div>
                  <div className="icon-social-linksFooter">
                    <ul>
                      <li>
                        <Link href="#">
                          <img
                            src="/assets/images/icons-images/Icon-Facebook.svg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="ml1">
                          <img
                            src="/assets/images/icons-images/Group.svg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="ml1">
                          <img
                            src="/assets/images/icons-images/Group (1).svg"
                            alt=""
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#" className="ml1">
                          <img
                            src="/assets/images/icons-images/Icon-Linkedin.svg"
                            alt=""
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="border2 w-100 margin-area" />
          <div className="text-center copyRight">
            {" "}
            <span className="mr-2">
              <img src="/assets/images/icons-images/copyRight.svg" alt="icon" />
            </span>
            Copyright Rimel 2022. All right reserved
          </div>
        </div>
      </div>
    </>
  );
}
