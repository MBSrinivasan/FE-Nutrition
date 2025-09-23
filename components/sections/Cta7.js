
import Link from "next/link"

export default function Cta7() {
    return (
        <>

            <div className="cta7-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta7-textarea">
                                <h1 className="font-lora font-48 lineh-52 weight-500 color margin-b">Get expert Legal Advice On
                                    Consult Strategies</h1>
                                <p className="font-ks font-16 weight-400 color-21 lineh-26">We believe that informed clients make
                                    better Consult decisions. As part of our service, we'll provide educational resources and
                                    workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-2">
                        </div>
                        <div className="col-lg-4">
                            <div className="cta7-btnarea">
                                <Link href="/contact1" className="font-16 weight-700 color-ks1 font-ks contactbtn7 lineh-16">Schedule a Consulation</Link>
                                <Link href="/contact2" className=" font-ks font-16 weight-700 color lineh-16 contactbtn8">Contact
                                    Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
