
import Link from "next/link"

export default function About3() {
    return (
        <>

            <div className="about-section-area section-padding14">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1000}>
                            <div className="about-author-imges">
                                <div className="about1-img">
                                    <img src="/assets/images/sectionimg/about1-img.png" alt="" className="about-img" />
                                    <img src="/assets/images/elementor/elementor4.png" alt="" className="elementor-4" />
                                </div>
                                <div className="about2-img" data-aos="fade-up" data-aos-duration={1200}>
                                    <img src="/assets/images/sectionimg/about2-img.png" alt="" className="about-img2 aniamtion-key-2" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="about-pages-area">
                                <div className="about-textarea">
                                    <span className="font-18 font-ks lineh26 weight-500 color34 margin-b d-inline-block">About
                                        Us</span>
                                    <h1 className="font-lora font-42 lineh-50 weight-500 margin-b24 color-17" data-aos="fade-left" data-aos-duration={1000}>We aim to minimize their tax burden and maximize their <span className="financila">financial success.</span></h1>
                                    <p className="about-pera1 font-ks font-16 lineh-26 weight-500 margin-b24 colorp">International
                                        Taxation: As businesses expand globally, navigating international tax laws becomes
                                        increasingly important. We offer specialized expertise in international taxation,
                                        including cross-border transactions, transfer pricing, tax treaties, and foreign tax
                                        credits, to help businesses optimize their global tax positions Tax Controversy and
                                        Resolution.</p>
                                    <p className="about-pera2 font-ks font-16 lineh-26 weight-500 colorp">Tax Controversy and
                                        Resolution: Dealing with tax disputes can be stressful and time-consuming. Our
                                        experienced tax professionals provide representation and support during audits, appeals,
                                        and other tax-related controversies. We work diligently to protect your rights and
                                        negotiate favorable resolutions with tax authorities.</p>
                                    <div className="theme-btn2 margin-t32" data-aos="fade-left" data-aos-duration={1200}>
                                        <Link href="/about" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex">Get
                                            Expert Guidance <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
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
