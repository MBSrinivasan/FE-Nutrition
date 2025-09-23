import Link from "next/link"

export default function Header24({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/index1"><img src="/assets/images/logo/logo19.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 main-menu-ex7  homepage12">
                                        <ul>
                                            <li className="mega-dropdawn"><Link href="#">Home  <i className="fa-solid fa-angle-down" /></Link>
                                                <ul className="mega-dropdawn-ul backgroudnone">
                                                    <div className="mega-menu-all">
                                                        <div className="row">
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo4.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index1" className="theme-btn11 font-f-3"><span className="font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></span></Link>
                                                                        <Link href="/single-index1" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index1" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Law Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo7.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index7" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index2" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index7" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Law Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo2.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index3" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index3" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index3" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Tax Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo8.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index8" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index4" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index8" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Tax Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo1.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index2" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index5" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index2" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Bussiness Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo5.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index5" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index6" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index5" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Bussiness Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo3.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index4" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index7" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index4" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Finance Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo6.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index6" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index8" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index6" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Finance Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo9.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index9" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index9" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index9" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Insurance Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo10.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index10" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index10" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index10" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Insurance Consulting O2</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo11.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index11" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index11" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index11" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Visa Consulting O1</Link>
                                                            </div>
                                                            <div className="col-lg-3">
                                                                <div className="space40" />
                                                                <div className="mega-menu-item-box">
                                                                    <div className="mega-menu-box-img img100">
                                                                        <img src="/assets/images/alldemo/demo12.png" alt="" />
                                                                    </div>
                                                                    <div className="mega-menu-items-button mega-menu-items-button6">
                                                                        <Link href="/index12" className="theme-btn11 font-f-3 font-outfit font-16 lineh-16 weight-600 color">Multipage <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                        <Link href="/single-index12" className="theme-btn11 font-outfit font-16 lineh-16 weight-600 color margin-t d-inline-block">Landing Page <span><i className="fa-solid fa-arrow-right" /></span></Link>
                                                                    </div>
                                                                </div>
                                                                <Link href="/index12" className="font-outfit font-40 lineh-52 weight-500 colorhp11 colorpera">Visa Consulting O2</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </ul>
                                            </li>
                                            <li><Link href="/#about" className="font-outfit font-16 weight-500 color">About Us</Link></li>
                                            <li><Link href="/#services" className="font-outfit font-16 weight-500 color"> Services</Link></li>
                                            <li><Link href="/#countries" className="font-outfit font-16 weight-500 color">Countries</Link></li>
                                            <li><Link href="/#blogs" className="font-outfit font-16 weight-500 color">Blogs</Link></li>
                                            <li><Link href="/#team" className="font-outfit font-16 weight-500 color">Team</Link></li>
                                            <li><Link href="/#contact" className="font-outfit font-16 weight-500 color">Contact</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1 themeniceall">
                                            <Link href="/contact1" className="font-outfit font-16 lineh-16 weight-600 color-h12 theme-btn13">Start Your Journey Today</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}
