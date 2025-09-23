
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function About1() {
    return (
        <>

            <div className="about3-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="about3-images1">
                                <img src="/assets/images/sectionimg/about3-img1.png" alt="" data-aos="zoom-out" data-aos-duration={1200} />
                                <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={800}>
                            <div className="about3-textarea1">
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">About
                                    Us</span>
                                <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20">Mission  Values Of Your
                                    Law Consult Firm</h1>
                                <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Provide professional advice and
                                    guidance on legal matters, helping clients understand their rights, obligations, and
                                    potential courses.</p>
                                <div className="counter3-area3">
                                    <div className="row">
                                        <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration={800}>
                                            <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                <div className="counter4-boxarea4">
                                                    <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={959} /></h1>
                                                    <p className="font-ks font-16 lineh-16 weight-500 color-30">Case Settlement</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration={1000}>
                                            <div className="counter3-boxarea4 text-center margin-b20 margin-t32">
                                                <div className="counter4-boxarea4">
                                                    <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={250} /></h1>
                                                    <p className="font-ks font-16 lineh-16 weight-500 color-30">Insurance Settlment
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration={1200}>
                                            <div className="counter3-boxarea4 text-center">
                                                <div className="counter4-boxarea4">
                                                    <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={388} /></h1>
                                                    <p className="font-ks font-16 lineh-16 weight-500 color-30">Personal Injury</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6" data-aos="fade-left" data-aos-duration={1400}>
                                            <div className="counter3-boxarea4 text-center">
                                                <div className="counter4-boxarea4">
                                                    <h1 className="font-lora font-40 lineh-40 color-29 margin-b weight-600"><CounterUp count={400} /></h1>
                                                    <p className="font-ks font-16 lineh-16 weight-500 color-30">Divorce Case</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <Link href="/about" className="theme6-btn6 font-ks lineh-16 weight-700 color font-16 margin-t32">About Us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}
