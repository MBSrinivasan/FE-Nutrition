
import Link from "next/link"

export default function Client3() {
    return (
        <>

            <div className="client2-scetion-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="client2-textarea">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">Practice
                                    Areas</span>
                                <h1 className="font-lora font-44 weight-600 color-ni lineh-54 margin-b">On this exciting journey
                                    towards <span className="success1 font-44 lineh-54 color-25">financial success</span></h1>
                                <p className="font-nunito font-16 lineh-26 color-26 weight-500 margin-b">We believe that informed
                                    clients make better financial decisions. As <br /> part of our service, we'll provide
                                    educational resources and <br /> workshops to help you enhance your financial knowledge.</p>
                                <p className="font-nunito font-16 lineh-26 color-26 weight-500">After gaining insights into your
                                    goals, we'll conduct a thorough <br /> analysis of your current financial statusto go any
                                    consultants.</p>
                                <Link href="/contact1" className="font-16 lineh-16 font-nunit weight-700 color unlock-btn margin-t32">Discover Our
                                    Solutions</Link>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="animation-3ss" data-aos="fade-left" data-aos-duration={1000}>
                                <div className="service3-boxarea1 margin-b30">
                                    <div className="service3-icon">
                                        <img src="/assets/images/icons/document1.png" alt="" />
                                    </div>
                                    <div className="service3-auhtor3">
                                        <Link href="/servicemiddle" className="color-ni">
                                            <h1 className="font-lora font-24 lineh-30 weight-600 color-ni margin-b">Understanding
                                                your goals</h1>
                                        </Link>
                                        <p className="font-16 font-nunito lineh-26 color-26">The first and most crucial step is
                                            understanding your unique financial aspirations and challenges.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="animation-3ss" data-aos="fade-left" data-aos-duration={1200}>
                                <div className="service3-boxarea1 margin-b30">
                                    <div className="service3-icon">
                                        <img src="/assets/images/icons/document2.png" alt="" />
                                    </div>
                                    <div className="service3-auhtor3">
                                        <Link href="/servicemiddle" className="color-ni">
                                            <h1 className="font-lora font-24 lineh-30 weight-600 color-ni margin-b">Comprehensive
                                                financial analysis</h1>
                                        </Link>
                                        <p className="font-16 font-nunito lineh-26 color-26">The first and most crucial step is
                                            understanding your unique financial aspirations and challenges.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="animatin-3ss" data-aos="fade-left" data-aos-duration={1400}>
                                <div className="service3-boxarea1">
                                    <div className="service3-icon">
                                        <img src="/assets/images/icons/document3.png" alt="" />
                                    </div>
                                    <div className="service3-auhtor3">
                                        <Link href="/servicemiddle" className="color-ni">
                                            <h1 className="font-lora font-24 lineh-30 weight-600 color-ni margin-b">Success your
                                                financial goals</h1>
                                        </Link>
                                        <p className="font-16 font-nunito lineh-26 color-26">The first and most crucial step is
                                            understanding your unique financial aspirations and challenges.</p>
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
