
import Link from "next/link"

export default function Contact2() {
    return (
        <>

            <div className="contact2-section-area section-padding5">
                <img src="/assets/images/elementor/elementor8.png" alt="" className="elementor14 aniamtion-key-1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={800}>
                            <div className="contact2-header text-center margin-b60">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Contuct
                                    Us</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17">Get in touch with us today</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12" data-aos="fade-right" data-aos-duration={1000}>
                        <div className="contact2-all-contact">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="contact2-maincontact">
                                        <h1 className="font-24 font-outfit lineh-24 color-17 weight-600 margin-b">Send Us A Message
                                        </h1>
                                        <p className="font-16 font-outfit lineh-26 weight-400 color-15 margin-b24">Our response time
                                            is within 30 minutes during business hours</p>
                                        <div className="contact-from-area">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="number" placeholder=" Phone Number" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="first-input">
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="first-input">
                                                        <div className="first-name-input">
                                                            <select name="country" id="country" className="country-area nice-select6">
                                                                <option value={1} data-display="Service Type">Service Type
                                                                </option>
                                                                <option value>Belgium</option>
                                                                <option value>Brezil</option>
                                                                <option value>Argentina</option>
                                                                <option value>Bangladesh</option>
                                                                <option value>Germany</option>
                                                            </select>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="textarea">
                                                        <textarea cols={30} rows={10} placeholder="Message" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="theme-btn4 margin-t32 margn-left" data-aos="fade-left" data-aos-duration={1200}>
                                                        <Link href="/contact1" className="theme-btn5 font-outfit font-16  weight-700 ">Schedule a
                                                            Consultation <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-padding" data-aos="fade-right" data-aos-duration={1000}>
                                        <div className="contact2-auhtor-section">
                                            <div className="clock-area">
                                                <img src="/assets/images/icons/clock1.svg" alt="" />
                                            </div>
                                            <div className="contact-location">
                                                <h1 className="font-20 font-outfit lineh-24 color-17 weight-600 margin-b">Contact us
                                                </h1>
                                                <p className="font-outfit font-16 lineh-26 color-17 weight-400 ">8708 Technology
                                                    Forest Pl Suite 125 -G, The <br /> Woodlands, TX 77381</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-padding margin-t" data-aos="fade-right" data-aos-duration={1200}>
                                        <div className="contact2-auhtor-section contact-phonr-bg">
                                            <div className="clock-area">
                                                <img src="/assets/images/icons/phone4.svg" alt="" />
                                            </div>
                                            <div className="contact-location">
                                                <h1 className="font-20 font-outfit lineh-24 color weight-600 margin-b">Call or text
                                                </h1>
                                                <p className="font-outfit font-16 lineh-26 color weight-400 "><Link href="/tel:123-456-7890" className="color">123-456-7890</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-padding margin-t" data-aos="fade-right" data-aos-duration={1400}>
                                        <div className="contact2-auhtor-section">
                                            <div className="clock-area">
                                                <img src="/assets/images/icons/email3.svg" alt="" />
                                            </div>
                                            <div className="contact-location">
                                                <h1 className="font-20 font-outfit lineh-24 color-17 weight-600 margin-b">Email us
                                                    today</h1>
                                                <p className="font-outfit font-16 lineh-26 color-17 weight-400 "><Link href="/mailto:info@taxvice.com" className="color-17">info@taxvice.com</Link></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor12.png" className="elementor13" alt="" />
            </div>
        </>
    )
}
