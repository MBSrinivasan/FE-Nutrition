import Button from "@/components/reusableComponents/button/page";
import { CaretDownOutlined } from "@ant-design/icons";

import Link from "next/link";
import { useState } from "react";

export default function Header15({ scroll, isMobileMenu, handleMobileMenu }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="header about-bg d-none d-lg-block">
        <div
          className={`headermain-area header ${scroll ? "sticky" : ""}`}
          id="header"
        >
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="header-elements">
                  <div className="site-logo" onClick={() => setOpen(!open)}>
                    <Link href="/index1">
                      <img src="/assets/images/allimages/7 1.png" alt="" />
                    </Link>
                  </div>
                  <div className="main-menu-ex homepage5">
                    <ul>
                      <li className="mega-dropdawn">
                        <Link href="#">Home</Link>
                      </li>
                      <li
                        onMouseEnter={() => setOpen(true)}
                      >
                        <Link
                          href="/#about"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Manufacturers{" "}
                          <CaretDownOutlined style={{ color: "#7A1F3D" }} />
                        </Link>
                        {open && (
                          <ul onMouseLeave={() => setOpen(false)}>
                            <li>
                              <Link
                                href="/servicev1"
                                className="font-ks font-16 weight-500 color"
                              >
                                Service V1
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/servicev2"
                                className="font-ks font-16 weight-500 color"
                              >
                                Service V2
                              </Link>
                            </li>
                          </ul>
                        )}
                      </li>
                      <li>
                        <Link
                          href="/#service"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Brands{" "}
                          <CaretDownOutlined style={{ color: "#7A1F3D" }} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#testimonial"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Traders{" "}
                          <CaretDownOutlined style={{ color: "#7A1F3D" }} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#blog"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          R&D Labs{" "}
                          <CaretDownOutlined style={{ color: "#7A1F3D" }} />
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/#pricing"
                          className="font-ks font-16 weight-500 color-1"
                        >
                          Entrepreneurs{" "}
                          <CaretDownOutlined style={{ color: "#7A1F3D" }} />
                        </Link>
                      </li>
                    </ul>
                  </div>

                  <div className="flex gap-3">
                    <Button width="108px" height="38px" borderRadius="30px">
                      Sign Up
                    </Button>
                    <Button width="108px" height="38px" borderRadius="30px">
                      Log in
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
