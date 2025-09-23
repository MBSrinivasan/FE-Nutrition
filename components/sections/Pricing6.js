'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Pricing6() {
    const [checked, setChecked] = useState(false)

    const handleToggleChange = () => {
        setChecked(!checked)
    }
    return (
        <>

            <div className="pricing10-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="pricing8-header text-center margin-b48">
                                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">Pricing
                                    Plan</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24s">Insurance Pro Consultants
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="princing-plans">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12 text-center">
                                            <div className="plan-toggle-wrap">
                                                <div className="toggle-inner home10price">
                                                    <input
                                                        type="checkbox"
                                                        id="ce-toggle"
                                                        checked={checked}
                                                        onChange={handleToggleChange}
                                                    />
                                                    <span className="custom-toggle" />
                                                    <span className="t-month font-ks font-16 lineh-26 weight-500 color39">Monthly</span>
                                                    <span className="t-year font-ks font-16 lineh-26 weight-500 color39">Annual</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="tab-content">
                                        {checked ?
                                            <>
                                                <div id="monthly" style={{ display: 'block' }}>
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="pricing10-boxarea ts">
                                                                <div className="all-center text-center ts">
                                                                    <h1 className="font-20 font-lora lineh-20 weight-600 margin-b14 colorhp3 ts">
                                                                        Basic Plan</h1>
                                                                    <p className="font-16 lineh-26 weight-500 font-ks color color-p10 ts">We
                                                                        offer a wide range of insurance to <br /> be solutions,  health
                                                                        to property.</p>
                                                                    <div className="pricing-allowarea ts">
                                                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elementorspricing keyframe3" />
                                                                        <h1 className="font-48 font-lora weight-600 color lineh-52 ts">$49
                                                                        </h1><span className="font-16 font-ks lineh-16 weight-500 colorhp3">/Per
                                                                            Month</span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Choice Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guardian Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Crafters Insurance
                                                                        Experts</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Secure Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Services</li>
                                                                </ul>
                                                                <div className="div text-center">
                                                                    <Link href="/about" className="font-ks font-16 lineh-16 weight-700 color pricingbtn10 ts">Choose
                                                                        A Plan <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="pricing10-boxarea ts">
                                                                <div className="all-center text-center ts">
                                                                    <h1 className="font-20 font-lora lineh-20 weight-600 margin-b14 colorhp3 ts">
                                                                        Pro Plan</h1>
                                                                    <p className="font-16 lineh-26 weight-500 font-ks color color-p10 ts">We
                                                                        offer a wide range of insurance to <br /> be solutions,  health
                                                                        to property.</p>
                                                                    <div className="pricing-allowarea ts">
                                                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elementorspricing keyframe3" />
                                                                        <h1 className="font-48 font-lora weight-600 color lineh-52 ts">$99
                                                                        </h1><span className="font-16 font-ks lineh-16 weight-500 colorhp3">/Per
                                                                            Month</span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Choice Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guardian Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Crafters Insurance
                                                                        Experts</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Secure Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Services</li>
                                                                </ul>
                                                                <div className="div text-center">
                                                                    <Link href="/about" className="font-ks font-16 lineh-16 weight-700 color pricingbtn10 ts">Choose
                                                                        A Plan <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="pricing10-boxarea ts">
                                                                <div className="all-center text-center ts">
                                                                    <h1 className="font-20 font-lora lineh-20 weight-600 margin-b14 colorhp3 ts">
                                                                        Premium Plan</h1>
                                                                    <p className="font-16 lineh-26 weight-500 font-ks color color-p10 ts">We
                                                                        offer a wide range of insurance to <br /> be solutions,  health
                                                                        to property.</p>
                                                                    <div className="pricing-allowarea">
                                                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elementorspricing keyframe3" />
                                                                        <h1 className="font-48 font-lora weight-600 color lineh-52 ts">$69
                                                                        </h1><span className="font-16 font-ks lineh-16 weight-500 colorhp3">/Per
                                                                            Month</span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Choice Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guardian Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Crafters Insurance
                                                                        Experts</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Secure Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Services</li>
                                                                </ul>
                                                                <div className="div text-center">
                                                                    <Link href="/about" className="font-ks font-16 lineh-16 weight-700 color pricingbtn10 ts">Choose
                                                                        A Plan <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> :
                                            <>
                                                <div id="yearly" style={{ display: 'block' }} className="bacdeg">
                                                    <div className="row">
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="pricing10-boxarea ts">
                                                                <div className="all-center text-center ts">
                                                                    <h1 className="font-20 font-lora lineh-20 weight-600 margin-b14 colorhp3 ts">
                                                                        Basic Plan</h1>
                                                                    <p className="font-16 lineh-26 weight-500 font-ks color color-p10 ts">We
                                                                        offer a wide range of insurance to <br /> be solutions,  health
                                                                        to property.</p>
                                                                    <div className="pricing-allowarea ts">
                                                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elementorspricing keyframe3" />
                                                                        <h1 className="font-48 font-lora weight-600 color lineh-52 ts">$299
                                                                        </h1><span className="font-16 font-ks lineh-16 weight-500 colorhp3">/Per
                                                                            Annual</span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Choice Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guardian Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Crafters Insurance
                                                                        Experts</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Secure Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Services</li>
                                                                </ul>
                                                                <div className="div text-center">
                                                                    <Link href="/about" className="font-ks font-16 lineh-16 weight-700 color pricingbtn10 ts">Choose
                                                                        A Plan <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="pricing10-boxarea ts">
                                                                <div className="all-center text-center ts">
                                                                    <h1 className="font-20 font-lora lineh-20 weight-600 margin-b14 colorhp3 ts">
                                                                        Pro Plan</h1>
                                                                    <p className="font-16 lineh-26 weight-500 font-ks color color-p10 ts">We
                                                                        offer a wide range of insurance to <br /> be solutions,  health
                                                                        to property.</p>
                                                                    <div className="pricing-allowarea ts">
                                                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elementorspricing keyframe3" />
                                                                        <h1 className="font-48 font-lora weight-600 color lineh-52 ts">$599
                                                                        </h1><span className="font-16 font-ks lineh-16 weight-500 colorhp3">/Per
                                                                            Annual</span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Choice Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guardian Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Crafters Insurance
                                                                        Experts</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Secure Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Services</li>
                                                                </ul>
                                                                <div className="div text-center">
                                                                    <Link href="/about" className="font-ks font-16 lineh-16 weight-700 color pricingbtn10 ts">Choose
                                                                        A Plan <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-4 col-md-6">
                                                            <div className="pricing10-boxarea ts">
                                                                <div className="all-center text-center ts">
                                                                    <h1 className="font-20 font-lora lineh-20 weight-600 margin-b14 colorhp3 ts">
                                                                        Premium Plan</h1>
                                                                    <p className="font-16 lineh-26 weight-500 font-ks color color-p10 ts">We
                                                                        offer a wide range of insurance to <br /> be solutions,  health
                                                                        to property.</p>
                                                                    <div className="pricing-allowarea ts">
                                                                        <img src="/assets/images/elementor/elementor64.png" alt="" className="elementorspricing keyframe3" />
                                                                        <h1 className="font-48 font-lora weight-600 color lineh-52 ts">$399
                                                                        </h1><span className="font-16 font-ks lineh-16 weight-500 colorhp3">/Per
                                                                            Annual</span>
                                                                    </div>
                                                                </div>
                                                                <ul>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Choice Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guardian Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Crafters Insurance
                                                                        Experts</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Advisors</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Secure Insurance
                                                                        Consulting</li>
                                                                    <li className="font-16 font-ks lineh-26 weight-500 colorhp3 margin-b20 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>Guard Insurance
                                                                        Services</li>
                                                                </ul>
                                                                <div className="div text-center">
                                                                    <Link href="/about" className="font-ks font-16 lineh-16 weight-700 color pricingbtn10 ts">Choose
                                                                        A Plan <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
