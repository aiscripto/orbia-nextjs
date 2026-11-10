import Image from "next/image";
import Link from "next/link";

const BlogDetails = () => {
    return (
            <section className="orbia-blog-details-sec pt-120 pb-70">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8">
                                <div className="blog-details-wrapper">
                                    <div className="blog-post-main mb-70" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="blog-post-item">
                                            <div className="post-thumbnail">
                                            <Image src="/assets/images/innerpage/blog/blog-single-img1.jpg" alt="img" width={840} height={430}   />                              
                                            </div>
                                            <div className="post-content">
                                                <div className="post-meta">
                                                    <span><i className="bi bi-person-fill"></i> By <a href="#">Admin</a></span>
                                                    <span><i className="bi bi-calendar-check"></i><a href="#">Corporate</a></span>
                                                    <span><i className="bi bi-chat-fill"></i><a href="#">Comments (03)</a></span>
                                                </div>
                                                <h4 className="title">The Potential Benefits of AI Solutions for Small Businesses</h4>
                                                <p>Artificial Intelligence (AI) development focuses on creating intelligent systems that can mimic human cognitive functions such as learning, reasoning, problem-solving, and decision-making. AI development involves building algorithms, models, and applications that allow machines to perform tasks that typically require human intelligence. From simple automation to advanced machine learning and neural networks, AI is revolutionizing industries across the globe. AI development refers to the process of designing, building, and deploying AI-powered solutions to automate tasks, analyze large amounts of data, and improve business processes.
            The core goal of AI development is to create smart systems capable of making decisions, learning from experience, and performing tasks with minimal human intervention.
            </p>
                                                <p>AI Machine Learning (ML) is a core branch of Artificial Intelligence (AI) that enables computers and systems to automatically learn from data, identify patterns, and make decisions without being explicitly programmed. It allows machines to improve their performance over time by learning from experience, much like how humans learn through practice and feedback.Machine Learning has become a transformative technology across industries, empowering businesses to automate processes, predict outcomes, and solve complex problems with data-driven insights.</p>
                                                <blockquote>
                                                    <div className="content">
                                                        <p>AI solutions require ongoing monitoring to maintain accuracy and efficiency. We provide continuous support, updates, and performance enhancements to ensure your AI system remains effective as your business evolves.</p>
                                                        <h5>Martin & Michiel</h5>
                                                    </div>
                                                </blockquote>
                                                <p>Our team designs a tailor-made AI solution based on your specific requirements. We develop machine learning models, build algorithms, and create prototypes to ensure the solution aligns with your business objectives. We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas where AI can bring the most impact.</p>
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <div className="orbia-image">
                                                            <Image src="/assets/images/innerpage/blog/blog-single-img2.jpg" alt="img" width={405} height={283}   />
                                                        </div>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="orbia-image">
                                                            <Image src="/assets/images/innerpage/blog/blog-single-img3.jpg" alt="img" width={405} height={283}   />                      
                                                        </div>
                                                    </div>
                                                </div>
                                                <p>Our team designs a tailor-made AI solution based on your specific requirements. We develop machine learning models, build algorithms, and create prototypes to ensure the solution aligns with your business objectives. We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas where AI can bring the most impact.</p>
                                            </div>
                                        </div>
                                        <div className="entry-footer mt-30">
                                            <div className="tag-links">
                                                <span>Tag:</span>
                                                <a href="#">Apartment</a>
                                                <a href="#">Buyer</a>
                                                <a href="#">Luxury</a>
                                            </div>
                                            <div className="social-share">
                                                <span>Share:</span>
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                                <a href="#"><i className="bi bi-pinterest"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="comments-area mb-80" data-aos="fade-up" data-aos-duration="1200">
                                        <h3 className="comments-title">Popular Comments</h3>
                                        <ul className="comments-list">
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <Image src="/assets/images/innerpage/blog/comment-img1.jpg" alt="img" width={85} height={85}   />                          
                                                    </div>
                                                    <div className="comment-wrap">
                                                        <div className="comment-author-content">
                                                            <span className="author-name">Mariya Dsuza<span className="date">16 Aug, 2025  06:30pm</span></span>
                                                            <p>Provide regular updates to donors and supporters through newsletters, social media, & the charity website, detailing how funds are being used and the impact achieved.</p>
                                                            <a href="#" className="reply"><i className="bi bi-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                                <ul className="comment-reply">
                                                    <li className="comment">
                                                        <div className="comment-avatar">
                                                        <Image src="/assets/images/innerpage/blog/comment-img2.jpg" alt="img" width={85} height={85}   />                          
                                                        </div>
                                                        <div className="comment-wrap">
                                                            <div className="comment-author-content">
                                                                <span className="author-name">Michel Phelops<span className="date">16 Aug, 2025  08:30pm</span></span>
                                                                <p>Use metrics and feedback to assess the success of projects and programs, and share these results with the community to demonstrate accountability and build trust.</p>
                                                                <a href="#" className="reply"><i className="bi bi-reply"></i>Reply</a>
                                                            </div>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <div className="comment">
                                                    <div className="comment-avatar">
                                                        <Image src="/assets/images/innerpage/blog/comment-img2.jpg" alt="img" width={85} height={85}   />                          
                                                    </div>
                                                    <div className="comment-wrap">
                                                        <div className="comment-author-content">
                                                            <span className="author-name">Michel Phelops<span className="date">16 Aug, 2025  10:30pm</span></span>
                                                            <p>Use metrics and feedback to assess the success of projects and programs, and share these results with the community to demonstrate accountability and build trust.</p>
                                                            <a href="#" className="reply"><i className="bi bi-reply"></i>Reply</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="comment-wrapper mb-50" data-aos="fade-up" data-aos-duration="1400">
                                        <h3 className="mb-30">Leave a Reply</h3>
                                        <form autoComplete="off" className="comment-form">
                                            <div className="row">
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form_control" placeholder="Name" name="name" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form_control" placeholder="Email" name="email" required />
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea className="form_control" placeholder="Message" name="message" rows={5} cols={8}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <button className="theme-btn gradient-btn">Submit Comment</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4">
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
                                    <div className="sidebar-widget sidebar-tag-widget mb-30" data-aos="fade-up" data-aos-duration="1200">
                                        <h4 className="widget-title">Popular Tags</h4>
                                        <div className="widget-content">
                                            <a href="#">Automation</a>
                                            <a href="#">Branding</a>
                                            <a href="#">Digital</a>
                                            <a href="#">Networks</a>
                                            <a href="#">Supply</a>
                                            <a href="#">Technology</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default BlogDetails;