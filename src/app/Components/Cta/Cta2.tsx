import Image from "next/image";

const Cta2 = () => {
     const bgImage = '/assets/images/home-three/bg/counter-bg.jpg';
    return (
            <section className="orbia-counter_one bg_cover pt-115" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="container">
                    <div className="row align-items-end">
                        <div className="col-lg-6">
                            <div className="section-title text-white mb-70">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Passionate Innovators</span>
                                <h2 className="text-anm">The Intelligent Choice for Business</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="text-box mb-75" data-aos="fade-up" data-aos-duration="1000">
                                <p>We are a cutting-edge AI agency passionate about turning imagination into reality. Our mission is to empower businesses</p>
                            </div>
                        </div>
                    </div>
                    <div className="counter-wrapper" data-aos="fade-up" data-aos-duration="1000">
                        <div className="row">
                            <div className="col-lg-3 col-md-6 item-column">
                                <div className="orbia-counter-item style-three">
                                    <div className="icon-line-wrap">
                                        <div className="line"></div>
                                        <div className="icon">
                                            <Image src="/assets/images/home-three/icon/icon3.png" alt="img" width={36} height={36}   />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span className="circle"></span>
                                        <h2><span className="counter">358</span>k+</h2>
                                        <h5>Project Completed</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item-column">
                                <div className="orbia-counter-item style-three">
                                    <div className="icon-line-wrap">
                                        <div className="line"></div>
                                        <div className="icon">
                                            <Image src="/assets/images/home-three/icon/icon3.png" alt="img" width={36} height={36}   />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span className="circle"></span>
                                        <h2><span className="counter">236</span>k+</h2>
                                        <h5>Project Completed</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item-column">
                                <div className="orbia-counter-item style-three">
                                    <div className="icon-line-wrap">
                                        <div className="line"></div>
                                        <div className="icon">
                                            <Image src="/assets/images/home-three/icon/icon5.png" alt="img" width={36} height={36}   />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span className="circle"></span>
                                        <h2><span className="counter">650</span>k+</h2>
                                        <h5>Project Completed</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 item-column">
                                <div className="orbia-counter-item style-three">
                                    <div className="icon-line-wrap">
                                        <div className="line"></div>
                                        <div className="icon">
                                            <Image src="/assets/images/home-three/icon/icon6.png" alt="img" width={36} height={36}   />
                                        </div>
                                    </div>
                                    <div className="content">
                                        <span className="circle"></span>
                                        <h2><span className="counter">99</span>%</h2>
                                        <h5>Project Completed</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Cta2;