

export default function Contact3() {
    return (
        <>

            <div className="contact3-sectio-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="contact3-image3">
                                <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-17" />
                                <div className="contact1-img">
                                    <img src="/assets/images/sectionimg/contact1.png" alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="contact3-textarea3">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">Contct
                                    Us</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color-ni margin-b24">Contact us now for a free
                                    <span className="success1 color-25">consulation</span> for today.</h1>
                                <p className="font-nunito font-16 lineh-26 color-26 weight-500 margin-b24">We believe that informed
                                    clients make better financial decisions. As part of our service, we'll provide educational
                                    resources and workshops to help.</p>
                            </div>
                            <div className="contact3-fromarea">
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
                                                <option value={1} data-display="Are you a new client?" className="font-nunito font-16 lineh-16 color-ni weight-500 input3">Are you a
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
                                        <div className="textarea3 margin-t16">
                                            <textarea cols={30} rows={10} placeholder="How can we help you?" className="font-nunito font-16 lineh-16 color-ni weight-500" />
                                        </div>
                                        <div className="theme-btn6 margin-t32" data-aos="fade-left" data-aos-duration={1200}>
                                            <button type="submit" className="font-16 lineh-16 color weight-700 font-nunito">Schedule
                                                an Apointment</button>
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
