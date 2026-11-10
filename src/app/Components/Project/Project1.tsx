"use client"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Project1 = () => {

    const projectData = [
        {
            category: "Deep Vision",
            title: "Autonomous vehicle navigation with advanced Ai Startup Agency",
            img: "/assets/images/home-one/project/project-img1.jpg",
            desc: "We provide customized solutions tailored to the specific needs and goals of their clients.",
        },
        {
            category: "Ai Verse",
            title: "Natural language processing powered by Ai Startup Agency",
            img: "/assets/images/home-one/project/project-img2.jpg",
            desc: "We provide customized solutions tailored to the specific needs and goals of their clients.",
        },
        {
            category: "Deep Vision",
            title: "Predictive stock market analysis using Ai Startup Agency",
            img: "/assets/images/home-one/project/project-img3.jpg",
            desc: "We provide customized solutions tailored to the specific needs and goals of their clients.",
        }
    ];

    const [activeIndex, setActiveIndex] = useState<number | null>(1);
    const toggleIndex = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
            <section className="orbia-project_one pt-115 pb-110 p-r z-1">
                <div className="shape"><Image src="/assets/images/home-one/project/shape.png" alt="img" width={292} height={352}   /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-10 text-center text-xl-start">
                            <div className="section-title mb-4 mb-xl-5" data-aos="fade-down" data-aos-duration="1000">
                                <span className="sub-title">Our Projects & Case Studies</span>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-10">
                            <div className="section-title mb-55 text-center text-xl-start">
                                <h2 className="text-anm">Real-World Applications of AI Technology That Drive Impact</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-end">
                        <div className="col-xl-7 col-lg-12">
                            <div className="project-wrapper" id="projectAccordion">
                            {projectData.map((item, index) => (
                                    <div key={index} className="orbia-project-item style-one" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="project-header" role="button" onClick={() => toggleIndex(index)} >
                                        <div className="project-title">
                                        <span>{item.category}:</span>
                                        <h3 className="title">{item.title}</h3>
                                        </div>
                                    </div>
                                    <div id={`projectItem_${index}`} className={`accordion-collapse collapse ${activeIndex === index ? "show" : ""}`} >
                                        <div className="project-content">
                                        <Image src={item.img} alt="img" width={742} height={299}   />
                                        <p>{item.desc}</p>
                                        <div className="orbia-button">
                                            <Link href="/project/project-details" className="theme-btn gradient-btn">
                                            View Details<i className="bi bi-arrow-right"></i>
                                            </Link>
                                        </div>
                                        </div>
                                    </div>

                                    </div>
                                ))}
                            
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Project1;