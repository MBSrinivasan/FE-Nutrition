
import Link from "next/link"

export default function Blog5() {
    return (
        <>

            <div className="blog5-section5-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="blog5-textrea5 text-center margin-b60">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">Our
                                    Blogs</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20">Our Latest News  Blog
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="blog2-author-area" data-aos="zoom-in" data-aos-duration={1000}>
                                <div className="blog2-images">
                                    <img src="/assets/images/sectionimg/blog2-img.png" alt="" />
                                </div>
                                <div className="blog-auhtor2-text blog2-author-poition " data-aos="zoom-out" data-aos-duration={1200}>
                                    <div className="blog2-ahtuor2 blog-2ahthor blog5auhto6">
                                        <div className="blog-date-list margin-b">
                                            <img src="/assets/images/icons/daterange1.png" alt="" />
                                            <Link href="#" className="font-16 lineh-16 font-outfit weight-500 color ts">14 May 2023</Link>
                                        </div>
                                        <Link href="/blogmiddle" className="ts">
                                            <h1 className="font-20 font-outfit color lineh-20 weight-600 margin-b ts">Organizational
                                                development and leadership consulting</h1>
                                        </Link>
                                        <p className="font-16 font-outfit lineh-26 weight-400 color ts">pproach: Emphasize your
                                            client-centric approach and how you tailor your consulting services to meet the
                                            specific needs and goals of each client.</p>
                                        <Link href="/blogmiddle" className="font-16 font-outfit weight-700 color lineh-26  margin-t32 d-inline-block learn-more learn-more1 ts">Learn
                                            More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="blog-auhtor2-text margin-b30" data-aos="zoom-in" data-aos-duration={1000} data-aos-easing="linear">
                                <div className="blog2-ahtuor2 blog5auhto5">
                                    <div className="blog-date-list margin-b">
                                        <img src="/assets/images/icons/daterane.png" alt="" className="ts" />
                                        <Link href="#" className="font-16 lineh-16 font-outfit weight-500 color-17 ts">14 May 2023</Link>
                                    </div>
                                    <Link href="/blogmiddle">
                                        <h1 className="font-20 font-outfit color37 lineh-20 weight-600 margin-b14 ts">Bussiness
                                            strategies, performance management to success</h1>
                                    </Link>
                                    <p className="font-16 font-outfit lineh-26 weight-400 color37 margin-b24 ts">Share real-life
                                        case studies and success stories that highlight the impact of your consulting services.
                                        Detail the challenges faced by your clients sucess.</p>
                                    <Link href="/blogmiddle" className="font-16 font-outfit weight-700 color37 ts lineh-26  d-inline-block learn-more">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                            <div className="blog-auhtor2-text " data-aos="zoom-in" data-aos-duration={1200} data-aos-easing="linear">
                                <div className="blog2-ahtuor2 blog5auhto5">
                                    <div className="blog-date-list margin-b">
                                        <img src="/assets/images/icons/daterane.png" alt="" className="ts" />
                                        <Link href="#" className="font-16 lineh-16 font-outfit weight-500 color-17 ts">14 May 2023</Link>
                                    </div>
                                    <Link href="/blogmiddle">
                                        <h1 className="font-20 font-outfit color37 lineh-20 weight-600 margin-b14 ts">Organizational
                                            development and leadership consulting</h1>
                                    </Link>
                                    <p className="font-16 font-outfit lineh-26 weight-400 color37 margin-b24 ts">pproach: Emphasize
                                        your client-centric approach and how you tailor your consulting services to meet the
                                        specific needs and goals of each client.</p>
                                    <Link href="/blogmiddle" className="font-16 font-outfit weight-700 color37 ts lineh-26  d-inline-block learn-more">Learn
                                        More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
