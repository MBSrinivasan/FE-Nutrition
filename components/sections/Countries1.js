
import Link from "next/link"

export default function Countries1() {
    return (
        <>

            <div className="countries-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="countries-header margin-b48 text-center">
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h11 aropaln2 d-inline-block margin-b24"><img src="/assets/images/icons/aroplanicons2.svg" alt="" />Countries We Offer</span>
                                <h1 className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Visa  Immigration
                                    Made Easy</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="countries-tabs">
                                <ul className="nav nav-pills" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="pills-allcountries-tab" data-bs-toggle="pill" data-bs-target="#pills-allcountries" type="button" role="tab" aria-controls="pills-allcountries" aria-selected="true">All Countriers</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-asia-tab" data-bs-toggle="pill" data-bs-target="#pills-asia" type="button" role="tab" aria-controls="pills-asia" aria-selected="false">Asia</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-europe-tab" data-bs-toggle="pill" data-bs-target="#pills-europe" type="button" role="tab" aria-controls="pills-europe" aria-selected="false">Europe</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-SouthAmerica-tab" data-bs-toggle="pill" data-bs-target="#pills-SouthAmerica" type="button" role="tab" aria-controls="pills-SouthAmerica" aria-selected="false">South America</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-NorthAmerica-tab" data-bs-toggle="pill" data-bs-target="#pills-NorthAmerica" type="button" role="tab" aria-controls="pills-NorthAmerica" aria-selected="false">North America</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-Africa-tab" data-bs-toggle="pill" data-bs-target="#pills-Africa" type="button" role="tab" aria-controls="pills-Africa" aria-selected="false">Africa</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="pills-Oceania-tab" data-bs-toggle="pill" data-bs-target="#pills-Oceania" type="button" role="tab" aria-controls="pills-Oceania" aria-selected="false">Oceania</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-allcountries" role="tabpanel" aria-labelledby="pills-allcountries-tab" tabIndex={0}>
                                        <div className="countries4-section-area">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg1.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">United
                                                                Arab Emirates</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag1.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg2.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Afghanistan</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag2.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg3.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">India</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag3.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg4.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Portugal</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag4.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg5.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">South
                                                                Africa</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag5.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg6.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Argentina</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag6.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg7.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Brazil</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag7.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg8.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Saudi
                                                                Arabia</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag8.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-asia" role="tabpanel" aria-labelledby="pills-asia-tab" tabIndex={0}>
                                        <div className="asia-countriesarea">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg2.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Afghanistan</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag2.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg3.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">India</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag3.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg8.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Saudi
                                                                Arabia</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag8.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-europe" role="tabpanel" aria-labelledby="pills-europe-tab" tabIndex={0}>
                                        <div className="europelist">
                                            <div className="col-lg-3 col-md-6">
                                                <div className="countries-placearea text-center">
                                                    <div className="countriesfirstimg">
                                                        <img src="/assets/images/sectionimg/countriesimg4.png" alt="" />
                                                    </div>
                                                    <div className="countries-placeauhtor">
                                                        <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Portugal</Link>
                                                        <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                            Unlocking Global Opportunities, Visa  Immigration Solutions.</p>
                                                        <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                            More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                    </div>
                                                    <div className="flagsarea">
                                                        <img src="/assets/images/sectionimg/flag4.png" alt="" className="flags1" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-SouthAmerica" role="tabpanel" aria-labelledby="pills-SouthAmerica-tab" tabIndex={0}>
                                        <div className="southamericalist">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg6.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Argentina</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag6.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg7.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Brazil</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag7.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg5.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">South
                                                                Africa</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag5.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-NorthAmerica" role="tabpanel" aria-labelledby="pills-NorthAmerica-tab" tabIndex={0}>
                                        <div className="northamericalist">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg1.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">United
                                                                Arab Emirates</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag1.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg5.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">South
                                                                Africa</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag5.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Africa" role="tabpanel" aria-labelledby="pills-Africa-tab" tabIndex={0}>
                                        <div className="northamericalist">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg1.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">United
                                                                Arab Emirates</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag1.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg5.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">South
                                                                Africa</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag5.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="tab-pane fade" id="pills-Oceania" role="tabpanel" aria-labelledby="pills-Oceania-tab" tabIndex={0}>
                                        <div className="oceania">
                                            <div className="row">
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg7.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">Brazil</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag7.png" alt="" className="flags1" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-3 col-md-6">
                                                    <div className="countries-placearea text-center">
                                                        <div className="countriesfirstimg">
                                                            <img src="/assets/images/sectionimg/countriesimg5.png" alt="" />
                                                        </div>
                                                        <div className="countries-placeauhtor">
                                                            <Link href="/servicemiddle" className="font-outfit font-20 lineh-24 weight-500 colorhp11 d-inline-block margin-b ts">South
                                                                Africa</Link>
                                                            <p className="font-outfit font-16 lineh-26 weight-400 colorhp12 margin-b24 ts">
                                                                Unlocking Global Opportunities, Visa  Immigration Solutions.
                                                            </p>
                                                            <Link href="/servicemiddle" className="learnmore11 font-outfit font-16 lineh-16 weight-600 color-h11 ts">Learn
                                                                More <span className="ts"><i className="fa-solid fa-arrow-right" /></span></Link>
                                                        </div>
                                                        <div className="flagsarea">
                                                            <img src="/assets/images/sectionimg/flag5.png" alt="" className="flags1" />
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
            </div>
        </>
    )
}
