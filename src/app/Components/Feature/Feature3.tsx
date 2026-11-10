import Image from "next/image";

const Feature3 = () => {
    return (
            <section className="orbia-approach-sec gray-bg p-r z-1">
                <div className="container-fluid">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-10">
                            <div className="orbia-image mb-30" data-aos="fade-up" data-aos-duration="1000">
                                <Image src="/assets/images/home-three/gallery/approach-img.png" alt="img" width={759} height={635}   />
                                <div className="experience-box">
                                    <div className="content">
                                        <h2>25</h2>
                                        <h5>Year Of Working <br/> Experience</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-10">
                            <div className="orbia-content-box">
                                <div className="section-title">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Unleashing the Power of AI in Business</span>
                                    <h2 className="text-anm">AI-Powered Voice Generator For Realistic Speech</h2>
                                </div>
                                <p data-aos="fade-up" data-aos-duration="1200">Bring your videos to life with realistic AI-generated voiceovers in multiple languages and tones. Choose from a wide range of professional voices to match your message—no need for recording studios or microphones.</p>
                                <h4 data-aos="fade-up" data-aos-duration="1400">AI-Driven Innovation Competitive Advantage</h4>
                                <div className="orbia-counter-wrap">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="orbia-counter-box mb-30" data-aos="fade-up" data-aos-duration="1500">
                                                <div className="content">
                                                    <h3>200+</h3>
                                                    <p>AI Agency Technology Project Complete</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="orbia-counter-box mb-30" data-aos="fade-up" data-aos-duration="1600">
                                                <div className="content">
                                                    <h3>98%</h3>
                                                    <p>Client Satisfaction Rate in Our Agency</p>
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

export default Feature3;