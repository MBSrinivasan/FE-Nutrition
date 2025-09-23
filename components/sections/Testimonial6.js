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
import Link from "next/link"

export default function Testimonial6() {
    return (
        <>

            <div className="testimonial6-section-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-4" data-aos="fade-left" data-aos-duration={1200}>
                            <div className="text-testi">
                                <span className="trusts font-16 lineh-16 font-nunito weight-600 color-h5 d-inline-block">Testimonials</span>
                                <h1 className="font-lora font-44 lineh-52 weight-600 colorwel margin-b">Lovely feedback from clients
                                </h1>
                                <p className="font-nunito font16 weight-500 color-nuni lineh-26 margin-b30">Your journey to
                                    financial empowerment starts now. Schedule a consultation to begin the process of
                                    transforming your financial future.</p>
                                <div className="div" data-aos="fade-left" data-aos-duration={1400}>
                                    <Link href="/testimonials" className="font-nunito font-16 lineh-16 weight-700 color d-inline-block home5btn7 ts">View
                                        More Feedback</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8" data-aos="fade-right" data-aos-duration={1400}>
                            <Swiper {...swiperOptions} className="testomonial2-carousel-area1 owl-carousel owl5-carousel">
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11 ">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito12.png" alt="" />
                                    </div>
                                    <div className="star-list">
                                        <ul>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color-24"><i className="fa-solid fa-star" /></span></li>
                                            <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                        </ul>
                                    </div>
                                    <p className="font-nunito font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
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
