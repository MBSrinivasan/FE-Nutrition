'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Pricing5() {
    const [checked, setChecked] = useState(false)

    const handleToggleChange = () => {
        setChecked(!checked)
    }
    return (
        <>

            <div className="pricing-plan-starts section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="pricing-plan-header1 text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Pricing
                                    Plan</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Insurance Consulting Pricing Plans
                                </h1>
                            </div>
                        </div>
                        <div className="princing-plans" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={1000}>
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center" data-aos="fade-down" data-aos-duration={800}>
                                        <div className="plan-toggle-wrap">
                                            <div className="toggle-inner inner4">
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
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="pricing9-boxarea ts">
                                                            <h5 className="font-20 font-ks lineh-20 weight-600 color-h9 margin-b14 ts">Basic
                                                                Plan</h5>
                                                            <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts ">We
                                                                offer a wide range of insurance to be solutions, from life  health to
                                                                property.</p>
                                                            <div className="border7 opacity1 margin-b24" />
                                                            <h1 className="font-lora font-56 lineh-54 weight-600 color-h9 ts">$199<span className="font-ks font-16 lineh-16 weight-500 colorhp1 ts">/monthly</span>
                                                            </h1>
                                                            <Link href="#" className="font-ks font-16 lineh-16 weight-700 color margin-t32 ts">Choose A
                                                                Plan <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                            <div className="features9 margin-t32">
                                                                <h1 className="font-ks font-20 lineh-20 weight-500 color-h9 margin-b24 ts">
                                                                    Our Features:</h1>
                                                                <ul>
                                                                    <li className="font-ks font-16 lineh-16 weigth-600 color-h9 margin-b24 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>
                                                                        <p className="font-ks font-16 lineh-16 weigth-500 color-h9">Home
                                                                            Visit Doctor Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>12 Months of care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Luxury Cost Medical Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>7 part health plan</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Inpatient Meal Expenses</p>
                                                                    </li>
                                                                    <li className="ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>24/7 Customer Helper</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="pricing9-boxarea ts">
                                                            <h5 className="font-20 font-ks lineh-20 weight-600 color-h9 margin-b14 ts">Pro
                                                                Plan</h5>
                                                            <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">We
                                                                offer a wide range of insurance to be solutions, from life  health to
                                                                property.</p>
                                                            <div className="border7 opacity1 margin-b24" />
                                                            <h1 className="font-lora font-56 lineh-54 weight-600 color-h9 ts">$499<span className="font-ks font-16 lineh-16 weight-500 colorhp1 ts">/monthly</span>
                                                            </h1>
                                                            <Link href="#" className="font-ks font-16 lineh-16 weight-700 color margin-t32 ts">Choose A
                                                                Plan <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                            <div className="features9 margin-t32">
                                                                <h1 className="font-ks font-20 lineh-20 weight-500 color-h9 margin-b24">Our
                                                                    Features:</h1>
                                                                <ul>
                                                                    <li className="font-ks font-16 lineh-16 weigth-600 color-h9 margin-b24 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>
                                                                        <p className="font-ks font-16 lineh-16 weigth-500 color-h9">Home
                                                                            Visit Doctor Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>12 Months of care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Luxury Cost Medical Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>7 part health plan</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Inpatient Meal Expenses</p>
                                                                    </li>
                                                                    <li className="ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>24/7 Customer Helper</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="pricing9-boxarea ts">
                                                            <h5 className="font-20 font-ks lineh-20 weight-600 color-h9 margin-b14 ts">
                                                                Premium Plan</h5>
                                                            <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">We
                                                                offer a wide range of insurance to be solutions, from life  health to
                                                                property.</p>
                                                            <div className="border7 opacity1 margin-b24" />
                                                            <h1 className="font-lora font-56 lineh-54 weight-600 color-h9 ts">$299<span className="font-ks font-16 lineh-16 weight-500 colorhp1 ts">/monthly</span>
                                                            </h1>
                                                            <Link href="#" className="font-ks font-16 lineh-16 weight-700 color margin-t32 ts">Choose A
                                                                Plan <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                            <div className="features9 margin-t32">
                                                                <h1 className="font-ks font-20 lineh-20 weight-500 color-h9 margin-b24 ts">
                                                                    Our Features:</h1>
                                                                <ul>
                                                                    <li className="font-ks font-16 lineh-16 weigth-600 color-h9 margin-b24 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>
                                                                        <p className="font-ks font-16 lineh-16 weigth-500 color-h9">Home
                                                                            Visit Doctor Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>12 Months of care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Luxury Cost Medical Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>7 part health plan</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Inpatient Meal Expenses</p>
                                                                    </li>
                                                                    <li className="ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>24/7 Customer Helper</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </> :
                                        <>
                                            <div id="yearly" style={{ display: 'block' }}>
                                                <div className="row">
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="pricing9-boxarea ts">
                                                            <h5 className="font-20 font-ks lineh-20 weight-600 color-h9 margin-b14 ts">Basic
                                                                Plan</h5>
                                                            <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts ">We
                                                                offer a wide range of insurance to be solutions, from life  health to
                                                                property.</p>
                                                            <div className="border7 opacity1 margin-b24" />
                                                            <h1 className="font-lora font-56 lineh-54 weight-600 color-h9 ts">$399<span className="font-ks font-16 lineh-16 weight-500 colorhp1 ts">/monthly</span>
                                                            </h1>
                                                            <Link href="#" className="font-ks font-16 lineh-16 weight-700 color margin-t32 ts">Choose A
                                                                Plan <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                            <div className="features9 margin-t32">
                                                                <h1 className="font-ks font-20 lineh-20 weight-500 color-h9 margin-b24 ts">
                                                                    Our Features:</h1>
                                                                <ul>
                                                                    <li className="font-ks font-16 lineh-16 weigth-600 color-h9 margin-b24 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>
                                                                        <p className="font-ks font-16 lineh-16 weigth-500 color-h9">Home
                                                                            Visit Doctor Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>12 Months of care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Luxury Cost Medical Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>7 part health plan</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Inpatient Meal Expenses</p>
                                                                    </li>
                                                                    <li className="ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>24/7 Customer Helper</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="pricing9-boxarea ts">
                                                            <h5 className="font-20 font-ks lineh-20 weight-600 color-h9 margin-b14 ts">Pro
                                                                Plan</h5>
                                                            <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">We
                                                                offer a wide range of insurance to be solutions, from life  health to
                                                                property.</p>
                                                            <div className="border7 opacity1 margin-b24" />
                                                            <h1 className="font-lora font-56 lineh-54 weight-600 color-h9 ts">$999<span className="font-ks font-16 lineh-16 weight-500 colorhp1 ts">/monthly</span>
                                                            </h1>
                                                            <Link href="#" className="font-ks font-16 lineh-16 weight-700 color margin-t32 ts">Choose A
                                                                Plan <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                            <div className="features9 margin-t32">
                                                                <h1 className="font-ks font-20 lineh-20 weight-500 color-h9 margin-b24">Our
                                                                    Features:</h1>
                                                                <ul>
                                                                    <li className="font-ks font-16 lineh-16 weigth-600 color-h9 margin-b24 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>
                                                                        <p className="font-ks font-16 lineh-16 weigth-500 color-h9">Home
                                                                            Visit Doctor Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>12 Months of care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Luxury Cost Medical Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>7 part health plan</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Inpatient Meal Expenses</p>
                                                                    </li>
                                                                    <li className="ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>24/7 Customer Helper</p>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-6">
                                                        <div className="pricing9-boxarea ts">
                                                            <h5 className="font-20 font-ks lineh-20 weight-600 color-h9 margin-b14 ts">
                                                                Premium Plan</h5>
                                                            <p className="font-ks font-16 lineh-26 weight-500 colorhp1 margin-b24 ts">We
                                                                offer a wide range of insurance to be solutions, from life  health to
                                                                property.</p>
                                                            <div className="border7 opacity1 margin-b24" />
                                                            <h1 className="font-lora font-56 lineh-54 weight-600 color-h9 ts">$599<span className="font-ks font-16 lineh-16 weight-500 colorhp1 ts">/monthly</span>
                                                            </h1>
                                                            <Link href="#" className="font-ks font-16 lineh-16 weight-700 color margin-t32 ts">Choose A
                                                                Plan <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                            <div className="features9 margin-t32">
                                                                <h1 className="font-ks font-20 lineh-20 weight-500 color-h9 margin-b24 ts">
                                                                    Our Features:</h1>
                                                                <ul>
                                                                    <li className="font-ks font-16 lineh-16 weigth-600 color-h9 margin-b24 ts">
                                                                        <span><i className="fa-solid fa-check" /></span>
                                                                        <p className="font-ks font-16 lineh-16 weigth-500 color-h9">Home
                                                                            Visit Doctor Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>12 Months of care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Luxury Cost Medical Care</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>7 part health plan</p>
                                                                    </li>
                                                                    <li className="margin-b24 ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>Inpatient Meal Expenses</p>
                                                                    </li>
                                                                    <li className="ts"><span><i className="fa-solid fa-check" /></span>
                                                                        <p>24/7 Customer Helper</p>
                                                                    </li>
                                                                </ul>
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
