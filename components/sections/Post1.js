
import Link from "next/link"

export default function Post1() {
    return (
        <>

            <div className="post11-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="post11-header text-center margin-b60">
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h11 aropaln2 d-inline-block margin-b24"><img src="/assets/images/icons/aroplanicons2.svg" alt="" />Instagram Post</span>
                                <h1 className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize margin-b24">Follow
                                    Us On Instagram</h1>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1000} data-aos-easing="linear">
                                <div className="post-boxarea">
                                    <div className="post-images">
                                        <img src="/assets/images/sectionimg/posiimg1.png" alt="" />
                                    </div>
                                    <div className="postiocns">
                                        <Link href="#"><span><i className="fa-brands fa-instagram" /></span></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1200} data-aos-easing="linear">
                                <div className="post-boxarea">
                                    <div className="post-images">
                                        <img src="/assets/images/sectionimg/posiimg2.png" alt="" />
                                    </div>
                                    <div className="postiocns">
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1400} data-aos-easing="linear">
                                <div className="post-boxarea">
                                    <div className="post-images">
                                        <img src="/assets/images/sectionimg/postimg3.png" alt="" />
                                    </div>
                                    <div className="postiocns">
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1600} data-aos-easing="linear">
                                <div className="post-boxarea">
                                    <div className="post-images">
                                        <img src="/assets/images/sectionimg/postimg4.png" alt="" />
                                    </div>
                                    <div className="postiocns">
                                        <Link href="#"><i className="fa-brands fa-instagram" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
