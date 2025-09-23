
import Link from "next/link"

export default function Cta8() {
    return (
        <>

            <div className="cta8-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta8-headerarea" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={800}>
                                <h1 className="font-lora font-44 weight-600 color lineh-52 margin-b">Get expert advice on consult
                                    investment to strategies.</h1>
                                <p className="font-ks font-16 weight-500 color-21 lineh-26">We believe that informed clients make
                                    better financial decisions. As part of our service, we'll provide educational resources and
                                    workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-1">
                        </div>
                        <div className="col-lg-5">
                            <div className="cta8-btnarea">
                                <Link href="/contact1" className="font-ks font-16 lineh-16 color weight-700 solutions1">Schedule an
                                    Apointment <span><span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                <Link href="/contact1" className="font-ks font-16 lineh-16 color-h8 weight-700 solutions2">Contact
                                    Us <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
