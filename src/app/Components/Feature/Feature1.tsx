"use client"
import Image from "next/image";
import { useState } from "react";

const Feature1 = () => {

 const featuresData = [
    {
        title: "Predictive Analytics",
        tabTitle: "Predictive Analytics",
        image: "/assets/images/home-two/gallery/feature-img1.jpg",
        contentTitle: "Predictive Analytics",
        description:
        "Yes, our solutions are built with flexible APIs that make integration easy with your current tech stack - whether it's CRM, ERP, cloud platforms, or custom software.",
        counters: [
        { number: "70+", text: "Support for Global Language" },
        { number: "4X", text: "Faster Content Production" },
        { number: "24/7", text: "Customer Support." },
        ],
        checklist: [
        "Advanced Artificial Intelligence Capabilities for Enhanced Efficiency.",
        "Real-time Data Analysis and Monitoring for Optimized Performance.",
        ],
    },
    {
        title: "Natural Language Processing",
        tabTitle: "Natural Language Processing",
        image: "/assets/images/home-two/gallery/feature-img1.jpg",
        contentTitle: "Natural Language Processing",
        description:
        "Yes, our solutions are built with flexible APIs that make integration easy with your current tech stack - whether it's CRM, ERP, cloud platforms, or custom software.",
        counters: [
        { number: "60+", text: "Support for Global Language" },
        { number: "3X", text: "Faster Content Production" },
        { number: "24/7", text: "Customer Support." },
        ],
        checklist: [
        "Advanced Artificial Intelligence Capabilities for Enhanced Efficiency.",
        "Real-time Data Analysis and Monitoring for Optimized Performance.",
        ],
    },
    {
        title: "AI Automation",
        tabTitle: "Ai Automation",
        image: "/assets/images/home-two/gallery/feature-img1.jpg",
        contentTitle: "AI Automation",
        description:
        "Yes, our solutions are built with flexible APIs that make integration easy with your current tech stack - whether it's CRM, ERP, cloud platforms, or custom software.",
        counters: [
        { number: "90+", text: "Support for Global Language" },
        { number: "5X", text: "Faster Content Production" },
        { number: "24/7", text: "Customer Support." },
        ],
        checklist: [
        "Advanced Artificial Intelligence Capabilities for Enhanced Efficiency.",
        "Real-time Data Analysis and Monitoring for Optimized Performance.",
        ],
    },
    {
        title: "AI Voiceover",
        tabTitle: "AI Voiceover",
        image: "/assets/images/home-two/gallery/feature-img1.jpg",
        contentTitle: "AI Voiceover",
        description:
        "Yes, our solutions are built with flexible APIs that make integration easy with your current tech stack - whether it's CRM, ERP, cloud platforms, or custom software.",
        counters: [
        { number: "80+", text: "Support for Global Language" },
        { number: "7X", text: "Faster Content Production" },
        { number: "24/7", text: "Customer Support." },
        ],
        checklist: [
        "Advanced Artificial Intelligence Capabilities for Enhanced Efficiency.",
        "Real-time Data Analysis and Monitoring for Optimized Performance.",
        ],
    },
    ];

    const [activeTab, setActiveTab] = useState(0);

    return (
 <section className="orbia-features_one pt-115 pb-120">
      <div className="container">
        <div className="row align-items-end">
          <div className="col-lg-8">
            <div className="section-title mb-50">
              <span className="sub-title">Our Features</span>
              <h2 className="text-anm">
                Innovative elements that propel change in the real world
              </h2>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="orbia-support-box float-lg-end mb-60">
              <div className="thumb">
                <Image src="/assets/images/home-two/gallery/support-img.jpg" alt="img" width={78} height={78}   />
                <div className="icon">
                  <i className="bi bi-telephone"></i>
                </div>
              </div>
              <div className="info">
                <h5>Richard Martines</h5>
                <span className="position">Designer</span>
              </div>
            </div>
          </div>
        </div>
        <div className="features-wrapper">
          <ul className="nav nav-tabs mb-40">
            {featuresData.map((item, index) => (
              <li key={index}>
                <button
                  className={`nav-link ${activeTab === index ? "active" : ""}`}
                  onClick={() => setActiveTab(index)}
                >
                  {item.tabTitle}
                </button>
              </li>
            ))}
          </ul>
          <div className="tab-content">
            {featuresData.map((item, index) => (
              <div
                key={index}
                className={`tab-pane fade ${
                  activeTab === index ? "show active" : ""
                }`}
              >
                <div className="row align-items-center">
                  <div className="col-xl-6">
                    <div className="orbia-content-box mb-5 mb-xl-0">
                      <h4 className="title">{item.contentTitle}</h4>
                      <p>{item.description}</p>
                      <div className="counter-box-wrapper">
                        <div className="row">
                          {item.counters.map((c, i) => (
                            <div className="col-md-4" key={i}>
                              <div className="orbia-counter-box mb-25">
                                <div className="content">
                                  <h3>{c.number}</h3>
                                  <h6>{c.text}</h6>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <ul className="check-list style-one">
                        {item.checklist.map((text, i) => (
                          <li key={i}>
                            <i className="bi bi-check-circle-fill"></i>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="col-xl-6">
                    <div className="orbia-image">
                      <Image src={item.image} alt="img" width={573} height={360}   />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    );
};

export default Feature1;