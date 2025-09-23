
import Link from "next/link"

export default function Contact6() {
    return (
        <>

            <div className="contact7-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="contact7header text-center margin-b60">
                                <span className="about-span font-ks font-16 lineh-16 weight-600 color-ks1">Contact Us</span>
                                <h1 className="font-lora font-44 lineh-52 weight-500 color-h7 margin-b20">Get In Touch With Us Today
                                </h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="contact2-all-contact7">
                                <div className="row align-items-center">
                                    <div className="col-lg-6">
                                        <div className="contact2-maincontact">
                                            <h1 className="font-24 font-lora lineh-24 color-h7 weight-600 margin-b">Send Us A
                                                Message</h1>
                                            <p className="font-16 font-ks lineh-26 weight-500 color-hp margin-b24">Our response time
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
                                                    <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1200}>
                                                        <button type="submit" className="homepage7btn font-ks font-16 weight-700 color lineh-16">
                                                            Submit Now</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact-padding" data-aos="fade-right" data-aos-duration={1000}>
                                            <div className="contact2-auhtor-section1">
                                                <div className="clock-area">
                                                    <img src="/assets/images/icons/clock1.svg" alt="" className="ts" />
                                                </div>
                                                <div className="contact-location">
                                                    <h1 className="font-20 font-lora lineh-24 color-h7 weight-600 margin-b ts">
                                                        Contact us</h1>
                                                    <p className="font-ks font-16 lineh-26 color-hp weight-400 ts">8708 Technology
                                                        Forest Pl Suite 125 -G, The <br /> Woodlands, TX 77381</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-padding margin-t" data-aos="fade-right" data-aos-duration={1200}>
                                            <div className="contact2-auhtor-section1">
                                                <div className="clock-area">
                                                    <img src="/assets/images/icons/phone11.png" alt="" className="ts" />
                                                </div>
                                                <div className="contact-location">
                                                    <h1 className="font-20 font-lora lineh-24 color-h7 weight-600 margin-b ts">Call
                                                        or text</h1>
                                                    <p className="font-ks font-16 lineh-26 color-hp weight-400 ts"><Link href="/tel:123-456-7890" className="color-hp ts">123-456-7890</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="contact-padding margin-t" data-aos="fade-right" data-aos-duration={1400}>
                                            <div className="contact2-auhtor-section1">
                                                <div className="clock-area">
                                                    <img src="/assets/images/icons/email3.svg" alt="" className="ts" />
                                                </div>
                                                <div className="contact-location">
                                                    <h1 className="font-20 font-lora lineh-24 color-h7 weight-600 margin-b ts">Email
                                                        us today</h1>
                                                    <p className="font-ks font-16 lineh-26 color-hp weight-400 ts"><Link href="/mailto:info@taxvice.com" className="color-17 ts">info@taxvice.com</Link></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
