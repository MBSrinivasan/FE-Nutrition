import CounterUp from "../elements/CounterUp"


export default function Counter3() {
    return (
        <>

            <div className="counter3-area section-padding7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={800}>
                            <div className="teamconnection-area">
                                <img src="/assets/images/icons/teamconnection1.svg" alt="" />
                                <div className="teamconnection-text">
                                    <h1 className="font-38 font-lora lineh-38 color weight-600 margin-b"><CounterUp count={1023} /></h1>
                                    <p className="font-nunito font-18 lineh-18 color-27 ">Happy Customer</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                            <div className="teamconnection-area">
                                <img src="/assets/images/icons/briefcase1.png" alt="" />
                                <div className="teamconnection-text">
                                    <h1 className="font-38 font-lora lineh-38 color weight-600 margin-b"><CounterUp count={450} /></h1>
                                    <p className="font-nunito font-18 lineh-18 color-27 ">Completed Projects</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                            <div className="teamconnection-area">
                                <img src="/assets/images/icons/seller1.svg" alt="" />
                                <div className="teamconnection-text">
                                    <h1 className="font-38 font-lora lineh-38 color weight-600 margin-b"><CounterUp count={30} /></h1>
                                    <p className="font-nunito font-18 lineh-18 color-27 ">Yeras of Experience</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                            <div className="teamconnection-area">
                                <img src="/assets/images/icons/teamconnection2.svg" alt="" />
                                <div className="teamconnection-text">
                                    <h1 className="font-38 font-lora lineh-38 color weight-600 margin-b"><CounterUp count={45} /></h1>
                                    <p className="font-nunito font-18 lineh-18 color-27 ">Professional Team</p>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        </>
    )
}
