import Link from "next/link"

export default function Footer13() {
    return (
        <>
            <div className="preview-footer-area section-padding7">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 m-auto">
                            <div className="preview-footer-header text-center">
                                <img src="/assets/images/logo/logopreview.png" alt="" className="margin-b24" />
                                <h1 className="font-44 font-outfit lineh-52 weight-600 color margin-b20 text-capitalize">Create a
                                    Professional Business &amp; Finance Website Now!</h1>
                                <Link href="https://themeforest.net/user/vikinglab/portfolio" className="font-outfit font-16 lineh-18 weight-700 get-preview">Purchase Now <i className="fa-solid fa-arrow-right" /></Link>
                                <Link href="/#demo" className="font-outfit font-16 lineh-24 weight-700 get-preview1 color">View All
                                    Demos <i className="fa-solid fa-arrow-right" /></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
