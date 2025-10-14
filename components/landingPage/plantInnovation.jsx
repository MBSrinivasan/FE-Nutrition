"use client";
import { ArrowRightOutlined } from "@ant-design/icons";
import { Button, Input } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function PlantInnovation() {
  return (
    <>
      <div className="welcome4-section-area">
        <div className="flex w-full justify-center">
   
        <div className="w-[80%] mx-auto">
        <div className="container-fluid">
          <div className="row align-items-center">
            <div
              className="col-lg-6"
              data-aos="fade-right"
              data-aos-duration={1000}
            >
              <div className="welcome4-textarea">
                <h1 className="text-[32px] sm:text-[36px] md:text-[40px] lg:text-[44px] xl:text-[48px] 2xl:text-[56px] weight-600 text-[#111827] text-start mb-[5px]">
                  Advance Your <br></br>
                  Food Plant Innovation
                </h1>
                <h2 className="text-[28px] sm:text-[30px] md:text-[32px] lg:text-[34px] xl:text-[36px] 2xl:text-[40px] weight-500 text-[#7A1F3D] text-start mb-[10px]">
                  From Idea to Global Market
                </h2>
                <p className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] 2xl:text-[26px] weight-500 text-[#4E5E6E] text-start mb-[26px]
                leading-[25px] sm:leading-[27px] md:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[36px]
                ">
                  Beetloop is a comprehensive B2B ecosystem for food, beverage,
                  nutraceutical, and cosmeceutical industries — offering turnkey
                  R&D, testing, formulation, compliance, marketing, financing,
                  and distribution services. We help you transform ideas into
                  market-ready, regulatory-compliant, and consumer-trusted
                  products.
                </p>
                <div className="mb-[26px] transform transition-transform duration-300 hover:scale-105">
                  <Input
                    placeholder="Search ingredients, formulations, or business services..."
                    style={{ width: "100%", height: "46px" }}
                  />
                </div>
                <div className="mb-[13px]">
                  <Button type="primary" size={3} className="h-[47px] w-[168px] bg-[#7A1F3D] weight-600 transform transition-transform duration-300 hover:scale-105">
                    Get Start
                    <ArrowRightOutlined  style={{ marginLeft: 8 }} />{" "}
                    {/* icon on right */}
                  </Button>
                </div>
                <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] 2xl:text-[22px] weight-500 text-[#4E5E6E] text-start mb-[26px]
                leading-[25px] sm:leading-[27px] md:leading-[30px] lg:leading-[32px] xl:leading-[34px] 2xl:leading-[36px]
                ">
               Simplify innovation, accelerate growth.
                </p>
              </div>
            </div>
            <div
              className="col-lg-6"
              data-aos="fade-left"
              data-aos-duration={1000}
            >
              <div className="welcome4-positionalarea">
                <div className="imag4">
                  <div className="ima1-4">
                    <img
                      src="/assets/images/allimages/top-poster.svg"
                      alt=""
                      data-aos="zoom-out-up"
                      data-aos-duration={1200}
                    />
                  </div>
                </div>
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
