
import Link from "next/link"

export default function About7() {
    return (
        <>

            <div className="about7-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1000}>
                            <div className="about7-images">
                                <img src="/assets/images/sectionimg/about7-img1.png" alt="" className="about7images" />
                                <img src="/assets/images/elementor/elementor44.png" alt="" className="elementors10 keyframe3" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1400}>
                            <div className="about-7textarea">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">About Us</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20" data-aos="fade-left" data-aos-duration={1200}>Secure your family's future with expert estate planning</h1>
                                <p className="font-ks font-16 weight-500 color-hp lineh-26 margin-b24">Expert counsel for businesses
                                    to make informed decisions, manage risks, and achieve growth. Comprehensive contract
                                    support, from drafting to consult negotiation, safeguarding your agreements.</p>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="uncommonlist">
                                            <div className="listarea1">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">Financial Freedom
                                                    Consulting</p>
                                            </div>
                                            <div className="listarea2">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">Money Management
                                                    Consulting</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="uncommonlist">
                                            <div className="listarea1">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">Next Genaration
                                                    Accounting</p>
                                            </div>
                                            <div className="listarea2">
                                                <span><i className="fa-solid fa-check" /></span>
                                                <p className="font-ks font-16 weight-600 color-h7 lineh-16">Short-Range Finance
                                                    Planning</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="font-ks font-16 weight-500 color-hp lineh-26 margin-t28">Explain your approach to
                                    mediation and arbitration for efficient conflict resolution. Introduce key members of your
                                    legal team, including.</p>
                                <div data-aos="fade-up" data-aos-duration={1400}>
                                    <Link href="/about" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3 margin-t32">More About
                                        Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
