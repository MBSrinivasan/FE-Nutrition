
import Link from "next/link"

export default function Blog3() {
    return (
        <>

            <div className="blog1-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="blog1-header-text text-center">
                                <span className="font-18 font-ks lineh26 weight-500 color34 margin-b d-inline-block">Our Blog</span>
                                <h1 className="font-lora font-42 lineh-50 weight-500 margin-b24 color34">We go beyond simply
                                    preparing your <span className="tax-returns">tax returns</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="blog1-boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog1.png" alt="" />
                                </div>
                                <div className="blog1-padding">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" />
                                        <Link href="#">
                                            <p className="font-ks font-16 weight-500 color-18 lineh-26">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color34 margin-b d-inline-block">Get
                                        valuable advice on managing to corporate taxes.</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 colorp margin-b24">Tax Planning and
                                        Optimization: We go consult beyond simply preparing your tax returns.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-5 learnmore learnmore1">Learn More
                                        <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <div className="blog1-boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog2.png" alt="" />
                                </div>
                                <div className="blog1-padding">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" />
                                        <Link href="#">
                                            <p className="font-ks font-16 weight-500 color-18 lineh-26">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color34 margin-b d-inline-block">We help
                                        you take advantage deductions, credits, Tax stor.</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 colorp margin-b24">Tax Planning and
                                        Optimization: We go consult beyond simply preparing your tax returns.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-5 learnmore learnmore1">Learn More
                                        <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="fade-right" data-aos-duration={1400}>
                            <div className="blog1-boxarea">
                                <div className="blog1-img">
                                    <img src="/assets/images/sectionimg/blog3.png" alt="" />
                                </div>
                                <div className="blog1-padding">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" />
                                        <Link href="#">
                                            <p className="font-ks font-16 weight-500 color-18 lineh-26">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-30 weight-500 color34 margin-b d-inline-block">We offer
                                        year-round support and consultation to address</Link>
                                    <p className="font-16 font-ks lineh-26 weight-500 colorp margin-b24">Tax Planning and
                                        Optimization: We go consult beyond simply preparing your tax returns.</p>
                                    <Link href="/blogmiddle" className="font-ks font-16 lineh-16 weight-700 color-5 learnmore learnmore1">Learn More
                                        <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
