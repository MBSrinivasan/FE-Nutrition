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
import Link from "next/link"

export default function Testimonial9() {
    return (
        <>

            <div className="testimonial9-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 m-auto">
                            <div className="testimonial6-header text-center margin-b60">
                                <span className="font-16 font-ks lineh-16 weight-500 colorhp9 d-inline-block margin-b24 insurance">Testimonials</span>
                                <h1 className="font-lora font-44 lineh-54 weight-600 colorh9">Some Love Words From Clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-easing="linear" data-aos-duration={1300}>
                            <Swiper {...swiperOptions} className="testimonials9-carousel-area owl-carousel">
                                <SwiperSlide className="testimnials9-boxarea ts">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9 ts">I've been trying to get an
                                        umbrella policy for over a year. After two other insurance agents ghosted me, I
                                        contacted Brian and Avail, and they set me up with an umbrella, renters, motorcycle, two
                                        autos, and a boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9 ts">
                                        <div className="testimonialmans ts">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial ts">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block ts">Luis
                                                    Suarez</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500 ts">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg ts" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Phil
                                                    Foden</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Luis
                                                    Suarez</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Phil
                                                    Foden</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Luis
                                                    Suarez</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Phil
                                                    Foden</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Luis
                                                    Suarez</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Phil
                                                    Foden</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimnials9-boxarea">
                                    <ul>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                        <li><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <p className="font-ks font-18 lineh-26 weight-600 color-h9">I've been trying to get an umbrella
                                        policy for over a year. After two other insurance agents ghosted me, I contacted Brian
                                        and Avail, and they set me up with an umbrella, renters, motorcycle, two autos, and a
                                        boat policy in less time than it took the.”</p>
                                    <div className="teimonials9-flex9">
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Luis
                                                    Suarez</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">Owner Renters</p>
                                            </div>
                                        </div>
                                        <img src="/assets/images/icons/quito5.svg" alt="" className="qutiosvg" />
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor60.png" alt="" className="elementors60" />
            </div>
        </>
    )
}
