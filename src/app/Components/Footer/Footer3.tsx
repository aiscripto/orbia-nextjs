import Image from "next/image";
import Link from "next/link";

const Footer3 = () => {
    const bgImage = '/assets/images/footer/footer-bg2.jpg';
    return (
            <footer className="main-footer footer-v3 bg_cover" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="container">
                    <div className="footer-top">
                        <div className="row align-items-center">
                            <div className="col-lg-8">
                                <div className="section-title text-white">
                                    <h2 className="text-anm">Start your journey into smart innovation today.</h2>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="orbia-button text-lg-end">
                                    <Link href="/"><Image src="/assets/images/footer/circle-btn2.png" className="rotate360" alt="img" width={100} height={100}   /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom-wrapper pt-100">
                    <div className="container">
                        <div className="footer-widget-area pb-60">
                            <div className="row">
                                <div className="col-lg-4 col-md-6 order-1">
                                    <div className="footer-widget footer-about-widget mb-40" data-aos="fade-up" data-aos-duration="800">
                                        <div className="widget-content">
                                            <div className="footer-logo mb-30">
                                                <Link href="/"><Image src="/assets/images/home-three/logo/logo-white.png" alt="img" width={226} height={60}   /></Link>
                                            </div>
                                            <p>Our operations are centered on data protection and security, guaranteeing adherence </p>
                                            <div className="social-box">
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                                <a href="#"><i className="bi bi-pinterest"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5 col-md-12 order-3 order-lg-2">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div className="footer-widget footer-nav-widget mb-40" data-aos="fade-up" data-aos-duration="1000">
                                                <div className="widget-content">
                                                    <h4 className="widget-title">Our Services</h4>
                                                    <div className="line-wrap"><span></span><span></span><span></span></div>
                                                    <ul className="widget-nav">
                                                    <li><Link href="/service/service-details">AI-Powered Solutions</Link></li>
                                                    <li><Link href="/service/service-details">Custom Technology</Link></li>
                                                    <li><Link href="/service/service-details">Customer Feedback</Link></li>
                                                    <li><Link href="/service/service-details">Machine Learning</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="footer-widget footer-contact-info-widget mb-40" data-aos="fade-up" data-aos-duration="1200">
                                                <div className="widget-content">
                                                    <h4 className="widget-title">Contact Information</h4>
                                                    <div className="line-wrap"><span></span><span></span><span></span></div>
                                                    <ul>
                                                        <li>
                                                            4517 Washington Ave. Manchester, Kentucky 39495
                                                        </li>
                                                        <li>
                                                            <span>Need Any Help</span>
                                                            <h4><a href="tel:+91-432138505">+91 - 432 138 505</a></h4>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-6 order-2 order-lg-3">
                                    <div className="footer-widget footer-newsletter-widget mb-40" data-aos="fade-up" data-aos-duration="1400">
                                        <div className="widget-content">
                                            <h4 className="widget-title">Subscribe To Newsletter</h4>
                                            <div className="line-wrap"><span></span><span></span><span></span></div>
                                            <p>Subscribe to our newsletter for the latest updates, exclusive content.</p>
                                            <form autoComplete="off">
                                                <div className="form-group">
                                                    <input type="email" className="form_control" placeholder="Enter Email Address" name="email" required />
                                                    <button className="submit-btn"><i className="bi bi-send"></i></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="copyright-area">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="copyright-text text-center">
                                        <p>&copy;All Copyright 2025 by <span>Orbia</span>. All Rights Reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
    );
};

export default Footer3;