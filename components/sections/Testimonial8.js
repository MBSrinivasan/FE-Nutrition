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

export default function Testimonial8() {
    return (
        <>

            <div className="testimonial8-section-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 m-auto">
                            <div className="testimonial8-header text-center margin-b60">
                                <span className=" about8 font-ks font-16 lineh-16 color39 weight-500 margin-b20 d-inline-block">Testimonials</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color39 margin-b20">Some love words from
                                    clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-down" data-aos-duration={1200}>
                            <Swiper {...swiperOptions} className="testimonial8-carousel-area owl-carousel">
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha
                                                    Healy</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial2.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Robert
                                                    Lewandowsky</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha
                                                    Healy</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Robert
                                                    Lewandowsky</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha
                                                    Healy</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-2img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Robert
                                                    Lewandowsky</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha
                                                    Healy</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Robert
                                                    Lewandowsky</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial-carousel8area">
                                    <div className="icons8">
                                        <img src="/assets/images/icons/quito4.svg" alt="" />
                                    </div>
                                    <ul>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color-24"><i className="fa-solid fa-star" /></li>
                                        <li className="color33"><i className="fa-solid fa-star" /></li>
                                    </ul>
                                    <div className="carousel-alltext8">
                                        <p className="font-18 lineh-28 font-ks weight-500 color39 margin-b24 margin-t">“Business
                                            Consultant to legal entity filing, the marketing setup, automation, on the legal
                                            bookkeeping, technology, in person of an networking, online sales, permits and
                                            consult.</p>
                                        <div className="border7" />
                                        <div className="testimonialmans">
                                            <div className="img-textimonial">
                                                <img src="/assets/images/sectionimg/testimonial7-1img.png" alt="" />
                                            </div>
                                            <div className="img-testimonial">
                                                <Link href="#" className="font-18 lineh-18 weight-600 color-h7 font-ks margin-b11 d-inline-block">Alesha
                                                    Healy</Link>
                                                <p className="font-ks font-14 lineh-16 color-hp weight-500">CEO, Wingree Ltd</p>
                                            </div>
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
