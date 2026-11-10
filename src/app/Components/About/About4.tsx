import Image from "next/image";
import Link from "next/link";

const About4 = () => {
    return (
            <section className="orbia-about_four pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-9">
                            <div className="orbia-image-box mb-5 mb-xl-0">
                                <div className="orbia-image image_one">
                                    <Image src="/assets/images/innerpage/about/about-img1.jpg" alt="img" width={400} height={427}   />
                                </div>
                                <div className="orbia-image image_two">
                                    <Image src="/assets/images/innerpage/about/about-img2.png" alt="img" width={322} height={307}   />
                                </div>
                                <div className="shape shape-one"><Image src="/assets/images/innerpage/about/shape1.png" alt="img" width={105} height={94}   /></div>
                                <div className="shape shape-two"><Image src="/assets/images/innerpage/about/shape2.png" alt="img" width={34} height={279}   /></div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-9">
                            <div className="orbia-content-box">
                                <div className="section-title">
                                    <span className="sub-title" data-aos="fade-up" data-aos-duration="1000">About Us</span>
                                    <h2 className="text-anm">Using AI Solutions to Lead the Future of Business </h2>
                                </div>
                                <p  data-aos="fade-up" data-aos-duration="1200">We begin by understanding your business goals, challenges, and opportunities for AI integration. Our experts assess your current systems and identify areas where AI can bring the most impact. Our team designs a tailor-made AI solution based on your specific requirements. We develop machine learning models, build algorithms, and create prototypes with your business objectives.</p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="orbia-iconic-box style-three mb-35" data-aos="fade-up" data-aos-duration="1200">
                                            <div className="icon">
                                                <Image src="/assets/images/innerpage/icon/icon1.png" alt="img" width={61} height={60}   />
                                            </div>
                                            <div className="content">
                                                <h5>100% Customers Satisfaction</h5>
                                                <p>We bring a team of experienced AI specialists, data scientists, industry experts committed to pushing boundaries.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="orbia-iconic-box style-three mb-35" data-aos="fade-up" data-aos-duration="1400">
                                            <div className="icon">
                                                <Image src="/assets/images/innerpage/icon/icon2.png" alt="img" width={49} height={60}   />                                                
                                            </div>
                                            <div className="content">
                                                <h5>Quality Assurance Guarantee</h5>
                                                <p>We bring a team of experienced AI specialists, data scientists, industry experts committed to pushing boundaries.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="orbia-button" data-aos="fade-up" data-aos-duration="1600">
                                    <Link href="/about" className="theme-btn gradient-btn">Discover More<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default About4;