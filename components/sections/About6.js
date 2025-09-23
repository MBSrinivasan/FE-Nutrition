
import Link from "next/link"

export default function About6() {
    return (
        <>

            <div className="abouthome6-section-areas section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="home6about" data-aos="zoom-out" data-aos-duration={1200}>
                                <img src="/assets/images/sectionimg/abouthome6img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="homeaboutimages" data-aos="zoom-out" data-aos-duration={1400}>
                                <img src="/assets/images/sectionimg/abouthomeimg1.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="aboutsecond-area margin-t50">
                                <div className="row align-items-center">
                                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration={800}>
                                        <div className="about6-second-txetxarea">
                                            <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">About
                                                Us</span>
                                            <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b20" data-aos="fade-right" data-aos-duration={1200}>Let us partner with you to
                                                transform your financial</h1>
                                            <p className="font-nunito font-16 weight-500 color-nuni margin-b20 lineh-26">Maximize
                                                your business's financial potential with our expert advice. From financial
                                                analysis to risk management, we'll assist you in making well. We'll help you
                                                create a customized financial plan, manage </p>
                                            <p className="font-nunito font-16 weight-500 color-nuni lineh-26">Your financial journey
                                                begins now. Let us partner with you to transform your financial aspirations into
                                                reality. Schedule a consultation today to discuss how we can customize our
                                                expertise to suit your unique needs.</p>
                                            <div className="div" data-aos="fade-up" data-aos-duration={1400}>
                                                <Link href="/about" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block home5btn7 ts margin-t32">Transform
                                                    Your Finances</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="animationdiv" data-aos="fade-right" data-aos-duration={1200}>
                                            <div className="abouthome6-boxarea margin-b30">
                                                <div className="documenticons">
                                                    <img src="/assets/images/icons/document5.svg" alt="" />
                                                </div>
                                                <div className="documents-textarea">
                                                    <Link href="/servicemiddle" className="font-lora font-24 weight-600 colorwel lineh-26 margin-b14 d-inline-block ts">Understanding
                                                        your goals</Link>
                                                    <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">The first
                                                        and most crucial step is understanding your unique financial aspirations
                                                        and challenges.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="animatiodiv" data-aos="fade-right" data-aos-duration={1400}>
                                            <div className="abouthome6-boxarea margin-b30">
                                                <div className="documenticons">
                                                    <img src="/assets/images/icons/calculation2.svg" alt="" />
                                                </div>
                                                <div className="documents-textarea">
                                                    <Link href="/servicemiddle" className="font-lora font-24 weight-600 colorwel lineh-26 margin-b14 d-inline-block ts">Understanding
                                                        your goals</Link>
                                                    <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">The first
                                                        and most crucial step is understanding your unique financial aspirations
                                                        and challenges.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="animationdiv" data-aos="fade-right" data-aos-duration={1600}>
                                            <div className="abouthome6-boxarea">
                                                <div className="documenticons">
                                                    <img src="/assets/images/icons/financial2.svg" alt="" />
                                                </div>
                                                <div className="documents-textarea">
                                                    <Link href="/servicemiddle" className="font-lora font-24 weight-600 colorwel lineh-26 margin-b14 d-inline-block ts">Understanding
                                                        your goals</Link>
                                                    <p className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">The first
                                                        and most crucial step is understanding your unique financial aspirations
                                                        and challenges.</p>
                                                </div>
                                            </div>
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
