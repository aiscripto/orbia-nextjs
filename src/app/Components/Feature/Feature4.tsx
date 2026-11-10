import Image from "next/image";

const Feature4 = () => {
    return (
            <section className="orbia-features_two pt-120 pb-80">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-3 col-lg-8 d-none d-xl-block">
                            <div className="orbia-image-box">
                                <div className="orbia-image" data-aos="fade-up" data-aos-duration="1000">
                                    <Image src="/assets/images/innerpage/feature/feature-img1.jpg" alt="img" width={274} height={378}   />
                                </div>
                                <div className="orbia-avatar-box mt-60" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="avatar-list">
                                        <ul>
                                            <li><Image src="/assets/images/home-one/hero/avatar-img1.jpg" alt="img" width={44} height={44}   /></li>
                                            <li><Image src="/assets/images/home-one/hero/avatar-img2.jpg" alt="img" width={44} height={44}   /></li>
                                            <li><Image src="/assets/images/home-one/hero/avatar-img3.jpg" alt="img" width={44} height={44}   /></li>
                                            <li><span>10+</span></li>
                                        </ul>
                                        <div className="text">
                                            <div className="ratings">
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                                    <i className="bi bi-star-fill"></i>
                                            </div>
                                            <p>20K+ users</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-9 col-lg-12">
                            <div className="orbia-content-box">
                                <div className="section-title mb-60">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Our feature</span>
                                    <h2 className="text-anm">The Smarter Choice for AI-Powered Creativity and Visual Excellence</h2>
                                </div>
                                <div className="row">
                                    <div className="col-lg-5">
                                        <div className="orbia-image mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
                                            <Image src="/assets/images/innerpage/feature/feature-img2.jpg" alt="img" width={355} height={405}   />
                                        </div>
                                    </div>
                                    <div className="col-lg-7">
                                        <div className="orbia-content-wrap">
                                            <div className="orbia-content-item style-one mb-20" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="content">
                                                    <h3 className="title">Advanced AI Technology</h3>
                                                    <p>We use the latest AI models to generate high-quality visuals with precision and creativity.</p>
                                                </div>
                                            </div>
                                            <div className="orbia-content-item style-one mb-20" data-aos="fade-up" data-aos-duration="1200">
                                                <div className="content">
                                                    <h3 className="title">Unlimited Creativity</h3>
                                                    <p>We use the latest AI models to generate high-quality visuals with precision and creativity.</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="orbia-counter-item style-one mb-40" data-aos="fade-up" data-aos-duration="1300">
                                                        <div className="content">
                                                            <h3 className="title">70+</h3>
                                                            <h5>Support for Global Language</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="orbia-counter-item style-one mb-40" data-aos="fade-up" data-aos-duration="1400">
                                                        <div className="content">
                                                            <h3 className="title">3X</h3>
                                                            <h5>Faster Content Production</h5>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Feature4;