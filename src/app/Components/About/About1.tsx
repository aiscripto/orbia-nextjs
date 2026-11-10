import Image from "next/image";
import Link from "next/link";

const About1 = () => {
    return (
    <section className="orbia-about_one pt-90 pb-120">
        <div className="shape"><Image src="/assets/images/home-one/about/about-shape.png" alt="img" width={560} height={220}   /></div>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-5 col-lg-10">
                    <div className="orbia-image-box mb-5 mb-xl-0">
                        <div className="orbia-image image_one" data-aos="fade-down" data-aos-duration="800">
                            <Image src="/assets/images/home-one/about/about-img1.jpg" alt="img" width={410} height={529}   />
                        </div>
                        <div className="orbia-image image_two" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/home-one/about/about-img2.png" alt="img" width={266} height={257}   />
                        </div>
                    </div>
                </div>
                <div className="col-xl-7 col-lg-10">
                    <div className="orbia-content-box">
                        <div className="section-title">
                            <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">About Us</span>
                            <h2 className="text-anm">Transforming Businesses with AI-Powered Innovation</h2>
                        </div>
                        <p className="mb-30" data-aos="fade-up" data-aos-duration="1200">we are pioneers in the fusion of creativity and cutting-edge AI technology. Our mission is  transform the way businesses approach design anddigital strategy by delivering innovative,</p>
                        <ul className="check-list gradient-check mb-30" data-aos="fade-up" data-aos-duration="1400">
                            <li><i className="bi bi-check-circle-fill"></i>Advanced Artificial Intelligence Capabilities for Enhanced Efficiency.</li>
                            <li><i className="bi bi-check-circle-fill"></i>Real-time Data Analysis and Monitoring for Optimized Performance.</li>
                            <li><i className="bi bi-check-circle-fill"></i>Collaborative and Autonomous Robots for Seamless Integration</li>
                        </ul>
                        <div className="orbia-button" data-aos="fade-up" data-aos-duration="1600">
                            <Link href="/project" className="theme-btn gradient-btn">View All Project<i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
};

export default About1;