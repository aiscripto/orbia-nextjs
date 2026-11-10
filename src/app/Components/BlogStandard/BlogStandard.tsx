import Image from "next/image";
import Link from "next/link";

const BlogStandard = () => {

    const blogData = [
        {
            img: "/assets/images/innerpage/blog/blog-std-img1.jpg",
            title: "The Potential Benefits of AI Solutions for Small Businesses",
            description:
            "Our specialty is developing custom technological solutions that are suited to your company's part requirements. We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development.",
        },
        {
            img: "/assets/images/innerpage/blog/blog-std-img2.jpg",
            title: "Unlocking the Power of Data for Business Success.",
            description:
            "Our specialty is developing custom technological solutions that are suited to your company's part requirements. We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development.",
        },
        {
            img: "/assets/images/innerpage/blog/blog-std-img3.jpg",
            title: "Ethical AI: Building Responsible and Fair AI Systems",
            description:
            "Our specialty is developing custom technological solutions that are suited to your company's part requirements. We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development.",
        }
    ];

    return (
        <section className="orbia-blog-standard-sec pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="blog-standard-wrapper">
                            {blogData.map((item, i) => (
                            <div key={i} className="orbia-blog-post-item style-one mb-30" data-aos="fade-up" data-aos-duration="800">
                                <div className="post-thumbnail">
                                    <Image src={item.img} alt="img" width={852} height={436}   />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span><i className="bi bi-person-fill"></i>By<a href="#">Admin</a></span>
                                        <span><i className="bi bi-calendar-check"></i><a href="#">June 15, 2025</a></span>
                                        <span><i className="bi bi-chat-fill"></i><a href="#">(03) Comments</a></span>
                                    </div>
                                    <h4 className="title"><Link href="/blog/blog-details">{item.title}</Link></h4>
                                    <p>{item.description}</p>
                                    <Link href="/blog/blog-details" className="read-more style-one">Read More<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                            ))}
                         </div>
                    </div>
                    <div className="col-xl-4 col-lg-10">
                        <div className="sidebar-widget-area">
                            <div className="sidebar-widget sidebar-search-widget mb-30" data-aos="fade-up" data-aos-duration="600">
                                <div className="widget-content">
                                    <form>
                                        <div className="form-group">
                                            <input type="search" className="form_control" placeholder="Enter Keyword" name="search" required />
                                            <button className="search-btn"><i className="bi bi-search"></i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="sidebar-widget sidebar-nav-widget mb-30" data-aos="fade-up" data-aos-duration="800">
                                <h4 className="widget-title">Category</h4>
                                <div className="widget-content">
                                    <ul>
                                        <li><a href="#">City Guide<span><i className="bi bi-arrow-right"></i></span></a></li>
                                        <li><a href="#">Digital Nomad<span><i className="bi bi-arrow-right"></i></span></a></li>
                                        <li><a href="#">New Places<span><i className="bi bi-arrow-right"></i></span></a></li>
                                        <li><a href="#">Popular Hosts<span><i className="bi bi-arrow-right"></i></span></a></li>
                                        <li><a href="#">Room With A View<span><i className="bi bi-arrow-right"></i></span></a></li>
                                        <li><a href="#">Tips & Tricks<span><i className="bi bi-arrow-right"></i></span></a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="sidebar-widget sidebar-post-widget mb-40" data-aos="fade-up" data-aos-duration="1000">
                                <h4 className="widget-title">Recent Posts</h4>
                                <div className="widget-content">
                                    <ul className="recent-post-list">
                                        <li className="post-thumbnail-content mb-4">
                                            <Image src="/assets/images/innerpage/blog/post-thumb1.jpg" alt="img" width={100} height={100}   />
                                            <div className="post-title-date">
                                                <span className="posted-on"><a href="#">August 1, 2025</a></span>
                                                <h5><Link href="/blog/blog-details">AI and Creativity: Can Machines Be Truly</Link></h5>
                                            </div>
                                        </li>
                                        <li className="post-thumbnail-content mb-4">
                                            <Image src="/assets/images/innerpage/blog/post-thumb2.jpg" alt="img" width={100} height={100}   />
                                            <div className="post-title-date">
                                                <span className="posted-on"><a href="#">August 4, 2025</a></span>
                                                <h5><Link href="/blog/blog-details">Building AI Fair Responsible & Systems</Link></h5>
                                            </div>
                                        </li>
                                        <li className="post-thumbnail-content mb-4">
                                            <Image src="/assets/images/innerpage/blog/post-thumb3.jpg" alt="img" width={100} height={100}   />
                                            <div className="post-title-date">
                                                <span className="posted-on"><a href="#">August 7, 2025</a></span>
                                                <h5><Link href="/blog/blog-details">AI-Powered: What’s Next for Future?</Link></h5>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogStandard;