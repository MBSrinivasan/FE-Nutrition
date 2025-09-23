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

export default function Testimonial12() {
    return (
        <>

            <div className="testimonial11-scetion-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="testimonial11-header text-center margin-b60">
                                <span className="font-outfit font-16 lineh-16 weight-600 color-h12 aroplan3 d-inline-block margin-b24"><img src="/assets/images/icons/aroplanicons3.svg" alt="" />Testimonials</span>
                                <h1 className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Some love words
                                    from clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12" data-aos="fade-up" data-aos-duration={1000}>
                        <Swiper {...swiperOptions} className="testimonials11-owl-carousel testimonial12-header owl-carousel">
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testimonialauhto3.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testomonial1.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testiinner4.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testiinner6.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="testimonial-autor-area">
                                <div className="qutio1 margin-b">
                                    <img src="/assets/images/icons/quito8.svg" alt="" />
                                </div>
                                <div className="star-list">
                                    <ul>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color-h12"><i className="fa-solid fa-star" /></span></li>
                                        <li><span className="color33"><i className="fa-solid fa-star" /></span></li>
                                    </ul>
                                </div>
                                <p className="font-outfit font-18 lineh-28 weight-500 colorhp11 margin-b24 margin-t">I can't thank
                                    Your Company Name work enough for their exceptional service. I am With their guidance, I
                                    successfully to be obtained my work visa and relocated to the United States.</p>
                                <div className="border-4 margin-b24" />
                                <div className="mans-author">
                                    <div className="mans">
                                        <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                    </div>
                                    <div className="names-text">
                                        <h1 className="font-16 font-outfit lineh-16 colorhp11 weight-600 margin-b11">Tina Wilkinson
                                        </h1>
                                        <p className="font-14 weight-500 colorhp12 font-outfit ">CEO, Wingree Ltd</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    )
}
