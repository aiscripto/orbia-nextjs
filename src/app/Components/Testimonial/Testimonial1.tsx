"use client"
import Image from "next/image";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial1 = () => {

    const testimonialData = [
        {
            text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
            img: "/assets/images/home-one/testimonial/author-img1.jpg",
            name: "Guy Hawkins",
            position: "Head of Digital Strategy, NovaTech"
        },
        {
            text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
            img: "/assets/images/home-one/testimonial/author-img2.jpg",
            name: "Jacob Jones",
            position: "Head of Digital Strategy, NovaTech"
        },
        {
            text: "This AI product has completely transformed the way our team operates. From automating repetitive task providing smart insights, it’s allowed us to focus more on strategy and branded active creativity!",
            img: "/assets/images/home-one/testimonial/author-img1.jpg",
            name: "Guy Hawkins",
            position: "Head of Digital Strategy, NovaTech"
        }
    ];

      const settings = {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 800,
        spaceBetween: 20,
        slidesPerView: 1,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
          1280: { slidesPerView: 2 },
        },
      };  
      
       const bgImage = '/assets/images/home-one/testimonial/testimonial-shape.png';

    return (
  <section className="orbia-testimonial_one pt-115 pb-120 p-r z-1">
    <div className="testimonial-shape bg_cover" style={{ backgroundImage: `url(${bgImage})`}} ></div>
    <div className="testimonial-image" data-aos="fade-left" data-aos-duration="1000">
        <Image src="/assets/images/home-one/testimonial/testimonial-img.jpg" alt="img" width={700} height={860}   />
    </div>
    <div className="container">
        <div className="row">
            <div className="col-xxl-7 col-xl-8 col-lg-10">
                <div className="section-title mb-55">
                    <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Testimonial</span>
                    <h2 className="text-anm">Hear what our about customer say about our AI agency</h2>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-11">
                <div className="testimonial-slider" data-aos="fade-up" data-aos-duration="1200">
                    <Swiper 
                    modules={[Navigation, Autoplay]}  
                    navigation={{
                    nextEl: ".custom-next",
                    prevEl: ".custom-prev",
                    }}                                
                    {...settings}
                    >  
                    {testimonialData.map((item, i) => (
                    <SwiperSlide key={i}>
                    <div className="orbia-testimonial-item style-one">
                        <div className="testimonial-content">
                            <div className="ratings">
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                                <i className="bi bi-star-fill"></i>
                            </div>
                            <p>{item.text}</p>
                            <div className="author-info-quote-wrap">
                                <div className="author-thumb-item">
                                    <div className="author-thumb">
                                        <Image src={item.img} alt="img" width={50} height={50}   />
                                    </div>
                                    <div className="author-info">
                                        <h5>{item.name}</h5>
                                        <span className="position">{item.position}</span>
                                    </div>
                                </div>
                                <div className="quote">
                                    <Image src="/assets/images/home-one/testimonial/quote.png" alt="img" width={42} height={36}   />
                                </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    ))}
                    </Swiper>                    
                </div>
                <div className="custom-nav">
                    <button className="custom-prev"><i className="bi bi-arrow-left"></i></button>
                    <button className="custom-next"><i className="bi bi-arrow-right"></i></button>
                </div>
            </div>
        </div>
    </div>
</section>
    );
};

export default Testimonial1;