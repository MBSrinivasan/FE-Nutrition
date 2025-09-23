
import Link from "next/link"

export default function Welcome11() {
    return (
        <>

            <div className="welcome11-section-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="welcome11-header-area" data-aos="fade-left" data-aos-duration={800}>
                                <span className="font-16 font-outfit lineh-26 weight-500 color aroplan d-inline-block margin-b24 "><img src="/assets/images/icons/aroplanicons1.svg" alt="" />Your Pathway to a Seamless
                                    Immigration Experience</span>
                                <h1 className="font-outfit font-56 lineh-64 weight-600 color margin-b20" data-aos="fade-left" data-aos-duration={1000}>Visa  Immigration Solution Starts Here</h1>
                                <p className="font-outfit font-16 lineh-26 weight-400 opacity1">With our guidance, you can focus on
                                    your aspirations while we handle the complexities of visa applications, documentation, and
                                    compliance.</p>
                                <Link href="/contact1" className="font-outfit font-16 lineh-16 weight-700 color themebtn11 d-inline-block margin-t32">Start
                                    Your Journey Today</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcome11-headerimages" data-aos="zoom-out" data-aos-duration={1200}>
                                <img src="/assets/images/sectionimg/welcome11img1.png" alt="" className="welcomeiamges" />
                                <img src="/assets/images/elementor/elementor75.png" alt="" className="elemnetors75 keyframe5" />
                            </div>
                        </div>
                    </div>

                </div>
                <img src="/assets/images/elementor/elementor76.png" alt="" className="elementors76" />
            </div>
        </>
    )
}
