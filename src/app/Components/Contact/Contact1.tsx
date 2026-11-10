import Link from "next/link";

const Contact1 = () => {
    const bgImage = '/assets/images/home-one/bg/contact-bg.jpg';
    return (
        <section className="orbia-contact_one bg_cover pt-120 pb-120" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-8">
                        <div className="orbia-contact-wrapper mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                            <h3>Get in touch</h3>
                            <p>Just fill out the form and our global experts will be in touch right away with package and price solution to help you!</p>
                            <form className="orbia-contact-form">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Your name" name="name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form_control" placeholder="Email Address" name="email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Company Name" name="company_name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Phone Number" name="phone" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Subject" name="Subject" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form_control" placeholder="Message" rows={3} name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="theme-btn gradient-btn">Send Message<i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-8">
                        <div className="orbia-content-box">
                            <div className="section-title text-white">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">We are here to answer all your questions</span>
                                <h2 className="text-anm">Welcome to the future of artificial intelligence!</h2>
                            </div>
                            <p data-aos="fade-up" data-aos-duration="1200">Artificial Intelligence refers to the development of computer systems that possess the ability to perform activities typically requiring human intelligence abilities!</p>
                            <div className="orbia-button-wrapper" data-aos="fade-up" data-aos-duration="1400">
                                <Link href="/contact" className="theme-btn gradient-btn">Get In Touch<i className="bi bi-arrow-right"></i></Link>
                                <Link href="/contact" className="theme-btn style-two">Learn More<i className="bi bi-arrow-right"></i></Link>
                            </div>
                            <div className="orbia-contact-info-list">
                                <div className="orbia-info-box style-one" data-aos="fade-up" data-aos-duration="1500">
                                    <div className="icon">
                                        <i className="bi bi-telephone"></i>
                                    </div>
                                    <div className="content">
                                        <span>Feel Free to get in Touch</span>
                                        <h4><a href="tel:+990123456789">+990 123 456 789</a></h4>
                                    </div>
                                </div>
                                <div className="orbia-info-box style-one" data-aos="fade-up" data-aos-duration="1600">
                                    <div className="icon">
                                        <i className="bi bi-envelope"></i>
                                    </div>
                                    <div className="content">
                                        <span>How can we Help you</span>
                                        <h4><a href="mail:info@exmple.com">info@exmple.com</a></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact1;