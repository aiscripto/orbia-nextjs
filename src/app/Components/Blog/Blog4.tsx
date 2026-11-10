import Image from "next/image";
import Link from "next/link";

const Blog4 = () => {

    const blogData = [
        {
            img: "/assets/images/innerpage/blog/blog-grid-img1.jpg",
            title: "Unlocking the Power of Data for Business Success.",
        },
        {
            img: "/assets/images/innerpage/blog/blog-grid-img2.jpg",
            title: "The Future of Work Embracin Digital Transformation.",
        },
        {
            img: "/assets/images/innerpage/blog/blog-grid-img3.jpg",
            title: "AI-Powered Innovations: What’s Next for the Future?",
        },
        {
            img: "/assets/images/innerpage/blog/blog-grid-img4.jpg",
            title: "Ethical AI: Building Responsible and Fair AI Systems",
        },
        {
            img: "/assets/images/innerpage/blog/blog-grid-img5.jpg",
            title: "AI and Creativity: Can Machines Be Truly Creative",
        },
        {
            img: "/assets/images/innerpage/blog/blog-grid-img6.jpg",
            title: "How AI is Revolutionizing Business and Industry Today.",
        },
    ];

    return (
            <section className="orbia-blog-grid-sec pt-120 pb-120">
                <div className="container">
                    <div className="row">
                        {blogData.map((item, i) => (
                        <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                            <div className="orbia-blog-post-item style-one mb-20">
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

export default Blog4;