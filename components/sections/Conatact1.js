
import Link from "next/link"

export default function Conatact1() {
    return (
        <>

            <div className="contact1-section-area section-padding5">
                <img src="/assets/images/elementor/elementor1.png" alt="" className="elementor7" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contact1-header text-center margin-b60">
                                <span className="font-18 font-ks lineh26 weight-500 color34 margin-b d-inline-block">Contact
                                    us</span>
                                <h1 className="font-lora font-42 lineh-50 weight-500 margin-b24 color34">Feel free to contuct us for
                                    any <span className="consult-reason">consult reason</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-lg-5" data-aos="zoom-out" data-aos-duration={1000}>
                            <div className="contact-first-boxarea">
                                <h1 className="font-lora font-24 weight-500 lineh-30 color">Contact Info</h1>
                                <p className="font-ks font-16 weight-500 lineh-26 color margin-t">Personal Tax Planning: Our tax
                                    consultants work closely with individuals to develop comprehensive tax plans tailored to
                                    their unique financial situations.</p>
                                <div className="border1 margin-t32" />
                                <div className="contact1-location margin-t32">
                                    <div className="location-icon">
                                        <div className="locaicon1">
                                            <img src="/assets/images/icons/location1.svg" alt="" />
                                        </div>
                                        <div className="location-text">
                                            <p className="font-20 font-ks lineh-20 color weight-700 margin-b ">Our Location</p>
                                            <Link href="#" className="font-16 lineh-26 font-ks weight-500 color">8708 Technology Forest
                                                Pl Suite <br /> 125 -G, The Woodlands, TX 773</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact1-location margin-t40">
                                    <div className="location-icon">
                                        <div className="locaicon1">
                                            <img src="/assets/images/icons/phone1.svg" alt="" />
                                        </div>
                                        <div className="location-text">
                                            <p className="font-20 font-ks lineh-20 color weight-700 margin-b">Phone Number</p>
                                            <Link href="/tel:123-456-7890" className="font-16 lineh-26 font-ks weight-500 color">123-456-7890</Link> <br />
                                            <Link href="/tel:123-456-7890" className="font-16 lineh-26 font-ks weight-500 color">123-456-7890 </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="contact1-location margin-t40">
                                    <div className="location-icon">
                                        <div className="locaicon1">
                                            <img src="/assets/images/icons/email1.svg" alt="" />
                                        </div>
                                        <div className="location-text">
                                            <p className="font-20 font-ks lineh-20 color weight-700 margin-b">Email Address</p>
                                            <Link href="/mailto:info@consult.com" className="font-16 lineh-26 font-ks weight-500 color">info@consult.com</Link> <br />
                                            <Link href="/mailto:Infoconsult@gmail.com" className="font-16 lineh-26 font-ks weight-500 color">Infoconsult@gmail.com</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7" data-aos="zoom-out" data-aos-duration={1200}>
                            <div className="contact-main-box">
                                <div className="contact-header">
                                    <h1 className="font-lora font-24 weight-600 lineh-26 color-18 margin-b">Get In Touch</h1>
                                    <p className="font-ks font-16 weight-500 colorp lineh26">Personal Tax Planning: Our tax
                                        consultants work closely with individuals to develop comprehensive tax plans tailored to
                                        their unique financial situations.</p>
                                </div>
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
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="first-input">
                                            <input type="number" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="first-input">
                                            <div className="first-name-input">
                                                <select name="country" id="country" className="country-area nice-select5">
                                                    <option value={1} data-display="Service Type">Service Type</option>
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
                                            <textarea cols={30} rows={10} placeholder="Your Message" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="theme-btn2 margin-t32 text-left" data-aos="fade-right" data-aos-duration={1200}>
                                            <button type="submit" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex">Explore Our
                                                Services <img src="/assets/images/icons/arrowright.svg" alt="" /></button>
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
