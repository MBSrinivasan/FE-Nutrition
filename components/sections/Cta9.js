
import Link from "next/link"

export default function Cta9() {
    return (
        <>

            <div className="cta9-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta9-header">
                                <h1 className="font-44 lineh-54 font-lora weight-600 color margin-b text-capitalize">Get expert
                                    advice on consult investment to strategies.</h1>
                                <p className="font-ks lineh-26 weight-500 color-21 font-16">We believe that informed clients make
                                    better financial decisions. As part of our service, we'll provide educational resources and
                                    workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-5">
                            <div className="cta9-btnarea">
                                <Link href="/contact1" className="font-16 weight-700 font-ks colorhp9 contactcta9">Schedule an
                                    Apointment <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                                <Link href="/contact2" className="font-16 weight-700 font-ks color contactcta10">Contact Us <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
