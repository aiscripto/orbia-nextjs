import Image from "next/image";

const TeamDetails = () => {
    return (
            <section className="orbia-team-details-sec pt-120 pb-120">
                <div className="container">
                    <div className="team-details-wrapper">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="member-image-wrap mb-5 mb-lg-0" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="member-image">
                                        <Image src="/assets/images/innerpage/team/team-single1.jpg" alt="img" width={374} height={425}   />
                                    </div>
                                    <div className="member-info">
                                        <h4>Marvin McKinney</h4>
                                        <span className="position">President of Sales</span>
                                        <div className="info-list">
                                            <h6>Experience:</h6>
                                            <p>20+ Years</p>
                                        </div>
                                        <div className="info-list">
                                            <h6>Email</h6>
                                            <p><a href="LeslieAlexander@gmail.com">Leslie Alexander@gmail.com</a></p>
                                        </div>
                                        <div className="info-list">
                                            <h6>Phone</h6>
                                            <p><a href="tel:+02-258-5687-363">+02 -258 -5687-363</a></p>
                                        </div>
                                        <div className="info-list">
                                            <h6>Social Media</h6>
                                            <div className="social-box">
                                                <a href="#"><i className="bi bi-facebook"></i></a>
                                                <a href="#"><i className="bi bi-twitter-x"></i></a>
                                                <a href="#"><i className="bi bi-linkedin"></i></a>
                                                <a href="#"><i className="bi bi-pinterest"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="team-details-content">
                                    <div className="content-box" data-aos="fade-up" data-aos-duration="1000">
                                        <h3>About Me</h3>
                                        <p>Leslie Alexander is one of the best online resources for learning about technology in the medical sphere. There’s a real sense skepticiesm cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit aniem id If you run an internet search for medical blogs, you’ll come across hundreds of results. And figuring out which sources are reputable can take a lot of time. To help ease the process, we compiled. we present present exciting new ventures.
            </p>
                                        <p>The New York coworking community has also been evolving rapidly Regus and Rockefeller Group Business Center. We Work and other services have a large presence. The demand coworking Brooklyn neighborhoods is high due to the increased number of millennials in workforce; nearly one in 10 workers in the Gowanus, Brooklyn area are remote workers. The industrial area of Gowanus is seeing a surge in new startups that are redesigning old buildings into new coworking spaces.</p>
                                    </div>
                                    <div className="content-box" data-aos="fade-up" data-aos-duration="1200">
                                        <h3>Our team has resolved the issue.</h3>
                                        <p>Our mission is to empowers businesses size to thrivie in ses ever changing marketplace We are committed to the delivering exceptionals the value thro strategic ins innovative approaches. Our consulting of our missing empowers businesses of all sizes Committed to the delivering exceptional in the values</p>
                                        <ul className="check-list gradient-check mb-40">
                                            <li><i className="bi bi-check-circle-fill"></i>Covers all the international news via websites, blogs, newswires, newspapers, trade publication</li>
                                            <li><i className="bi bi-check-circle-fill"></i>This Database provides books, conference proceedings and journals covering all disciplines in academics</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Fintech is growing rapidly but Internet Access, Government compliance and Data Security is where it is still</li>
                                            <li><i className="bi bi-check-circle-fill"></i>Database provides returns for exchange rates, fixed income tax, price earnings, prices, equity data</li>
                                        </ul>
                                    </div>
                                    <div className="content-box" data-aos="fade-up" data-aos-duration="1400">
                                        <h3>Professional skills</h3>
                                        <p>Our mission is to empowers businesses size to thrivie in ses ever changing marketplace We are committed to the delivering exceptionals the value thro strategic ins innovative approaches. Our consulting of our missing empowers businesses of all sizes Committed to the delivering exceptional in the values</p>
                                        <div className="orbia-progress-item mb-20">
                                            <div className="progress-title">
                                                <h6>Business consultants <span>90%</span></h6>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar1"></div>
                                            </div>
                                        </div>
                                        <div className="orbia-progress-item mb-20">
                                            <div className="progress-title">
                                                <h6>Client communication<span>70%</span></h6>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar2"></div>
                                            </div>
                                        </div>
                                        <div className="orbia-progress-item mb-20">
                                            <div className="progress-title">
                                                <h6>Business strategy<span>85%</span></h6>
                                            </div>
                                            <div className="progress">
                                                <div className="progress-bar progress-bar3"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="contact-wrapper mt-40" data-aos="fade-up" data-aos-duration="1600">
                                        <h3>Contact With Me</h3>
                                        <form className="contact-form" autoComplete="off">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form_control" placeholder="Enter Name" name="name" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="email" className="form_control" placeholder="Enter Email" name="email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form_control" placeholder="Enter Subject" name="subject" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-group">
                                                        <input type="text" className="form_control" placeholder="Enter Phone" name="phone" required /> 
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group">
                                                        <textarea className="form_control" name="message" placeholder="Enter Message" rows={9}></textarea>
                                                    </div>
                                                </div>
                                                <div className="col-lg-12">
                                                    <div className="form-group text-center">
                                                        <button className="theme-btn gradient-btn">SEND MESSAGE<i className="bi bi-arrow-right"></i></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default TeamDetails;