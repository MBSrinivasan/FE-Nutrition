"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const ForgetPassword = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    
    if (newPassword.length < 8) {
      alert('Password must be at least 8 characters long');
      return;
    }
    
    console.log('Password changed:', { newPassword, confirmPassword });
  };

  const handleClickShowNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <style jsx>{`
        @media (min-width: 768px) and (max-width: 1024px) {
          .tablet-centered-card {
            margin: 0 auto !important;
            display: flex !important;
            justify-content: center !important;
            align-items: center !important;
          }
        }
      `}</style>
      <div className="min-vh-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: '#F6F7F8' }}>
        <div className="container-fluid px-2 px-sm-3 px-md-4">
          <div className="row justify-content-center">
            <div className="col-12">
              {/* Main Card - Mobile Responsive */}
              <div className="card border-0 shadow-sm tablet-centered-card" style={{ 
                borderRadius: '24px', 
                border: '0.3px solid #B9B9B9',
                maxWidth: '500px',
                width: '100%',
                minHeight: '520px',
                margin: '0 auto',
                backgroundColor: '#FFFFFF'
              }}>
              <div className="card-body p-0">
                {/* Logo Section - Mobile Responsive */}
                <div className="text-center" style={{ 
                  paddingTop: '20px',
                  paddingBottom: '15px',
                  paddingLeft: '15px',
                  paddingRight: '15px'
                }}>
                  <Image 
                    src="/assets/images/logo/beetloop-logo-40c6df.png" 
                    alt="Beetloop Logo" 
                    width={250} 
                    height={48} 
                    style={{ 
                      objectFit: 'contain', 
                      maxWidth: '100%', 
                      height: 'auto',
                      width: 'clamp(200px, 60vw, 250px)'
                    }}
                  />
                </div>

                {/* Divider - Mobile Responsive */}
                <div style={{ 
                  width: '95%',
                  maxWidth: '420px',
                  height: '1px',
                  backgroundColor: '#D8D8D8',
                  margin: '0 auto 15px auto'
                }} />

                {/* Form Container - Mobile Responsive */}
                <div style={{ width: '95%', maxWidth: '420px', margin: '0 auto', padding: '0 15px' }}>
                  {/* Enter New Password Field */}
                  <div style={{ marginBottom: 'clamp(25px, 6vw, 40px)' }}>
                    <label style={{ 
                      fontSize: 'clamp(16px, 4vw, 18px)',
                      fontWeight: '600',
                      color: '#606060',
                      fontFamily: 'Montserrat, sans-serif',
                      marginBottom: '12px',
                      display: 'block'
                    }}>
                      Enter New Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showNewPassword ? 'text' : 'password'}
                        className="form-control"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                        placeholder=""
                        style={{
                          height: 'clamp(50px, 10vw, 65px)',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '8px',
                          border: '0.6px solid #D5D5D5',
                          fontSize: 'clamp(14px, 4vw, 16px)',
                          fontWeight: '600',
                          color: '#A6A6A6',
                          fontFamily: 'Nunito Sans, sans-serif',
                          paddingLeft: newPassword.length === 0 ? 'clamp(15px, 4vw, 22px)' : 'clamp(15px, 4vw, 22px)',
                          paddingRight: 'clamp(50px, 12vw, 60px)',
                          width: '100%'
                        }}
                        required
                      />
                      {/* Password dots when empty - Mobile Responsive */}
                        {!showNewPassword && newPassword.length === 0 && (
                        <div className="position-absolute" style={{ 
                          top: '50%',
                          left: 'clamp(15px, 4vw, 22px)',
                          transform: 'translateY(-50%)',
                          display: 'flex',
                          gap: 'clamp(12px, 3vw, 16px)',
                          pointerEvents: 'none'
                        }}>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: 'clamp(10px, 2.5vw, 14px)',
                                height: 'clamp(10px, 2.5vw, 14px)',
                                backgroundColor: '#A6A6A6',
                                borderRadius: '50%'
                              }}
                            />
                          ))}
                        </div>
                      )}
                      {/* Eye icon - Mobile Responsive */}
                      <button
                        type="button"
                        className="btn btn-link position-absolute"
                        onClick={handleClickShowNewPassword}
                        style={{ 
                          right: 'clamp(15px, 4vw, 22px)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          border: 'none',
                          background: 'none',
                          padding: '0',
                          width: 'clamp(24px, 6vw, 29px)',
                          height: 'clamp(18px, 4.5vw, 20.69px)',
                          zIndex: 10,
                          cursor: 'pointer'
                        }}
                        aria-label={showNewPassword ? "Hide password" : "Show password"}
                      >
                        {showNewPassword ? (
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#883651">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                        ) : (
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#883651">
                            <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Confirm Password Field */}
                  <div style={{ marginBottom: 'clamp(20px, 5vw, 35px)' }}>
                    <label style={{ 
                      fontSize: 'clamp(16px, 4vw, 18px)',
                      fontWeight: '600',
                      color: '#606060',
                      fontFamily: 'Montserrat, sans-serif',
                      marginBottom: '12px',
                      display: 'block'
                    }}>
                      Confirm Password
                    </label>
                    <div className="position-relative">
                      <input
                        type={showConfirmPassword ? 'text' : 'password'}
                        className="form-control"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder=""
                        style={{
                          height: 'clamp(50px, 10vw, 65px)',
                          backgroundColor: '#FFFFFF',
                          borderRadius: '8px',
                          border: '0.6px solid #D5D5D5',
                          fontSize: 'clamp(14px, 4vw, 16px)',
                          fontWeight: '600',
                          color: '#A6A6A6',
                          fontFamily: 'Nunito Sans, sans-serif',
                          paddingLeft: confirmPassword.length === 0 ? 'clamp(15px, 4vw, 22px)' : 'clamp(15px, 4vw, 22px)',
                          paddingRight: 'clamp(50px, 12vw, 60px)',
                          width: '100%'
                        }}
                        required
                      />
                      {/* Password dots when empty - Mobile Responsive */}
                      {!showConfirmPassword && confirmPassword.length === 0 && (
                        <div className="position-absolute" style={{ 
                          top: '50%',
                          left: 'clamp(15px, 4vw, 22px)',
                          transform: 'translateY(-50%)',
                          display: 'flex',
                          gap: 'clamp(12px, 3vw, 16px)',
                          pointerEvents: 'none'
                        }}>
                          {[...Array(6)].map((_, i) => (
                            <div
                              key={i}
                              style={{
                                width: 'clamp(10px, 2.5vw, 14px)',
                                height: 'clamp(10px, 2.5vw, 14px)',
                                backgroundColor: '#A6A6A6',
                                borderRadius: '50%'
                              }}
                            />
                          ))}
                        </div>
                      )}
                      {/* Eye icon - Mobile Responsive */}
                      <button
                        type="button"
                        className="btn btn-link position-absolute"
                        onClick={handleClickShowConfirmPassword}
                        style={{ 
                          right: 'clamp(15px, 4vw, 22px)',
                          top: '50%',
                          transform: 'translateY(-50%)',
                          border: 'none',
                          background: 'none',
                          padding: '0',
                          width: 'clamp(24px, 6vw, 29px)',
                          height: 'clamp(18px, 4.5vw, 20.69px)',
                          zIndex: 10,
                          cursor: 'pointer'
                        }}
                        aria-label={showConfirmPassword ? "Hide password" : "Show password"}
                      >
                        {showConfirmPassword ? (
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#883651">
                            <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
                          </svg>
                        ) : (
                          <svg width="100%" height="100%" viewBox="0 0 24 24" fill="#883651">
                            <path d="M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78l3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"/>
                          </svg>
                        )}
                      </button>
                    </div>
                  </div>

                  {/* Change Password Button - Exact Figma styling */}
                  <div className="text-center">
                    <button
                      type="submit"
                      className="btn"
                      style={{
                        height: 'clamp(45px, 7vw, 50px)',
                        borderRadius: '8px',
                        backgroundColor: '#7A1F3D',
                        fontSize: 'clamp(16px, 4vw, 18px)',
                        fontWeight: '700',
                        color: 'white',
                        fontFamily: 'Nunito Sans, sans-serif',
                        border: 'none',
                        opacity: '0.9',
                        width: '100%',
                        maxWidth: '350px',
                        margin: '0 auto',
                        display: 'block',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#6B1A35';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(-1px)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 8px rgba(122, 31, 61, 0.3)';
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#7A1F3D';
                        (e.currentTarget as HTMLButtonElement).style.transform = 'translateY(0)';
                        (e.currentTarget as HTMLButtonElement).style.boxShadow = 'none';
                      }}
                    >
                      Change Password
                    </button>
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
};

export default ForgetPassword;
