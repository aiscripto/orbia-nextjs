import Image from "next/image";
import Link from "next/link";

const ServiceDetails = () => {
    const bgImage = '/assets/images/innerpage/blog/cta-widget-bg.jpg';
    return (
            <section className="orbia-service-details-sec pt-120 pb-85">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-8">
                            <div className="service-details-wrapper">
                                <div className="service-main-item">
                                    <div className="thumbnail mb-30">
                                        <Image src="/assets/images/innerpage/service/sevice-single-img1.jpg" alt="img" width={840} height={430}   />                                        
                                    </div>
                                    <div className="content">
                                        <h3>Using Personalized Technology to Encourage Innovation.</h3>
                                        <p>Our specialty is developing custom technological solutions that are suited to your companys particular requirements.  We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development and IoT integration.  Our team of professionals guarantees that every solution is scalable, safe, and in line with your objectives, whether you are wanting to modernize legacy systems, automate workflows, or create intelligent apps.  by fusing state-of-the-art technology.
            </p>
                                        <p>With a thorough understanding of your company, we provide strong tools that not only address your problems but also enable you to maintain your competitive edge in the ever changing digital market.  make sure that our technology not only addresses current issues but also sets up your company for long-term success in the rapidly changing digital landscape.</p>
                                        <div className="content-box">
                                            <h3>Key Features of AI Technology</h3>
                                            <p>Our specialty is developing custom technological solutions that are suited to your companys part requirements.  We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion,</p>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <ul className="check-list gradient-check mb-40">
                                                        <li><i className="bi bi-check-circle-fill"></i>Consultation and Discovery</li>
                                                        <li><i className="bi bi-check-circle-fill"></i>Discover our expertise</li>
                                                        <li><i className="bi bi-check-circle-fill"></i>Troubleshooting</li>
                                                    </ul>
                                                </div>
                                                <div className="col-md-6">
                                                    <ul className="check-list gradient-check mb-40">
                                                        <li><i className="bi bi-check-circle-fill"></i>Meet or team</li>
                                                        <li><i className="bi bi-check-circle-fill"></i>Meet our team and learn</li>
                                                        <li><i className="bi bi-check-circle-fill"></i>Journey and commitment to explanined</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="orbia-image mb-40" data-aos="fade-up" data-aos-duration="800">
                                                    <Image src="/assets/images/innerpage/service/sevice-single-img2.jpg" alt="img" width={405} height={283}   />                                                   
                                                </div>  
                                            </div>
                                            <div className="col-md-6">
                                                <div className="orbia-image mb-40" data-aos="fade-up" data-aos-duration="1000">
                                                    <Image src="/assets/images/innerpage/service/sevice-single-img3.jpg" alt="img" width={405} height={283}   />                              
                                                </div>  
                                            </div>
                                        </div>
                                        <p data-aos="fade-up" data-aos-duration="1000">Our specialty is developing custom technological solutions that are suited to your companys particular requirements.  We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development and IoT integration. </p>
                                        <div className="content-box mb-30" data-aos="fade-up" data-aos-duration="1000">
                                            <h3>Benefits of AI Technology</h3>
                                            <p>Our specialty is developing custom technological solutions that are suited to your companys particular requirements.  We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development and IoT integration. </p>
                                            <div className="row">
                                                <div className="col-lg-4">
                                                    <div className="orbia-content-item style-two mb-40">
                                                        <div className="content">
                                                            <h5>Improved Accuracy</h5>
                                                            <p>These companies provide services for a digital agency</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="orbia-content-item style-two mb-40">
                                                        <div className="content">
                                                            <h5>Efficiency & Automation</h5>
                                                            <p>These companies provide services for a digital agency</p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="orbia-content-item style-two mb-40">
                                                        <div className="content">
                                                            <h5>24/7 Online Support</h5>
                                                            <p>We provide service for Digital Agency Online Support.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="content-box" data-aos="fade-up" data-aos-duration="1000">
                                            <h3>AI Technology</h3>
                                            <p>Our specialty is developing custom technological solutions that are suited to your companys particular requirements.  We offer cutting-edge solutions that optimize workflows, boost efficiency, and spur expansion, ranging from cloud computing and AI-powered tools to custom software development and IoT integration. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div className="sidebar-widget-area">
                                <div className="sidebar-widget sidebar-search-widget mb-30" data-aos="fade-up" data-aos-duration="800">
                                    <div className="widget-content">
                                        <form>
                                            <div className="form-group">
                                                <input type="search" className="form_control" placeholder="Enter Keyword" name="search" required />
                                                <button className="search-btn"><i className="bi bi-search"></i></button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget sidebar-nav-widget mb-30" data-aos="fade-up" data-aos-duration="1000">
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
                                <div className="sidebar-widget sidebar-cta-widget bg_cover" style={{ backgroundImage: `url(${bgImage})`}} data-aos="fade-up" data-aos-duration="1200">
                                    <div className="widget-content">
                                        <h3>Transform with AI</h3>
                                        <p>Our specialty is developing AI technological solutions that are suited to your companys part requirements.  We offer cutting</p>
                                        <Link href="/contact" className="theme-btn gradient-btn">Get Started Now<i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default ServiceDetails;