
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function About11() {
    return (
        <>

            <div className="about11-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className="images-divided-area">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="images-first-section">
                                            <div className="row">
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="images-firsts" data-aos="fade-down" data-aos-duration={1000}>
                                                        <img src="/assets/images/sectionimg/about11-img1.png" alt="" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12 col-md-6">
                                                    <div className="images-firsts m-0" data-aos="fade-up" data-aos-duration={1200}>
                                                        <img src="/assets/images/sectionimg/about11-img2.png" alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="images-second" data-aos="zoom-out" data-aos-duration={1400}>
                                            <img src="/assets/images/sectionimg/about11-img3.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                                <div className="aboutcounter-area" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={600}>
                                    <h1 className="font-40 font-outfit lineh-40 color"><CounterUp count={15} /></h1>
                                    <p className="font-16 lineh-26 weight-400 color font-outfit">Years of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="about-11-textarea" data-aos="fade-left" data-aos-duration={1000}>
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h11 aropaln2 d-inline-block margin-b24"><img src="/assets/images/icons/aroplanicons2.svg" alt="" />About Us</span>
                                <h1 className="font-outfit font-40 lineh-52 weight-600 colorhp11 margin-b20" data-aos="fade-left" data-aos-duration={1000} data-aos-easing="linear">Expert Visa Guidance Tailored to Your
                                    Needs</h1>
                                <p className="font-outfit font-16 lineh-26 weight-400 color-hp12 margin-b">Our team of experienced
                                    immigration consultants is here to simplify this process for you. With a deep understand of
                                    the ever-evolving immigration landscape.</p>
                                <p className="font-outfit font-16 lineh-26 weight-400 color-hp12">Welcome to Your Company Name, your
                                    trusted partner on the journey to realizing your dreams of international travel, study,
                                    work, or reuniting with loved.</p>
                                <div className="about-three__content-btn" data-aos="fade-left" data-aos-duration={1000} data-aos-easing={800}>
                                    <Link href="/about" className="thm-btn font-16 lineh-16 font-outfit weight-500 color margin-t32" data-text="Immigration Guidance">Immigration Guidance</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
