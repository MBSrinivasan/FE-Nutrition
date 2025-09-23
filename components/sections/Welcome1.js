
import Link from "next/link"

export default function Welcome1() {
    return (
        <>

            <div className="welcome4-section-area">
                <img src="/assets/images/background/welcome4-background.png" alt="" className="img-4" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="welcome4-textarea">
                                <span className="trust font-ks font-16 lineh-16 weight-600 color margin-b24 ">Trusted Law Consulting
                                    Services</span>
                                <div className="warp">
                                    <h1 className="font-lora font-60 lineh-64 weight-500 color quote text-capitalize">Elevate your
                                        legal strategy partner to consalt</h1>
                                </div>
                                <p className="font-ks font-16 lineh-26 weight-500 color margin-t">We have a deep understanding of
                                    various industries, allowing <br /> us to provide specialized legal guidance tailored to your
                                    sector.</p>
                                <div className="shecdule-btn1" data-aos="fade-right" data-aos-duration={1200}>
                                    <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 shedule-btn2 d-inline-block margin-t28">Start
                                        Legal Consulation <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="welcome4-positionalarea">
                                <div className="imag4">
                                    <div className="position-bg ">
                                        <img src="/assets/images/background/position-bg.png" alt="" className="keyframe3" />
                                        <img src="/assets/images/elementor/elementor73.png" alt="" className="elementors82 keyframe4" />
                                    </div>
                                    <div className="ima1-4">
                                        <img src="/assets/images/sectionimg/welcome4img.png" alt="" data-aos="zoom-out-up" data-aos-duration={1200} />
                                    </div>
                                    <div className="special-1">
                                        <img src="/assets/images/icons/special1.png" alt="" className="aniamtion-key-1" />
                                    </div>
                                    <div className="special-2">
                                        <img src="/assets/images/icons/special2.png" alt="" className="aniamtion-key-2" />
                                    </div>
                                    <div className="special-3">
                                        <img src="/assets/images/icons/special3.png" alt="" className="aniamtion-key-1" />
                                    </div>
                                </div>
                                <div className="elementor-21">
                                    <img src="/assets/images/elementor/elementor21.png" alt="" className="aniamtion-key-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor22.png" alt="" className="elementor-22" />
            </div>
        </>
    )
}
