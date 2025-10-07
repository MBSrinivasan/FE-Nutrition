"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Button from "../../components/reusableComponents/button/page";
import { CheckOutlined } from "@ant-design/icons";
import { Form, Input, Checkbox, Typography } from "antd";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { renderLabel } from "@/utils/constant";

const { Text, Link } = Typography;

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState("");
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const router = useRouter();

  // reCAPTCHA callbacks
  const onRecaptchaSuccess = (token) => {
    setRecaptchaToken(token);
    setIsRecaptchaVerified(true);
    console.log("reCAPTCHA verified:", token);
  };

  const onRecaptchaExpired = () => {
    setRecaptchaToken("");
    setIsRecaptchaVerified(false);
    console.log("reCAPTCHA expired");
  };

  const onRecaptchaError = () => {
    setRecaptchaToken("");
    setIsRecaptchaVerified(false);
    console.log("reCAPTCHA error");
  };

  // Load reCAPTCHA script and set client flag
  useEffect(() => {
    setIsClient(true);

    // Make callbacks global
    window.onRecaptchaSuccess = onRecaptchaSuccess;
    window.onRecaptchaExpired = onRecaptchaExpired;
    window.onRecaptchaError = onRecaptchaError;

    const script = document.createElement("script");
    script.src = "https://www.google.com/recaptcha/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector(
        'script[src="https://www.google.com/recaptcha/api.js"]'
      );
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Remove global callbacks
      delete window.onRecaptchaSuccess;
      delete window.onRecaptchaExpired;
      delete window.onRecaptchaError;
    };
  }, []);

 
  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Add your login logic here
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  const recaptchaRef = useRef(null);

  const handleCaptchaChange = (value) => {
    console.log("Captcha value:", value);
  };
  const SITE_KEY =
    process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
    "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";


    const handleVerify = () => {
      router.push("/");
    };

  return (
    <>
      <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center p-1 sm:p-6 lg:p-8 flex-col">
        {/* Main Container */}
        <div className=" max-w-sm sm:max-w-md lg:max-w-lg mb-[10px]">
          {/* Verify Code Card */}
          <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 w-full rounded-[10px] p-[15px]">
            {/* BEETLOOP Logo */}
            <div className="text-center py-2 border-b border-[#D8D8D8] mb-[5px] sm:mb-8">
              <img src="/assets/images/allimages/7 1.png" alt="Logo" />
            </div>

            {/* Verify Code Heading */}
            <div className="text-center mb-[10px] sm:mb-8">
              <div className="text-[24px] sm:text-[20px] md:text-[24px] lg:text-[32px] xl:text-[40px] font-[700] text-[#000000] mb-1 sm:mb-3">
                Login to Account
              </div>
              <p className="text-[12px] sm:text-[14px] md:text-[16px] lg:text-[18px] xl:text-[20px] font-[400]  leading-relaxed sm:px-0 text-[#202224]">
                Please enter your Email and Password to continue
              </p>
            </div>
            <Form
              name="loginForm"
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              layout="vertical"
              requiredMark={false}
            >
              {/* Email */}
              <Form.Item
                label={renderLabel("Email", true)}
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Please enter a valid email!" },
                ]}
              >
                <Input
                  placeholder="Enter your email"
                  style={{ minWidth: "400px" }}
                />
              </Form.Item>

              {/* Password */}
              <Form.Item
                label={renderLabel("Password", true)}
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password placeholder="Enter your password" />
              </Form.Item>

              {/* Remember Me & Forgot Password */}
              <Form.Item>
                <div className="flex justify-between items-center">
                  <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                  </Form.Item>
                  <Link href="#" style={{ fontSize: "14px" }}>
                    Forgot password?
                  </Link>
                </div>
              </Form.Item>
              <Form.Item
                name="notRobot"
                valuePropName="checked"
                rules={[
                  {
                    validator: (_, value) =>
                      value
                        ? Promise.resolve()
                        : Promise.reject("Please confirm you are not a robot"),
                  },
                ]}
              >
                <div className="flex justify-center">
                  {isClient && (
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={handleCaptchaChange}
                      ref={recaptchaRef}
                    />
                  )}
                </div>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  icon={<CheckOutlined />}
                  minWidth="187px"
                  height="44px"
                  borderRadius="8px"
                  onClick={handleVerify}
                  // disabled={otp.join("").length !== 6}
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
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
            Sign in
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
