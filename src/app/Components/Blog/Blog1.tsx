import Image from "next/image";
import Link from "next/link";

const Blog1 = () => {

    const blogData = [
        {
            img: "/assets/images/home-one/blog/blog-img1.jpg",
            title: "Unlocking the Power of Data for Business Success."
        },
        {
            img: "/assets/images/home-one/blog/blog-img2.jpg",
            title: "The Future of Work Embracin Digital Transformation."
        },
        {
            img: "/assets/images/home-one/blog/blog-img3.jpg",
            title: "How AI is Revolutionizing Business and Industry Today"
        }
    ];

    return (
    <section className="orbia-blog_one pt-115 pb-70">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-8 col-lg-10">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Latest blog </span>
                        <h2 className="text-anm">AI and Creativity Stories Tips.</h2>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                {blogData.map((item, i) => (
                <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                    <div className="orbia-blog-post-item style-one mb-40" data-aos="fade-up" data-aos-duration="1000">
                        <div className="post-thumbnail">
                            <Image src={item.img} alt="img" width={414} height={333}   />
                        </div>
                        <div className="post-content">
                            <div className="post-meta">
                                <span><i className="bi bi-person-fill"></i>By<a href="#">Admin</a></span>
                                <span><i className="bi bi-chat-fill"></i><a href="#">(03) Comments</a></span>
                            </div>
                            <h4 className="title"><Link href="/blog/blog-details">{item.title}</Link></h4>
                            <Link href="/blog/blog-details" className="read-more style-one">Read More<i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Blog1;