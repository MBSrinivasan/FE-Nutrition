import Link from "next/link"

export default function BlogCard2({ item }) {
    return (
        <>
            <div className="col-lg-4 col-md-6">
                <div className="blog1-boxarea">
                    <div className="blog1-img">
                        <img src={`/assets/images/sectionimg/${item.img}`} alt="" />
                    </div>
                    <div className="blog1-padding">
                        <div className="blog1-text">
                            <img src="/assets/images/icons/vector1.png" alt="" />
                            <Link href={`/blog/${item.id}`} className="color-29">
                                <p className="font-ks font-16 weight-600 color-29 lineh-26">02 Nov 2023</p>
                            </Link>
                        </div>
                        <Link  href={`/blog/${item.id}`} className="font-lora font-20 lineh-30 weight-600 color-29 margin-b d-inline-block link-hover">Bussiness
                            strategies, performance management to success</Link>
                        <p className="font-16 font-ks lineh-26 weight-500 color-26 margin-b">We take pride in the
                            success stories of our clients and the trust they place in consult.</p>
                        <Link  href={`/blog/${item.id}`} className="font-ks font-16 lineh-16 color-29 weight-700  d-inline-block laearnmore2 bloginnerhover">Learn
                            More <span><i className="fa-solid fa-arrow-right" /></span></Link>
                    </div>
                </div>
            </div>
        </>
    )
}
