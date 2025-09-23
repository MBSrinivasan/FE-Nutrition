
import Link from "next/link"

export default function Blog9() {
    return (
        <>

            <div className="blog9-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog9-header text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Our
                                    Blog</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Our Latest Blog For You</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6  col-md-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1000}>
                            <div className="blog9-boxarea">
                                <div className="blog9-authorarea">
                                    <img src="/assets/images/sectionimg/blog9img1.png" alt="" />
                                </div>
                                <div className="blog9auhtor-texrea">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="#" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-32 weight-600 color-h9 margin-b d-inline-block link-hover ts">Empowering
                                        Your Insurance Decisions with Expert Insurance</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-h9 margin-b ts">Insurance is a
                                        multifaceted industry that plays a critical role in safe guarding individuals,
                                        businesses,  assets against risks.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-h9 ts">Learn
                                        More<span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1200}>
                            <div className="blog9-boxarea">
                                <div className="blog9-authorarea">
                                    <img src="/assets/images/sectionimg/blog9img2.png" alt="" />
                                </div>
                                <div className="blog9auhtor-texrea">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="#" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-32 weight-600 color-h9 margin-b d-inline-block link-hover ts">Charting
                                        a Secure Path: Your Insurance Consultation Resource</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-h9 margin-b ts">Insurance is a
                                        multifaceted industry that plays a critical role in safe guarding individuals,
                                        businesses,  assets against risks.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-h9 ts">Learn
                                        More<span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
