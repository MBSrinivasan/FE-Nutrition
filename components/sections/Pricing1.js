'use client'
import Link from "next/link"
import { useState } from 'react'
export default function Pricing1() {
    const [checked, setChecked] = useState(false)

    const handleToggleChange = () => {
        setChecked(!checked)
    }
    return (
        <>

            <div className="pricing2-plan-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12"  data-aos-duration={800}>
                            <div className="pricing-pan2-header text-center">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Pricing
                                    Plan</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17">Smart solution for your digital
                                    business</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center"  data-aos-duration={800}>
                            <div className="plan-toggle-wrap margin-t32">
                                <div className="toggle-inner">
                                    <input
                                        type="checkbox"
                                        id="ce-toggle"
                                        checked={checked}
                                        onChange={handleToggleChange}
                                    />
                                    <span className="custom-toggle" />
                                    <span className="t-month font-outfit font-16 lineh-26 weight-500 colop">Monthly</span>
                                    <span className="t-year font-outfit font-16 lineh-26 weight-500 colop">Annual</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="tab-content">
                                {checked ? (
                                    <>
                                        <div id="monthly" style={{ display: 'block' }}>
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-10"  data-aos-duration={1000}>
                                                    <div className="tabs2-area margin-b30">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="pricing2-textarea">
                                                                    <h2 className="font-outfit font-24 weight-500 lineh-26 color-17 margin-b20">
                                                                        Basic</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-outfit color-17 margin-b weight-700 font-44">
                                                                        $29<span className="font-outfit font-20 weight-500 lineh-20 color-17">/month</span>
                                                                    </h2>
                                                                    <p className=" font-outfit font-16 color-15 weight-400 lineh-26">Aut
                                                                        quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                        officiis pariatur voluptatem velit sint.</p>
                                                                    <div className="theme-btn4 margin-t32 margn-left">
                                                                        <Link href="#" className="theme-btn5 font-outfit font-16  weight-700 ">choose a
                                                                            plan <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="features-textarea">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area">
                                                                                <h1 className="font-24 font-outfit lineh-24 color-17 margin-b24 weight-600">
                                                                                    Our Features</h1>
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Planning</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Next Genaration Accounting</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Financial Freedom Consulting</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Purposive Business Planning</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area margin-t45">
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Corporate Finance</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                International Business </p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Finance Planning</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Strategy</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-10"  data-aos-duration={1200}>
                                                    <div className="tabs2-area margin-b30">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="pricing2-textarea">
                                                                    <h2 className="font-outfit font-24 weight-500 lineh-26 color-17 margin-b20">
                                                                        Pro</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-outfit color-17 margin-b weight-700 font-44">
                                                                        $99<span className="font-outfit font-20 weight-500 lineh-20 color-17">/month</span>
                                                                    </h2>
                                                                    <p className=" font-outfit font-16 color-15 weight-400 lineh-26">Aut
                                                                        quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                        officiis pariatur voluptatem velit sint.</p>
                                                                    <div className="theme-btn4 margin-t32 margn-left">
                                                                        <Link href="#" className="theme-btn5 font-outfit font-16  weight-700 ">choose a
                                                                            plan <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="features-textarea">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area">
                                                                                <h1 className="font-24 font-outfit lineh-24 color-17 margin-b24 weight-600">
                                                                                    Our Features</h1>
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Planning</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Next Genaration Accounting</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Financial Freedom Consulting</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Purposive Business Planning</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area margin-t45">
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Corporate Finance</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                International Business </p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Finance Planning</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Strategy</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-10"  data-aos-duration={1400}>
                                                    <div className="tabs2-area margin-b30">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="pricing2-textarea">
                                                                    <h2 className="font-outfit font-24 weight-500 lineh-26 color-17 margin-b20">
                                                                        Premium</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-outfit color-17 margin-b weight-700 font-44">
                                                                        $49<span className="font-outfit font-20 weight-500 lineh-20 color-17">/month</span>
                                                                    </h2>
                                                                    <p className=" font-outfit font-16 color-15 weight-400 lineh-26">Aut
                                                                        quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                        officiis pariatur voluptatem velit sint.</p>
                                                                    <div className="theme-btn4 margin-t32 margn-left">
                                                                        <Link href="#" className="theme-btn5 font-outfit font-16  weight-700 ">choose a
                                                                            plan <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="features-textarea">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area">
                                                                                <h1 className="font-24 font-outfit lineh-24 color-17 margin-b24 weight-600">
                                                                                    Our Features</h1>
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Planning</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Next Genaration Accounting</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Financial Freedom Consulting</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Purposive Business Planning</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area margin-t45">
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Corporate Finance</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                International Business </p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Finance Planning</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Strategy</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div id="yearly" style={{ display: 'block' }}>
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-10">
                                                    <div className="tabs2-area margin-b30">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="pricing2-textarea">
                                                                    <h2 className="font-outfit font-24 weight-500 lineh-26 color-17 margin-b20">
                                                                        Basic</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-outfit color-17 margin-b weight-700 font-44">
                                                                        $299<span className="font-outfit font-20 weight-500 lineh-20 color-17">/Annual</span>
                                                                    </h2>
                                                                    <p className=" font-outfit font-16 color-15 weight-400 lineh-26">Aut
                                                                        quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                        officiis pariatur voluptatem velit sint.</p>
                                                                    <div className="theme-btn4 margin-t32 margn-left">
                                                                        <Link href="#" className="theme-btn5 font-outfit font-16  weight-700 ">choose a
                                                                            plan <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="features-textarea">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area">
                                                                                <h1 className="font-24 font-outfit lineh-24 color-17 margin-b24 weight-600">
                                                                                    Our Features</h1>
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Planning</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Next Genaration Accounting</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Financial Freedom Consulting</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Purposive Business Planning</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area margin-t45">
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Corporate Finance</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                International Business </p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Finance Planning</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Strategy</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-10">
                                                    <div className="tabs2-area margin-b30">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="pricing2-textarea">
                                                                    <h2 className="font-outfit font-24 weight-500 lineh-26 color-17 margin-b20">
                                                                        Pro</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-outfit color-17 margin-b weight-700 font-44">
                                                                        $499<span className="font-outfit font-20 weight-500 lineh-20 color-17">/Annual</span>
                                                                    </h2>
                                                                    <p className=" font-outfit font-16 color-15 weight-400 lineh-26">Aut
                                                                        quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                        officiis pariatur voluptatem velit sint.</p>
                                                                    <div className="theme-btn4 margin-t32 margn-left">
                                                                        <Link href="#" className="theme-btn5 font-outfit font-16  weight-700 ">choose a
                                                                            plan <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="features-textarea">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area">
                                                                                <h1 className="font-24 font-outfit lineh-24 color-17 margin-b24 weight-600">
                                                                                    Our Features</h1>
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Planning</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Next Genaration Accounting</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Financial Freedom Consulting</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Purposive Business Planning</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area margin-t45">
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Corporate Finance</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                International Business </p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Finance Planning</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Strategy</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-1" />
                                                <div className="col-lg-10">
                                                    <div className="tabs2-area margin-b30">
                                                        <div className="row">
                                                            <div className="col-lg-4">
                                                                <div className="pricing2-textarea">
                                                                    <h2 className="font-outfit font-24 weight-500 lineh-26 color-17 margin-b20">
                                                                        Premium</h2>
                                                                    <div className="space20" />
                                                                    <h2 className="pricing-heading font-outfit color-17 margin-b weight-700 font-44">
                                                                        $399<span className="font-outfit font-20 weight-500 lineh-20 color-17">/Annual</span>
                                                                    </h2>
                                                                    <p className=" font-outfit font-16 color-15 weight-400 lineh-26">Aut
                                                                        quod doloremque saepe sit deleniti consequatur. Possimus quod
                                                                        officiis pariatur voluptatem velit sint.</p>
                                                                    <div className="theme-btn4 margin-t32 margn-left">
                                                                        <Link href="#" className="theme-btn5 font-outfit font-16  weight-700 ">choose a
                                                                            plan <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-8">
                                                                <div className="features-textarea">
                                                                    <div className="row">
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area">
                                                                                <h1 className="font-24 font-outfit lineh-24 color-17 margin-b24 weight-600">
                                                                                    Our Features</h1>
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Planning</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Next Genaration Accounting</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Financial Freedom Consulting</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Purposive Business Planning</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div className="col-lg-6">
                                                                            <div className="features-author-area margin-t45">
                                                                                <div className="features-list">
                                                                                    <ul>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Corporate Finance</p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                International Business </p>
                                                                                        </li>
                                                                                        <li className="margin-b24"><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Finance Planning</p>
                                                                                        </li>
                                                                                        <li><span><i className="fa-solid fa-check" /></span>
                                                                                            <p className="font-16 font-outfit lineh-20 weight-500 color-17">
                                                                                                Business Strategy</p>
                                                                                        </li>
                                                                                    </ul>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
