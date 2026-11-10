"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";
import Image from "next/image";

const HeroBanner2 = () => {

    const [iframeSrc, setIframeSrc] = useState('about:blank');
    const [toggle, setToggle] = useState(false);
  
    const handelClick = () => {
      setIframeSrc("https://www.youtube.com/embed/H7jpB4WnAH8?si=8YPPwrzyUu1Y0KDT");
      setToggle(!toggle);
    };
    const handelClose = () => {
      setIframeSrc('about:blank');
      setToggle(!toggle);
    };   

    const bgImage = '/assets/images/home-two/hero/hero-bg.jpg';   
    return (
        <section className="orbia-hero_two">
            <div className="hero-wrapper bg_cover" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-9">
                            <div className="hero-content">
                                <h1 className="text-anm">Empowering <span className="text">Businesses with </span> <br/> the Future of AI <span className="hero-thumb"><Image src="/assets/images/home-two/hero/hero-thumb.jpg" alt="img" width={205} height={58}   /></span></h1>
                                <p data-aos="fade-up" data-aos-duration="2000">Web developers and marketers who’ve been delivering digital success for more than a decade. We excel at marketing websites,</p>
                                <div className="orbia-button-wrapper" data-aos="fade-up" data-aos-duration="2200">
                                    <div className="orbia-button">
                                        <Link href="/contact" className="theme-btn style-one">Get A Quote<i className="bi bi-arrow-right"></i></Link>
                                    </div>
                                    <div className="orbia-avatar-box">
                                        <div className="avatar-list">
                                            <ul>
                                                <li><Image src="/assets/images/home-two/gallery/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><Image src="/assets/images/home-two/gallery/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                                <li><Image src="/assets/images/home-two/gallery/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
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
                        <div className="col-xl-3">
                            <div className="text-box" data-aos="fade-up" data-aos-duration="2000">
                                <h3>Automated Language Understanding</h3>
                                <div className="counter-box">
                                    <h2>285+</h2>
                                    <span>Active Visitor Per Day</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="hero-image-wrapper" data-aos="fade-up" data-aos-duration="2400">
                                <div className="hero-image">
                                    <Image src="/assets/images/home-two/hero/hero-img1.jpg" alt="img" width={1609} height={733}   />
                                </div>
                                <div className="play-button">
                                    <a onClick={handelClick} className="video-popup"><Image src="/assets/images/home-two/hero/play-bg.jpg" alt="img" width={140} height={140}   /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <VideoModal
            isTrue={toggle}
            iframeSrc={iframeSrc}
            handelClose={handelClose}        
        ></VideoModal>            
        </section>
    );
};

export default HeroBanner2;