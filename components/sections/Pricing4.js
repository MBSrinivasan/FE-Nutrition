'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Pricing4() {
    const [checked, setChecked] = useState(false)

    const handleToggleChange = () => {
        setChecked(!checked)
    }
    return (
        <>

            <div className="pricing8-section-area section-padding8">
                <img src="/assets/images/elementor/elementor52.png" alt="" className="elmenotrs12" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="pricing8-header text-center margin-b48">
                                <span className=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">Pricing
                                    Plan</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color39 margin-b20">Here's How Our tax
                                    Consulting Services Can Benefit You</h1>
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
                                                <div className="toggle-inner home8price">
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
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="price-box btnbrfores">
                                                                <div className="hadding hadding-p single-price">
                                                                    <h2 className="font-lora font-24 weight-600 lineh-26 color39 ts">Basic
                                                                    </h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-lora color39 ts">$29<span className="font-lora font-20 weight-600 lineh-50 color39 ts">/month</span>
                                                                    </h2>
                                                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">
                                                                        Aut quod doloremque saepe sit deleniti consequatur. Possimus
                                                                        quod officiis.</p>
                                                                    <div className="shecdule-btn2">
                                                                        <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1">Choose
                                                                            a Plan <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                    <div className="space40" />
                                                                    <div className="price-list homepricing8">
                                                                        <ul>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                                Genaration Accounting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Tax
                                                                                Prepration and Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                                Freedom Consulting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                                Business Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                                Finance</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span>
                                                                                International Business </li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Finance Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Strategy</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="price-box btnbrfores">
                                                                <div className="hadding hadding-p single-price">
                                                                    <h2 className="font-lora font-24 weight-600 lineh-26 color37 ts">Plus
                                                                    </h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-lora color34 ts">$49<span className="font-lora font-20 weight-600 lineh-50 color37 ts">/month</span>
                                                                    </h2>
                                                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">
                                                                        Aut quod doloremque saepe sit deleniti consequatur. Possimus
                                                                        quod officiis.</p>
                                                                    <div className="shecdule-btn2">
                                                                        <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1 d-inline-block">Choose
                                                                            a Plan <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                    <div className="space40" />
                                                                    <div className="price-list homepricing8">
                                                                        <ul>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                                Genaration Accounting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Tax
                                                                                Prepration and Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                                Freedom Consulting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                                Business Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                                Finance</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span>
                                                                                International Business </li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Finance Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Strategy</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="price-box btnbrfores">
                                                                <div className="hadding hadding-p single-price">
                                                                    <h2 className="font-lora font-24 weight-600 lineh-26 color37 ts">
                                                                        Bussiness</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-lora color34 ts">$99<span className="font-lora font-20 weight-600 lineh-50 color37 ts">/month</span>
                                                                    </h2>
                                                                    <p className="font-ks font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                        Aut quod doloremque saepe sit deleniti consequatur. Possimus
                                                                        quod officiis.</p>
                                                                    <div className="shecdule-btn2">
                                                                        <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1 d-inline-block">Choose
                                                                            a Plan <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                    <div className="space40" />
                                                                    <div className="price-list homepricing8">
                                                                        <ul>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                                Genaration Accounting</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax
                                                                                Prepration and Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                                Freedom Consulting</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                                Business Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                                Finance</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span>
                                                                                International Business </li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Finance Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Strategy</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </> :
                                            <>
                                                <div id="yearly" style={{ display: 'block' }} className="bacdeg">
                                                    <div className="row">
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="price-box btnbrfores">
                                                                <div className="hadding hadding-p single-price">
                                                                    <h2 className="font-lora font-24 weight-600 lineh-26 color39 ts">Basic
                                                                    </h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-lora color39 ts">$399<span className="font-lora font-20 weight-600 lineh-50 color39 ts">/Annual</span>
                                                                    </h2>
                                                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">
                                                                        Aut quod doloremque saepe sit deleniti consequatur. Possimus
                                                                        quod officiis.</p>
                                                                    <div className="shecdule-btn2">
                                                                        <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1">Choose
                                                                            a Plan <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                    <div className="space40" />
                                                                    <div className="price-list homepricing8">
                                                                        <ul>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                                Genaration Accounting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Tax
                                                                                Prepration and Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                                Freedom Consulting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                                Business Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                                Finance</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span>
                                                                                International Business </li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Finance Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Strategy</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="price-box btnbrfores">
                                                                <div className="hadding hadding-p single-price">
                                                                    <h2 className="font-lora font-24 weight-600 lineh-26 color37 ts">Plus
                                                                    </h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-lora color34 ts">$549<span className="font-lora font-20 weight-600 lineh-50 color37 ts">/Annual</span>
                                                                    </h2>
                                                                    <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">
                                                                        Aut quod doloremque saepe sit deleniti consequatur. Possimus
                                                                        quod officiis.</p>
                                                                    <div className="shecdule-btn2">
                                                                        <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1 d-inline-block">Choose
                                                                            a Plan <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                    <div className="space40" />
                                                                    <div className="price-list homepricing8">
                                                                        <ul>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                                Genaration Accounting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Tax
                                                                                Prepration and Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                                Freedom Consulting</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                                Business Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                                Finance</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span>
                                                                                International Business </li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Finance Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color39 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Strategy</li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-md-6 col-lg-4">
                                                            <div className="price-box btnbrfores">
                                                                <div className="hadding hadding-p single-price">
                                                                    <h2 className="font-lora font-24 weight-600 lineh-26 color37 ts">
                                                                        Bussiness</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-lora color34 ts">$499<span className="font-lora font-20 weight-600 lineh-50 color37 ts">/Annual</span>
                                                                    </h2>
                                                                    <p className="font-ks font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                        Aut quod doloremque saepe sit deleniti consequatur. Possimus
                                                                        quod officiis.</p>
                                                                    <div className="shecdule-btn2">
                                                                        <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1 d-inline-block">Choose
                                                                            a Plan <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                    </div>
                                                                    <div className="space40" />
                                                                    <div className="price-list homepricing8">
                                                                        <ul>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                                Genaration Accounting</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax
                                                                                Prepration and Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                                Freedom Consulting</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                                Business Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                                Finance</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span>
                                                                                International Business </li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Finance Planning</li>
                                                                            <li className="font-ks font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                                Strategy</li>
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
                <img src="/assets/images/elementor/elementor53.png" alt="" className="elemneotrs13" />
            </div>
        </>
    )
}
