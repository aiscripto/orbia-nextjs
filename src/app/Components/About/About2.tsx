import Image from "next/image";
import Link from "next/link";

const About2 = () => {
    return (
        <section className="orbia-about_two pb-115 p-r z-1">
            <div className="container">
                <div className="shape"><Image src="/assets/images/home-two/about/shape1.png" alt="img" width={379} height={437}   /></div>
                <div className="row justify-content-center">
                    <div className="col-xl-5 col-lg-10">
                        <div className="orbia-image mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/home-two/about/about-img1.png" alt="img" width={523} height={552}   />
                        </div>
                    </div>
                    <div className="col-xl-7 col-lg-10">
                        <div className="orbia-content-box">
                            <div className="section-title">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Our experience</span>
                                <h2 className="text-anm">Welcome to the new age of AI-driven Orbia networks</h2>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1200">Our AI agency is a cutting edge technology partner that specializes in delivering artificial intelligence solutions to help businesses streamline operations, improve decision making, enhance customer experiences. By leveraging the power of AI, </p>
                            <div className="row">
                                <div className="col-md-6">
                                    <ul className="check-list style-one mb-35" data-aos="fade-up" data-aos-duration="1400">
                                        <li><i className="bi bi-check-circle-fill"></i>Business Processes Automation</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Personalized Customer Experiences</li>
                                    </ul>
                                </div>
                                <div className="col-md-6">
                                    <ul className="check-list style-one mb-35" data-aos="fade-up" data-aos-duration="1600">
                                        <li><i className="bi bi-check-circle-fill"></i>Improved Decision-Making</li>
                                        <li><i className="bi bi-check-circle-fill"></i>Technology Integration</li>
                                    </ul>
                                </div>
                            </div>
                            <h5 data-aos="fade-up" data-aos-duration="1800">Web developers and marketers who’ve been delivering digital success for more than a decade.</h5>
                            <div className="orbia-button" data-aos="fade-up" data-aos-duration="2000">
                                <Link href="/contact" className="theme-btn style-one">Explore More<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About2;