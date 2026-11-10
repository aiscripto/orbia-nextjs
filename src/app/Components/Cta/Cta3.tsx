import Image from "next/image";

const Cta3 = () => {
    const bgImage = '/assets/images/home-three/bg/cta-bg.jpg';
    return (
            <section className="orbia-cta_two p-r z-1 bg_cover" style={{ backgroundImage: `url(${bgImage})`}}>
                <div className="container">
                    <div className="cta-wrapper" data-aos="fade-up" data-aos-duration="1000">
                        <div className="text-box text-center">
                            <h3>Amazing Innovation! <span>Discover More About</span> Neural Networks</h3>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-8">
                                <div className="orbia-avatar-box">
                                    <div className="avatar-list">
                                        <ul>
                                            <li><Image src="/assets/images/home-two/gallery/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/home-two/gallery/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/home-two/gallery/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><span>10+</span></li>
                                        </ul>
                                        <div className="text">
                                            <h6>Clients Satisfactory Reviews</h6>
                                            <div className="ratings">
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                                <i className="bi bi-star-fill"></i>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8">
                                <div className="content-box">
                                    <p>Bring your videos to life with realistic AI-generated voiceovers in multiple languages and tones. Choose from a wide range of professional voices to match your message</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Cta3;