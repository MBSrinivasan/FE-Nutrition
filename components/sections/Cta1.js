
'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
}
export default function Cta1() {
    return (
        <>

            <div className="cta4-section-area section-padding7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper {...swiperOptions} className="cta4-carousel owl-carousel">
                                <SwiperSlide className="cta4-textarea4 ">
                                    <p className="font-ks font-24 lineh-34 weight-500 color text-center">“Our law consulting team
                                        comprises seasoned legal professionals with a track record of success across various
                                        industries and legal domains. You can trust in our expertise and dedication to achieving
                                        the best possible outcomes for you.”</p>
                                    <div className="cta4-manarea margin-t40">
                                        <img src="/assets/images/sectionimg/ctaman.png" alt="" />
                                        <div className="cta4-mantext">
                                            <h1 className="font-24 font-lora weight-600 lineh-24 color margin-b">Alex-David Luis
                                            </h1>
                                            <p className="font-ks font-16 lineh-16 weight-500 color">Our Attorneys</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="cta4-textarea4 ">
                                    <p className="font-ks font-24 lineh-34 weight-500 color text-center">“Our law consulting team
                                        comprises seasoned legal professionals with a track record of success across various
                                        industries and legal domains. You can trust in our expertise and dedication to achieving
                                        the best possible outcomes for you.”</p>
                                    <div className="cta4-manarea margin-t40">
                                        <img src="/assets/images/sectionimg/ctaman.png" alt="" />
                                        <div className="cta4-mantext">
                                            <h1 className="font-24 font-lora weight-600 lineh-24 color margin-b">Alex-David Luis
                                            </h1>
                                            <p className="font-ks font-16 lineh-16 weight-500 color">Our Attorneys</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="cta4-textarea4 ">
                                    <p className="font-ks font-24 lineh-34 weight-500 color text-center">“Our law consulting team
                                        comprises seasoned legal professionals with a track record of success across various
                                        industries and legal domains. You can trust in our expertise and dedication to achieving
                                        the best possible outcomes for you.”</p>
                                    <div className="cta4-manarea margin-t40">
                                        <img src="/assets/images/sectionimg/ctaman.png" alt="" />
                                        <div className="cta4-mantext">
                                            <h1 className="font-24 font-lora weight-600 lineh-24 color margin-b">Alex-David Luis
                                            </h1>
                                            <p className="font-ks font-16 lineh-16 weight-500 color">Our Attorneys</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="cta4-textarea4 ">
                                    <p className="font-ks font-24 lineh-34 weight-500 color text-center">“Our law consulting team
                                        comprises seasoned legal professionals with a track record of success across various
                                        industries and legal domains. You can trust in our expertise and dedication to achieving
                                        the best possible outcomes for you.”</p>
                                    <div className="cta4-manarea margin-t40">
                                        <img src="/assets/images/sectionimg/ctaman.png" alt="" />
                                        <div className="cta4-mantext">
                                            <h1 className="font-24 font-lora weight-600 lineh-24 color margin-b">Alex-David Luis
                                            </h1>
                                            <p className="font-ks font-16 lineh-16 weight-500 color">Our Attorneys</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
