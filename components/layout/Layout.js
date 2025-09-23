
'use client'
import AOS from 'aos'
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import Breadcrumb from './Breadcrumb'
import MobileMenu from './MobileMenu'
import Footer1 from './footer/Footer1'
import Footer10 from './footer/Footer10'
import Footer11 from './footer/Footer11'
import Footer12 from './footer/Footer12'
import Footer13 from './footer/Footer13'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Footer5 from './footer/Footer5'
import Footer6 from './footer/Footer6'
import Footer7 from './footer/Footer7'
import Footer8 from './footer/Footer8'
import Footer9 from './footer/Footer9'
import Header1 from "./header/Header1"
import Header10 from './header/Header10'
import Header11 from './header/Header11'
import Header12 from './header/Header12'
import Header13 from './header/Header13'
import Header14 from './header/Header14'
import Header15 from './header/Header15'
import Header16 from './header/Header16'
import Header17 from './header/Header17'
import Header18 from './header/Header18'
import Header19 from './header/Header19'
import Header2 from './header/Header2'
import Header20 from './header/Header20'
import Header21 from './header/Header21'
import Header22 from './header/Header22'
import Header23 from './header/Header23'
import Header24 from './header/Header24'
import Header25 from './header/Header25'
import Header3 from './header/Header3'
import Header4 from './header/Header4'
import Header5 from './header/Header5'
import Header6 from './header/Header6'
import Header7 from './header/Header7'
import Header8 from './header/Header8'
import Header9 from './header/Header9'

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children }) {
    const [scroll, setScroll] = useState(0)
    // Moblile Menu
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => setMobileMenu(!isMobileMenu)

    useEffect(() => {
        // const WOW = require('wowjs')
        // window.wow = new WOW.WOW({
        //     live: false
        // })
        // window.wow.init()
        AOS.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    return (
        <>
            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 6 ? <Header6 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 7 ? <Header7 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 8 ? <Header8 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 9 ? <Header9 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 10 ? <Header10 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 11 ? <Header11 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 12 ? <Header12 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 13 ? <Header13 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 14 ? <Header14 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 15 ? <Header15 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 16 ? <Header16 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 17 ? <Header17 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 18 ? <Header18 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 19 ? <Header19 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 20 ? <Header20 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 21 ? <Header21 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 22 ? <Header22 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 23 ? <Header23 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 24 ? <Header24 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            {headerStyle == 25 ? <Header25 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} /> : null}
            <MobileMenu  isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu}/>


            {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

            {children}

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 /> : null}
            {footerStyle == 3 ? < Footer3 /> : null}
            {footerStyle == 4 ? < Footer4 /> : null}
            {footerStyle == 5 ? < Footer5 /> : null}
            {footerStyle == 6 ? < Footer6 /> : null}
            {footerStyle == 7 ? < Footer7 /> : null}
            {footerStyle == 8 ? < Footer8 /> : null}
            {footerStyle == 9 ? < Footer9 /> : null}
            {footerStyle == 10 ? < Footer10 /> : null}
            {footerStyle == 11 ? < Footer11 /> : null}
            {footerStyle == 12 ? < Footer12 /> : null}
            {footerStyle == 13 ? < Footer13 /> : null}

            <BackToTop />
        </>
    )
}
