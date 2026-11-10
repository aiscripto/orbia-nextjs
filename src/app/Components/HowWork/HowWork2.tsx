import Image from "next/image";

const HowWork2 = () => {
    return (
            <section className="orbia-work-sec pt-115 pb-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-9">
                            <div className="orbia-content-box">
                                <div className="section-title mb-40">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">How It Works</span>
                                    <h2 className="text-anm">See How Our AI Transforms Ideas Into Stunning Visuals</h2>
                                </div>
                                <div className="content-item-list">
                                    <div className="orbia-content-item style-three mb-30" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="sn-number">
                                            01.
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Share Your Vision</h4>
                                            <p>Describe what you want—whether it’s a product mockup, marketing banner, portrait, or creative concept.</p>
                                        </div>
                                    </div>
                                    <div className="orbia-content-item style-three mb-30" data-aos="fade-up" data-aos-duration="1200">
                                        <div className="sn-number">
                                            02.
                                        </div>
                                        <div className="content">
                                            <h4 className="title">AI-Powered Creation</h4>
                                            <p>Describe what you want—whether it’s a product mockup, marketing banner, portrait, or creative concept.</p>
                                        </div>
                                    </div>
                                    <div className="orbia-content-item style-three mb-30" data-aos="fade-up" data-aos-duration="1400">
                                        <div className="sn-number">
                                            03.
                                        </div>
                                        <div className="content">
                                            <h4 className="title">Refine & Deliver</h4>
                                            <p>Describe what you want—whether it’s a product mockup, marketing banner, portrait, or creative concept.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-9">
                            <div className="orbia-image mb-30" data-aos="fade-up" data-aos-duration="1000">
                                <Image src="/assets/images/home-three/gallery/work-img1.jpg" alt="img" width={530} height={662}   />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HowWork2;