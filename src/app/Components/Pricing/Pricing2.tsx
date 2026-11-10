import Image from "next/image";
import Link from "next/link";

const Pricing2 = () => {

        const pricingData = [
        {
            plan: "Standard",
            subtitle: "Ideal For Personal Projects",
            price: 29,
            badge: null,
            image: "/assets/images/innerpage/pricing/pircing-logo.png",
            features: [
            "Access AI tools",
            "Exclusive features",
            "Discord access",
            "24/7 support"
            ],
            duration: "Per Month"
        },
        {
            plan: "Professional",
            subtitle: "Ideal For Personal Projects",
            price: 69,
            badge: "Popular",
            image: "/assets/images/innerpage/pricing/pircing-logo.png",
            features: [
            "Access AI tools",
            "Exclusive features",
            "Discord access",
            "24/7 support"
            ],
            duration: "Per Month"
        },
        {
            plan: "Business",
            subtitle: "Ideal For Personal Projects",
            price: 99,
            badge: null,
            image: "/assets/images/innerpage/pricing/pircing-logo.png",
            features: [
            "Access AI tools",
            "Exclusive features",
            "Discord access",
            "24/7 support"
            ],
            duration: "Per Month"
        }
    ];

    const bgImage = '/assets/images/home-two/bg/pricing-bg.jpg';

    return (
            <section className="orbia-pricing-sec pt-115 pb-80 bg_cover" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="section-title text-center mb-55">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Popular Package</span>
                                <h2 className="text-anm">Flexible Pricing, Powerful Tangible Results</h2>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                                {pricingData.map((item, index) => (
                                    <div
                                    key={index}
                                    className="col-lg-4 col-md-6 col-sm-12"
                                    >
                                    <div className="orbia-pricing-item style-two mb-40">

                                        <div className="shape">
                                            <Image src="/assets/images/innerpage/pricing/pricing-shape.png" alt="img" width={257} height={176}   />
                                        </div>

                                        {item.badge && <div className="badge">{item.badge}</div>}

                                        <div className="pricing-header">
                                       <Image src={item.image} alt="img" width={60} height={60}   />                                            
                                        <span className="plan">{item.plan}</span>
                                        <p>{item.subtitle}</p>
                                        <div className="price">
                                            ${item.price}<span>/{item.duration}</span>
                                        </div>
                                        </div>
                                        <div className="pricing-body">
                                        <ul className="check-list style-one">
                                            {item.features.map((f, i) => (
                                            <li key={i}>
                                                <i className="bi bi-check2-all"></i> {f}
                                            </li>
                                            ))}
                                        </ul>
                                        </div>
                                        <div className="pricing-footer">
                                            <Link href="/pricing" className="theme-btn style-one">
                                                View All Price <i className="bi bi-arrow-right"></i>
                                            </Link>
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

export default Pricing2;