"use client"
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand1 = () => {

    const clientData = [
        {
            img: "/assets/images/home-one/client/client-logo1.png",
            number: "458+",
            text: "Airbnb 5 star reviews"
        },
        {
            img: "/assets/images/home-one/client/client-logo2.png",
            number: "458+",
            text: "Airbnb 5 star reviews"
        },
        {
            img: "/assets/images/home-one/client/client-logo3.png",
            number: "458+",
            text: "Airbnb 5 star reviews"
        },
        {
            img: "/assets/images/home-one/client/client-logo4.png",
            number: "458+",
            text: "Airbnb 5 star reviews"
        },
        {
            img: "/assets/images/home-one/client/client-logo5.png",
            number: "458+",
            text: "Airbnb 5 star reviews"
        },
        {
            img: "/assets/images/home-one/client/client-logo3.png",
            number: "458+",
            text: "Airbnb 5 star reviews"
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
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        },
      };

    return (
    <section className="orbia-client-sec pt-120 pb-60">
        <div className="container-fluid">
            <div className="clients-slider">
                <Swiper modules={[Autoplay]} {...settings}>
                {clientData.map((item, i) => (
                    <SwiperSlide key={i}>
                <div className="orbia-client-item style-one">
                    <div className="content">
                        <img src={item.img} alt="client logo" />
                        <p><span>{item.number}</span> {item.text}</p>
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

export default Brand1;