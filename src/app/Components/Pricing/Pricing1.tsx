import Link from "next/link";

const Pricing1 = () => {
    const bgImage = '/assets/images/home-one/bg/pricing-bg.jpg';
    const bgImage2 = '/assets/images/home-one/bg/pricing-bg2.jpg';
    return (
        <section className="orbia-pricing_one bg_cover pt-115 pb-90" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-title mb-55">
                            <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Pricing plan</span>
                            <h2 className="text-anm">Simple and Adaptable, Pay only for what you need.</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4">
                        <div className="orbia-button mb-60 text-lg-end" data-aos="fade-up" data-aos-duration="1000">
                            <Link href="/contact" className="theme-btn gradient-btn">Get In Touch <i className="bi bi-arrow-right"></i></Link>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="orbia-pricing-item style-one mb-30" data-aos="fade-up" data-aos-duration="1000">
                            <div className="pricing-inner-wrapper">
                                <div className="pricing-header">
                                    <span className="plan">Basic</span>
                                    <h2 className="price">Free</h2>
                                    <p>Great for private individuals</p>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-two">
                                        <li>1 User</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>1 Gb workspace</li>
                                        <li>25 Deployment Slots</li>
                                        <li>Customer Management</li>
                                    </ul>
                                </div>
                                <div className="pricing-button">
                                    <Link href="/pricing" className="theme-btn gradient-btn"><span>Get Started Now<i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="orbia-pricing-item style-one item-active mb-30" data-aos="fade-up" data-aos-duration="1200">
                            <div className="pricing-inner-wrapper bg_cover" style={{ backgroundImage: `url(${bgImage2})`}} >
                                <div className="rib-badge">Popular</div>
                                <div className="pricing-header">
                                    <span className="plan">Premium</span>
                                    <h2 className="price">$69</h2>
                                    <p>14 days free period</p>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-two">
                                        <li>1 User</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>1 Gb workspace</li>
                                        <li>25 Deployment Slots</li>
                                        <li>Customer Management</li>
                                    </ul>
                                </div>
                                <div className="pricing-button">
                                    <Link href="/pricing" className="theme-btn gradient-btn"><span>Get Started Now<i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                        <div className="orbia-pricing-item style-one mb-30" data-aos="fade-up" data-aos-duration="1400">
                            <div className="pricing-inner-wrapper">
                                <div className="pricing-header">
                                    <span className="plan">Advanced</span>
                                    <h2 className="price">$99</h2>
                                    <p>01 Month free period</p>
                                </div>
                                <div className="pricing-body">
                                    <ul className="check-list style-two">
                                        <li>1 User</li>
                                        <li>Unlimited Projects</li>
                                        <li>Download prototypes</li>
                                        <li>1 Gb workspace</li>
                                        <li>25 Deployment Slots</li>
                                        <li>Customer Management</li>
                                    </ul>
                                </div>
                                <div className="pricing-button">
                                    <Link href="/pricing" className="theme-btn gradient-btn"><span>Get Started Now<i className="bi bi-arrow-right"></i></span></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing1;