import Image from "next/image";
import Link from "next/link";

const Fact1 = () => {
    const bgImage = '/assets/images/home-three/gallery/fact-bg.jpg';
    const bgImage2 = '/assets/images/home-three/gallery/fact-bg2.jpg';
    return (
        <section className="orbia-fact-sec pt-100">
            <div className="container-fluid">
                <div className="row justify-content-center">
                    <div className="col-xl-4">
                        <div className="orbia-fact-item bg_cover mb-40" style={{ backgroundImage: `url(${bgImage})`}} data-aos="fade-up" data-aos-duration="800">
                            <div className="content">
                                <h3>API integration to your business model for effective working</h3>
                                <p>Offering continuous maintenance, monitoring, and support to ensure peak system performance and swift issue resolution.</p>
                                <Link href="/about" className="read-more style-one">Explore More<i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="orbia-fact-item-two mb-40" data-aos="fade-up" data-aos-duration="1000">
                            <div className="shape"><Image src="/assets/images/home-three/gallery/fact-shape.png" alt="img" width={602} height={419}   /></div>
                            <div className="content">
                                <h3>Automated Language Understanding</h3>
                                <div className="counter-wrap">
                                    <div className="counter-box">
                                        <h2>285+</h2>
                                        <p>Active Visitor Per day</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-4">
                        <div className="orbia-fact-item bg_cover mb-40" style={{ backgroundImage: `url(${bgImage2})`}} data-aos="fade-up" data-aos-duration="1200">
                            <div className="content">
                                <h3>Accompanying documentation for all services and products</h3>
                                <div className="orbia-avatar-box">
                                    <div className="avatar-list">
                                        <ul>
                                            <li><Image src="/assets/images/home-three/gallery/avatar-img1.jpg" alt="img" width={46} height={46}   /></li>
                                            <li><Image src="/assets/images/home-three/gallery/avatar-img2.jpg" alt="img" width={46} height={46}   /></li>
                                            <li><Image src="/assets/images/home-three/gallery/avatar-img3.jpg" alt="img" width={46} height={46}   /></li>
                                            <li><span>10+</span></li>
                                        </ul>
                                    </div>
                                    <div className="number">20K</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Fact1;