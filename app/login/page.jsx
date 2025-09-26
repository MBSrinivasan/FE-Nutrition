"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState('');
  const [isRecaptchaVerified, setIsRecaptchaVerified] = useState(false);

  // reCAPTCHA callbacks
  const onRecaptchaSuccess = (token) => {
    setRecaptchaToken(token);
    setIsRecaptchaVerified(true);
    console.log('reCAPTCHA verified:', token);
  };

  const onRecaptchaExpired = () => {
    setRecaptchaToken('');
    setIsRecaptchaVerified(false);
    console.log('reCAPTCHA expired');
  };

  const onRecaptchaError = () => {
    setRecaptchaToken('');
    setIsRecaptchaVerified(false);
    console.log('reCAPTCHA error');
  };

  // Load reCAPTCHA script
  useEffect(() => {
    // Make callbacks global
    window.onRecaptchaSuccess = onRecaptchaSuccess;
    window.onRecaptchaExpired = onRecaptchaExpired;
    window.onRecaptchaError = onRecaptchaError;

    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup
      const existingScript = document.querySelector('script[src="https://www.google.com/recaptcha/api.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      // Remove global callbacks
      delete window.onRecaptchaSuccess;
      delete window.onRecaptchaExpired;
      delete window.onRecaptchaError;
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!isRecaptchaVerified) {
      alert('Please complete the reCAPTCHA verification');
      return;
    }
    
    console.log('Login submitted:', { email, password, rememberMe, recaptchaToken });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#F6F7F8' }}>
      <div className="container-fluid px-3 px-md-4">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
            {/* Main Card */}
            <div className="card border-0 shadow-sm" style={{ 
              borderRadius: '24px', 
              border: '0.3px solid #B9B9B9',
              maxWidth: '500px',
              margin: '0 auto'
            }}>
              <div className="card-body p-2 p-md-3">
                {/* Logo Section */}
                <div className="text-center mb-2 mb-md-2">
                <Image src="/assets/images/allimages/7 1.png" alt="Beetloop Logo" width={190} height={50} />
                </div>

                {/* Divider */}
                <hr className="my-1 my-md-2" style={{ 
                  borderColor: '#B9B9B9', 
                  width: '85%', 
                  margin: '0 auto',
                  marginTop: '2px'
                }} />
                <div style={{ height: '12px' }}></div>

                {/* Header */}
                <div className="text-center mb-2 mb-md-3">
                  <h2 className="mb-2 mb-md-3" style={{ 
                    fontSize: 'clamp(24px, 4vw, 26px)',
                    fontWeight: '600',
                    color: '#202224',
                    fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif',
                  }}>
                    Login to Account
                  </h2>
                  <p className="mb-0" style={{ 
                    fontSize: 'clamp(13px, 2vw, 14px)',
                    fontWeight: '300',
                    color: '#202224',
                    opacity: '0.8',
                    fontFamily: 'Nunito Sans, sans-serif',
                    width: '90%',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: '0 auto'
                  }}>
                    Please enter your Email and Password to continue
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} style={{ width: '85%', margin: '0 auto' }}>
                  {/* Email Field */}
                  <div className="mb-2 mb-md-3">
                    <label className="form-label mb-2" style={{ 
                      fontSize: 'clamp(13px, 2.5vw, 18px)',
                      fontWeight: '400',
                      color: '#202224',
                      opacity: '0.8',
                      fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif'
                    }}>
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="esteban_schiller@gmail.com"
                      style={{
                        height: 'clamp(36px, 5.5vw, 44px)',
                        backgroundColor: '#F1F4F9',
                        borderRadius: '8px',
                        border: '1px solid #D8D8D8',
                        fontSize: 'clamp(14px, 2.5vw, 18px)',
                        fontWeight: '600',
                        color: '#A6A6A6',
                        fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif'
                      }}
                    />
                  </div>
                <div style={{ height: '12px' }}></div>
                  {/* Password Field */}
                  <div className="mb-2 mb-md-3">
                    <label className="form-label mb-2" style={{ 
                      fontSize: 'clamp(14px, 2.5vw, 18px)',
                      fontWeight: '600',
                      color: '#202224',
                      opacity: '0.8',
                      fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif'
                    }}>
                      Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder=""
                        style={{
                          height: 'clamp(36px, 5.5vw, 44px)',
                          backgroundColor: '#F1F4F9',
                          borderRadius: '8px',
                          border: '1px solid #D8D8D8',
                          fontSize: 'clamp(14px, 2.5vw, 18px)',
                          fontWeight: '600',
                          color: '#A6A6A6',
                          fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif',
                          paddingLeft: password.length === 0 ? '50px' : '12px'
                        }}
                      />
                      {/* Password dots when empty */}
                      {password.length === 0 && (
                        <div className="position-absolute top-50 start-0 translate-middle-y" style={{ left: '15px' }}>
                          <div className="d-flex gap-1">
                            {[...Array(6)].map((_, i) => (
                              <div
                                key={i}
                                style={{
                                  width: '10px',
                                  height: '14px',
                                  backgroundColor: '#A6A6A6',
                                  borderRadius: '50%',
                                  marginLeft:'5px'
                                }}
                              />
                            ))}
                          </div>
                        </div>
                      )}
                      <button
                        type="button"
                        className="btn btn-link position-absolute top-50 end-0 translate-middle-y"
                        onClick={handleClickShowPassword}
                        style={{ 
                          right: '10px',
                          border: 'none',
                          background: 'none',
                          padding: '0',
                          marginRight:'5px'
                        }}
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? (
                          <span role="img" aria-label="eye">👁️</span>
                        ) : (
                          <span role="img" aria-label="eye with slash">👁️‍🗨️</span>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me and Forgot Password */}
                  <div className="d-flex justify-content-between align-items-center flex-column flex-sm-row gap-2 mb-2 mb-md-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        checked={rememberMe}
                        onChange={(e) => setRememberMe(e.target.checked)}
                        style={{
                          width: '15px',
                          height: '15px',
                          borderColor: '#A3A3A3'
                        }}
                      />
                      <label className="form-check-label" style={{ 
                        fontSize: 'clamp(12px, 2vw, 14px)',
                        fontWeight: '400',
                        color: '#202224',
                        opacity: '0.6',
                        fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif',
                      }}>
                        Remember Me
                      </label>
                    </div>
                    <button
                      type="button"
                      className="btn btn-link p-0"
                      style={{
                        fontSize: 'clamp(12px, 2vw, 14px)',
                        fontWeight: '400',
                        color: '#883651',
                        fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif',
                        textDecoration: 'none'
                      }}
                    >
                      Forgot Password?
                    </button>
                  </div>

                  {/* Google reCAPTCHA Section */}
                  <div className="text-center mb-2 mb-md-3">
                    <div className="d-flex justify-content-center">
                      <div 
                        className="g-recaptcha" 
                        data-sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                        data-callback="onRecaptchaSuccess"
                        data-expired-callback="onRecaptchaExpired"
                        data-error-callback="onRecaptchaError"
                        style={{ transform: 'scale(0.7)', transformOrigin: 'center' }}
                      ></div>
                    </div>
                    {isRecaptchaVerified && (
                      <div className="mt-2">
                        <small className="text-success d-flex align-items-center justify-content-center gap-1" style={{ 
                          fontSize: '11px',
                          fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif',
                          fontWeight: '500'
                        }}>
                          ✓ reCAPTCHA verified
                        </small>
                      </div>
                    )}
                  </div>

                  {/* Login Button */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn w-100"
                      disabled={!isRecaptchaVerified}
                      style={{
                        height: 'clamp(42px, 6vw, 50px)',
                        borderRadius: '8px',
                        backgroundColor: isRecaptchaVerified ? '#7A1F3D' : '#E0E0E0',
                        fontSize: 'clamp(14px, 2.5vw, 16px)',
                        fontWeight: '600',
                        color: isRecaptchaVerified ? 'white' : '#9E9E9E',
                        fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif',
                        border: 'none',
                        boxShadow: isRecaptchaVerified ? '0 2px 4px rgba(122, 31, 61, 0.2)' : 'none',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        if (isRecaptchaVerified) {
                          e.target.style.backgroundColor = '#6B1A35';
                          e.target.style.boxShadow = '0 4px 8px rgba(122, 31, 61, 0.3)';
                          e.target.style.transform = 'translateY(-1px)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (isRecaptchaVerified) {
                          e.target.style.backgroundColor = '#7A1F3D';
                          e.target.style.boxShadow = '0 2px 4px rgba(122, 31, 61, 0.2)';
                          e.target.style.transform = 'translateY(0)';
                        }
                      }}
                    >
                      {isRecaptchaVerified ? 'Login' : 'Complete reCAPTCHA to Login'}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Sign Up Section */}
            <div className="text-center mt-2 mt-md-3">
              <div className="d-flex align-items-center justify-content-center flex-column flex-sm-row gap-2">
                <span style={{ 
                  fontSize: 'clamp(14px, 2.5vw, 18px)',
                  fontWeight: '600',
                  color: '#202224',
                  opacity: '0.65',
                  fontFamily: 'var(--nunito-font-family), Nunito Sans, sans-serif'
                }}>
                  Don't have an account?
                </span>
                <button
                  className="btn"
                  style={{
                    height: 'clamp(28px, 4vw, 32px)',
                    padding: '0 16px',
                    backgroundColor: '#7A1F3D',
                    opacity: '0.9',
                    borderRadius: '8px',
                    fontSize: 'clamp(14px, 2.5vw, 18px)',
                    fontWeight: '400',
                    color: 'white',
                    fontFamily: 'var(--nunito-font-family), Montserrat, sans-serif',
                    border: 'none'
                  }}
                >
                  Sign up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;