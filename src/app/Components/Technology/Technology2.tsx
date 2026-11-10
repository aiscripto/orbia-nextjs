import Image from "next/image";

const Technology2 = () => {
    return (
            <section className="orbia-choose_two pt-120 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="orbia-image-box mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                                <div className="orbia-image image_one">
                                    <Image src="/assets/images/home-two/gallery/choose-img1.jpg" alt="img" width={270} height={210}   />
                                </div>
                                <div className="orbia-image image_two">
                                    <Image src="/assets/images/home-two/gallery/choose-img2.jpg" alt="img" width={375} height={460}   />
                                </div>
                                <div className="orbia-ratings-box">
                                    <h3>54K</h3>
                                    <h5>Clients Reviews</h5>
                                    <div className="orbia-avatar-box">
                                        <div className="avatar-list">
                                            <ul>
                                                <li><Image src="/assets/images/home-two/gallery/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><Image src="/assets/images/home-two/gallery/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><Image src="/assets/images/home-two/gallery/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><span>10+</span></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-8">
                            <div className="orbia-content-box">
                                <div className="section-title">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">AI Innovation Partner</span>
                                    <h2 className="text-anm">Creating AI Intelligent Solutions from Ideas</h2>
                                </div>
                                <p data-aos="fade-up" data-aos-duration="1000">To be a leading AI agency recognized for creating intelligent solutions that dr meaningful change across industries, fostering smarter decision making,</p>
                                <div className="orbia-progress-item mb-20" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="progress-title">
                                        <h6>Artificial Intelligence <span>90%</span></h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar1"></div>
                                    </div>
                                </div>
                                <div className="orbia-progress-item mb-20" data-aos="fade-up" data-aos-duration="1400">
                                    <div className="progress-title">
                                        <h6>Robotics Management<span>70%</span></h6>
                                    </div>
                                    <div className="progress">
                                        <div className="progress-bar progress-bar2"></div>
                                    </div>
                                </div>
                                <h5 data-aos="fade-up" data-aos-duration="1600">Enjoy 24/7 support and a growing library of resources to help you master AI Business Solutions</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Technology2;