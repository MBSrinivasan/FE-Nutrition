
import Link from "next/link"

export default function Casestudy3() {
    return (
        <>

            <div className="case5-section-area section-padding5">
                <img src="/assets/images/elementor/elementor29.png" alt="" className="elemen29" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 m-auto">
                            <div className="case5-headertext text-center margin-b60">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">Case
                                    Study</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20">Read some business
                                    consultant case study</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={600} data-aos-easing="linear">
                            <div className="case5-worksarea margin-b30">
                                <div className="workservice5">
                                    <img src="/assets/images/sectionimg/casestudy1img.png" alt="" />
                                </div>
                                <div className="servicetextimg p-0 margint20">
                                    <Link href="/casemiddle" className="font-outfit font-24 lineh-32 weight-600 color37 d-inline-block margin-b hovertext">Elevate
                                        Your Business to New Heights with Expert Consulting Solutions</Link>
                                    <div className="learnmore51">
                                        <Link href="/casemiddle" className="font-outfit font-16 lineh-16 weight-700 color36 ">Learn
                                            More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={800} data-aos-easing="linear">
                            <div className="case5-worksarea margin-b30">
                                <div className="workservice5">
                                    <img src="/assets/images/sectionimg/casestudyimg2.png" alt="" />
                                </div>
                                <div className="servicetextimg p-0 margint20">
                                    <Link href="/casemiddle" className="font-outfit font-24 lineh-32 weight-600 color37 d-inline-block margin-b hovertext">Unleash
                                        Your Business Potential with Our Top 10 Consulting Solutions</Link>
                                    <div className="learnmore51">
                                        <Link href="/casemiddle" className="font-outfit font-16 lineh-16 weight-700 color36 ">Learn
                                            More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000} data-aos-easing="linear">
                            <div className="case5-worksarea margin-b30">
                                <div className="workservice5">
                                    <img src="/assets/images/sectionimg/case-img1.png" alt="" />
                                </div>
                                <div className="servicetextimg p-0 margint20">
                                    <Link href="/casemiddle" className="font-outfit font-24 lineh-32 weight-600 color37 d-inline-block margin-b hovertext">Unleash
                                        Your Business Potential with <br /> Our Top 10 Consulting Solutions</Link>
                                    <div className="learnmore51">
                                        <Link href="/casemiddle" className="font-outfit font-16 lineh-16 weight-700 color36 ">Learn
                                            More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="service5button margin-t32">
                                <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 d-inline-block ts">View Case
                                    Study</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor30.png" alt="" className="elemen30" />
            </div>
        </>
    )
}
