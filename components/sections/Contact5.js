
import Link from "next/link"

export default function Contact5() {
    return (
        <>

            <div className="contact6-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="contact6-alltextar">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">Contact
                                    Us</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b" data-aos="fade-right" data-aos-duration={1200}>Contact us now for a free consulation for today.</h1>
                                <p className="font-nunito font-16 lineh-26 weight-500 color-nuni margin-b24">We believe that
                                    informed clients make better financial decisions. As part of <br /> our service, we'll provide
                                    educational resources and workshops to help.</p>
                                <div className="contact3-fromarea p-0 contact6input">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="input3-area margin-b">
                                                <input type="text" placeholder="First Name" className="font-nunito font-16 lineh-16 color-ni weight-500" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input3-area margin-b">
                                                <input type="text" placeholder="Last Name" className="font-nunito font-16 lineh-16 color-ni weight-500" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input3-area margin-b">
                                                <input type="text" placeholder="Email Adderss" className="font-nunito font-16 lineh-16 color-ni weight-500" />
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="input3-area margin-b">
                                                <input type="text" placeholder="Phone Number" className="font-nunito font-16 lineh-16 color-ni weight-500" />
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="first-name-input1">
                                                <select name="country1" id="country1" className="country-area2">
                                                    <option value={1} data-display="Are you a new client?" className="font-nunito font-16 lineh-16 color-ni weight-500 input3">Are you
                                                        a new client?</option>
                                                    <option value>Belgium</option>
                                                    <option value>Brezil</option>
                                                    <option value>Argentina</option>
                                                    <option value>Bangladesh</option>
                                                    <option value>Germany</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="col-lg-12">
                                            <div className="textarea3 margin-t16">
                                                <textarea cols={30} rows={10} placeholder="How can we help you?" className="font-nunito font-16 lineh-16 color-ni weight-500" />
                                            </div>
                                        </div>
                                        <div className="buttnocontact margin-t32" data-aos="fade-left" data-aos-duration={1400}>
                                            <button type="Submit" className="font-nunito font-1 lineh-16 weight-700 color contactbtn6">Submit
                                                Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1200}>
                            <div className="contactimages6">
                                <img src="/assets/images/sectionimg/contact2img.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="contactbottonarea">
                                <div className="row">
                                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration={1200}>
                                        <div className="contactbottom1">
                                            <div className="iconslist6">
                                                <img src="/assets/images/icons/clock2.svg" alt="" className="ts" />
                                            </div>
                                            <div className="icons6list">
                                                <h1 className="font-20 weight-600 colorwel lineh-20 font-lora margin-b ts">Contact
                                                    us</h1>
                                                <Link href="#" className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">8708
                                                    Technology Forest Pl Suite 125 -G, The Woodlands, TX 77381</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration={1400}>
                                        <div className="contactbottom1 pnone">
                                            <div className="iconslist6">
                                                <img src="/assets/images/icons/phone10.svg" alt="" className="ts" />
                                            </div>
                                            <div className="icons6list">
                                                <h1 className="font-20 weight-600 colorwel lineh-20 font-lora margin-b ts">Call or
                                                    text</h1>
                                                <Link href="/tel:123-456-7890" className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">123-456-7890</Link>
                                                <br />
                                                <Link href="/tel:123-456-7890" className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">123-456-7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4" data-aos="zoom-in" data-aos-duration={1600}>
                                        <div className="contactbottom1">
                                            <div className="iconslist6">
                                                <img src="/assets/images/icons/email8.svg" alt="" className="ts" />
                                            </div>
                                            <div className="icons6list">
                                                <h1 className="font-20 weight-600 colorwel lineh-20 font-lora margin-b ts">Email us
                                                    today</h1>
                                                <Link href="/mailto:info@taxvice.com" className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">info@taxvice.com</Link>
                                                <br />
                                                <Link href="/mailto:Consult@gmail.com" className="font-nunito font-16 lineh-26 weight-500 color-nuni ts">Consult@gmail.com</Link>
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
