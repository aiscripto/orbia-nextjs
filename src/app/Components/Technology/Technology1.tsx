import Image from "next/image";

const Technology1 = () => {

    const featureData = [
        {
            number: "01",
            icon: "/assets/images/home-one/icon/icon7.png",
            title: "Tech support",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive"
        },
        {
            number: "02",
            icon: "/assets/images/home-one/icon/icon8.png",
            title: "Robo Genius",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive"
        },
        {
            number: "03",
            icon: "/assets/images/home-one/icon/icon7.png",
            title: "Image Generation",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive"
        },
        {
            number: "04",
            icon: "/assets/images/home-one/icon/icon7.png",
            title: "Chatbots",
            desc: "To empower businesses with intelligent, scalable, impactful solutions that drive"
        }
    ];

    return (
    <section className="orbia-advance-sec pt-115 pb-80">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-8">
                    <div className="section-title text-center mb-55">
                        <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Advanced Technology</span>
                        <h2 className="text-anm">Advances in AI Technology Are Here to Impact the Future.</h2>
                    </div>
                </div>
            </div>
            <div className="row">
                {featureData.map((item, i) => (
                <div key={i} className="col-xl-3 col-md-6 col-sm-12" data-aos="fade-up" data-aos-duration="1000">
                    <div className="orbia-iconic-box style-one mb-40">
                        <div className="box-border"></div>
                        <div className="icon-wrap">
                            <div className="number">{item.number}</div>
                            <div className="icon">
                                <Image src={item.icon} alt="img" width={60} height={60}   />
                            </div>
                        </div>
                        <div className="content">
                            <h4 className="title">{item.title}</h4>
                            <p>{item.desc}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
        </div>
        </section>
    );
};

export default Technology1;