
import Link from "next/link"

export default function Cta4() {
    return (
        <>

            <div className="cta3-section-area section-padding4">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="cta3-authortext">
                                <h1 className="font-lora font-44 lineh-52 color weight-600 margin-b">Get expert advice on consult
                                    <span className="investment">investment</span> to strategies.</h1>
                                <p className="font-nunito font-16 lineh-26 color-21 weight-500">We believe that informed clients
                                    make better financial decisions. As part <br /> of our service, we'll provide educational
                                    resources and workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                        <div className="col-lg-4" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="btn2-area3">
                                <Link href="/contact1" className="appointment font-nunito font-16 weight-700 color-25">Schedule an
                                    Apointment</Link>
                                <Link href="/contact2" className="contact4 font-16 font-nunito weight-700 color">Contact Us</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
