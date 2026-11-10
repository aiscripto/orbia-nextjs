import Image from "next/image";
import Link from "next/link";

const Footer1 = () => {
    const bgImage = '/assets/images/footer/footer-bg.jpg';
    const bgImage2 = '/assets/images/footer/footer-widget-bg.jpg';
    return (
        <footer className="main-footer bg_cover" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="shape"><Image src="/assets/images/footer/footer-shape1.png" alt="img" width={441} height={469}   /></div>
            <div className="container">
                <div className="footer-newsletter-wrapper pb-120">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-7 col-lg-10">
                            <div className="orbia-content-box text-center text-xl-start mb-5 mb-xl-0">
                                <div className="section-title text-white">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Get started</span>
                                    <h2 className="text-anm">Join our AI-driven Creative Community!</h2>
                                </div>
                                <div className="orbia-avatar-box" data-aos="fade-up" data-aos-duration="1200">
                                    <div className="avatar-list">
                                        <ul>
                                            <li><Image src="/assets/images/footer/avatar-img1.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/footer/avatar-img2.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/footer/avatar-img3.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/footer/avatar-img4.jpg" alt="img" width={51} height={51}   /></li>
                                            <li><Image src="/assets/images/footer/avatar-img5.jpg" alt="img" width={51} height={51}   /></li>
                                        </ul>
                                        <h6>4689 weekly subscribe</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-10">
                            <div className="orbia-newsletter-box" data-aos="fade-up" data-aos-duration="1200">
                                <form autoComplete="off">
                                    <div className="form-group">
                                        <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                                        <button className="theme-btn gradient-btn">SUBSCRIBE <i className="bi bi-bell"></i></button>
                                    </div>
                                    <div className="form-check mt-20">
                                        <label className="form-check-label" htmlFor="radio1">
                                            <input className="form-check-input" type="radio" name="radio" id="radio1" />I Agree To The Terms, Privacy Policy.
                                        </label>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom-wrapper bg_cover" style={{ backgroundImage: `url(${bgImage2})`}} >
                <div className="container">
                    <div className="footer-widget-area pt-100 pb-55">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 order-1">
                                <div className="footer-widget footer-about-widget mb-40" data-aos="fade-up" data-aos-duration="800">
                                    <div className="widget-content">
                                        <div className="footer-logo mb-30">
                                            <a><Image src="/assets/images/home-one/logo/logo-white.png" alt="img" width={226} height={60}   /></a>
                                        </div>
                                        <p>Our operations are centered on data protection and security, guaranteeing adherence to international regulations such as GDPR and HIPAA.</p>
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
                                                <h4 className="widget-title">Quick Links</h4>
                                                <div className="line-wrap"><span></span><span></span><span></span></div>
                                                <ul className="widget-nav">
                                                    <li><Link href="/">Home</Link></li>
                                                    <li><Link href="/about">About Us</Link></li>
                                                    <li><Link href="/service">Services</Link></li>
                                                    <li><Link href="/project">Projects</Link></li>
                                                    <li><Link href="/blog">Latest Blog</Link></li>
                                                    <li><Link href="/contact">Contact</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="footer-widget footer-nav-widget mb-40" data-aos="fade-up" data-aos-duration="1200">
                                            <div className="widget-content">
                                                <h4 className="widget-title">Our Services</h4>
                                                <div className="line-wrap"><span></span><span></span><span></span></div>
                                                <ul className="widget-nav">
                                                    <li><Link href="/service/service-details">AI-Powered Solutions</Link></li>
                                                    <li><Link href="/service/service-details">Custom Technology</Link></li>
                                                    <li><Link href="/service/service-details">Customer Feedback</Link></li>
                                                    <li><Link href="/service/service-details">Machine Learning</Link></li>
                                                    <li><Link href="/service/service-details">Language Processing</Link></li>
                                                    <li><Link href="/service/service-details">Computer Vision</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 order-2 order-lg-3">
                                <div className="footer-widget footer-contact-info-widget mb-40" data-aos="fade-up" data-aos-duration="1400">
                                    <div className="widget-content">
                                        <h4 className="widget-title">Recent Post</h4>
                                        <div className="line-wrap"><span></span><span></span><span></span></div>
                                        <div className="orbia-info-box style-two mb-20">
                                            <div className="icon">
                                                <i className="bi bi-geo-alt"></i>
                                            </div>
                                            <div className="info">
                                                <p>9550 Bolsa Ave #126, USA</p>
                                            </div>
                                        </div>
                                        <div className="orbia-info-box style-two mb-20">
                                            <div className="icon">
                                                <i className="bi bi-envelope"></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="mailto:info@touron.com">info@touron.com</a></p>
                                            </div>
                                        </div>
                                        <div className="orbia-info-box style-two mb-20">
                                            <div className="icon">
                                                <i className="bi bi-telephone"></i>
                                            </div>
                                            <div className="info">
                                                <p><a href="tel:(+256)214203215">(+256) 214 203 215</a></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="copyright-area">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="copyright-text text-lg-start text-center">
                                    <p>&copy;All Copyright 2025 by <span>Orbia</span>. All Rights Reserved.</p>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="copyright-link text-lg-end text-center">
                                    <a href="#">Terms & Conditions</a>
                                    <a href="#">Privacy Policy</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer1;