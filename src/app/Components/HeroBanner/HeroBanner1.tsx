import Image from "next/image";
import Link from "next/link";

const HeroBanner1 = () => {
    const bgImage = '/assets/images/home-one/hero/hero-bg.jpg';
    return (
        <section className="orbia-hero_one">
            <div className="hero-wrapper bg_cover" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="hero-shape shape-one"><Image src="/assets/images/home-one/hero/hero-shape2.png" alt="img" width={612} height={612}   /></div>
                <div className="hero-shape shape-two"><Image src="/assets/images/home-one/hero/hero-shape1.png" alt="img" width={520} height={944}   /></div>
                <div className="container-fluid">
                    <div className="row justify-content-center justify-content-xl-start">
                        <div className="col-xl-6 col-lg-10">
                            <div className="hero-content text-center text-xl-start">
                                <span className="tag-line" data-aos="fade-down" data-aos-duration="1500">Smarter Tech for Tomorrow</span>
                                <h1 className="text-anm"><span>AI For Your</span> Business Boosting <span>Growth</span></h1>
                                <p data-aos="fade-up" data-aos-duration="1500">Web developers and marketers who’ve been delivering digital success for more than a decade. We excel at marketing websites,</p>
                                <div className="hero-button-wrap">
                                    <div className="orbia-button" data-aos="fade-up" data-aos-duration="1500">
                                        <Link href="/contact" className="theme-btn gradient-btn">Get A Quote<i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                    <div className="orbia-avatar-box" data-aos="fade-up" data-aos-duration="1700">
                                        <div className="avatar-list">
                                            <ul>
                                                <li><Image src="/assets/images/home-one/hero/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><Image src="/assets/images/home-one/hero/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><Image src="/assets/images/home-one/hero/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
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
                                                <h6>20K+ users</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-10">
                            <div className="hero-image">
                                <Image src="/assets/images/home-one/hero/hero-img1.png" alt="img" width={833} height={837}   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroBanner1;