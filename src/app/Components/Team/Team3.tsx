import Image from "next/image";
import Link from "next/link";

const Team3 = () => {

    const teamContent = [
        {img:'/assets/images/home-three/team/team-img1.jpg', name:'Esther Howard', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/home-three/team/team-img2.jpg', name:'Jenny Wilson', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/home-three/team/team-img3.jpg', name:'Wade Warren', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];

    return (
        <section className="orbia-team_two pt-55 pb-80">
            <div className="container">
                <div className="row align-items-end">
                    <div className="col-xl-7 col-lg-8">
                        <div className="section-title mb-50">
                            <span className="sub-title" data-aos="fade-down" data-aos-duration="1000">Our Expert</span>
                            <h2 className="text-anm">Meet the Creative Minds Behind Our AI Innovations</h2>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4">
                        <div className="text-box mb-60 float-lg-end" data-aos="fade-up" data-aos-duration="1000">
                            <h2>200+</h2>
                            <h4>Awesome Team Members</h4>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {teamContent.map((item, i) => (
                    <div key={i} className="col-xl-3 col-md-6 col-sm-12">
                        <div className="orbia-team-item style-two mb-40" data-aos="fade-up" data-aos-duration="1000">
                            <div className="member-image">
                                <Image src={item.img} alt="img" width={220} height={252}   />
                                <div className="shape"><Image src="/assets/images/home-three/team/team-shape2.png" alt="img" width={136} height={195}   /></div>
                                <div className="social-box">
                                    <a href={item.facebook}><i className="bi bi-facebook"></i></a>
                                    <a href={item.twitter}><i className="bi bi-twitter-x"></i></a>
                                    <a href={item.linkedin}> <i className="bi bi-linkedin"></i></a>
                                    <a href={item.pinterest}><i className="bi bi-pinterest"></i></a>
                                </div>
                            </div>
                            <div className="member-info">
                                <h4 className="title"><Link href="/team/team-details">{item.name}</Link></h4>
                                <span className="position">{item.content}</span>
                            </div>
                        </div>
                    </div>
                     ))}

                    <div className="col-xl-3 col-md-6 col-sm-12">
                        <div className="team-content-box mb-40" data-aos="fade-up" data-aos-duration="1600">
                            <div className="shape"><Image src="/assets/images/home-three/team/team-shape.png" alt="img" width={255} height={397}   /></div>
                            <div className="content">
                                <h4>You Can Be Here</h4>
                                <p>We value curiosity, collaboration, and a can-do attitude. Oh, and coffee—lots of coffee. Come join a team that celebrates your unique skills and helps you unlock your full potential.</p>
                                <Link href="/team" className="theme-btn style-one">Meet The Team <i className="bi bi-arrow-right"></i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team3;