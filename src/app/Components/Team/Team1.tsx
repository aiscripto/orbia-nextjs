"use client"
import Image from "next/image";
import { useState } from "react";

const Team1 = () => {

    const teamData = [
    {
        name: "Guy Hawkins",
        position: "President of Sales",
        thumb: "/assets/images/home-one/team/team-thumb1.jpg",
        image: "/assets/images/home-one/team/team-img1.jpg",
        description:
        "We value curiosity, collaboration, and a can do attitude. Oh, and coffee lots of coffee. Come join a team celebrates your unique skills and helps you",
        skills: [
        { name: "Artificial Intelligence", value: 90 },
        { name: "Robotics Management", value: 70 },
        ],
        experience: "10+",
    },
    {
        name: "Brooklyn Simmons",
        position: "President of Sales",
        thumb: "/assets/images/home-one/team/team-thumb2.jpg",
        image: "/assets/images/home-one/team/team-img2.jpg",
        description:
        "We value curiosity, collaboration, and a can do attitude. Oh, and coffee lots of coffee. Come join a team celebrates your unique skills and helps you",
        skills: [
        { name: "Artificial Intelligence", value: 90 },
        { name: "Robotics Management", value: 70 },
        ],
        experience: "10+",
    },
    {
        name: "Jenny Wilson",
        position: "President of Sales",
        thumb: "/assets/images/home-one/team/team-thumb3.jpg",
        image: "/assets/images/home-one/team/team-img3.jpg",
        description:
        "We value curiosity, collaboration, and a can do attitude. Oh, and coffee lots of coffee. Come join a team celebrates your unique skills and helps you",
        skills: [
        { name: "Artificial Intelligence", value: 90 },
        { name: "Robotics Management", value: 70 },
        ],
        experience: "10+",
    },
    ]; 
    
    const [activeIndex, setActiveIndex] = useState(1);

    return (
            <section className="orbia-team_one pt-115 pb-105 p-r z-1">
                <div className="shape"><Image src="/assets/images/home-one/team/team-shape.png" alt="img" width={160} height={127}   /></div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-12">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">AI Expert Team</span>
                                <h2 className="text-anm">Our Professionals AI Expert Team.</h2>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xl-4 col-lg-12">
                            <ul className="nav nav-tabs" data-aos="fade-up" data-aos-duration="1000">
                            {teamData.map((member, index) => (
                                <li key={index}>
                                <div
                                    className={`team-thumb-item mb-30 ${activeIndex === index ? "active" : ""}`}
                                    onClick={() => setActiveIndex(index)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <div className="thumb">
                                        <Image src={member.thumb} alt="img" width={100} height={100}   />
                                    </div>
                                    <div className="content">
                                    <h5>{member.name}</h5>
                                    <span className="position">{member.position}</span>
                                    </div>
                                </div>
                                </li>
                            ))}
                            </ul>
                        </div>
                        <div className="col-xl-8 col-lg-12">
                            <div className="tab-content">
                            {teamData.map((member, index) => (
                                <div
                                key={index}
                                className={`tab-pane fade ${activeIndex === index ? "show active" : ""}`}
                                >
                                <div className="row">
                                    <div className="col-lg-5">
                                    <div className="member-image" data-aos="fade-up" data-aos-duration="1000">
                                        <Image src={member.image} alt="img" width={341} height={442}   />
                                    </div>
                                    </div>
                                    <div className="col-lg-7">
                                    <div className="member-info" data-aos="fade-up" data-aos-duration="1000">
                                        <h3 className="title">{member.name}</h3>
                                        <span className="position">{member.position}</span>
                                        <p>{member.description}</p>

                                        {member.skills.map((skill, idx) => (
                                        <div key={idx} className="orbia-progress-item mb-20">
                                            <div className="progress-title">
                                            <h6>
                                                {skill.name} <span>{skill.value}%</span>
                                            </h6>
                                            </div>
                                            <div className="progress">
                                            <div
                                                className="progress-bar"
                                                style={{ width: `${skill.value}%` }}
                                            ></div>
                                            </div>
                                        </div>
                                        ))}

                                        <div className="team-experience-social-box mt-40">
                                        <div className="experience-box">
                                            <h3>
                                            {member.experience} <span>Professional Experience</span>
                                            </h3>
                                        </div>
                                        <div className="social-box">
                                            <a href="#">
                                            <i className="bi bi-facebook"></i>
                                            </a>
                                            <a href="#">
                                            <i className="bi bi-twitter-x"></i>
                                            </a>
                                            <a href="#">
                                            <i className="bi bi-linkedin"></i>
                                            </a>
                                            <a href="#">
                                            <i className="bi bi-pinterest"></i>
                                            </a>
                                        </div>
                                        </div>
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

export default Team1;