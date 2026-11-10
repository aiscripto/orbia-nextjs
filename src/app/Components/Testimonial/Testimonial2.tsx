"use client"
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial2 = () => {

    const testimonials = [
        {
            name: "David Ade Smith",
            position: "Business Student",
            quote:
            "With a team of experts in machine learning, data science, and advanced analytics, we help companies harness the power of AI to solve complex challenges and gain a competitive edge.",
            img: "/assets/images/home-two/testimonial/author-img1.jpg"
        },
        {
            name: "David Ade Smith",
            position: "Business Student",
            quote:
            "With a team of experts in machine learning, data science, and advanced analytics, we help companies harness the power of AI to solve complex challenges and gain a competitive edge.",
            img: "/assets/images/home-two/testimonial/author-img1.jpg"
        }
    ];

      const settings = {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 1 },
          1280: { slidesPerView: 1 },
        },
      };
      
       const bgImage = '/assets/images/home-two/bg/testimonial-bg.jpg';   
       const bgImage1 = '/assets/images/home-two/testimonial/testimonial-img1.jpg';   

    return (
            <section className="orbia-testimonial_two bg_cover pt-115 pb-115 p-r z-1" style={{ backgroundImage: `url(${bgImage})`}} >
                    <div className="testimonial-img bg_cover" style={{ backgroundImage: `url(${bgImage1})`}}></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-6">
                                <div className="orbia-content-box">
                                    <div className="section-title text-white mb-40">
                                        <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Testimonial</span>
                                        <h2 className="text-anm">Proven Impact Through Testimonial</h2>
                                    </div>
                                    <div className="testimonial-wrapper" data-aos="fade-up" data-aos-duration="1000">
                                        <div className="testimonial-slider-two">
                                            <Swiper 
                                            modules={[Navigation, Autoplay]}  
                                            navigation={{
                                            nextEl: ".custom-next",
                                            prevEl: ".custom-prev",
                                            }}                                
                                            {...settings}
                                            >  
                                            {testimonials.map((item, i) => (
                                            <SwiperSlide key={i}>
                                            <div className="orbia-testimonial-item style-two">
                                                <div className="testimonial-content">
                                                    <div className="ratings">
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                        <i className="bi bi-star-fill"></i>
                                                    </div>
                                                    <p>{item.quote}</p>
                                                    <div className="author-thumb-item">
                                                        <div className="author-thumb">
                                                            <Image src={item.img} alt="img" width={80} height={80}   />
                                                        </div>
                                                        <div className="author-info">
                                                            <h5>{item.name}</h5>
                                                            <span className="position">{item.position}</span>
                                                        </div>
                                                    </div>
                                                </div>    
                                            </div>
                                                </SwiperSlide>
                                            ))}
                                            </Swiper>
                                        </div>
                                        <div className="custom-nav testimonial-arrows">
                                            <button className="custom-prev"><i className="bi bi-arrow-left"></i></button>
                                            <button className="custom-next"><i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>

                                    <div className="orbia-counter-wrap" data-aos="fade-up" data-aos-duration="1200">
                                        <h2>125k+</h2>
                                        <h5>Professional and Experienced staff ready to help you</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    );
};

export default Testimonial2;