import Image from "next/image";
import Link from "next/link";

const Project3 = () => {

    const projectData = [
        {
            img: "/assets/images/innerpage/project/project-img1.jpg",
            category: "Robotics, Program",
            title: "Transforming Businesses with Intelligence",
        },
        {
            img: "/assets/images/innerpage/project/project-img2.jpg",
            category: "User Research",
            title: "Intelligence for Modern Challenges",
        },
        {
            img: "/assets/images/innerpage/project/project-img3.jpg",
            category: "User Research",
            title: "Redefining Intelligence for Tomorrow Tech",
        },
        {
            img: "/assets/images/innerpage/project/project-img4.jpg",
            category: "Robotics, Program",
            title: "Elevating Possibilities with Intelligence",
        },
    ];

    return (
            <section className="orbia-project-sec pt-120 pb-120">
                    <div className="container">
                        <div className="row">
                            {projectData.map((item, i) => (
                            <div key={i} className="col-lg-6">
                                <div className="orbia-project-item style-four mb-30" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="project-thumbnail">
                                        <Image src={item.img} alt="img" width={593} height={441}   />
                                    </div>
                                    <div className="project-content-wrap">
                                        <div className="project-content">
                                            <a href="#">{item.category}</a>
                                            <h3 className="title"> <Link href="/project/project-details">{item.title}</Link></h3>
                                        </div>
                                        <div className="icon-button">
                                            <Link href="/project/project-details" className="icon-btn style-one"><i className="bi bi-arrow-right"></i></Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                             ))}

                        </div>
                    </div>
                </section>
    );
};

export default Project3;