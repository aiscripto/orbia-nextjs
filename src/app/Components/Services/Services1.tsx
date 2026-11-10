import Image from "next/image";
import Link from "next/link";

const Services1 = () => {
    const serviceData = [
        {
            icon: "/assets/images/home-one/icon/icon1.png",
            title: "AI Strategy",
            desc: "Successful AI adoption starts with strategy. works with you assess opportunities, design AI roadmap, ensure smooth integration results."
        },
        {
            icon: "/assets/images/home-one/icon/icon2.png",
            title: "Machine Learning",
            desc: "Harness predictive models and advanced analytics to make smarter decisions. assess opportunities, ensure integration results"
        },
        {
            icon: "/assets/images/home-one/icon/icon3.png",
            title: "Computer Vision",
            desc: "Streamline operations aboost productivity with driven automation. design AI roadmap, ensure integration AI roadmap integration results"
        },
        {
            icon: "/assets/images/home-one/icon/icon4.png",
            title: "NLP & Chatbots",
            desc: "Unique AI solutions built to fit your industry challenges and goals. works with you assess opportunities, ensure integration results"
        }
    ];
    const bgImage = '/assets/images/home-one/bg/service-bg.jpg';
    return (
        <section className="orbia-service_one bg_cover pt-115 pb-120" style={{ backgroundImage: `url(${bgImage})`}} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-10">
                        <div className="section-title text-center text-white mb-45">
                            <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Our Best Services</span>
                            <h2 className="text-anm">Advanced Features Tailored to Your Services</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    {serviceData.map((item, i) => (
                    <div key={i} className="col-xl-3 col-md-6 col-sm-12 item-column">
                        <div className={`orbia-service-card ${i === 0 ? "item-active" : ""}`} data-aos="fade-up" data-aos-duration="800">
                            <div className="content">
                                <p>{item.desc}</p>
                                <div className="icon">
                                    <Image src={item.icon} alt="img" width={60} height={60}   />
                                </div>
                                <h3 className="title"><Link href="/service/service-details">{item.title}</Link></h3>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services1;