'use client'
import { useState } from 'react'

export default function Client4() {
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

            <div className="company6-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-5" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="company6text6">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">How it
                                    Works</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b">Our Work Process</h1>
                                <p className="font-nunito font16 weight-500 color-nuni lineh-26 margin-b30">Crafting a roadmap to
                                    your financial goals. Our comprehensive <br /> planning covers investments, savings, debt
                                    management more.</p>
                            </div>
                            <div className="accordian-area accordian5">
                                <div className="accordion accordian4" id="accordionExample">
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1200}>
                                        <h2 className="accordion-header" onClick={() => handleClick(1)}>
                                            <button className={isActive.key == 1 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                Discovery Session
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className={isActive.key == 1 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                    solutions are presented, we will work to collaboratively with you to develop
                                                    a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1400}>
                                        <h2 className="accordion-header" onClick={() => handleClick(2)}>
                                            <button className={isActive.key == 2 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                Personalized Strategy
                                            </button>
                                        </h2>
                                        <div id="collapseTwo" className={isActive.key == 2 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                    solutions are presented, we will work to collaboratively with you to develop
                                                    a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1600}>
                                        <h2 className="accordion-header" onClick={() => handleClick(3)}>
                                            <button className={isActive.key == 3 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                                Ongoing Support
                                            </button>
                                        </h2>
                                        <div id="collapseThree" className={isActive.key == 3 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                    solutions are presented, we will work to collaboratively with you to develop
                                                    a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item" data-aos="fade-right" data-aos-duration={1800}>
                                        <h2 className="accordion-header" onClick={() => handleClick(4)}>
                                            <button className={isActive.key == 4 ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                                                Celebrating Milestones
                                            </button>
                                        </h2>
                                        <div id="collapseFour" className={isActive.key == 4 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                                <p className="font-nunito font-16 lineh-26 weight-500 color-30 ">Once the tailored
                                                    solutions are presented, we will work to collaboratively with you to develop
                                                    a strategic plan .</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-1" />
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1600}>
                            <div className="companyimgaes">
                                <img src="/assets/images/sectionimg/companyimg2.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor37.png" alt="" className="elementor-16" />
                <img src="/assets/images/elementor/elementor38.png" alt="" className="elementors5" />
            </div>
        </>
    )
}
