import Image from "next/image";

const Process1 = () => {

    const processData = [
        {
            icon: "/assets/images/innerpage/icon/icon5.png",
            title: "Design Optimization",
            desc: "Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks",
        },
        {
            icon: "/assets/images/innerpage/icon/icon5.png",
            title: "Development Implementation",
            desc: "Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks",
        },
        {
            icon: "/assets/images/innerpage/icon/icon5.png",
            title: "Performance Analysis",
            desc: "Conduct thorough market of the research to the fast target audience behaviors. Submit as many design tasks",
        },
    ];

    const bgImage = '/assets/images/innerpage/bg/process-bg.jpg';
    return (
            <section className="orbia-process_two bg_cover pt-110 pb-70" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6 col-lg-10">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Work Process</span>
                                <h2 className="text-anm">Building Success, One Step at a Time</h2>
                            </div>
                        </div>
                    </div>
                    <div className="process-wrapper">
                        <div className="shape shape-one"><Image src="/assets/images/innerpage/gallery/process-arrow-img1.png" alt="img" width={222} height={44}   /></div>
                        <div className="shape shape-two"><Image src="/assets/images/innerpage/gallery/process-arrow-img2.png" alt="img" width={222} height={45}   /></div>
                        <div className="row justify-content-center">
                            {processData.map((item, i) => (
                            <div key={i} className="col-lg-4 col-md-6 col-sm-12">
                                <div className="orbia-iconic-box style-four mb-40" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="icon">
                                        <Image src={item.icon} alt="img" width={45} height={45}   />
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
            </section>
    );
};

export default Process1;