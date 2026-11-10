import Image from "next/image";

const Technology3 = () => {

    const iconicData = [
        {
            icon: "/assets/images/innerpage/icon/icon6.png",
            title: "Tech Support",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
        },
        {
            icon: "/assets/images/innerpage/icon/icon7.png",
            title: "Robo Genius",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
        },
        {
            icon: "/assets/images/innerpage/icon/icon8.png",
            title: "Image Generation",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
        },
        {
            icon: "/assets/images/innerpage/icon/icon9.png",
            title: "Chatbots",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive",
        },
    ];

    return (
            <section className="orbia-features_three gray-bg">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-xl-6">
                            <div className="orbia-image">
                                <Image src="/assets/images/innerpage/bg/techno-bg.jpg" alt="img" width={865} height={975}   />
                                <div className="orbia-avatar-box" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="avatar-list">
                                        <h3>54K</h3>
                                        <h5>Clients Reviews</h5>
                                        <ul>
                                            <li><Image src="/assets/images/innerpage/feature/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/innerpage/feature/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/innerpage/feature/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="orbia-content-box mt-45">
                                <div className="section-title mb-30">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Advanced Technology</span>
                                    <h2 className="text-anm">The AI Intelligent Choice for Business Growth</h2>
                                </div>
                                <div className="row">
                                    {iconicData.map((item, i) => (
                                    <div key={i} className="col-md-6">
                                        <div className="orbia-iconic-box style-five mb-40" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="shape"><Image src="/assets/images/innerpage/gallery/box-shape.png" alt="img" width={162} height={153}   /></div>
                                            <div className="icon">
                                                <Image src={item.icon} alt="img" width={36} height={36}   />
                                            </div>
                                            <div className="content">
                                                <h4>{item.title}</h4>
                                                <p>{item.desc}</p>
                                            </div>
                                        </div>
                                    </div>
                                     ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Technology3;