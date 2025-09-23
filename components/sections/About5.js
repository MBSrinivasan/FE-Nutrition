
import Link from "next/link"

export default function About5() {
    return (
        <>

            <div className="about5-scetion-area section-padding5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="zoom-out" data-aos-duration={1200}>
                            <div className="about5-images">
                                <img src="/assets/images/sectionimg/about5images.png" alt="" className="about5ims" />
                                <img src="/assets/images/elementor/elementor17.png" alt="" className="elementor-9 keyframe3" />
                            </div>
                        </div>
                        <div className="col-lg-6" data-aos="fade-right" data-aos-duration={800}>
                            <div className="abou-5textarea5">
                                <span className="font-16 font-outfit weight-500 lineh-16 color36 d-inline-block consultingspan margin-b20">About
                                    Us</span>
                                <h1 className="font-outfit font-44 lineh-52 color37 weight-600 margin-b20" data-aos="fade-right" data-aos-duration={1200}>We understand that every business is unique</h1>
                                <p className="font-outfit font-16 lineh-26 weight-400 color38">Build a strong and capable team with
                                    our organizational development expertise. From leadership training to talent acquisition
                                    strategies, we'll help you create a high-performing workforce.</p>
                                <div className="animationcss" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={600}>
                                    <div className="about5-authorarea margin-t32">
                                        <div className="author0mages">
                                            <img src="/assets/images/icons/check1.png" alt="" className="ts" />
                                        </div>
                                        <div className="about5-authortext">
                                            <Link href="#" className="font-20 weight-600 color37 lineh-20 margin-b d-inline-block font-outfit ts">Strategic
                                                Planning</Link>
                                            <p className="font-outfit font-16 lineh-26 weight-400 color38 ts">Craft a roadmap for
                                                your business's future with our strategic planning services. We'll help you
                                                define your long-term vision, set achievable goals, and actionable strategies to
                                                reach them.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="animationcss" data-aos="fade-right" data-aos-easing="linear" data-aos-duration={800}>
                                    <div className="about5-authorarea margin-t32">
                                        <div className="author0mages"><img src="/assets/images/icons/check1.png" alt="" className="ts" />
                                        </div>
                                        <div className="about5-authortext">
                                            <Link href="#" className="font-outfit font-20 lineh-20 color37 weight-600 margin-b d-inline-block team-section-textarea ts">Market
                                                Analysis</Link>
                                            <p className="font-outfit font-16 lineh-26 weight-400 color38 team-section-textarea ts">
                                                Understand your industry landscape better with our in-depth market analysis.
                                                We'll provide you with insights into market trends, customer behaviors, and
                                                competitive positioning .</p>
                                        </div>
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
