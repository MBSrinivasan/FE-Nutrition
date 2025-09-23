
import Link from "next/link"

export default function Team1() {
    return (
        <>

            <div className="team1-section-area section-padding8">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="team-section-textarea text-center margin-b60">
                                <span className="about3span font-ks lineh-16 font-16 weight-600 color-29 d-inline-block margin-b24">Our
                                    Expert Attorneys</span>
                                <h1 className="font-lora font-48 lineh-56 weight-600 color-29 margin-b20 clienth2">Meet Our Expert
                                    Law <br /> Consulting Team</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 margin-b30 col-md-6" data-aos="fade-right" data-aos-duration={1400}>
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/images/sectionimg/team1.png" alt="" />
                                </div>
                                <div className="project-content-two">
                                    <ul>
                                        <li><Link href="#"><i className="fa-brands fa-x-twitter" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                    </ul>
                                </div>
                                <div className="team-pera text-center margin-t">
                                    <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12"><Link href="/team" className="color-29">Johnathan Stehr</Link></h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks">Family Law Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 margin-b30 col-md-6" data-aos="fade-right" data-aos-duration={1200}>
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/images/sectionimg/team2.png" alt="" />
                                </div>
                                <div className="project-content-two">
                                    <ul>
                                        <li><Link href="#"><i className="fa-brands fa-x-twitter" />
                                        </Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                    </ul>
                                </div>
                                <div className="team-pera text-center margin-t">
                                    <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12"><Link href="/team" className="color-29">Brian Ebert DVM</Link></h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks">Sexual Harasment Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 margin-b30 col-md-6" data-aos="fade-right" data-aos-duration={1000}>
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/images/sectionimg/team1.png" alt="" />
                                </div>
                                <div className="project-content-two">
                                    <ul>
                                        <li><Link href="#"><i className="fa-brands fa-x-twitter" />
                                        </Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                    </ul>
                                </div>
                                <div className="team-pera text-center margin-t">
                                    <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12"><Link href="/team" className="color-29">Marion Blanda PhD</Link></h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks">Financial Law Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 margin-b30 col-md-6" data-aos="fade-right" data-aos-duration={800}>
                            <div className="project-item-two">
                                <div className="project-thumb-two">
                                    <img src="/assets/images/sectionimg/team3.png" alt="" />
                                </div>
                                <div className="project-content-two">
                                    <ul>
                                        <li><Link href="#"><i className="fa-brands fa-x-twitter" />
                                        </Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-facebook" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram" /></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-linkedin" /></Link></li>
                                    </ul>
                                </div>
                                <div className="team-pera text-center margin-t">
                                    <h1 className="font-lora font-24 lineh-24 color-29 weight-600 margin-b12"><Link href="/team" className="color-29">Warren Predovic</Link></h1>
                                    <p className="font-16 lineh-16 weight-500 color-30 font-ks">Criminal Law Expert</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
