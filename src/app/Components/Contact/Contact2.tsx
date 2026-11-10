"use client"
import Image from "next/image";
import { useState } from "react";

const Contact2 = () => {

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

    const bgImage = '/assets/images/home-three/bg/contact-bg.jpg';
    return (
        <section className="orbia-contact_two bg_cover pt-120 pb-100" style={{ backgroundImage: `url(${bgImage})`}} >
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-10">
                        <div className="contact-wrapper mb-5 mb-xl-0" data-aos="fade-up" data-aos-duration="1000">
                            <span className="sub-title">Response time: 1 hours</span>
                            <h3>Tell details about your project</h3>
                            <p>Just fill out the form and our global experts will be in touch right away with package and price solution to help you!</p>
                            <form>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" className="form_control" placeholder="Full name" name="name" required /> 
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="email" className="form_control" placeholder="Your Email" name="email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea className="form_control" placeholder="Your Message" rows={4} name="message"></textarea>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <label className="form-check-label" htmlFor="checkbox1">
                                                <input className="form-check-input" type="checkbox" name="checkbox" id="checkbox1" />Subscribe to Newsletter
                                            </label>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="author-thumb-item">
                                            <div className="author-thumb">
                                                <Image src="/assets/images/home-three/contact/author-img1.jpg" alt="img" width={53} height={53}   />
                                            </div>
                                            <div className="author-info">
                                                <h5>Richard Martines</h5>
                                                <span className="position">Support Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group text-lg-end">
                                            <button className="theme-btn style-one">View All Price<i className="bi bi-arrow-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-10">
                        <div className="orbia-content-box" data-aos="fade-up" data-aos-duration="1200">
                            <div className="section-title mb-30">
                                <span className="sub-title">FAQ</span>
                                <h2>Learn more from FAQs</h2>
                                <p>We’ve heard it all. Here’s everything you need to know before working with us.</p>
                            </div>

                            <div className="orbia-contact-accordion">
                                <div className="tab-content">

                                    <div className="tab-area" id="tab1">
                                        <div data-aos="fade-up" data-aos-duration="1000">

                                            {faqs.map((item, index) => (
                                                <div key={index} className="accordion-card style-two mb-20">
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact2;