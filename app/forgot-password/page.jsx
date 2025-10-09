"use client";
import React from "react";
import { Form, Input, Select, Typography } from "antd";
import Button from "../../components/reusableComponents/button/page";
import { useRouter } from "next/navigation";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Text, Link } = Typography;
const { Option } = Select;

const ForgetPassword = () => {
  const router = useRouter();

  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Add API call logic here
    // Navigate to change-password page after successful validation
    router.push("/change-password");
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center p-1 sm:p-6 lg:p-8">
      <div className="bg-white rounded-[10px] shadow-lg  max-w-sm sm:max-w-md lg:max-w-lg p-3 sm:p-8 lg:p-10">
        {/* Logo */}
        <div className="text-center border-b border-[#D8D8D8] pb-2 mb-[10px]">
          <img
            src="/assets/images/allimages/7 1.png"
            alt="Logo"
            className="mx-auto w-[150px] sm:w-[180px]"
          />
        </div>

        {/* Title */}
        <div className="text-start mb-[10px]">
          <h1 className="text-[20px] sm:text-[24px] md:text-[28px] lg:text-[32px] font-[700] text-[#000000] mb-1">
            Forgot Password?
          </h1>
          <p className="text-[14px] sm:text-[16px] md:text-[18px] text-[#202224]">
            Please enter your email to reset the password.
          </p>
        </div>

        {/* Form */}
        <Form
          layout="vertical"
          onFinish={onFinish}
          requiredMark={false}
          autoComplete="off"
        >
          <Form.Item
            label="Email*"
            name="email"
            rules={[
              { required: true, message: "Please enter your email" },
              { type: "email", message: "Enter a valid email" },
            ]}
            style={{width:"400px"}}
            
          >
            <Input placeholder="example@email.com" />
          </Form.Item>

          <Form.Item
            label="Security Question*"
            name="securityQuestion"
            rules={[{ required: true, message: "Please select a question" }]}
          >
            <Select placeholder="What is your pet’s name?">
              <Option value="pet">What is your pet’s name?</Option>
              <Option value="school">What is your first school name?</Option>
              <Option value="city">What city were you born in?</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Security Answer*"
            name="securityAnswer"
            rules={[{ required: true, message: "Please enter your answer" }]}
          >
            <Input placeholder="Your answer" />
          </Form.Item>

          {/* Submit Button */}
          <Form.Item className="mt-6 d-flex justify-center items-center">
            <Button
              minWidth="180px"
              height="45px"
              bgColor="#963D5A"
              textColor="#FFFFFF"
            >
              Reset Password
            </Button>
          </Form.Item>

          {/* Back to Login */}
          <div className="text-center mt-3 d-flex justify-center">
            <div>
            <ArrowLeftOutlined style={{marginTop:"2px", marginRight:"5px"}} />
            </div>
            <div
              onClick={() => router.push("/login")}
              className="text-[#000] hover:underline cursor-pointer"
            >
              Back to Login
            </div>
          </div>
        </Form>
      </div>
    </div>
  );
};

export default ForgetPassword;

