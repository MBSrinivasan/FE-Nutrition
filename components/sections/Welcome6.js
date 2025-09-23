
import Link from "next/link"

export default function Welcome6() {
    return (
        <>

            <div className="welcome3-section-area1 headerh5bg">
                <img src="/assets/images/elementor/elementor36.png" alt="" className="elementor-12 aniamtion-key-1" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="header5-textareah5" data-aos="fade-right" data-aos-duration={1000}>
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">Trusted
                                    Financial Consulting Services</span>
                                <h1 className="font-lora font-60 lineh-64 weight-600 colorwel margin-b20" data-aos="fade-right" data-aos-duration={1200}>Your Best Finance Consulting Partners</h1>
                                <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ">Our consultants bring diverse
                                    financial backgrounds, ensuring seasoned <br /> and practical advice. We develop solutions
                                    that align with your unique.</p>
                                <div className="h0mapagesixbtnall" data-aos="fade-up" data-aos-duration={1000}>
                                    <Link href="/contact1" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block home5btn7 ts">Get
                                        Financial Advice</Link>
                                    <div className="all-phoneflex" data-aos="fade-up" data-aos-duration={1400}>
                                        <div className="phonwiicone">
                                            <Link href="/tel:123-456-7890"><img src="/assets/images/icons/phoneiicon1.png" alt="" className="ts" /></Link>
                                        </div>
                                        <div className="phoneiicona">
                                            <span className="font-nunito font-16 weight-500 color-nuni margin-b8 d-inline-block lineh-16">Free
                                                Consultation</span> <br />
                                            <Link href="/tel:123-456-7890" className="font-18 weight-700 colorwel font-nunito">123-456-7890</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="homewelcome6">
                                <img src="/assets/images/sectionimg/welcome6img1.png" alt="" className="welcomesix" data-aos="zoom-out" data-aos-duration={1000} />
                                <img src="/assets/images/sectionimg/expertimg1.png" alt="" className="expert1 aniamtion-key-1" data-aos="zoom-out" data-aos-duration={1400} />
                                <img src="/assets/images/sectionimg/imagesbg.png" alt="" className="imagesgreen" data-aos="zoom-in" data-aos-duration={1200} />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor37.png" alt="" className="elementor-16" />
                <img src="/assets/images/elementor/elementor38.png" alt="" className="elementors5" />
            </div>
        </>
    )
}
