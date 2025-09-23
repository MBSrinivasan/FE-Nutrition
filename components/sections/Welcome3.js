
import Link from "next/link"

export default function Welcome3() {
    return (
        <>

            <div className="welcome-header-area">
                <img src="/assets/images/elementor/elementor1.png" alt="" className="elementor1" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="welcome1-textarea">
                                <h1 className="font-lora font-56 lineh-64 color34 weight-600 color-17 ">Welcome to Consalt your
                                    trusted partner in tax <span className="consulting color-2 font-lora">consulting</span></h1>
                                <p className="font-16 lineh-26 weight-400 color34 font-ks margin-t">Specialized Knowledge: Our team
                                    of highly skilled tax consultants is well-versed in tax laws, regulations, and industry best
                                    practices.</p>
                                <div className="theme-btn2 margin-t32" data-aos="fade-up" data-aos-duration={1200}>
                                    <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex">Get
                                        Tax Advice <img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcome-headerimg" data-aos="zoom-out" data-aos-duration={1000}>
                                <div className="welcome-img1">
                                    <img src="/assets/images/sectionimg/welcome-img1.png" alt="" className="imgw-100" />
                                </div>
                                <div className="elementor-imgages">
                                    <img src="/assets/images/elementor/elementor3.png" alt="" className="elementor3" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor2.png" alt="" className="elementor-2" />
            </div>
        </>
    )
}
