
import Link from "next/link"

export default function Cta2() {
    return (
        <>

            <div className="cta5-section-area section-padding4">
                <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors72" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="cta5-auhtor6-area">
                                <h1 className="font-lora font-48 lineh-52 color weight-600 margin-b text-capitalize">Get expert Law
                                    advice on criminal strategies</h1>
                                <p className="font-ks font-16 lineh-26 weight-500 color-21">We believe that informed clients make
                                    better Law decisions. As part of our service, we'll provide educational resources and
                                    workshops to help.</p>
                            </div>
                        </div>
                        <div className="col-lg-2" />
                        <div className="col-lg-4">
                            <div className="cta5-btn5-sexction">
                                <Link href="/contact1" className="theme6-btn6 bakgrnd5 font-ks lineh-16 weight-700 color font-16">Get Law Advice
                                    <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                <Link href="/contact2" className="theme6-btn6 backgrnd6 font-ks lineh-16 weight-700 color-29 font-16">Contact Us
                                    <span><i className="fa-solid fa-arrow-right" /></span></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
            </div>
        </>
    )
}
