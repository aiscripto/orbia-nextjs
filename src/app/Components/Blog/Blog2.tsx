import Image from "next/image";
import Link from "next/link";

const Blog2 = () => {

    const blogData = [
        {
            img: "/assets/images/home-two/blog/blog-img1.jpg",
            title: "How AI is Transforming Businesses Across Industries"
        },
        {
            img: "/assets/images/home-two/blog/blog-img2.jpg",
            title: "Understanding Deep AI Learning and Neural Network"
        }
    ];

    return (
            <div className="orbia-blog_two pt-115 pb-80">
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-8">
                            <div className="section-title mb-55">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Latest Blog</span>
                                <h2 className="text-anm">AI and Creativity Stories Tips.</h2>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="orbia-button text-lg-end mb-60" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="/blog" className="theme-btn style-one">View All Post<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {blogData.map((item, i) => (
                        <div key={i} className="col-md-6">
                            <div className="orbia-blog-post-item style-one mb-40" data-aos="fade-up" data-aos-duration="1000">
                                <div className="post-thumbnail">
                                    <Image src={item.img} alt="img" width={633} height={440}   />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><i className="bi bi-person-fill"></i>By<a href="#">Admin</a></span>
                                        <span><i className="bi bi-chat-fill"></i><a href="#">(03) Comments</a></span>
                                    </div>
                                    <h4 className="title"><Link href="/blog/blog-details">{item.title}</Link></h4>
                                    <Link href="/blog/blog-details" className="theme-btn style-one">Read More<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
    );
};

export default Blog2;