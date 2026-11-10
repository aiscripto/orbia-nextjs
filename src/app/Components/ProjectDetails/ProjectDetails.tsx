import Image from "next/image";
import Link from "next/link";

const ProjectDetails = () => {
    const bgImage = '/assets/images/innerpage/blog/cta-widget-bg.jpg';
    return (
        <section className="orbia-project-details-sec pt-120 pb-120">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-8 col-lg-10">
                        <div className="project-details-wrapper">
                            <div className="project-main-item mb-30">
                                <div className="project-thumbnail mb-20">
                                    <Image src="/assets/images/innerpage/project/project-single1.jpg" alt="img" width={840} height={430}   />
                                </div>
                                <div className="project-content">
                                    <h3 className="title">Using Personalized Technology to Encourage Innovation.</h3>
                                    <p>we are at the forefront of innovation, redefining how intelligence shapes the technology of tomorrow. Our focus is on building solutions that integrate artificial intelligence, machine learning, and next-generation technologies to transform industries and create smarter, more efficient systems. From predictive analytics and intelligent automation to adaptive algorithms and data-driven decision-making, our solutions empower businesses to stay ahead in a rapidly evolving world.With a commitment to pushing the boundaries of what’s possible.
        </p>
                                    <p>With a commitment to pushing the boundaries of what’s possible, we aim to create technology that doesn’t just solve problems but anticipates needs, adapts to changes, and drives sustainable growth. Whether its building smart applications, advancing IoT ecosystems, or leveraging AI for business insights, we deliver solutions that are intelligent, scalable, and future-ready. Join us in shaping the future.</p>
                                    <h3>Project Overview</h3>
                                    <p>we are at the forefront of innovation, redefining how intelligence shapes the technology of tomorrow. Our focus is on building solutions that integrate artificial intelligence, machine learning, and next-generation technologies to transform industries and create smarter, more efficient systems.</p>
                                    <div className="row">
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="check-list gradient-check mb-30">
                                                <li><i className="bi bi-check-circle-fill"></i>Analytics To Explained</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Scalability And Adaptability</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="check-list gradient-check mb-30">
                                                <li><i className="bi bi-check-circle-fill"></i>Capacity Expansion</li>
                                                <li><i className="bi bi-check-circle-fill"></i>AI-Driven Automation</li>
                                            </ul>
                                        </div>
                                        <div className="col-lg-4 col-md-6">
                                            <ul className="check-list gradient-check mb-30">
                                                <li><i className="bi bi-check-circle-fill"></i>Key Deliverables</li>
                                                <li><i className="bi bi-check-circle-fill"></i>Custom Technology Solutions</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <h3>Get the Result</h3>
                                    <p>we are at the forefront of innovation, redefining how intelligence shapes the technology of tomorrow. Our focus is on building solutions that integrate artificial intelligence, machine learning, and next-generation </p>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="orbia-image mb-30" data-aos="fade-up" data-aos-duration="800">
                                                <Image src="/assets/images/innerpage/project/project-single2.jpg" alt="img" width={405} height={283}   />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="orbia-image mb-30" data-aos="fade-up" data-aos-duration="1000">
                                                <Image src="/assets/images/innerpage/project/project-single3.jpg" alt="img" width={405} height={283}   />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="project-navigation-wrapper" data-aos="fade-up" data-aos-duration="1000">
                                <div className="row align-items-center">
                                    <div className="col-md-5">
                                        <Link href="/project/project-details" className="project-navigation-item">
                                            <div className="thumbnail">
                                                <Image src="/assets/images/innerpage/project/prev.jpg" alt="img" width={60} height={60}   />
                                            </div>
                                            <div className="content">
                                                <h4>Preview</h4>
                                                <p>Analsytic Solutions</p>
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="col-md-2 d-none d-md-block">
                                        <div className="project-navigation-icon text-center">
                                            <i className="bi bi-grid"></i>
                                        </div>
                                    </div>
                                    <div className="col-md-5">
                                        <Link href="/project/project-details" className="project-navigation-item item-rtl">
                                            <div className="thumbnail">
                                                <Image src="/assets/images/innerpage/project/next.jpg" alt="img" width={60} height={60}   />
                                            </div>
                                            <div className="content">
                                                <h4>Next</h4>
                                                <p>Software Development</p>
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-10">
                        <div className="sidebar-widget-area">
                            <div className="sidebar-widget sidebar-project-info-widget mb-30" data-aos="fade-up" data-aos-duration="800">
                                <h4 className="widget-title">Project Info</h4>
                                <div className="widget-content">
                                    <div className="project-info-item mb-30">
                                        <div className="icon">
                                            <i className="bi bi-person"></i>
                                        </div>
                                        <div className="info">
                                            <span>Clients:</span>
                                            <h5>Michel Miller</h5>
                                        </div>
                                    </div>
                                    <div className="project-info-item mb-30">
                                        <div className="icon">
                                            <i className="bi bi-folder2-open"></i>
                                        </div>
                                        <div className="info">
                                            <span>Category:</span>
                                            <h5>Digital Marketing</h5>
                                        </div>
                                    </div>
                                    <div className="project-info-item mb-30">
                                        <div className="icon">
                                            <i className="bi bi-calendar-check"></i>
                                        </div>
                                        <div className="info">
                                            <span>Date:</span>
                                            <h5>21 Jun, 2024</h5>
                                        </div>
                                    </div>
                                    <div className="project-info-item">
                                        <div className="icon">
                                            <i className="bi bi-geo-alt"></i>
                                        </div>
                                        <div className="info">
                                            <span>Address:</span>
                                            <h5>42 Hangston, USA</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sidebar-widget sidebar-cta-widget bg_cover" style={{ backgroundImage: `url(${bgImage})`}} data-aos="fade-up" data-aos-duration="1000">
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

export default ProjectDetails;