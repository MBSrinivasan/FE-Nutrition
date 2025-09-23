
import Link from "next/link"

export default function Blog4() {
    return (
        <>

            <div className="blog3-section-area section-padding8">
                <img src="/assets/images/elementor/elementor19.png" alt="" className="elementor-19" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={800}>
                            <div className="blog3-header-text text-center margin-b60">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">Our Latest
                                    News  Blog</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color-ni">Understanding and <span className="success1 color-25">controlling</span> Your money mindset</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <div className="blog1-boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog4.png" alt="" />
                                </div>
                                <div className="blog1-padding">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" />
                                        <Link href="#" className="color-ni">
                                            <p className="font-nunito font-16 weight-500 color-ni lineh-26">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-ni margin-b d-inline-block link-hover">Investment
                                        strategies: Building wealth with confidence</Link>
                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take pride in the
                                        success stories of our clients and the trust they place in consult.</p>
                                    <Link href="/blogmiddle" className="font-nunito font-16 lineh-16 color-25 weight-700  d-inline-block laearnmore2">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="blog1-boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog5.png" alt="" />
                                </div>
                                <div className="blog1-padding">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" />
                                        <Link href="#" className="color-ni">
                                            <p className="font-nunito font-16 weight-500 color-ni lineh-26">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-ni margin-b d-inline-block link-hover">Retirement
                                        planning: Securing your golden years</Link>
                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take pride in the
                                        success stories of our clients and the trust they place in consult.</p>
                                    <Link href="/blogmiddle" className="font-nunito font-16 lineh-16 color-25 weight-700  d-inline-block laearnmore2">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={800}>
                            <div className="blog1-boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog6.png" alt="" />
                                </div>
                                <div className="blog1-padding">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" />
                                        <Link href="#" className="color-ni">
                                            <p className="font-nunito font-16 weight-500 color-ni lineh-26">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-ni margin-b d-inline-block link-hover">Building
                                        an emergency fund: Financial safety net consult</Link>
                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take pride in the
                                        success stories of our clients and the trust they place in consult.</p>
                                    <Link href="/blogmiddle" className="font-nunito font-16 lineh-16 color-25 weight-700  d-inline-block laearnmore2">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor11.png" alt="" className="elementor-11" />
            </div>
        </>
    )
}
