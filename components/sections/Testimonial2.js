

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

    breakpoints: {
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
}
export default function Testimonial2() {
    return (
        <>

            <div className="testimonial2-scetion-area section-padding5">
                <img src="/assets/images/elementor/elementor8.png" alt="" className="elementor-5 aniamtion-key-1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={800}>
                            <div className="testimonial2-header text-center margin-b60">
                                <span className="maximum font-outfit font-16 lineh-16 color-12 weight-500 margin-b20 d-inline-block">Our
                                    Clients Feedback</span>
                                <h1 className="font-outfit font-44 weight-600 lineh-52 color-17">Some love words from clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={1200}>
                            <Swiper {...swiperOptions} className="testomonial2-carousel-area owl-carousel">
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/quito1.svg" alt="" />
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
                                    <p className="font-outfit font-18 lineh-28 weight-400 color-17 margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-outfit lineh-16 color-17 weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-400 color-15 font-outfit ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor11.png" alt="" className="elementor-11" />
            </div>
        </>
    )
}
