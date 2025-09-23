
import Link from "next/link"

export default function Blog1() {
    return (
        <>

            <div className="blog-5-section-area section-padding7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog5-header5 margin-b60 text-center">
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Our
                                    Blog</span>
                                <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Our Latest News
                                    Blog</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="blog5-author5">
                                <div className="blog5-imag5">
                                    <img src="/assets/images/sectionimg/blog7.png" alt="" />
                                </div>
                                <div className="blog-auhtor-text">
                                    <div className="blog-author-flex">
                                        <img src="/assets/images/icons/email6.png" alt="" />
                                        <Link href="#">
                                            <p className="font-outfit font-16 lineh-26 weight-500 color-17">13 May 2023</p>
                                        </Link>
                                    </div>
                                    <h1 className="font-lora font-20 lineh-20 weight-600 color-29 margin-t margin-b"><Link href="/blogmiddle" className="color-29">Real Estate Transactions and Regulations</Link>
                                    </h1>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-30 margin-b30">Real estate deals involve
                                        complex legalities. We offer insights into property transactions, leasing agreements,
                                        zoning laws.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-29 learnmore3">Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="blog5-author5">
                                <div className="blog5-imag5">
                                    <img src="/assets/images/sectionimg/blog8.png" alt="" />
                                </div>
                                <div className="blog-auhtor-text">
                                    <div className="blog-author-flex">
                                        <img src="/assets/images/icons/email6.png" alt="" />
                                        <Link href="#">
                                            <p className="font-outfit font-16 lineh-26 weight-500 color-17">13 May 2023</p>
                                        </Link>
                                    </div>
                                    <h1 className="font-lora font-20 lineh-20 weight-600 color-29 margin-t margin-b"><Link href="/blogmiddle" className="color-29">Expert Insights from Our Law Consulting
                                        Team</Link></h1>
                                    <p className="font-16 font-ks lineh-26 weight-500 color-30 margin-b30">Where we provide expert
                                        insights and guidance to help you navigate the intricate world of law and empower you to
                                        make.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-29 learnmore3">Learn More <span><i className="fa-solid fa-arrow-right" /></span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
