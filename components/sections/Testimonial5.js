'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
        modules: [Autoplay, Pagination, Navigation],
        slidesPerView: 3,
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
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
        }
    };

export default function Testimonial5() {
    return (
        <>

            <div className="textimonial5-section-area section-padding5">
                <img src="/assets/images/elementor/elementor31.png" alt="" className="elmentors2" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-auto">
                            <div className="testimonial5text5 text-center margin-b60">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">Testimonials</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20">Some love words from
                                    clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-right" data-aos-duration={1000} data-aos-easing="linear">
                            <Swiper {...swiperOptions} className="testomonial2-carousel-area owl-carousel owl5-carousel">
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11 ">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito2.png" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-600 color37 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color37 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor32.png" alt="" className="elmentors3" />
            </div>
        </>
    )
}
