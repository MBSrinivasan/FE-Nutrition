
import Link from "next/link"

export default function Blog10() {
    return (
        <>

            <div className="blog10-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog10-header text-center margin-b60">
                                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">Our
                                    Blog</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24s">Our Latest Blog  News
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={800} data-aos-easing="linear">
                            <div className="auhtor-blog10">
                                <div className="auhtorblogimg">
                                    <img src="/assets/images/sectionimg/authorblog1.png" alt="" className="blogauhtor" />
                                </div>
                                <div className="autherblog-textarea">
                                    <div className="blog1-text">
                                        <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                        <Link href="#" className="color-h7">
                                            <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                        </Link>
                                    </div>
                                    <Link href="/blogmiddle" className="font-lora font-24 lineh-32 weight-600 colorhp3 d-inline-block margin-b14 ts">Empowering
                                        Your Insurance Decisions with Expert Insurance</Link>
                                    <p className="font-ks font-16 lineh-26 weight-500 color-p10 margin-b">Insurance is a
                                        multifaceted industry that plays a critical role in safe guarding individuals,
                                        businesses,  assets against risks.</p>
                                    <Link href="/blogmiddle" className="font-16 font-ks lineh-16 weight-700 colorhp3 ts">Learn More
                                        <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="blogsection-divided">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="blog-divided1 margin-b20">
                                            <img src="/assets/images/sectionimg/authorblog2.png" alt="" className=" w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1200}>
                                        <div className="blog-divided1-text margin-b20">
                                            <div className="blog1-text margin-b20">
                                                <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                                <Link href="#" className="color-h7">
                                                    <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                                </Link>
                                            </div>
                                            <Link href="/blogmiddle" className="font-20 lineh-28 weight-600 colorhp3 ts d-inline-block margin-b20">The
                                                Role of Risk Assessment in Insurance Planning</Link>
                                            <Link href="/blogmiddle" className="font-16 font-ks lineh-16 weight-700 colorhp3 ts">Learn More <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                        <div className="blog-divided1 margin-b20">
                                            <img src="/assets/images/sectionimg/authorblog3.png" alt="" className=" w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1200}>
                                        <div className="blog-divided1-text margin-b20">
                                            <div className="blog1-text margin-b20">
                                                <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                                <Link href="#" className="color-h7">
                                                    <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                                </Link>
                                            </div>
                                            <Link href="/blogmiddle" className="font-20 lineh-28 weight-600 colorhp3 ts d-inline-block margin-b20">The
                                                Role of Risk Assessment in Insurance Planning</Link>
                                            <Link href="/blogmiddle" className="font-16 font-ks lineh-16 weight-700 colorhp3 ts">Learn More <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                        <div className="blog-divided1 margin-b20">
                                            <img src="/assets/images/sectionimg/authorblog4.png" alt="" className=" w-100 h-100" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1200}>
                                        <div className="blog-divided1-text margin-b20">
                                            <div className="blog1-text margin-b20">
                                                <img src="/assets/images/icons/vector1.png" alt="" className="ts" />
                                                <Link href="#" className="color-h7">
                                                    <p className="font-ks font-16 weight-500 color-h7 lineh-26 ts">02 Nov 2023</p>
                                                </Link>
                                            </div>
                                            <Link href="/blogmiddle" className="font-20 lineh-28 weight-600 colorhp3 ts d-inline-block margin-b20">The
                                                Role of Risk Assessment in Insurance Planning</Link>
                                            <Link href="/blogmiddle" className="font-16 font-ks lineh-16 weight-700 colorhp3 ts">Learn More <img src="/assets/images/icons/arrowgreen.svg" alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
