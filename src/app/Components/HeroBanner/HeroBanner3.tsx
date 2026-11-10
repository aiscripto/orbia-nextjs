import Image from "next/image";
import Link from "next/link";

const HeroBanner3 = () => {
    const bgImage = '/assets/images/home-three/hero/hero-bg.jpg'; 
    return (
            <section className="orbia-hero_three">
                <div className="hero-wrapper bg_cover" style={{ backgroundImage: `url(${bgImage})`}}>
                    <div className="hero-image-slider-wrap">
                        <div className="hero-image-slider-top">
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img1.jpg" alt="img" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img2.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img3.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img5.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img6.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                        </div>
                        <div className="hero-image-slider-bottom">
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img4.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img3.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img5.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img6.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                            <div className="hero-image">
                                <Image src="/assets/images/home-three/hero/hero-thumb-img2.jpg" alt="hero image" width={300} height={330}   />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row justify-content-center justify-content-xl-start">
                            <div className="col-xl-7 col-lg-10">
                                <div className="hero-content text-center text-xl-start">
                                    <span className="tag-line" data-aos="fade-down" data-aos-duration="2000">From concept To Image </span>
                                    <h1 className="text-anm">AI Boosting Efficacy and Productivity</h1>
                                    <p data-aos="fade-up" data-aos-duration="2200">Web developers and marketers who’ve been delivering digital success for more than a decade. We excel at marketing websites,</p>
                                    <div className="orbia-button-wrap" data-aos="fade-up" data-aos-duration="2400">
                                        <div className="orbia-buitton">
                                            <Link href="/contact" className="theme-btn style-one">Get Started Now<i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                        <div className="orbia-avatar-box">
                                            <div className="avatar-list">
                                                <ul>
                                                    <li><Image src="/assets/images/home-three/gallery/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                                    <li><Image src="/assets/images/home-three/gallery/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                                    <li><Image src="/assets/images/home-three/gallery/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
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
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default HeroBanner3;