import Image from "next/image";

const HowWork1 = () => {
    return (
            <section className="orbia-process_one p-r z-1 pt-55 pb-120">
                <div className="process-shape"><Image src="/assets/images/home-one/gallery/process-shape.png" alt="img" width={402} height={162}   /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">How IT WORK</span>
                                <h2 className="text-anm">The AI Transformation Journey</h2>
                                <p data-aos="fade-up" data-aos-duration="1200">We begin with a detailed consultation to learn about your business challenges, goals, and opportunities for AI integration</p>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="process-wrapper">
                                <div className="orbia-process-box" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="content">
                                        <Image src="/assets/images/home-one/gallery/process-sh1.png" alt="img" width={49} height={50}   />
                                        <h4 className="title">Discovery & Consultation</h4>
                                    </div>
                                </div>
                                <div className="orbia-proces-arrow-box" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="content">
                                        <Image src="/assets/images/home-one/gallery/process-arrow.png" alt="img" width={144} height={13}   />
                                        <p>Understanding Your Needs</p>
                                    </div>
                                </div>
                                <div className="orbia-process-box-wrap" data-aos="fade-up" data-aos-duration="1400">
                                    <div className="orbia-process-circle-box bg_one">
                                        <div className="content">
                                            <Image src="/assets/images/home-one/gallery/process-sh2.png" alt="img" width={52} height={50}   />
                                            <h4 className="title">Data & <br/> Feasibility</h4>
                                        </div>
                                    </div>
                                    <div className="orbia-process-circle-box bg_two">
                                        <div className="content">
                                            <p>Our experts analyze your data, workflows, and technology stack </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="orbia-proces-arrow-box" data-aos="fade-up" data-aos-duration="1600">
                                    <div className="content">
                                         <Image src="/assets/images/home-one/gallery/process-arrow.png" alt="img" width={144} height={13}   />
                                        <p>Understanding Your Needs</p>
                                    </div>
                                </div>
                                <div className="orbia-process-box" data-aos="fade-up" data-aos-duration="1800">
                                    <div className="content">
                                         <Image src="/assets/images/home-one/gallery/process-sh3.png" alt="img" width={31} height={50}   />                                        
                                        <h4 className="title">Development & Integration</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HowWork1;