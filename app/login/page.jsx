"use client";
import React, { useState, useEffect, useRef } from "react";
import "./login.css";
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
                  // style={{ minWidth: "400px" }}
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
                  <Link href="/forgetpassword" style={{ fontSize: "14px" }}>
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
                  {/* {isClient && (
                    <ReCAPTCHA
                      sitekey={SITE_KEY}
                      onChange={handleCaptchaChange}
                      ref={recaptchaRef}
                    />
                  )} */}
                  <div class="box-container d-flex justify-between w-[300px]">
                    <div>
                      {" "}
                      <Checkbox>
                        <p class="robot">I'm not a robot</p>
                      </Checkbox>
                    </div>
                    <div className="d-flex flex-col ">
                      <div className="d-flex justify-end marginRight-5">
                        {" "}
                        <svg
                          width="31"
                          height="30"
                          viewBox="0 0 31 30"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M30.0906 14.9789C30.0899 14.7631 30.0849 14.5485 30.0753 14.335V2.15984L26.7093 5.52576C23.9545 2.15375 19.7637 0 15.0697 0C10.1847 0 5.84492 2.33169 3.10156 5.94269L8.61873 11.5179C9.15941 10.5179 9.92751 9.65906 10.8536 9.01039C11.8168 8.25873 13.1816 7.64415 15.0695 7.64415C15.2976 7.64415 15.4736 7.6708 15.603 7.72101C17.9421 7.90563 19.9696 9.19653 21.1635 11.0702L17.2581 14.9755C22.2047 14.9561 27.7928 14.9447 30.0902 14.978"
                            fill="#1C3AA9"
                          />
                          <path
                            d="M14.9789 0.000610352C14.7631 0.00131601 14.5485 0.00633868 14.335 0.0159818H2.15983L5.52576 3.38191C2.15375 6.13673 0 10.3275 0 15.0216C0 19.9065 2.33173 24.2463 5.94269 26.9897L11.5179 21.4725C10.5179 20.9318 9.65906 20.1637 9.01039 19.2376C8.25877 18.2744 7.64415 16.9096 7.64415 15.0217C7.64415 14.7937 7.6708 14.6176 7.72101 14.4883C7.90563 12.1492 9.19653 10.1216 11.0702 8.92779L14.9755 12.8331C14.9561 7.88654 14.9447 2.29845 14.978 0.00103747"
                            fill="#4285F4"
                          />
                          <path
                            d="M0 15.0211C0.00072284 15.2369 0.00569389 15.4514 0.0153656 15.665V27.8402L3.38129 24.4742C6.13611 27.8462 10.3269 30 15.021 30C19.9059 30 24.2457 27.6683 26.9891 24.0573L21.4719 18.4821C20.9312 19.4821 20.1631 20.3409 19.237 20.9896C18.2738 21.7413 16.909 22.3558 15.0211 22.3558C14.7931 22.3558 14.617 22.3292 14.4877 22.279C12.1486 22.0944 10.121 20.8035 8.92718 18.9298L12.8325 15.0245C7.88593 15.0439 2.29784 15.0553 0.000429605 15.022"
                            fill="#ABABAB"
                          />
                        </svg>
                      </div>
                      <div class="logo-text">
                            <p>reCAPTCHA</p>
                          </div>
                          <div>
                          <p class="logo-text-tos">Privacy - Terms</p>
                          </div>
                    </div>
                    {/* <div>
                      <div class="container">
                        <div class="logo">
                          <svg
                            width="31"
                            height="30"
                            viewBox="0 0 31 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M30.0906 14.9789C30.0899 14.7631 30.0849 14.5485 30.0753 14.335V2.15984L26.7093 5.52576C23.9545 2.15375 19.7637 0 15.0697 0C10.1847 0 5.84492 2.33169 3.10156 5.94269L8.61873 11.5179C9.15941 10.5179 9.92751 9.65906 10.8536 9.01039C11.8168 8.25873 13.1816 7.64415 15.0695 7.64415C15.2976 7.64415 15.4736 7.6708 15.603 7.72101C17.9421 7.90563 19.9696 9.19653 21.1635 11.0702L17.2581 14.9755C22.2047 14.9561 27.7928 14.9447 30.0902 14.978"
                              fill="#1C3AA9"
                            />
                            <path
                              d="M14.9789 0.000610352C14.7631 0.00131601 14.5485 0.00633868 14.335 0.0159818H2.15983L5.52576 3.38191C2.15375 6.13673 0 10.3275 0 15.0216C0 19.9065 2.33173 24.2463 5.94269 26.9897L11.5179 21.4725C10.5179 20.9318 9.65906 20.1637 9.01039 19.2376C8.25877 18.2744 7.64415 16.9096 7.64415 15.0217C7.64415 14.7937 7.6708 14.6176 7.72101 14.4883C7.90563 12.1492 9.19653 10.1216 11.0702 8.92779L14.9755 12.8331C14.9561 7.88654 14.9447 2.29845 14.978 0.00103747"
                              fill="#4285F4"
                            />
                            <path
                              d="M0 15.0211C0.00072284 15.2369 0.00569389 15.4514 0.0153656 15.665V27.8402L3.38129 24.4742C6.13611 27.8462 10.3269 30 15.021 30C19.9059 30 24.2457 27.6683 26.9891 24.0573L21.4719 18.4821C20.9312 19.4821 20.1631 20.3409 19.237 20.9896C18.2738 21.7413 16.909 22.3558 15.0211 22.3558C14.7931 22.3558 14.617 22.3292 14.4877 22.279C12.1486 22.0944 10.121 20.8035 8.92718 18.9298L12.8325 15.0245C7.88593 15.0439 2.29784 15.0553 0.000429605 15.022"
                              fill="#ABABAB"
                            />
                          </svg>
                          <div class="logo-text">
                            <p>reCAPTCHA</p>
                          </div>
                        </div>
                       
                      </div>
                    </div> */}
                  </div>
                </div>
              </Form.Item>

              {/* Submit Button */}
              <Form.Item style={{ display: "flex", justifyContent: "center" }}>
                <Button
                  minWidth="187px"
                  height="44px"
                  borderRadius="8px"
                  onClick={handleVerify}
                  fontSize="16px"
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
