import Link from "next/link"

export default function BlogCard1({ item }) {
    return (
        <>
            <div className="col-lg-6">
                <div className="blog2-author-area">
                    <div className="blog2-images">
                        <img src={`/assets/images/sectionimg/blog/${item.img}`} alt="" />
                    </div>
                    <div className="blog-auhtor2-text blog2-author-poition ">
                        <div className="blog2-ahtuor2 blog-2ahthor bloinner2">
                            <div className="blog-date-list margin-b">
                                <img src="/assets/images/icons/daterange1.png" alt="" />
                                <Link href={`/blog/${item.id}`} className="font-16 lineh-16 font-ks weight-600 color">5 Nov 2023</Link>
                            </div>
                            <Link href={`/blog/${item.id}`}>
                                <h1 className="font-20 font-lora color lineh-20 weight-600 margin-b">Provide guidance on
                                    optimizing business operations</h1>
                            </Link>
                            <p className="font-16 font-ks lineh-26 weight-400 color">Include any additional information
                                that may be or helpful for visitors, such as FAQs, pricing options, or service
                                packages. </p>
                            <Link href={`/blog/${item.id}`} className="font-16 font-ks weight-700 color lineh-26 margin-t24 d-inline-block learn-more learn-more1">Learn
                                More <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
