import Link from "next/link";

const Project2 = () => {

    const projectData = [
        {
            number: "01",
            img: "assets/images/home-two/project/project-img1.jpg",
            title: "Hyper Vision",
            subtitle: "AI Powered Image Recognition",
        },
        {
            number: "02",
            img: "assets/images/home-two/project/project-img2.jpg",
            title: "Brain Wave",
            subtitle: "Smart Neural Network Solutions",
        },
        {
            number: "03",
            img: "assets/images/home-two/project/project-img3.jpg",
            title: "AI Insight Lab",
            subtitle: "Smart Data & AI Analysis",
        },
        {
            number: "04",
            img: "assets/images/home-two/project/project-img4.jpg",
            title: "Hyper Gen",
            subtitle: "AI-Powered Content Creation",
        },
    ];

    return (
            <section className="orbia-project_two pt-115 pb-120">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Recent Project</span>
                                <h2 className="text-anm">We Find a Unique Solutions for Easy Project.</h2>
                            </div>
                        </div>
                    </div>
                    <div className="project-wrapper">
                        <div className="row">
                            <div className="col-lg-12">
                                {projectData.map((item, i) => (
                                <div key={i} className="orbia-project-item style-two" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="hover-image bg_cover" style={{ backgroundImage: `url(${item.img})`}} ></div>
                                    <div className="content-wrap">
                                        <div className="sn-number">{item.number}</div>
                                        <div className="content">
                                            <span>{item.title}</span>
                                            <h3>{item.subtitle}</h3>
                                        </div>
                                        <div className="icon-button">
                                            <Link href="/project/project-details" className="icon-btn"><i className="bi bi-arrow-right"></i></Link>
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

export default Project2;