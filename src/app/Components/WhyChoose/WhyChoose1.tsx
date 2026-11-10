import Image from "next/image";

const WhyChoose1 = () => {
    return (
            <section className="orbia-choose_one">
                <div className="orbia-choose-wrapper p-r z-1 bg_cover" data-src="assets/images/home-one/bg/choose-bg.jpg">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-xl-5">
                                <div className="orbia-image mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                                    <Image src="/assets/images/home-one/gallery/choose-img1.jpg" alt="img" width={691} height={793}   />
                                    <div className="orbia-rating-box">
                                        <div className="content">
                                            <h2>98%</h2>
                                            <p>Highly rated by millions of user!</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7">
                                <div className="orbia-content-box">
                                    <div className="section-title text-white">
                                        <span className="sub-title" data-aos="fade-down" data-aos-duration="1400">WHY CHOOSE US</span>
                                        <h2 className="text-anm">Transform your online presence with AI Technology</h2>
                                    </div>
                                    <p data-aos="fade-up" data-aos-duration="1200">To be a leading AI agency recognized for creating intelligent solutions that dr meaningful change across industries, fostering smarter decision making, and enabling businesses to achieve their full potential to make image creation accessible, efficient, and inspiring for</p>
                                    <div className="experience-iconic-wrapper">
                                        <div className="experience-box" data-aos="fade-up" data-aos-duration="1400">
                                            <div className="content">
                                                <div className="number">
                                                    <h2>25</h2>
                                                    <span className="symbol"><Image src="/assets/images/home-one/gallery/plus.png" alt="img" width={89} height={94}   /></span>
                                                </div>
                                                <h4>Years Of Experience</h4>
                                            </div>
                                        </div>
                                        <div className="iconic-box-list">
                                            <div className="orbia-iconic-left-box style-one mb-30" data-aos="fade-up" data-aos-duration="1600">
                                                <div className="icon">
                                                    <Image src="/assets/images/home-one/icon/icon5.png" alt="img" width={70} height={70}   />
                                                    
                                                </div>
                                                <div className="content">
                                                    <h5>Technology Integration</h5>
                                                    <p>We bring a team of experienced AI specialists, data scientists</p>
                                                </div>
                                            </div>
                                            <div className="orbia-iconic-left-box style-one mb-30" data-aos="fade-up" data-aos-duration="1800">
                                                <div className="icon">
                                                    <Image src="/assets/images/home-one/icon/icon6.png" alt="img" width={70} height={70}   />
                                                </div>
                                                <div className="content">
                                                    <h5>Certified Experts</h5>
                                                    <p>We bring a team of experienced AI specialists, data scientists,</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <p data-aos="fade-up" data-aos-duration="2000">Anyone Can Make You Promise We Can Give You Proof</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default WhyChoose1;