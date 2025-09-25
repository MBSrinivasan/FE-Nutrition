"use client";
import { useState, useEffect } from "react";
import { CheckOutlined } from "@ant-design/icons";
import Button from "@/components/reusableComponents/button/page";
import { InputOTP } from "antd-input-otp";

export default function VerifyPage() {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timeLeft, setTimeLeft] = useState(60);
  const [canResend, setCanResend] = useState(false);

  const [otpValues, setOtpValues] = useState([]);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [timeLeft]);

  // Focus first input on mount
  useEffect(() => {
    const firstInput = document.getElementById("otp-0");
    if (firstInput) {
      setTimeout(() => firstInput.focus(), 100);
    }
  }, []);

  const handleKeyDown = (index, e) => {
    // Handle backspace
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleResend = () => {
    setTimeLeft(60);
    setCanResend(false);
    setOtp(["", "", "", "", "", ""]);
    // Focus first input after a short delay
    setTimeout(() => {
      const firstInput = document.getElementById("otp-0");
      if (firstInput) firstInput.focus();
    }, 100);
  };

  const handleVerify = () => {
    const otpString = otp.join("");
    if (otpString.length === 6) {
      console.log("Verifying OTP:", otpString);
      // Add your verification logic here
    }
  };

  return (
    <div className="min-h-screen bg-[#F6F7F8] flex items-center justify-center p-4 sm:p-6 lg:p-8">
      {/* Main Container */}
      <div className=" max-w-sm sm:max-w-md lg:max-w-lg">
        {/* Verify Code Card */}
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8 lg:p-10 w-full rounded-[10px] p-[40px]">
          {/* BEETLOOP Logo */}
          <div className="text-center py-3 border-b border-[#D8D8D8] mb-[15px] sm:mb-8">
            <img src="/assets/images/allimages/7 1.png" alt="Logo" />
          </div>

          {/* Verify Code Heading */}
          <div className="text-start mb-6 sm:mb-8">
            <div className="text-[24px] font-[700] text-[#000000] mb-2 sm:mb-3">
              Verify code
            </div>
            <p className="text-[12px] font-[400] text-gray-600 leading-relaxed sm:px-0">
              An authentication code has been sent to your email
            </p>

            <p className="text-[12px] font-[400] text-gray-600 leading-relaxed sm:px-0 mb-[30px]">
              Aur***Raj@gmail.com
            </p>
          </div>

          {/* OTP Input Section */}
          <div className="mb-6 sm:mb-8">
            <label className="block text-[18px] font-[600] text-[#606060] mb-3 sm:mb-4 text-start">
              Enter Code
            </label>
            <div className="flex justify-center gap-2 sm:gap-3 lg:gap-4 mb-[10px]">
              <InputOTP
                inputType="custom"
                // Regex below is for all input except numeric
                inputRegex="[^0-9]"
                onChange={setOtpValues}
                value={otpValues}
                inputClassName="input-classname"
                wrapperClassName="wrapper-classname"
              />
            </div>
          </div>

          {/* Resend Section */}

          <div className="flex justify-between items-center w-full mb-6 sm:mb-8 mb-[50px]">
            <p className="text-[12px] sm:text-sm text-gray-600">
              Didn't receive a code?{" "}
              <span
                onClick={canResend ? handleResend : undefined}
                className={`cursor-pointer transition-colors duration-200 ${
                  canResend
                    ? "text-[#FF3C3C]"
                    : "text-[#FF3C3C] cursor-not-allowed"
                } text-[12px] font-[400]`}
              >
                Resend
              </span>
            </p>

            {!canResend && (
              <span className="text-gray-500 font-medium text-[12px]">{timeLeft} sec</span>
            )}
          </div>

          {/* Verify Button */}
          <div className="flex justify-center ">
            <Button
              icon={<CheckOutlined />}
              width="50%"
              height="44px"
              borderRadius="8px"
              onClick={handleVerify}
              disabled={otp.join("").length !== 6}
            >
              <span className="text-sm sm:text-base font-medium">Verify</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
