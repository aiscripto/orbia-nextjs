import Image from "next/image";
import Link from "next/link";

const Services3 = () => {

    const serviceData = [
        {
            number: "01",
            icon: "/assets/images/innerpage/icon/icon10.png",
            title: "AI-Powered Solution",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest.",
        },
        {
            number: "02",
            icon: "/assets/images/innerpage/icon/icon11.png",
            title: "Custom Technology",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest.",
        },
        {
            number: "03",
            icon: "/assets/images/innerpage/icon/icon12.png",
            title: "Machine Learning",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest.",
        },
        {
            number: "04",
            icon: "/assets/images/innerpage/icon/icon13.png",
            title: "Predicative Analytics",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest.",
        },
        {
            number: "05",
            icon: "/assets/images/innerpage/icon/icon14.png",
            title: "Automation Process",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest.",
        },
        {
            number: "06",
            icon: "/assets/images/innerpage/icon/icon15.png",
            title: "Education & Science",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest.",
        },
    ];

    return (
            <section className="orbia-service-sec gray-bg pt-120 pb-90">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">OUr best services</span>
                                <h2 className="text-anm">Best Innovative Solution for Businesses</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {serviceData.map((item, i) => (
                        <div key={i} className="col-xl-4 col-md-6 col-sm-12">
                            <div className="orbia-iconic-box style-two mb-30" data-aos="fade-up" data-aos-duration="1000">
                                <div className="shape"><Image src="/assets/images/innerpage/service/service-shape.png" alt="img" width={141} height={224}   /></div>
                                <div className="sn-number">{item.number}</div>
                                <div className="icon">
                                    <Image src={item.icon} alt="img" width={40} height={40}   />
                                </div>
                                <div className="content">
                                    <h3 className="title"><Link href="/service/service-details">{item.title}</Link></h3>
                                    <p>{item.desc}</p>
                                    <Link href="/service/service-details" className="read-more style-one">Read More<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </section>
    );
};

export default Services3;