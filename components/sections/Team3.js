
import Link from "next/link"

export default function Team3() {
    return (
        <>

            <div className="team11-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="team11-header text-center margin-b60">
                                <span className="font-outfit font-16 lineh-16 weight-500 color-h11 aropaln2 d-inline-block margin-b24"><img src="/assets/images/icons/aroplanicons2.svg" alt="" />Our Team</span>
                                <h1 className="font-outfit font-40 lineh-52 weight-600 colorhp11 text-capitalize">Meet Our Expert
                                    Consultants</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1000} data-aos-easing="linear">
                            <div className="team11-parent-boxarea">
                                <div className="team11-boxarea">
                                    <div className="team11imges">
                                        <img src="/assets/images/sectionimg/team11img1.png" alt="" />
                                    </div>
                                    <div className="team11-social-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team11-textarea">
                                    <div className="teamsname">
                                        <Link href="/team-details" className="font-outfit font-20 lineh-26 weight-600 colorhp12 d-inline-block margin-b12">Lisandro
                                            Martinez</Link>
                                        <p className="font-outfit font-16 lineh-16 weight-400 colorhp11">Immigration Consultant</p>
                                    </div>
                                    <div className="shareicon">
                                        <Link href="#"><i className="fa-solid fa-share-nodes" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1200} data-aos-easing="linear">
                            <div className="team11-parent-boxarea">
                                <div className="team11-boxarea">
                                    <div className="team11imges">
                                        <img src="/assets/images/sectionimg/team11img2.png" alt="" />
                                    </div>
                                    <div className="team11-social-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team11-textarea">
                                    <div className="teamsname">
                                        <Link href="/team-details" className="font-outfit font-20 lineh-26 weight-600 colorhp12 d-inline-block margin-b12">Lautaro
                                            Martinez</Link>
                                        <p className="font-outfit font-16 lineh-16 weight-400 colorhp11">Immigration Consultant</p>
                                    </div>
                                    <div className="shareicon">
                                        <Link href="#"><i className="fa-solid fa-share-nodes" /></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6" data-aos="zoom-in" data-aos-duration={1400} data-aos-easing="linear">
                            <div className="team11-parent-boxarea">
                                <div className="team11-boxarea">
                                    <div className="team11imges">
                                        <img src="/assets/images/sectionimg/team11img3.png" alt="" />
                                    </div>
                                    <div className="team11-social-links">
                                        <ul>
                                            <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="team11-textarea">
                                    <div className="teamsname">
                                        <Link href="/team-details" className="font-outfit font-20 lineh-26 weight-600 colorhp12 d-inline-block margin-b12">David
                                            Willy</Link>
                                        <p className="font-outfit font-16 lineh-16 weight-400 colorhp11">Immigration Consultant</p>
                                    </div>
                                    <div className="shareicon">
                                        <Link href="#"><i className="fa-solid fa-share-nodes" /></Link>
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
