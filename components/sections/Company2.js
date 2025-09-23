
import Link from "next/link"

export default function Company2() {
    return (
        <>

            <div className="company5-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-centers">
                        <div className="col-lg-6">
                            <div className="works5-sectino">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">How
                                    It Works</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-left" data-aos-duration={1200}>We understand that every business is unique</h1>
                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b20">Understand your industry
                                    landscape better with our in-depth market analysis. We'll provide you with insights into
                                    market trends, customer behaviors, and competitive positioning to your business decisions.
                                </p>
                                <p className="font-outfit font-16 lineh-26 weight-400 color38 margin-b24">Streamline your operations
                                    to boost efficiency and reduce costs. Our consultants will identify bottlenecks, optimize
                                    processes, and recommend technologies that transform business operations.</p>
                                <div className="service5button">
                                    <Link href="/servicev2" className="font-outfit font-16 lineh-16 weight-700 color button14 d-inline-block ts">More
                                        About Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="works-servicearea margin-b30 equel" data-aos="fade-right" data-aos-duration={1000}>
                                <div className="worksicons5">
                                    <img src="/assets/images/icons/document4.png" alt="" />
                                </div>
                                <div className="workstext">
                                    <Link href="/servicemiddle" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Understanding
                                        your goals</Link>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">The first and most crucial
                                        step is understanding your unique financial aspirations and challenges.</p>
                                </div>
                            </div>
                            <div className="works-servicearea margin-b30" data-aos="fade-right" data-aos-duration={1200}>
                                <div className="worksicons5">
                                    <img src="/assets/images/icons/calculator1.png" alt="" />
                                </div>
                                <div className="workstext">
                                    <Link href="/servicemiddle" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Comprehensive
                                        financial analysis</Link>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">The first and most crucial
                                        step is understanding your unique financial aspirations and challenges.</p>
                                </div>
                            </div>
                            <div className="works-servicearea" data-aos="fade-right" data-aos-duration={1400}>
                                <div className="worksicons5">
                                    <img src="/assets/images/icons/financial1.png" alt="" />
                                </div>
                                <div className="workstext">
                                    <Link href="/servicemiddle" className="font-outfit font-24 weight-600 color37 margin-b14 lineh-26 d-inline-block ts">Success
                                        your financial goals</Link>
                                    <p className="font-outfit font-16 weight-400 lineh-26 color38 ts">The first and most crucial
                                        step is understanding your unique financial aspirations and challenges.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
