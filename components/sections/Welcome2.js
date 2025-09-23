
import Link from "next/link"

export default function Welcome2() {
    return (
        <>

            <div className="welcome2-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5">
                            <div className="welcome2-textarea" data-aos="fade-right" data-aos-duration={1000}>
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b24 d-inline-block">Maximize
                                    Your Potential with Expert Consultation</span>
                                <h1 className="font-outfit font-56 weight-600 lineh-64 color-17 margin-b18">Consulting driving
                                    growth and <span className="succes">grow</span><br /> for your business.</h1>
                                <p className="font-16 lineh-26 color-17 weight-400 font-outfit">Our team brings years of experience
                                    across various industries, fallowing us to offer insights and strategies that are tailored
                                    to your specific business needs to your business success.</p>
                                <div className="theme-btn4 margin-t32 d-inline-block margn-left" data-aos="fade-up" data-aos-duration={1200}>
                                    <Link href="/contact2" className="theme-btn5 font-outfit font-16  weight-700 ">Schedule a
                                        Consultation <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1200}>
                            <div className="welcome2-images-area">
                                <div className="welcome-imgs-area">
                                    <div className="main-img">
                                        <img src="/assets/images/sectionimg/welcome-img-2.png" alt="" className="main-imgs" />
                                        <img src="/assets/images/sectionimg/ecommers-img.png" alt="" className="ecommer aniamtion-key-2" data-aos="fade-left" data-aos-duration={1400} />
                                    </div>
                                    <img src="/assets/images/elementor/elementor7.png" alt="" className="elementor-8 aniamtion-key-1" />
                                    <img src="/assets/images/elementor/elementor8.png" alt="" className="elementor9 aniamtion-key-2" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor6.png" alt="" className="elementor-6" />
            </div>
        </>
    )
}
