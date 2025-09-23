
import Link from "next/link"

export default function Contact7() {
    return (
        <>

            <div className="contact8-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="contact8-from-area" data-aos="fade-left" data-aos-duration={800}>
                                <span className=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block" data-aos="fade-left" data-aos-duration={1200}>Contact uss</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color39 margin-b20">Contact Us Now For A Free
                                    Consultation For Today.</h1>
                                <p className="font-16 font-ks lineh-26 weight-500 colorhp1">We believe that informed clients make
                                    better financial decisions. As <br /> part of our service, we'll provide educational and
                                    workshops to help.</p>
                                <div className="row">
                                    <div className="col-lg-6 ">
                                        <div className="contactinput8 margin-t32">
                                            <input type="text" placeholder="First Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contactinput8 margin-t32">
                                            <input type="text" placeholder="Last Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contactinput8">
                                            <input type="email" placeholder="Email Address" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contactinput8">
                                            <input type="number" placeholder="Phone Number" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="first-name-input1">
                                            <select name="country1" id="country1" className="country-area2">
                                                <option value={1} data-display="Are you a new client?" className="font-outfit font-16 lineh-16 color-ni weight-500 input3">Are you a
                                                    new client?</option>
                                                <option value>Belgium</option>
                                                <option value>Brezil</option>
                                                <option value>Argentina</option>
                                                <option value>Bangladesh</option>
                                                <option value>Germany</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="textarea8">
                                            <textarea cols={30} rows={10} placeholder="How can we help you?" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1200}>
                                        <button className="font-ks font-16 weight-700 lineh-16 color consulitingbt7 text-right">Submit
                                            Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1200}>
                            <div className="contcat8-images8">
                                <img src="/assets/images/sectionimg/contact8img.png" alt="" className="confidence" />
                                <img src="/assets/images/elementor/elementor17.png" alt="" className="elementors17 keyframe3" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contactbottonarea">
                                <div className="row">
                                    <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={800}>
                                        <div className="contactbottom2">
                                            <div className="iconslist6">
                                                <img src="/assets/images/icons/clock2.svg" alt="" className="ts" />
                                            </div>
                                            <div className="icons6list">
                                                <h1 className="font-20 weight-600 color39 lineh-20 font-lora margin-b ts">Contact us
                                                </h1>
                                                <Link href="#" className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">8708
                                                    Technology Forest Pl Suite 125 -G, The Woodlands, TX 77381</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={1000}>
                                        <div className="contactbottom2 pnone">
                                            <div className="iconslist6">
                                                <img src="/assets/images/icons/phone10.svg" alt="" className="ts" />
                                            </div>
                                            <div className="icons6list">
                                                <h1 className="font-20 weight-600 color39 lineh-20 font-lora margin-b ts">Call or
                                                    text</h1>
                                                <Link href="/tel:123-456-7890" className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">123-456-7890</Link>
                                                <br />
                                                <Link href="/tel:123-456-7890" className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">123-456-7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={1200}>
                                        <div className="contactbottom2 contacttop1">
                                            <div className="iconslist6">
                                                <img src="/assets/images/icons/email8.svg" alt="" className="ts" />
                                            </div>
                                            <div className="icons6list">
                                                <h1 className="font-20 weight-600 color39 lineh-20 font-lora margin-b ts">Email us
                                                    today</h1>
                                                <Link href="/mailto:info@taxvice.com" className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">info@taxvice.com</Link>
                                                <br />
                                                <Link href="/mailto:Consult@gmail.com" className="font-ks font-16 lineh-26 weight-500 colorhp1 ts">Consult@gmail.com</Link>
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
