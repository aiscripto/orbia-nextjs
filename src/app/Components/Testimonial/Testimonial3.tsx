"use client"
import Image from "next/image";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Testimonial3 = () => {

    const testimonialData = [
        {
            quote: "I was here for a conference, but it felt more like a vacation. The meeting facilities were top notch, and I still had time to relax by the pool. Best business trip ever!",
            img: "/assets/images/home-three/testimonial/author-img1.jpg",
            name: "Leslie Alexander",
            position: "CEO, AB Tech"
        },
        {
            quote: "I was here for a conference, but it felt more like a vacation. The meeting facilities were top notch, and I still had time to relax by the pool. Best business trip ever!",
            img: "/assets/images/home-three/testimonial/author-img2.jpg",
            name: "Brooklyn Simmons",
            position: "CEO, AB Tech"
        },
        {
            quote: "I was here for a conference, but it felt more like a vacation. The meeting facilities were top notch, and I still had time to relax by the pool. Best business trip ever!",
            img: "/assets/images/home-three/testimonial/author-img3.jpg",
            name: "Jenny Wilson",
            position: "CEO, AB Tech"
        },
        {
            quote: "I was here for a conference, but it felt more like a vacation. The meeting facilities were top notch, and I still had time to relax by the pool. Best business trip ever!",
            img: "/assets/images/home-three/testimonial/author-img1.jpg",
            name: "Albert Flores",
            position: "CEO, AB Tech"
        }
    ];

       const settings = {
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
        loop: true,
        speed: 1500,
        spaceBetween: 25,
        slidesPerView: 1,
        breakpoints: {
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1280: { slidesPerView: 3 },
        },
      };   

    return (
            <section className="orbia-testimonial_three pt-115 pb-110">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-8 col-lg-10">
                            <div className="section-title text-center mb-50">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Testimonial</span>
                                <h2 className="text-anm">Hear what our about customer say about our AI agency</h2>
                            </div>
                        </div>
                    </div>
                    <div className="testimonial-slider-three" data-aos="fade-up" data-aos-duration="1000">
                    <Swiper modules={[Autoplay]} {...settings}>  
                    {testimonialData.map((item, i) => (
                        <SwiperSlide key={i}>
                        <div className="orbia-testimonial-item style-three">
                            <div className="testimonial-content">
                                <div className="quote-ratings-wrap">
                                    <div className="quote">
                                        <i className="bi bi-quote"></i>
                                    </div>
                                    <div className="ratings">
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                        <i className="bi bi-star-fill"></i>
                                    </div>
                                </div>
                                <p>{item.quote}</p>
                                <div className="author-thumb-item">
                                    <div className="author-thumb">
                                        <Image src={item.img} alt="img" width={50} height={50}   />
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
                </div>
            </section>
    );
};

export default Testimonial3;