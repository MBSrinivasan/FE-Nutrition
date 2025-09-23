
import Link from "next/link"

export default function About2() {
    return (
        <>

            <div className="about2-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="about2-author-images">
                                <div className="about2-scetion-images" data-aos="zoom-out" data-aos-duration={1200}>
                                    <img src="/assets/images/sectionimg/about3-img.png" alt="" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1400}>
                                        <div className="about-2-authr1">
                                            <img src="/assets/images/sectionimg/about4-img.png" alt="" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1600}>
                                        <div className="about-2-authr1">
                                            <img src="/assets/images/sectionimg/about5-img.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={800}>
                            <div className="about-2-textarea">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">About
                                    Us</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17 margin-b20" data-aos="fade-left" data-aos-duration={1000}>Maximize your potential with expert consultation.</h1>
                                <div className="pera-background" data-aos="fade-left" data-aos-duration={1200}>
                                    <p className="font-outfit font-16 lineh-26 color-17 weight-500">Ready to experience the benefits
                                        of partnering with PAE Business Consulting? Schedule a free consultation with our
                                        experienced team today and discover how our expertise can drive growth, optimize
                                        operations, and unlock your business's full potential.</p>
                                </div>
                                <p className="font-outfit font-16 lineh-26 colorp weight-400">Experience: Our team brings years of
                                    experience across various industries, allowing us to offer insights and strategies that are
                                    tailored to your specific business needs. Results-Driven Approach: We are committed to
                                    delivering tangible results and measurable outcomes for our clients.</p>
                                <div className="theme-btn4 margin-t32 d-inline-block margn-left" data-aos="fade-up" data-aos-duration={1400}>
                                    <Link href="/servicev1" className="theme-btn5 font-outfit font-16  weight-700 ">Explore
                                        services <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
