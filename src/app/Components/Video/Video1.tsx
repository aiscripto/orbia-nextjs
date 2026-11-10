"use client"
import { useState } from "react";
import VideoModal from "../VideoModal/VideoModal";

const Video1 = () => {

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

     const bgImage = '/assets/images/home-two/bg/intro-bg.jpg';
    return (
            <section className="orbia-intro_two bg_cover pt-165 pb-150 p-r z-1" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8">
                            <div className="orbia-content-box text-center text-white">
                                <div className="play-button text-center mb-80">
                                    <a onClick={handelClick} className="video-popup"><i className="bi bi-play-fill"></i></a>
                                </div>
                                <h2 className="text-anm">Mind-Blowing Innovation! Explore Neural Networks</h2>
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

export default Video1;