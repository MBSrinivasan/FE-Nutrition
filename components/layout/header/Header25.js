
import Link from "next/link"

export default function Header25({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header previewsticky ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/index1"><img src="/assets/images/logo/logopreview.png" alt="" /></Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 mainmenuex previewdemo">
                                        <ul>
                                            <li className="mega-dropdawn"><Link href="/#demo">Demo</Link></li>
                                            <li><Link href="/#service" className="font-outfit font-18 weight-500 color-1">Features</Link>
                                            </li>
                                            <li><Link href="/#pages" className="font-outfit font-18 weight-500 color-1">Pages</Link></li>
                                            <li><Link href="/#service" className="font-outfit font-18 weight-500 color-1">Service </Link>
                                            </li>
                                            <li><Link href="/#blog" className="font-outfit font-18 weight-500 color-1"> Blogs </Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1">
                                            <div className="theme-btn4">
                                                <Link href="https://themeforest.net/user/vikinglab/portfolio" className="purchasebtn font-outfit font-16 weight-700 color">Purchase Now
                                                    <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                            </div>
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
