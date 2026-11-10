import Image from "next/image";
import Link from "next/link";

const Cta1 = () => {
    const bgImage = '/assets/images/home-two/bg/cta-bg.jpg';
    return (
            <section className="orbia-cta_one bg_cover pt-165 pb-170 p-r z-1" style={{ backgroundImage: `url(${bgImage})`}} >
                <div className="orbia-image image_one" data-aos="fade-up" data-aos-duration="1000">
                    <Image src="/assets/images/home-two/gallery/cta-img1.jpg" alt="img" width={230} height={315}   />
                </div>
                <div className="orbia-image image_two" data-aos="fade-up" data-aos-duration="1200">
                    <Image src="/assets/images/home-two/gallery/cta-img2.jpg" alt="img" width={230} height={315}   />
                </div>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xxl-10 col-lg-8">
                            <div className="orbia-content-box text-center">
                                <div className="section-title text-white">
                                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">AI Consulting</span>
                                    <h2 className="text-anm">Take Advantage of 45% Off Your First Month of AI Assistance</h2>
                                </div>
                                <div className="orbia-button" data-aos="fade-up" data-aos-duration="1000">
                                    <Link href="/contact" className="theme-btn style-two">Get Started Now<i className="bi bi-arrow-right"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    );
};

export default Cta1;