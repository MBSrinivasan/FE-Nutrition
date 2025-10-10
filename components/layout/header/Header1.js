import Link from "next/link";

export default function Header1({ scroll, isMobileMenu, handleMobileMenu }) {
  return (
    <>
      <header className="header about-bg d-none d-lg-block">
        <div
          className={`headermain-area header ${scroll ? "sticky" : ""}`}
          id="header"
          style={{ borderBottom: "1px solid #DEDBDB" }}
        >
          <div
            className="container-fluid"
            style={{ paddingLeft: "113px", paddingRight: "113px" }}
          >
            <div className="row">
              <div className="col-12">
                <div className="header-elements" style={{ justifyContent: "center", display: "flex" }}>
                  <div className="site-logo">
                    <Link href="/index1">
                      <img src="/assets/images/allimages/7 1.png" alt="" />
                    </Link>
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
