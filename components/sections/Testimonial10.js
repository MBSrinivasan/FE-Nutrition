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

export default function Testimonial10() {
    return (
        <>

            <div className="testimonial10-section-area section-padding8">
                <img src="/assets/images/elementor/elementor68.png" alt="" className="elmentors68" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="testimonial10-header text-center margin-b60">
                                <span className="font-16 lineh-16 weight-600 color-h10 about10span d-inline-block margin-b20">Testimonials</span>
                                <h1 className="font-44 lineh-54 weight-600 colorhp3 font-lora margin-b24s">Lovely Feedback From
                                    Clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-right" data-aos-duration={600} data-aos-easing="linear">
                            <Swiper {...swiperOptions} className="testimonial10-owlcarousel owl-carousel">
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonnialauthor1.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonialauthor2.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonialauhto3.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonnialauthor1.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonialauthor2.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonialauhto3.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonnialauthor1.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonialauthor2.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p>CEO, Paul Ltd</p>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial10-boxarea">
                                    <div className="testimonial10-allarea">
                                        <img src="/assets/images/icons/quito6.svg" alt="" className="quitotestimonial" />
                                        <ul>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color-24"><i className="fa-solid fa-star" /></li>
                                            <li className="color33"><i className="fa-solid fa-star" /></li>
                                        </ul>
                                        <p className="font-18 weight-600 colorhp3 lineh-28 font-ks">Consult the world of insurance
                                            can be overwhelming, but Your Insurance Consulting Company made easy.</p>
                                        <img src="/assets/images/background/plygon1.png" alt="" className="polugonimages" />
                                    </div>
                                    <div className="mans-testimonial10">
                                        <div className="images10area">
                                            <img src="/assets/images/elementor/elementor64.png" alt="" className="elmentorsauhtor keyframe3" />
                                            <img src="/assets/images/sectionimg/testimonialauhto3.png" alt="" className="manimages10" />
                                        </div>
                                        <h1> <Link href="#" className="font-18 weight-600 colorhp3 font-ks d-inline-block margin-b14">Rodrygo De
                                            Paul</Link></h1>
                                        <p className="font-16 font-ks lineh-16 weight-500 color-p10">CEO, Paul Ltd</p>
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
