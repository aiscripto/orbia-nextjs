import Image from "next/image";
import Link from "next/link";

const About3 = () => {
    return (
        <div>
            <section className="orbia-about_three pt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="orbia-text-box text-center" data-aos="fade-up" data-aos-duration="1000">
                                <h2>Discover the Power of All Image <span><Image src="/assets/images/home-three/about/about-img1.jpg" alt="img" className="image_one" width={125} height={37}   /></span> Creation and
                                    <span className="fill-text">
                                            See How <span><Image src="/assets/images/home-three/about/about-img2.png" alt="img" width={125} height={37}   /></span> Imagination and Technology Blend
                                    </span> to Create Enthralling Visual Boundaries <span><Image src="/assets/images/home-three/about/about-img3.jpg" className="image_one" alt="img" width={90} height={37}   /></span>
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>  
            <section className="orbia-we_one pb-120 pt-120">
                <div className="shape"><Image src="/assets/images/home-three/gallery/we-shape1.png" className="animate-float-bob-y" alt="img" width={224} height={272}   /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="orbia-image-box mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                                <div className="orbia-image">
                                    <Image src="/assets/images/home-three/gallery/we-img1.jpg" alt="img" width={567} height={592}   />
                                </div>
                                <div className="orbia-client-box">
                                    <div className="thumb">
                                        <Image src="/assets/images/home-three/gallery/we-img2.jpg" alt="img" width={115} height={115}   />
                                    </div>
                                    <div className="content">
                                        <h3>435+</h3>
                                        <h5>Creative Specialist <br/> in our team</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8 col-md-10">
                            <div className="orbia-content-box">
                                <div className="section-title">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Who WE ARE</span>
                                    <h2 className="text-anm">Redefining Creativity with the Power of AI.</h2>
                                </div>
                                <p data-aos="fade-up" data-aos-duration="1200">We are a cutting-edge AI agency passionate about turning imagination into reality. Our mission is to empower businesses, creators, and innovators </p>
                                <div className="iconic-box-wrapper">
                                    <div className="row">
                                        <div className="col-md-6 item-column" data-aos="fade-up" data-aos-duration="1400">
                                            <div className="orbia-iconic-left-box style-two mb-40">
                                                <div className="icon">
                                                    <Image src="/assets/images/home-three/icon/icon1.png" alt="img" width={34} height={36}   />
                                                </div>
                                                <div className="content">
                                                    <h5>AI-Powered <br/> Innovation</h5>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 item-column" data-aos="fade-up" data-aos-duration="1600">
                                            <div className="orbia-iconic-left-box style-two mb-40">
                                                <div className="icon">
                                                    <Image src="/assets/images/home-three/icon/icon2.png" alt="img" width={37} height={36}   />
                                                </div>
                                                <div className="content">
                                                    <h5>Limitless <br/> Styles</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="check-list style-one mb-40" data-aos="fade-up" data-aos-duration="1800">
                                    <li><i className="bi bi-check-circle-fill"></i>Harnessing advanced models for unmatched creativity.</li>
                                    <li><i className="bi bi-check-circle-fill"></i>From ultra-realistic to artistic, fantasy, and futuristic.</li>
                                    <li><i className="bi bi-check-circle-fill"></i>Generate visuals in seconds, for individuals or enterprises.</li>
                                </ul>
                                <div className="orbia-button" data-aos="fade-up" data-aos-duration="2000">
                                    <Link href="/about" className="theme-btn style-one">Get Started Now <i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>                          
        </div>
    );
};

export default About3;