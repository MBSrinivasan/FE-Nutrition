
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        loop: true,

        // Navigation
        navigation: {
            nextEl: '.h1n',
            prevEl: '.h1p',
        },

        // Pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

				breakpoints:{
            320: {
                slidesPerView: 1,
                spaceBetween: 30,
            },
            575: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            991: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1199: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    };
export default function Testimonial3() {
    return (
        <>

            <div className="testimonial-section-area section-padding5">
                <img src="/assets/images/elementor/elementor5.png" alt="" className="elementoe5" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={800}>
                            <div className="testimonial-header text-center">
                                <span className="font-18 font-ks lineh26 weight-500 color34 margin-b d-inline-block">Testimonials</span>
                                <h1 className="font-lora font-42 lineh-50 weight-500 margin-b24 color-17">Innovative solutions
                                    satisfied client for <span className="tax-consultant">tax consulting</span></h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={1000}>
                            <Swiper {...swiperOptions} className="testimonial-carousel-area owl-carousel">
                                <SwiperSlide className="testimonial-boxarea">
                                    <div className="testimonial-icons">
                                        <img src="/assets/images/icons/quito-icon.svg" alt="" />
                                    </div>
                                    <p className="font-ks font-18 weight-500 lineh-30 color-18 margin-b24">"Choosing the tax
                                        consulting firm was one of the best of tax decisions I made for my startup. They
                                        provided tax planning services tailored to my business's unique needs.</p>
                                    <p className="font-ks font-16 weight-500 lineh-16 color-18">Mrs. Blanca Hickle</p>
                                    <span className="font-ks font-14 weight-500 colorp lineh-14">Owner Banweek</span>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-boxarea">
                                    <div className="testimonial-icons">
                                        <img src="/assets/images/icons/quito-icon.svg" alt="" />
                                    </div>
                                    <p className="font-ks font-18 weight-500 lineh-30 color-18 margin-b24">"Choosing the tax
                                        consulting firm was one of the best of tax decisions I made for my startup. They
                                        provided tax planning services tailored to my business's unique needs.</p>
                                    <p className="font-ks font-16 weight-500 lineh-16 color-18">Mrs. Blanca Hickle</p>
                                    <span className="font-ks font-14 weight-500 colorp lineh-14">Owner Banweek</span>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-boxarea">
                                    <div className="testimonial-icons">
                                        <img src="/assets/images/icons/quito-icon.svg" alt="" />
                                    </div>
                                    <p className="font-ks font-18 weight-500 lineh-30 color-18 margin-b24">"Choosing the tax
                                        consulting firm was one of the best of tax decisions I made for my startup. They
                                        provided tax planning services tailored to my business's unique needs.</p>
                                    <p className="font-ks font-16 weight-500 lineh-16 color-18">Mrs. Blanca Hickle</p>
                                    <span className="font-ks font-14 weight-500 colorp lineh-14">Owner Banweek</span>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-boxarea">
                                    <div className="testimonial-icons">
                                        <img src="/assets/images/icons/quito-icon.svg" alt="" />
                                    </div>
                                    <p className="font-ks font-18 weight-500 lineh-30 color-18 margin-b24">"Choosing the tax
                                        consulting firm was one of the best of tax decisions I made for my startup. They
                                        provided tax planning services tailored to my business's unique needs.</p>
                                    <p className="font-ks font-16 weight-500 lineh-16 color-18">Mrs. Blanca Hickle</p>
                                    <span className="font-ks font-14 weight-500 colorp lineh-14">Owner Banweek</span>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-boxarea">
                                    <div className="testimonial-icons">
                                        <img src="/assets/images/icons/quito-icon.svg" alt="" />
                                    </div>
                                    <p className="font-ks font-18 weight-500 lineh-30 color-18 margin-b24">"Choosing the tax
                                        consulting firm was one of the best of tax decisions I made for my startup. They
                                        provided tax planning services tailored to my business's unique needs.</p>
                                    <p className="font-ks font-16 weight-500 lineh-16 color-18">Mrs. Blanca Hickle</p>
                                    <span className="font-ks font-14 weight-500 colorp lineh-14">Owner Banweek</span>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
