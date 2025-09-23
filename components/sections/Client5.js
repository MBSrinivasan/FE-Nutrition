
import Link from "next/link"
import CounterUp from "../elements/CounterUp"

export default function Client5() {
    return (
        <>

            <div className="client-7section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="counter-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                                        <div className="counter1 counetr2 countermargin">
                                            <div className="counter-boxarea">
                                                <h1 className="font-40 font-lora weight-600 lineh-50 color-h7 margin-b"> <CounterUp count={499} /></h1>
                                                <p className="font-ks font-20 lineh-20 color-hp weight-500">Law Consulting</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration={1200}>
                                        <div className="counter1 counetr2">
                                            <div className="counter-boxarea">
                                                <h1 className="font-40 font-lora weight-600 color-h7 margin-b lineh-50"> <CounterUp count={268} /></h1>
                                                <p className="font-ks font-20 lineh-20 color-hp weight-500">Estate Planning</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-in" data-aos-duration={1400}>
                                        <div className="counter1 counetr2">
                                            <div className="counter-boxarea">
                                                <h1 className="font-40 font-lora weight-600 color-h7 margin-b">$<CounterUp count={162} /></h1>
                                                <p className="font-ks font-20 lineh-20 color-hp weight-500">Dispute Resolutions</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 col-md-6" data-aos="zoom-out" data-aos-duration={1600}>
                                        <div className="counter1 counetr2">
                                            <div className="counter-boxarea">
                                                <h1 className="font-40 font-lora weight-600 lineh-50 color-h7 margin-b"><CounterUp count={490} /></h1>
                                                <p className="font-ks font-20 lineh-20 color-hp weight-500">Client Success</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div >
                        <div className="col-lg-6">
                            <div className="tax-consulttext1" data-aos="fade-left" data-aos-duration={1000}>
                                <div className="tax-consult">
                                    <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Company Fact</span>
                                    <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20" data-aos="fade-left" data-aos-duration={1200}>Legal Conflicts Can To Be Disruptive  Stressful</h1>
                                    <p className="font-16 lineh-26 font-ks weight-500 color-hp">Our skilled negotiators and
                                        litigators are here to guide you through various dispute resolution methods, aiming for
                                        efficient and favorable outcomes while minimizing the impact on your life or business.
                                    </p>
                                    <div className="div" data-aos="fade-up" data-aos-duration={1400}>
                                        <Link href="/contact1" className="font-ks font-16 weight-700 color lineh-16 shedulebtn3 margin-t32">Discover
                                            Solution</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >
        </>
    )
}
