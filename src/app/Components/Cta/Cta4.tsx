"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";
import Link from "next/link";

const Cta4 = () => {

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

     const bgImage = '/assets/images/innerpage/bg/cta-bg.jpg';

    return (
        <section className="orbia-cta_three bg_cover" style={{ backgroundImage: `url(${bgImage})`}} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="orbia-content-box text-center text-white">
                            <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Solutions</span>
                            <h2 className="text-anm">Enhance Customer Service with Intelligent Chatbots for Stress-Free Assistance</h2>
                            <div className="orbia-button" data-aos="fade-up" data-aos-duration="1000">
                                <Link href="/contact" className="theme-btn gradient-btn">Explore More<i className="bi bi-arrow-right"></i></Link>
                                <a onClick={handelClick} className="theme-btn style-one video-popup">Watch Video<i className="bi bi-arrow-right"></i></a>
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

export default Cta4;