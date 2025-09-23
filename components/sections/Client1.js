'use client'
import { useState } from 'react'

export default function Client1() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleClick = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>

            <div className="client3-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={800}>
                            <div className="client3-section-textarea">
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">How
                                    it works</span>
                                <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Our works
                                    process.</h1>
                                <p className="font-ks font-16 lineh-26 weight-500 color-30  margin-b30">Provide professional advice
                                    and guidance on legal matters, helping clients understand their rights, obligations.</p>
                                <div className="accordian-area">
                                    <div className="accordion accordian4" id="accordionExample">
                                        <div className="accordion-item" data-aos="fade-right" data-aos-duration={800}>
                                            <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                                <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    Get Involved
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                        solutions are presented, we will work to collaboratively with you to
                                                        develop a strategic plan .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item" data-aos="fade-right" data-aos-duration={1000}>
                                            <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                                <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                    Fighting for Workers
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                        solutions are presented, we will work to collaboratively with you to
                                                        develop a strategic plan .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item" data-aos="fade-right" data-aos-duration={1200}>
                                            <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                                <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                    Fighting for Workers
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                        solutions are presented, we will work to collaboratively with you to
                                                        develop a strategic plan .</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="accordion-item" data-aos="fade-right" data-aos-duration={1400}>
                                            <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                                <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                    Strategy Development
                                                </button>
                                            </h2>
                                            <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <p className="font-ks font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                        solutions are presented, we will work to collaboratively with you to
                                                        develop a strategic plan .</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                            <div className="client4-img1">
                                <img src="/assets/images/sectionimg/client2.png" alt="" data-aos="zoom-in" data-aos-duration={1200} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
