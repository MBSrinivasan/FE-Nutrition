
import Link from "next/link"

export default function Casestudy2() {
    return (
        <>

            <div className="case2-study2-scetion-area section-padding5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12" data-aos="fade-up" data-aos-duration={800}>
                            <div className="case2-study-textarea text-center">
                                <span className="finance1 font-16 font-nunito lineh-16 weight-600 color-25 margin-b24">Our Case
                                    Study</span>
                                <h1 className="font-lora font-44 weight-600 lineh-52 color-ni margin-b">Trust <span className="success1 color-25">Consalt</span> for your financial Success</h1>
                                <p className="font-16 font-nunito lineh-26 weight-500 color-26">We believe that informed clients
                                    make better financial decisions. As part of our service, we'll <br /> provide educational
                                    resources and workshops to help you enhance your financial knowledge.</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <ul className="nav nav-pills  margin-t40 justify-content-center margin-b60 all-btntabs" id="pills-tab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link active  font-16 font-nunito lineh-16 color-ni weight-700 casetabs-button" id="pills-all-tab" data-bs-toggle="pill" data-bs-target="#pills-all" type="button" role="tab" aria-controls="pills-all" aria-selected="true">All Financial
                                        Planning</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link  font-16 font-nunito lineh-16 color-ni weight-700 casetabs-button" id="pills-financial-tab" data-bs-toggle="pill" data-bs-target="#pills-financial" type="button" role="tab" aria-controls="pills-financial" aria-selected="false">Financial
                                        Planning</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link  font-16 font-nunito lineh-16 color-ni weight-700 casetabs-button" id="pills-best-tab" data-bs-toggle="pill" data-bs-target="#pills-best" type="button" role="tab" aria-controls="pills-best" aria-selected="false">Best Marketing
                                        Analysis</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link  font-16 font-nunito lineh-16 color-ni weight-700 casetabs-button" id="pills-tax-tab" data-bs-toggle="pill" data-bs-target="#pills-tax" type="button" role="tab" aria-controls="pills-tax" aria-selected="false">Tax Managment Plan</button>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <button className="nav-link font-16 font-nunito lineh-16 color-ni weight-700 casetabs-button" id="pills-bussiness-tab" data-bs-toggle="pill" data-bs-target="#pills-bussiness" type="button" role="tab" aria-controls="pills-bussiness">Business Growth Plan</button>
                                </li>
                            </ul>
                            <div className="tab-content" id="pills-tabContent">
                                <div className="tab-pane fade show active" id="pills-all" role="tabpanel" aria-labelledby="pills-all-tab" tabIndex={0}>
                                    <div className="row">
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img1.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img2.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial managment planning</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img3.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Business growth plan</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-financial" role="tabpanel" aria-labelledby="pills-financial-tab" tabIndex={0}>
                                    <div className="row">
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img1.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img2.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-best" role="tabpanel" aria-labelledby="pills-best-tab" tabIndex={0}>
                                    <div className="row">
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img4.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img3.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Business growth plan</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-tax" role="tabpanel" aria-labelledby="pills-tax-tab" tabIndex={0}>
                                    <div className="row">
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img2.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img3.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img1.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="pills-bussiness" role="tabpanel" aria-labelledby="pills-bussiness-tab" tabIndex={0}>
                                    <div className="row">
                                        <div className="col-lg-4 ui ux app margin-b30">
                                            <div className="single-portfolio">
                                                <div className="portfolio-images">
                                                    <img src="/assets/images/sectionimg/case-img2.png" alt="" />
                                                </div>
                                                <div className="portfolio-textarea">
                                                    <Link href="/casemiddle" className="color-ni">
                                                        <h1 className="font-20 font-lora weight-600 color-ni lineh-24 margin-b">
                                                            Financial tax advisory</h1>
                                                    </Link>
                                                    <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">We take
                                                        pride in the success stories of our clients and the trust they place in
                                                        consult.</p>
                                                    <div className="portfolio-visible-textarea">
                                                        <p className="font-16 font-nunito lineh-26 weight-500 color-26 margin-b">
                                                            Whether you're an individual planning for retirement, a business
                                                            aiming for growth.</p>
                                                        <Link href="/casemiddle" className="font-16 color lineh-16 font-nunito weight-600 jast">Learn
                                                            More <span className="font-16 "><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="case-study-btn text-center">
                                <Link href="/casestudy1" className="font-16 lineh-16 font-nunit weight-700 color unlock-btn margin-t32">View More Case
                                    Study</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
