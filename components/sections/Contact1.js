
import Link from "next/link"

export default function Contact1() {
    return (
        <>

            <div className="contcat5-section-area section-padding5">
                <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={800}>
                            <div className="contcat5-textarea5">
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Contact
                                    Us</span>
                                <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Contact Us for
                                    Expert Legal Guidance</h1>
                                <p className="font-ks font-16 weight-500 lineh-26 color-30">Provide professional advice and guidance
                                    on legal matters, helping clients understand their rights, obligations, and potential
                                    courses.</p>
                                <div className="phone7-textarea margin-t32" data-aos="fade-right" data-aos-duration={1000}>
                                    <div className="phone7-icon">
                                        <img src="/assets/images/icons/phone8.png" alt="" />
                                    </div>
                                    <div className="phone7-text">
                                        <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Gives us a Call</p>
                                        <Link href="/tel:123-456-7890" className="font-lora font-24 weight-700 lineh-24 color-29">123-456-7890</Link>
                                    </div>
                                </div>
                                <div className="phone7-textarea margin-t" data-aos="fade-right" data-aos-duration={1200}>
                                    <div className="phone7-icon">
                                        <img src="/assets/images/icons/email7.png" alt="" />
                                    </div>
                                    <div className="phone7-text">
                                        <p className="font-16 lineh-16 weight-500 font-ks color-30 margin-b">Send me Mail</p>
                                        <Link href="/mailto:Consult@hotmail.com" className="font-lora font-24 weight-700 lineh-24 color-29">Consult@hotmail.com</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="contact5-main-section">
                                <div className="contact-main-text">
                                    <h1 className="font-lora font-24 lineh-24 weight-600 color">Send us a Message</h1>
                                    <p className="font-ks font-16 lineh-26 weight-500 color margin-t">As a fellow small business
                                        owner, we know the fulfillment that an a comes from running your own business contact to
                                        Financy.</p>
                                </div>
                                <div className="contac5-input5area">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input-5area margin-t32">
                                                <input type="text" placeholder="First Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-5area margin-t32">
                                                <input type="text" placeholder="Last Name" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-5area margin-t">
                                                <input type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input-5area margin-t">
                                                <input type="number" placeholder="Phone" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-5area margin-t">
                                                <input type="text" placeholder="Subject" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="input-5area margin-t">
                                                <textarea cols={30} rows={10} placeholder="Message" />
                                            </div>
                                            <div className="contact5-btn5" data-aos="fade-right" data-aos-duration={1200}>
                                                <button className="font-ks font-16 lineh-16 weight-700 color margin-t32 contcat5" type="submit">Submit Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
            </div>
        </>
    )
}
