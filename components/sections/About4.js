
import Link from "next/link"

export default function About4() {
    return (
        <>

            <div className="about3-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="about-3-images">
                                <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-17" />
                                <img src="/assets/images/sectionimg/about6.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="about3-textarea">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">About
                                    Us</span>
                                <h1 className="font-lora font-44 weight-600 color-ni lineh-54">We'll help you create a customized
                                    <span className="success1 font-44 lineh-54 color-25">financial</span> plan.</h1>
                                <p className="font-nunito font-16 lineh-26 weight-500 color-26 margin-t">Maximize your business's
                                    financial potential with our expert advice. <br /> From financial analysis to risk management,
                                    we'll assist you in making <br /> well. We'll help you create a customized financial plan,
                                    manage </p>
                                <div className="about3-listarea">
                                    <div className="row">
                                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                            <div className="about3-author-list margin-t32">
                                                <ul>
                                                    <li><span className="check3-icon margin-b"><i className="fa-solid fa-check" /></span><span className="freedom font-nunito font-16 lineh-16 color-ni weight-600">Financial
                                                        Freedom Consulting</span></li>
                                                    <li><span className="check3-icon"><i className="fa-solid fa-check" /></span><span className="freedom font-nunito font-16 lineh-16 color-ni weight-600">Money
                                                        Management Consulting</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                            <div className="about3-author-list margin-t32">
                                                <ul>
                                                    <li><span className="check3-icon margin-b"><i className="fa-solid fa-check" /></span><span className="freedom font-nunito font-16 lineh-16 color-ni weight-600">Financial
                                                        Freedom Consulting</span></li>
                                                    <li><span className="check3-icon"><i className="fa-solid fa-check" /></span><span className="freedom font-nunito font-16 lineh-16 color-ni weight-600">Money
                                                        Management Consulting</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="about-3-afterbefore" data-aos="fade-left" data-aos-duration={1200}>
                                    <p className="font-nunito font-16 lineh-26 color-ni weight-600">We'll help you create a
                                        customized financial plan, manage budgets, and make informed investment decisions for
                                        Console.</p>
                                </div>
                                <Link href="/about" className="font-16 lineh-16 font-nunit weight-700 color unlock-btn">Book an
                                    Appointment</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
