
import Link from "next/link"

export default function Conatact2() {
    return (
        <>

            <div className="contact9-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="contact09-main-area">
                            <div className="row">
                                <div className="col-lg-6" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={800}>
                                    <div className="contact9-header margin-b30">
                                        <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Contact
                                            Us</span>
                                        <h1 className="font-lora font-44 lineh-54 weight-600 colorh9" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={1000}>Contact Us Now For A Free
                                            Consulation For Today.</h1>
                                        <p className="font-ks fotn-16 lineh-26 weight-500 colorhp1 margin-t margin-b">We believe
                                            that informed clients make better financial decisions. As part of our service, we'll
                                            provide educational resources and workshops to help.</p>
                                        <div className="contact9-allinput">
                                            <div className="row align-items-center">
                                                <div className="col-lg-6">
                                                    <div className="input9 margin-t16">
                                                        <input type="text" placeholder="First Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 ">
                                                    <div className="input9 margin-t16">
                                                        <input type="text" placeholder="Last Name" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input9 margin-t16">
                                                        <input type="email" placeholder="Email Address" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="input9 margin-t16">
                                                        <input type="number" placeholder="Phone" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="first-name-input1 margin-t16">
                                                        <select name="country1" id="country1" className="country-area2">
                                                            <option value={1} data-display="Are you a new client?" className="font-outfit font-16 lineh-16 color-ni weight-500 input3">
                                                                Are you a new client?</option>
                                                            <option value>Belgium</option>
                                                            <option value>Brezil</option>
                                                            <option value>Argentina</option>
                                                            <option value>Bangladesh</option>
                                                            <option value>Germany</option>
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="input9 margin-t16">
                                                        <textarea cols={30} rows={10} placeholder="How can we help you?" />
                                                    </div>
                                                    <button className="font-16 font-ks lineh-16 weight-700 color contact9btn" type="submit">Submit Now <span className="ml1"><i className="fa-solid fa-arrow-right" /></span></button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6" data-aos="zoom-out" data-aos-easing="linear" data-aos-duration={1200}>
                                    <div className="contcat6-images margin-b30">
                                        <img src="/assets/images/sectionimg/contact9img1.png" alt="" className="contact9auhtorimg" />
                                        <img src="/assets/images/elementor/Transparency1.png" alt="" className="trandparency1 aniamtion-key-1" />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={800}>
                                    <div className="phonearea-contact9 margin-t32">
                                        <div className="phone9images">
                                            <img src="/assets/images/icons/phone12.png" alt="" className="ts" />
                                        </div>
                                        <div className="phone9textarea">
                                            <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                                                Contact Info</h1> <br />
                                            <Link href="/tel:123-456-7890" className="font-ks font-16 weight-500 colorhp1 lineh-16 ts">123-456-7890</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1000}>
                                    <div className="phonearea-contact9 margin-t32">
                                        <div className="phone9images">
                                            <img src="/assets/images/icons/location.png" alt="" className="ts" />
                                        </div>
                                        <div className="phone9textarea">
                                            <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                                                Our Location</h1> <br />
                                            <Link href="/tel:123-456-7890" className="font-ks font-16 weight-500 colorhp1 lineh-26 ts">1790 Hughes Landing
                                                Boullevard, <br /> Suite 400, The TX 77380</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4" data-aos="zoom-in" data-aos-easing="linear" data-aos-duration={1200}>
                                    <div className="phonearea-contact9 margin-t32">
                                        <div className="phone9images">
                                            <img src="/assets/images/icons/clock.png" alt="" className="ts" />
                                        </div>
                                        <div className="phone9textarea">
                                            <h1 className="font-lora font-20 lineh-20 weight-600 color-h9  margin-b20 d-inline-block ts">
                                                Contact Info</h1> <br />
                                            <Link href="/tel:123-456-7890" className="font-ks font-16 weight-500 colorhp1 lineh-16 ts">Monday - Friday : 10am
                                                to 5pm</Link>
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
