"use client";
import AOS from "aos";
import { useEffect, useState } from "react";
import BackToTop from "../elements/BackToTop";
import Breadcrumb from "./Breadcrumb";
import MobileMenu from "./MobileMenu";

import Footer3 from "./footer/Footer3";

import Header15 from "./header/Header15";

export default function Layout({
  headerStyle,
  footerStyle,
  headTitle,
  breadcrumbTitle,
  children,
}) {
  const [scroll, setScroll] = useState(0);
  // Moblile Menu
  const [isMobileMenu, setMobileMenu] = useState(false);
  const handleMobileMenu = () => setMobileMenu(!isMobileMenu);

  useEffect(() => {
    // const WOW = require('wowjs')
    // window.wow = new WOW.WOW({
    //     live: false
    // })
    // window.wow.init()
    AOS.init();

    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY > 100;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  }, []);
  return (
    <>
      {headerStyle == 15 ? (
        <Header15
          scroll={scroll}
          isMobileMenu={isMobileMenu}
          handleMobileMenu={handleMobileMenu}
        />
      ) : null}

      <MobileMenu
        isMobileMenu={isMobileMenu}
        handleMobileMenu={handleMobileMenu}
      />

      {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

      {children}

      {footerStyle == 3 ? <Footer3 /> : null}

      <BackToTop />
    </>
  );
}
