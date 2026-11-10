"use client"
import Image from "next/image";
import { useState } from "react";

const Faq1 = () => {

    const faqs = [
        {
            question: "What industries can benefit from your AI solutions?",
            answer: "Not at all. We build user-friendly AI platforms with simple dashboards and integrations. Our team handles the technical complexity.",
        },
        {
            question: "Do I need technical knowledge to use your AI services?",
            answer: "Not at all. We build user-friendly AI platforms with simple dashboards and integrations. Our team handles the technical complexity.",
        },
        {
            question: "How secure is my data with your AI systems?",
            answer: "Not at all. We build user-friendly AI platforms with simple dashboards and integrations. Our team handles the technical complexity.",
        },
        {
            question: "How long does it take to implement an AI solution?",
            answer: "Not at all. We build user-friendly AI platforms with simple dashboards and integrations. Our team handles the technical complexity.",
        },
    ];

   const [activeId, setActiveId] = useState<number | null>(1);
    const toggleAccordion = (id: number) => {
        setActiveId((prev) => (prev === id ? null : id));
    };   

    return (
        <section className="orbia-faq-sec pt-120 pb-95">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-10">
                        <div className="faq-image mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                            <Image src="/assets/images/innerpage/faq/faq-img1.png" alt="img" width={626} height={626}   />
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="orbia-content-box">
                            <div className="section-title mb-40">
                                <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">FAQ</span>
                                <h2 className="text-anm">We are here to answer all your questions</h2>
                            </div>
                            <div className="accordion" id="accordionOne" data-aos="fade-up" data-aos-duration="1000">
                                {faqs.map((item, index) => (
                                    <div key={index} className="accordion-card style-one mb-25">
                                    <div className="accordion-header">
                                        <h6
                                        className="accordion-title"
                                        onClick={() => toggleAccordion(index)}
                                        >
                                        {item.question}
                                        </h6>
                                    </div>
                                    {activeId === index && (
                                    <div className={`accordion-collapse ${activeId === index ? "show" : ""}`}>
                                        <div className="accordion-content">
                                        <p>{item.answer}</p>
                                        </div>
                                    </div>
                                    )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Faq1;