
import Link from "next/link"

export default function Blog7() {
    return (
        <>

            <div className="blog-7-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog-7-header text-center margin-b60">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Our Blogs</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Our Latest Blog  News
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <div className=" blog7boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog4.png" alt="" />
                                </div>
                                <div className=" blog-pdding2">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="#" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-h7 margin-b d-inline-block link-hover ts">Investment
                                        strategies: Building wealth with confidence</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-hp margin-b ts">We take pride in the
                                        success stories of our clients and the trust they place in consult.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 color-ks1 weight-700  d-inline-block laearnmore2 ts">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className=" blog7boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog5.png" alt="" />
                                </div>
                                <div className=" blog-pdding2">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="#" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-h7 margin-b d-inline-block link-hover ts">Retirement
                                        planning: Securing your golden years</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-hp margin-b ts">We take pride in the
                                        success stories of our clients and the trust they place in consult.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 color-ks1 weight-700  d-inline-block laearnmore2 ts">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={800}>
                            <div className=" blog7boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog6.png" alt="" />
                                </div>
                                <div className=" blog-pdding2">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="#" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color-h7 margin-b d-inline-block link-hover ts">Building
                                        an emergency fund: Financial safety net consult</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-hp margin-b ts">We take pride in the
                                        success stories of our clients and the trust they place in consult.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 color-ks1 weight-700  d-inline-block laearnmore2 ts">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor47.png" alt="" className="elementors13" />
            </div>
        </>
    )
}
