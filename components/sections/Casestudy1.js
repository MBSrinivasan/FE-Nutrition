
import Link from "next/link"

export default function Casestudy1() {
    return (
        <>

            <div className="case-study-scetion-area section-padding8">
                <img src="/assets/images/elementor/elementor8.png" alt="" className="elementor-5 aniamtion-key-1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={800}>
                            <div className="case-study-header text-center margin-b60">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Case
                                    Study</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17">View our case study</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <div className="single-portfolio singlecase">
                                <div className="portfolio-images singleportfolio">
                                    <img src="/assets/images/sectionimg/case-img1.png" alt="" />
                                </div>
                                <div className="portfolio-textarea">
                                    <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14"><Link href="/casemiddle" className="color-17">Problem Statement</Link></h1>
                                    <p className="font-outfit weight-400 color-17 lineh-26 font-16">The landing page should clearly
                                        to the tax communicate the unique value and benefits. </p>
                                    <div className="portfolio-visible-textarea margin-t">
                                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">Discuss how the consultant
                                            worked with the client to implement the proposed solution. To this may involve
                                            outlining the steps taken.</p>
                                        <Link href="/casemiddle" className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more">LEARN
                                            MORE <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-portfolio singlecase">
                                <div className="portfolio-images singleportfolio">
                                    <img src="/assets/images/sectionimg/case-img2.png" alt="" />
                                </div>
                                <div className="portfolio-textarea">
                                    <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14"><Link href="/casemiddle" className="color-17">Business Strategy</Link></h1>
                                    <p className="font-outfit weight-400 color-17 lineh-26 font-16">The landing page should clearly
                                        to the tax communicate the unique value and benefits. </p>
                                    <div className="portfolio-visible-textarea margin-t">
                                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">Discuss how the consultant
                                            worked with the client to implement the proposed solution. To this may involve
                                            outlining the steps taken.</p>
                                        <Link href="/casemiddle" className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more">LEARN
                                            MORE <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="single-portfolio singlecase">
                                <div className="portfolio-images singleportfolio">
                                    <img src="/assets/images/sectionimg/case-img3.png" alt="" />
                                </div>
                                <div className="portfolio-textarea">
                                    <h1 className="font-24 weight-600 font-outfit lineh-24 color-17 margin-b14"><Link href="/casemiddle" className="color-17">Solutions Development</Link></h1>
                                    <p className="font-outfit weight-400 color-17 lineh-26 font-16">The landing page should clearly
                                        to the tax communicate the unique value and benefits. </p>
                                    <div className="portfolio-visible-textarea margin-t">
                                        <p className="font-outfit weight-400 color-17 lineh-26 font-16">Discuss how the consultant
                                            worked with the client to implement the proposed solution. To this may involve
                                            outlining the steps taken.</p>
                                        <Link href="/casemiddle" className="font-16 font-outfit weight-700 color lineh-26 ts text-uppercase margin-t30 d-inline-block learn-more1 learn-more">LEARN
                                            MORE <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor11.png" alt="" className="elementor-11" />
            </div>
        </>
    )
}
