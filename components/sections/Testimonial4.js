
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
export default function Testimonial4() {
    return (
        <>

            <div className="testimonial2-scetion-area1 section-padding5">
                <img src="/assets/images/elementor/elementor19.png" alt="" className="elementor-19" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={800}>
                            <div className="testimonial2-header text-center margin-b60">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">Testimonials</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color-ni">Some <span className="success1 color-25">love words</span> from clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={1000}>
                            <Swiper {...swiperOptions} className="testomonial2-carousel-area owl-carousel">
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11 ">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-autor-area">
                                    <div className="qutio1 margin-b">
                                        <img src="/assets/images/icons/qutio1.png" alt="" />
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
                                    <p className="font-nunito font-18 lineh-28 weight-500 color-ni margin-b24 margin-t">“Business
                                        Consultant to legal entity filing, the marketing setup, automation, on the legal
                                        bookkeeping, technology, in person of an networking, online sales, permits and user
                                        console consult.”</p>
                                    <div className="border-4 margin-b24" />
                                    <div className="mans-author">
                                        <div className="mans">
                                            <img src="/assets/images/sectionimg/testimonial3.png" alt="" />
                                        </div>
                                        <div className="names-text">
                                            <h1 className="font-16 font-nunito lineh-16 color-ni weight-600 margin-b11">Tina
                                                Wilkinson</h1>
                                            <p className="font-14 weight-500 color-26 font-nunito ">CEO, Wingree Ltd</p>
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
