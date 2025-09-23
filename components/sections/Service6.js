
import Link from "next/link"

export default function Service6() {
    return (
        <>

            <div className="service5-section-area section-padding5">
                <img src="/assets/images/elementor/elementor26.png" alt="" className="elementoe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="service-authors5 text-center margin-b60">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">Our
                                    Services</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20">We'll help you create a
                                    high-performing workforce</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={800}>
                            <div className="service5-box5area margin-b30">
                                <div className="service5img">
                                    <img src="/assets/images/sectionimg/service5img1.png" alt="" />
                                </div>
                                <div className="servicetextimg">
                                    <Link href="/servicemiddle" className="font-outfit font-22 lineh-22 weight-600 color37 d-inline-block margin-b">Process
                                        Improvement</Link>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24">Consultants analyze
                                        current operations and identify areas for improvement in efficiency, productivity, and
                                        cost reduction.</p>
                                    <div className="learnmore51">
                                        <Link href="/servicemiddle" className="font-outfit font-16 lineh-16 weight-700 color37 ">Learn More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={1000}>
                            <div className="service5-box5area margin-b30">
                                <div className="service5img">
                                    <img src="/assets/images/sectionimg/service5img2.png" alt="" />
                                </div>
                                <div className="servicetextimg">
                                    <Link href="/servicemiddle" className="font-outfit font-22 lineh-22 weight-600 color37 d-inline-block margin-b">Strategy
                                        Consulting</Link>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24">Consultants analyze
                                        current operations and identify areas for improvement in efficiency, productivity, and
                                        cost reduction.</p>
                                    <div className="learnmore51">
                                        <Link href="/servicemiddle" className="font-outfit font-16 lineh-16 weight-700 color37 ">Learn More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={1200}>
                            <div className="service5-box5area margin-b30">
                                <div className="service5img">
                                    <img src="/assets/images/sectionimg/service5img3.png" alt="" />
                                </div>
                                <div className="servicetextimg">
                                    <Link href="/servicemiddle" className="font-outfit font-22 lineh-22 weight-600 color37 d-inline-block margin-b">Change
                                        Managment</Link>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24">Consultants analyze
                                        current operations and identify areas for improvement in efficiency, productivity, and
                                        cost reduction.</p>
                                    <div className="learnmore51">
                                        <Link href="/servicemiddle" className="font-outfit font-16 lineh-16 weight-700 color37 ">Learn More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="service5button text-center">
                                <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 d-inline-block margin-t32 ts">View
                                    more Services</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor28.png" alt="" className="elementor-16" />
            </div>
        </>
    )
}
