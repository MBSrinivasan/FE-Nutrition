
'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Pricing3() {
    const [checked, setChecked] = useState(false)

    const handleToggleChange = () => {
        setChecked(!checked)
    }
    return (
        <>

            <div className="pricing5plan5-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="pricng5-section-text text-center">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">Pricing
                                    Plan</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20">Pricing plans tailored to
                                    your success</h1>
                            </div>
                        </div>
                        <div className="princing-plans">
                            <div className="container">
                                <div className="row">
                                    <div className="col-12 text-center">
                                        <div className="plan-toggle-wrap">
                                            <div className="toggle-inner inner2 homeinner">
                                                <input
                                                    type="checkbox"
                                                    id="ce-toggle"
                                                    checked={checked}
                                                    onChange={handleToggleChange}
                                                />
                                                <span className="custom-toggle" />
                                                <span className="t-month font-outfit font-16 lineh-26 weight-500 color38">Monthly</span>
                                                <span className="t-year font-outfit font-16 lineh-26 weight-500 color38">Annual</span>
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
                                                        <div className="price-box box-after btnbrfore">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-outfit font-24 weight-600 lineh-26 color37 ts">Basic
                                                                </h2>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-outfit color34 ts">$29<span className="font-outfit font-20 weight-600 lineh-50 color37 ts">/month</span>
                                                                </h2>
                                                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                    Aut quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                    officiis.</p>
                                                                <div className="service5button">
                                                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 tsbutton d-inline-block ts">Choose
                                                                        A Plan</Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                            Genaration Accounting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax Prepration
                                                                            and Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                            Freedom Consulting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                            Business Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                            Finance</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> International
                                                                            Business </li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Finance Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Strategy</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="price-box box-after btnbrfore">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-outfit font-24 weight-600 lineh-26 color37 ts">Pro</h2>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-outfit color34 ts">$49<span className="font-outfit font-20 weight-600 lineh-50 color37 ts">/month</span>
                                                                </h2>
                                                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                    Aut quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                    officiis.</p>
                                                                <div className="service5button">
                                                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 tsbutton d-inline-block ts">Choose
                                                                        A Plan</Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                            Genaration Accounting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax Prepration
                                                                            and Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                            Freedom Consulting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                            Business Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                            Finance</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> International
                                                                            Business </li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Finance Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Strategy</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="price-box box-after btnbrfore">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-outfit font-24 weight-600 lineh-26 color37 ts">Premium
                                                                </h2>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-outfit color34 ts">$99<span className="font-outfit font-20 weight-600 lineh-50 color37 ts">/month</span>
                                                                </h2>
                                                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                    Aut quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                    officiis.</p>
                                                                <div className="service5button">
                                                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 tsbutton d-inline-block ts">Choose
                                                                        A Plan</Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                            Genaration Accounting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax Prepration
                                                                            and Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                            Freedom Consulting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                            Business Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                            Finance</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> International
                                                                            Business </li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Finance Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
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
                                                        <div className="price-box box-after btnbrfore">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-outfit font-24 weight-600 lineh-26 color37 ts">Basic
                                                                </h2>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-outfit color34 ts">$399<span className="font-outfit font-20 weight-600 lineh-50 color37 ts">/Annual</span>
                                                                </h2>
                                                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                    Aut quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                    officiis.</p>
                                                                <div className="service5button">
                                                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 tsbutton d-inline-block ts">Choose
                                                                        A Plan</Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                            Genaration Accounting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax Prepration
                                                                            and Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                            Freedom Consulting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                            Business Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                            Finance</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> International
                                                                            Business </li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Finance Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Strategy</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="price-box box-after btnbrfore">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-outfit font-24 weight-600 lineh-26 color37 ts">Pro</h2>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-outfit color34 ts">$599<span className="font-outfit font-20 weight-600 lineh-50 color37 ts">/Annual</span>
                                                                </h2>
                                                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                    Aut quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                    officiis.</p>
                                                                <div className="service5button">
                                                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 tsbutton d-inline-block ts">Choose
                                                                        A Plan</Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                            Genaration Accounting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax Prepration
                                                                            and Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                            Freedom Consulting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                            Business Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                            Finance</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> International
                                                                            Business </li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Finance Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Strategy</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6 col-lg-4">
                                                        <div className="price-box box-after btnbrfore">
                                                            <div className="hadding hadding-p single-price">
                                                                <h2 className="font-outfit font-24 weight-600 lineh-26 color37 ts">Premium
                                                                </h2>
                                                                <div className="space20" />
                                                                <h2 className="pricing-heading font-outfit color34 ts">$499<span className="font-outfit font-20 weight-600 lineh-50 color37 ts">/Annual</span>
                                                                </h2>
                                                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24 ts">
                                                                    Aut quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                    officiis.</p>
                                                                <div className="service5button">
                                                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 tsbutton d-inline-block ts">Choose
                                                                        A Plan</Link>
                                                                </div>
                                                                <div className="space40" />
                                                                <div className="price-list">
                                                                    <ul>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Next
                                                                            Genaration Accounting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Tax Prepration
                                                                            and Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Financial
                                                                            Freedom Consulting</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Purposive
                                                                            Business Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Corporate
                                                                            Finance</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> International
                                                                            Business </li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
                                                                            Finance Planning</li>
                                                                        <li className="font-outfit font-16 weight-600 color37 ts"><span><i className="fa-solid fa-check" /></span> Business
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
        </>
    )
}
