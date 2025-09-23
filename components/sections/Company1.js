
import Link from "next/link"

export default function Company1() {
    return (
        <>

            <div className="company-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={800}>
                            <div className="company-progress-area">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Company
                                    Progress</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17 margin-b20">Company progress world
                                    record in business and strategy consultant.</h1>
                                <p className="margin-b8">At Taxvice Business Consulting, we specialize in helping businesses achieve
                                    their full potential. Whether you're a startup looking to establish a strong.</p>
                                <div className="progress7 margin-b12">
                                    <div className="bussibess-plan">
                                        <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">Business
                                            Planning</span>
                                        <p className="font-16 font-outfit lineh-16 color-17 weight-500">98%</p>
                                    </div>
                                    <div className="progress-wrap3 progress3" data-progress-percent={98}>
                                        <div className="progress-bar3 progress3" />
                                    </div>
                                </div>
                                <div className="bussibess-plan">
                                    <span className="font-16 font-outfit lineh-16 color-17 weight-500 international1">International
                                        Business </span>
                                    <p className="font-16 font-outfit lineh-16 color-17 weight-500">96%</p>
                                </div>
                                <div className="progress-wrap3 progress3" data-progress-percent={96}>
                                    <div className="progress-bar3 progress3" />
                                </div>
                                <div className="theme-btn4 margin-t32 d-inline-block margn-left service-center" data-aos="fade-left" data-aos-duration={1200}>
                                    <Link href="/contact1" className="theme-btn5 font-outfit font-16  weight-700 margin-b12">request a quote <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1000}>
                            <div className="company-images">
                                <img src="/assets/images/sectionimg/company-img1.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
