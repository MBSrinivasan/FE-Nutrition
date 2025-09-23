
'use client'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
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
    }
}
export default function Testimonial1() {
    return (
        <>

            <div className="testimonial4-scetion-area section-padding5">
                <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor24" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="testimonial4-header4 text-center margin-b60">
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Testimonials</span>
                                <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Testimonials From
                                    <br /> Our Valued Clients</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-7" data-aos="fade-right" data-aos-duration={1000}>
                            <Swiper {...swiperOptions} className="testimonial5-section5-area owl-carousel">
                                <SwiperSlide className="testimonial5-author text-center">
                                    <div className="testimonial3-img text-center">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" className="margin-b24" />
                                    </div>
                                    <h1 className="font-24 font-lora lineh-24 weight-600 color-29 margin-b">Mr. Scott Wyman</h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks margin-b24">Mobile Developer</p>
                                    <p className="font-20 font-ks lineh34 weight-600 color-29">Our certified public accountants have
                                        knowledge and experience in a wide variety of industries. We offer diverse and very
                                        unique specialty services that ensure continued growth, success and longevity for
                                        decades to Come to Tax Consulting.
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial5-author text-center">
                                    <div className="testimonial3-img text-center">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" className="margin-b24" />
                                    </div>
                                    <h1 className="font-24 font-lora lineh-24 weight-600 color-29 margin-b">Mr. Scott Wyman</h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks margin-b24">Mobile Developer</p>
                                    <p className="font-20 font-ks lineh34 weight-600 color-29">Our certified public accountants have
                                        knowledge and experience in a wide variety of industries. We offer diverse and very
                                        unique specialty services that ensure continued growth, success and longevity for
                                        decades to Come to Tax Consulting.
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial5-author text-center">
                                    <div className="testimonial3-img text-center">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" className="margin-b24" />
                                    </div>
                                    <h1 className="font-24 font-lora lineh-24 weight-600 color-29 margin-b">Mr. Scott Wyman</h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks margin-b24">Mobile Developer</p>
                                    <p className="font-20 font-ks lineh34 weight-600 color-29">Our certified public accountants have
                                        knowledge and experience in a wide variety of industries. We offer diverse and very
                                        unique specialty services that ensure continued growth, success and longevity for
                                        decades to Come to Tax Consulting.
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial5-author text-center">
                                    <div className="testimonial3-img text-center">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" className="margin-b24" />
                                    </div>
                                    <h1 className="font-24 font-lora lineh-24 weight-600 color-29 margin-b">Mr. Scott Wyman</h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks margin-b24">Mobile Developer</p>
                                    <p className="font-20 font-ks lineh34 weight-600 color-29">Our certified public accountants have
                                        knowledge and experience in a wide variety of industries. We offer diverse and very
                                        unique specialty services that ensure continued growth, success and longevity for
                                        decades to Come to Tax Consulting.
                                    </p>
                                </SwiperSlide>
                                <SwiperSlide className="testimonial5-author text-center">
                                    <div className="testimonial3-img text-center">
                                        <img src="/assets/images/sectionimg/testimonial4.png" alt="" className="margin-b24" />
                                    </div>
                                    <h1 className="font-24 font-lora lineh-24 weight-600 color-29 margin-b">Mr. Scott Wyman</h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks margin-b24">Mobile Developer</p>
                                    <p className="font-20 font-ks lineh34 weight-600 color-29">Our certified public accountants have
                                        knowledge and experience in a wide variety of industries. We offer diverse and very
                                        unique specialty services that ensure continued growth, success and longevity for
                                        decades to Come to Tax Consulting.
                                    </p>
                                </SwiperSlide>
                            </Swiper>
                        </div>
                        <div className="col-lg-5" data-aos="flip-right" data-aos-duration={1000}>
                            <div className="circle-img">
                                <img src="/assets/images/sectionimg/circleimg.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor23.png" alt="" className="elementor25" />
            </div>
        </>
    )
}
