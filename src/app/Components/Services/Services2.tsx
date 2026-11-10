"use client"
import Image from "next/image";
import Link from "next/link";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Services2 = () => {

    const serviceData = [
        {
            number: "01",
            icon: "/assets/images/home-two/icon/icon1.png",
            title: "AI-Powered Solution",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest."
        },
        {
            number: "02",
            icon: "/assets/images/home-two/icon/icon2.png",
            title: "Custom Technology",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest."
        },
        {
            number: "03",
            icon: "/assets/images/home-two/icon/icon3.png",
            title: "Machine Learning",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest."
        },
        {
            number: "04",
            icon: "/assets/images/home-two/icon/icon4.png",
            title: "Predicative Analytics",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest."
        },
        {
            number: "05",
            icon: "/assets/images/home-two/icon/icon4.png",
            title: "Automation Process",
            desc: "Specialize in delivering AI-powered solution revolutionize the way businesses operate. By leveraging the latest."
        }
    ];

    const settings = {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 800,
    spaceBetween: 25,
    slidesPerView: 1,
    breakpoints: {
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1280: { slidesPerView: 4 },
    },
    };      
    const bgImage = '/assets/images/home-two/bg/service-bg.jpg';
    return (
        <section className="orbia-service_two bg_cover pt-110 pb-90" style={{ backgroundImage: `url(${bgImage})`}}>
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-6 col-lg-8">
                        <div className="section-title mb-45">
                            <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">OUr best services</span>
                            <h2 className="text-anm">Best Innovative Solution for Businesses</h2>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-4">
                        <div className="custom-nav mb-60">
                            <button className="custom-prev"><i className="bi bi-arrow-left"></i></button>
                            <button className="custom-next"><i className="bi bi-arrow-right"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="service-slider" data-aos="fade-up" data-aos-duration="1000">
                    <Swiper
                    modules={[Navigation, Autoplay]}  
                    navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                    }}                                
                    {...settings}
                    >  
                    {serviceData.map((item, i) => (
                    <SwiperSlide key={i}>
                    <div className="orbia-iconic-box style-two mb-30">
                        <div className="shape"><Image src="/assets/images/home-two/gallery/service-shape.png" alt="img" width={141} height={224}   /></div>
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
                    </SwiperSlide>
                    ))}
                    </Swiper>                    

                </div>
            </div>
        </section>
    );
};

export default Services2;