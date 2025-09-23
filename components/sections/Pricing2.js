
'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Pricing2() {
    const [checked, setChecked] = useState(false)

    const handleToggleChange = () => {
        setChecked(!checked)
    }
    return (
        <>

            <div className="pricing-plan-starts section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos-duration={800}>
                            <div className="pricing-plan-header text-center margin-b60">
                                <span className="font-18 font-ks lineh26 weight-500 color34 margin-b d-inline-block">Pricing
                                    Plan</span>
                                <h1 className="font-lora font-42 lineh-50 weight-500 margin-b24 color-17">Here's how our <span className="tax-consulting">tax consulting</span> services can benefit you</h1>
                            </div>
                        </div>
                        <div className="princing-plans">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center" data-aos-duration={800}>
                                        <div className="plan-toggle-wrap">
                                            <div className="toggle-inner inner2">
                                                <input
                                                    type="checkbox"
                                                    id="ce-toggle"
                                                    checked={checked}
                                                    onChange={handleToggleChange}
                                                />
                                                <span className="custom-toggle" />
                                                <span className="t-month font-ks font-16 lineh-26 weight-500 colop">Monthly</span>
                                                <span className="t-year font-ks font-16 lineh-26 weight-500 colop">Annual</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content">
                                    {checked ?
                                        <>
                                            <div id="monthly" style={{ display: 'block' }}>
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-4" data-aos-duration={1000}>
                                                        <div className="price-box box-after">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-lora font-24 weight-500 lineh-26 color34">Basic</h2>
                                                                <p className="font-ks font-16 lineh-26 weight-500 colop margin-b24">Make
                                                                    your Froms more Beautuful on- a Brand  Analyze</p>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-lora color34">$29<span className="font-lora font-30 weight-500 lineh-50 color-17">/mo</span>
                                                                </h2>
                                                                <p className="billed">Billed Yearly</p>
                                                                <div className="theme-btn2 margin-t32 w-btn-100">
                                                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex w-btn-100 text-center">Get
                                                                        a Consultation <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> IRS Tax
                                                                            Problems</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Payroll
                                                                            Services</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Tax
                                                                            Prepration and Planning</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Company
                                                                            Formation</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Business
                                                                            Immigration</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Bookkeeping
                                                                            and Virtual CFO</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check-circle.svg" alt="" />
                                                                            Businessman Consulting</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check-circle.svg" alt="" />
                                                                            Accounting/Virtual Controller</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4" data-aos-duration={1200}>
                                                        <div className="price-box box-after pricingbox3-bg">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-lora font-24 weight-500 lineh-26 color">Plus</h2>
                                                                <p className="font-ks font-16 lineh-26 weight-500 color35 margin-b24">Make
                                                                    your Froms more Beautuful on- a Brand  Analyze</p>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-lora color">$49<span className="font-lora font-30 weight-500 lineh-50 color">/mo</span>
                                                                </h2>
                                                                <p className="billed color35">Billed Yearly</p>
                                                                <div className="theme-btn2 margin-t32 w-btn-100">
                                                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex w-btn-100 text-center">Get
                                                                        a Consultation <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> IRS Tax
                                                                            Problems</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Payroll
                                                                            Services</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Tax
                                                                            Prepration and Planning</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Company
                                                                            Formation</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Business
                                                                            Immigration</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Bookkeeping
                                                                            and Virtual CFO</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Businessman
                                                                            Consulting</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" />
                                                                            Accounting/Virtual Controller</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4" data-aos-duration={1400}>
                                                        <div className="price-box box-after">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-lora font-24 weight-500 lineh-26 color34">Business</h2>
                                                                <p className="font-ks font-16 lineh-26 weight-500 colop margin-b24">Make
                                                                    your Froms more Beautuful on- a Brand  Analyze</p>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-lora color34">$99<span className="font-lora font-30 weight-500 lineh-50 color-17">/mo</span>
                                                                </h2>
                                                                <p className="billed">Billed Yearly</p>
                                                                <div className="theme-btn2 margin-t32 w-btn-100">
                                                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex w-btn-100 text-center">Get
                                                                        a Consultation <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> IRS Tax
                                                                            Problems</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Payroll
                                                                            Services</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Tax
                                                                            Prepration and Planning</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Company
                                                                            Formation</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Business
                                                                            Immigration</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Bookkeeping
                                                                            and Virtual CFO</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Businessman
                                                                            Consulting</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check-circle.svg" alt="" />
                                                                            Accounting/Virtual Controller</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <div id="yearly" style={{ display: 'block' }}>
                                                <div className="row">
                                                    <div className="col-md-6 col-lg-4" data-aos-duration={1000}>
                                                        <div className="price-box box-after">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-lora font-24 weight-500 lineh-26 color34">Basic</h2>
                                                                <p className="font-ks font-16 lineh-26 weight-500 colop margin-b24">Make
                                                                    your Froms more Beautuful on- a Brand  Analyze</p>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-lora color34">$999<span className="font-lora font-30 weight-500 lineh-50 color-17">/1
                                                                    yr</span></h2>
                                                                <p className="billed">Billed Yearly</p>
                                                                <div className="theme-btn2 margin-t32 w-btn-100">
                                                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex w-btn-100 text-center">Get
                                                                        a Consultation <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> IRS Tax
                                                                            Problems</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Payroll
                                                                            Services</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Tax
                                                                            Prepration and Planning</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Company
                                                                            Formation</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Business
                                                                            Immigration</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Bookkeeping
                                                                            and Virtual CFO</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check-circle.svg" alt="" />
                                                                            Businessman Consulting</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check-circle.svg" alt="" />
                                                                            Accounting/Virtual Controller</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4" data-aos-duration={1200}>
                                                        <div className="price-box box-after pricingbox3-bg">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-lora font-24 weight-500 lineh-26 color34">Plus</h2>
                                                                <p className="font-ks font-16 lineh-26 weight-500 colop margin-b24">Make
                                                                    your Froms more Beautuful on- a Brand  Analyze</p>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-lora color34">$1299<span className="font-lora font-30 weight-500 lineh-50 color">/1 yr</span>
                                                                </h2>
                                                                <p className="billed">Billed Yearly</p>
                                                                <div className="theme-btn2 margin-t32 w-btn-100">
                                                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex w-btn-100 text-center">Get
                                                                        a Consultation <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> IRS Tax
                                                                            Problems</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Payroll
                                                                            Services</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Tax
                                                                            Prepration and Planning</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Company
                                                                            Formation</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Business
                                                                            Immigration</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Bookkeeping
                                                                            and Virtual CFO</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" /> Businessman
                                                                            Consulting</li>
                                                                        <li className="font-ks font-16 weight-500 color"><img src="/assets/images/icons/check.svg" alt="" />
                                                                            Accounting/Virtual Controller</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4" data-aos-duration={1400}>
                                                        <div className="price-box box-after">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-lora font-24 weight-500 lineh-26 color34">Business</h2>
                                                                <p className="font-ks font-16 lineh-26 weight-500 colop margin-b24">Make
                                                                    your Froms more Beautuful on- a Brand  Analyze</p>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-lora color34">$1999<span className="font-lora font-30 weight-500 lineh-50 color-17">/1
                                                                    yr</span></h2>
                                                                <p className="billed">Billed Yearly</p>
                                                                <div className="theme-btn2 margin-t32 w-btn-100">
                                                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex w-btn-100 text-center">Get
                                                                        a Consultation <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> IRS Tax
                                                                            Problems</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Payroll
                                                                            Services</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Tax
                                                                            Prepration and Planning</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Company
                                                                            Formation</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Business
                                                                            Immigration</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Bookkeeping
                                                                            and Virtual CFO</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check.svg" alt="" /> Businessman
                                                                            Consulting</li>
                                                                        <li className="font-ks font-16 weight-500 color-18"><img src="/assets/images/icons/check-circle.svg" alt="" />
                                                                            Accounting/Virtual Controller</li>
                                                                    </ul>
                                                                </div>
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
        </>
    )
}
