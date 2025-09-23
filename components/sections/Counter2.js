
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function Counter2() {
    return (
        <>

            <div className="tax-counterarea section-padding5">
                <div className="container backgroud-positions">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="tax-consulttext">
                                <div className="tax-consult">
                                    <span className="font-18 font-ks lineh26 weight-500 color-17 margin-b d-inline-block">Tax
                                        Consulting Fact</span>
                                    <h1 className="font-lora font-42 lineh-50 weight-500 margin-b24 color34" data-aos="fade-left" data-aos-duration={1200}>Reach out to our expert team today to schedule a <span className="consultant">consultation.</span></h1>
                                    <p className="font-ks font-16 lineh-26 colorp weight-500">Confidentiality and Ethics: We adhere
                                        to the highest professional standards of confidentiality and ethics. You can trust us to
                                        handle your sensitive financial information with the utmost care and discretion.</p>
                                    <p className="font-ks font-16 lineh-26 colorp weight-500 margin-t">Proactive Strategies: We
                                        believe in proactive tax planning rather than reactive measures. By anticipating changes
                                        in tax laws and identifying help. </p>
                                    <div className="theme-btn2 margin-t32" data-aos="fade-left" data-aos-duration={1300}>
                                        <Link href="/contact1" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex">Schedule
                                            Consultation<img src="/assets/images/icons/arrowright.svg" alt="" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="counter-area">
                                <img src="/assets/images/background/counetrbg.png" alt="" className="counetrbg" />
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                        <div className="counter1">
                                            <div className="counter-boxarea">
                                                <h1 className="font-40 font-lora weight-600 lineh-50 color-19 margin-b"> <CounterUp count={499} /></h1>
                                                <p className="font-ks font-20 lineh-20 colorp weight-500">Tax Services</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                                        <div className="counter1">
                                            <div className="counter-boxarea">
                                                <img src="/assets/images/elementor/elementor4.png" alt="" className="elementor6" />
                                                <h1 className="font-40 font-lora weight-600 color-19 margin-b lineh-50"> <CounterUp count={35000} /></h1>
                                                <p className="font-ks font-20 lineh-20 colorp weight-500">Retail Investors</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                                        <div className="counter1">
                                            <div className="counter-boxarea">
                                                <h1 className="font-40 font-lora weight-600 color-19 margin-b">$<CounterUp count={300}/>B+</h1>
                                            <p className="font-ks font-20 lineh-20 colorp weight-500">Trade value Filled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1400}>
                                    <div className="counter1">
                                        <div className="counter-boxarea">
                                            <h1 className="font-40 font-lora weight-600 lineh-50 color-19 margin-b"><CounterUp count={6}/>M+</h1>
                                        <p className="font-ks font-20 lineh-20 colorp weight-500">Tax Return filed</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div >
            </div >
        </div >
            </div >
        </>
    )
}
