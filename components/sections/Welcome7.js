
import Link from "next/link"

export default function Welcome7() {
    return (
        <>

            <div className="welcome7-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="welcome7-textarea">
                                <span className="font-ks font-16 lineh-16 weight-500 color margin-b24">Law Consulting
                                    Services</span>
                                <h1 className=" font-lora font-60 lineh-64 weight-500 color margin-b20" data-aos="fade-right" data-aos-duration={1000}>Your Trusted Law Consulting Partner</h1>
                                <p className="font-16 font-ks lineh-26 weight-400 color-21">We have a deep understanding of various
                                    industries, allowing us to provide specialized legal guidance tailored to your sector.</p>
                                <div className="homepage7all-btn margin-t32" data-aos="fade-up" data-aos-duration={1200}>
                                    <Link href="/contact1" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3">Start
                                        Legal Consulation</Link>
                                    <Link href="/contact2" className="font-ks font-16 weight-700 color lineh-16 shedulebtn4">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcome-auhtor-allshape">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="shap1area text-center ts  margin-b10 shapemargin">
                                            <div className="shapewapper ts">
                                                <div className="briefimages ts">
                                                    <img src="/assets/images/icons/briefcase2.png" alt="" />
                                                </div>
                                                <h2 className="font-lora font-30 lineh-20 weight-600 color-h9 ts">Personal Injury
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shap1area text-center ts">
                                            <div className="shapewapper ts">
                                                <div className="briefimages ts">
                                                    <img src="/assets/images/icons/brief3.png" alt="" />
                                                </div>
                                                <h2 className="font-lora font-30 lineh-20 weight-600 color-h9 ts">Family Law</h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shap1area text-center ts">
                                            <div className="shapewapper ts">
                                                <div className="briefimages ts">
                                                    <img src="/assets/images/icons/vector2.png" alt="" />
                                                </div>
                                                <h2 className="font-lora font-30 lineh-20 weight-600 color-h9 ts">Criminal Defense
                                                </h2>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="shap1area text-center ts m-0">
                                            <div className="shapewapper ts">
                                                <div className="briefimages ts">
                                                    <img src="/assets/images/icons/brief4.png" alt="" />
                                                </div>
                                                <h2 className="font-lora font-30 lineh-20 weight-600 color-h9 ts">Financial Law</h2>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor43.png" alt="" className="elementors9 aniamtion-key-1" />
            </div>
        </>
    )
}
