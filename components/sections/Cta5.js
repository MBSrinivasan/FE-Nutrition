
import Link from "next/link"

export default function Cta5() {
    return (
        <>

            <div className="cta5-section5-area section-padding4">
                <div className="container">
                    <div className="row">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="cta5-auhtor6-area">
                                    <h1 className="font-outfit font-44 lineh-52 color weight-600 margin-b">Get expert advice on
                                        consult investment to strategies.</h1>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color-21">We believe that informed clients
                                        make better financial decisions. As part of our service, we'll provide educational
                                        resources and workshops to help.</p>
                                </div>
                            </div>
                            <div className="col-lg-2" />
                            <div className="col-lg-4">
                                <div className="cta5-btn5-sexction">
                                    <Link href="/contact1" className="theme6-btn6 bakgrnd51 font-outfit lineh-16 weight-700 color36 font-16">Schedule a
                                        Consulation </Link>
                                    <Link href="/contact2" className=" theme6-btn6  backgrnd62  font-outfit lineh-16 weight-700 color font-16">Contact
                                        Us </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
