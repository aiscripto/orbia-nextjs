import Image from "next/image";
import Link from "next/link";

const About5 = () => {
    return (
            <section className="orbia-we_two pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-10">
                            <div className="orbia-content-box mb-5 mb-xl-0">
                                <div className="section-title">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Who We are</span>
                                    <h2 className="text-anm">Redefining Creativity with the Power of AI.</h2>
                                </div>
                                <p data-aos="fade-up" data-aos-duration="1000">We are a cutting-edge AI agency passionate about turning imagination into reality. Our mission is to empower businesses, creators, and innovators </p>
                                <div className="iconic-box-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 item-column">
                                            <div className="orbia-iconic-left-box style-two mb-40" data-aos="fade-up" data-aos-duration="1200">
                                                <div className="icon">
                                                    <Image src="/assets/images/innerpage/icon/icon3.png" alt="img" width={34} height={36}   />
                                                </div>
                                                <div className="content">
                                                    <h5>AI-Powered <br/> Innovation</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 item-column">
                                            <div className="orbia-iconic-left-box style-two mb-40" data-aos="fade-up" data-aos-duration="1400">
                                                <div className="icon">
                                                    <Image src="/assets/images/innerpage/icon/icon4.png" alt="img" width={37} height={36}   />
                                                </div>
                                                <div className="content">
                                                    <h5>Limitless <br/> Styles</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="check-list gradient-check mb-30" data-aos="fade-up" data-aos-duration="1600">
                                    <li><i className="bi bi-check-circle-fill"></i>Harnessing advanced models for unmatched creativity.</li>
                                    <li><i className="bi bi-check-circle-fill"></i>From ultra-realistic to artistic, fantasy, and futuristic.</li>
                                    <li><i className="bi bi-check-circle-fill"></i>Generate visuals in seconds, for individuals or enterprises.</li>
                                </ul>
                                <div className="orbia-button">
                                    <Link href="/about" className="theme-btn gradient-btn">Get Started Now <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10">
                            <div className="orbia-image" data-aos="fade-up" data-aos-duration="1000">
                                <Image src="/assets/images/innerpage/gallery/who-we-img.jpg" alt="img" width={567} height={592}   />
                            </div>
                        </div>
                    </div>
                </div>
                </section>
    );
};

export default About5;