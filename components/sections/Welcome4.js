
import Link from "next/link"

export default function Welcome4() {
    return (
        <>

            <div className="welcome3-section-area">
                <img src="/assets/images/elementor/elementor15.png" alt="" className="elementor-12 aniamtion-key-1" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="welcome3-header">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">Trusted
                                    Financial Consulting Services</span>
                                <h1 className="font-lora font-60 weight-600 color-ni lineh-64">Partner for your Financial <span className="success1 font-60 lineh-64 color-25">Success</span></h1>
                                <p className="font-nunito font-16 lineh-26 weight-500 color-26 margin-t">Include a high-quality and
                                    relevant image or video that represents <br /> your finance consulting services or showcases
                                    happy clients.</p>
                                <div className="join3-btn" data-aos="fade-up" data-aos-duration={1200}>
                                    <Link href="/contact1" className="font-16 lineh-16 font-nunit weight-700 color unlock-btn">Unlock Financial
                                        Success</Link>
                                    <Link href="/contact2" className="font-16 lineh-16 font-nunit weight-700 color contact3 contactboredrbtn">Contact
                                        Us</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="welcome3-author-images">
                                <div className="welcome3-images">
                                    <img src="/assets/images/sectionimg/welcome3.png" alt="" />
                                    <img src="/assets/images/sectionimg/card1.png" alt="" className="card1 aniamtion-key-1" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor16.png" alt="" className="elementor-16" />
            </div>
        </>
    )
}
