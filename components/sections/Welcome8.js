
import Link from "next/link"

export default function Welcome8() {
    return (
        <>

            <div className="welcome-eightsection-area">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="welcome8-header" data-aos="fade-left" data-aos-duration={1000}>
                                <span className="font-ks font-16 weight-600 lineh-26 services8 colorspan margin-b20 d-inline-block">Best
                                    Tax Consulting Services</span>
                                <h1 className="font-lora font-56 lineh-64 weight-600 color margin-b" data-aos="fade-left" data-aos-duration={1200}>Experience The Tax Consulting Benefits</h1>
                                <p className="font-16 font-ks weight-500 color-21 lineh-26">Our team comprises seasoned tax
                                    professionals with in-depth of <br /> knowledge of tax regulations and strategies, our
                                    solutions are you.</p>
                                <div className="div" data-aos="fade-left" data-aos-duration={1000}>
                                    <Link href="/contact1" className="font-ks font-16 lineh-16 weight-700 color solutions1 margin-t32">Discover Tax
                                        Solutions <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="welcomecontact-header" data-aos="zoom-out" data-aos-duration={1200}>
                                <img src="/assets/images/elementor/elementor50.png" alt="" className="elemenors8 keyframe3" />
                                <h1 className="font-lora font-24 lineh-24 weight-600 color39 margin-b20">Request a free consult now!
                                </h1>
                                <p>What services can we help you with?</p>
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="first-input margin-b30">
                                            <div className="first-name-input">
                                                <select name="country" id="country" className="country-area nice-select6 margin-b30">
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
                                    <div className="col-lg-6">
                                        <div className="contact8">
                                            <h1 className="font-lora font-16 lineh-16 weight-500 color39 margin-b">Your Email*</h1>
                                            <input type="text" placeholder="twpcss@gmail.com" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="contact8">
                                            <h1 className="font-lora font-16 lineh-16 weight-500 color39 margin-b">Phone Number*
                                            </h1>
                                            <input type="number" placeholder="(123) 456-7890" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="contact8 margin-t32">
                                            <h1 className="font-lora font-16 lineh-16 weight-500 color39 margin-b20">Tell us about
                                                your business</h1>
                                            <textarea cols={30} rows={10} placeholder="Message" />
                                        </div>
                                        <div className="col-lg-12" data-aos="fade-left" data-aos-duration={1400}>
                                            <button className="font-ks font-16 weight-700 lineh-16 color consulitingbt7 text-right">Submit
                                                Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor49.png" alt="" className="elementors7 aniamtion-key-1" />
            </div>
        </>
    )
}
