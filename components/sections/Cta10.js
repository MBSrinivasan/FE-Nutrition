
import Link from "next/link"

export default function Cta10() {
    return (
        <>

            <div className="cta10-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta10-header">
                                <h1 className="font-44 font-lora lineh-52 weight-600 color margin-b">Get expert advice on consult
                                    investment to strategies.</h1>
                                <p className="font-16 font-ks lineh-26 weight-500 color-21">We believe that informed clients make
                                    better financial decisions. As part of our service, we'll provide educational resources and
                                    workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-5">
                            <div className="cta10-btnarea">
                                <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions11">Schedule
                                    an Apointment <span><img src="/assets/images/icons/arrowgreen.svg" alt="" /></span></Link>
                                <Link href="/contact1" className="font-ks font-16 lineh-16 color-h10 weight-700 solutions12">Contact Us <span><img src="/assets/images/icons/arrowgreen.svg" alt="" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
