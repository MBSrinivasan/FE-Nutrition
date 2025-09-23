
import Link from "next/link"

export default function Cta6() {
    return (
        <>

            <div className="cta6-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta6sectiontxt">
                                <h1 className="font-lora font-44 lineh-52 weight-600 color ts margin-b">Get expert advice on consult
                                    investment to strategies.</h1>
                                <p className="font-nunito font-16 lineh-26 weight-500 color-21">We believe that informed clients
                                    make better financial decisions. As part <br /> of our service, we'll provide educational
                                    resources and workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                        <div className="col-lg-4">
                            <div className="cta5btnarea5">
                                <Link href="/contact1" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block cta5btn ts">Schedule An
                                    Apointment</Link>
                                <Link href="/contact2" className="font-nunito font-16 lineh-16 weight-700 color-h5 d-inline-block cta5btn5 ts">Contact
                                    Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
