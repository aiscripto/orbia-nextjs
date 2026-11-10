import Image from "next/image";
import Link from "next/link";

const Team4 = () => {
    const teamContent = [
        {img:'/assets/images/innerpage/team/team-img1.jpg', name:'Esther Howard', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img2.jpg', name:'Jenny Wilson', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img3.jpg', name:'Wade Warren', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img4.jpg', name:'Devon Lane', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img5.jpg', name:'Jenny Wilson', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img6.jpg', name:'Devon Lane', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img7.jpg', name:'Esther Howard', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
        {img:'/assets/images/innerpage/team/team-img8.jpg', name:'Wade Warren', content:'President of Sales',pinterest:'#',facebook:'#',twitter:'#',linkedin:'#'},
      ];
    return (
            <section className="orbia-team-sec pt-120 pb-90">
                <div className="container">
                    <div className="row">
                        {teamContent.map((item, i) => (
                        <div key={i} className="col-xl-3 col-md-6 col-sm-12">
                            <div className="orbia-team-item style-one mb-30" data-aos="fade-up" data-aos-duration="1000">
                                <div className="member-image">
                                    <Image src={item.img} alt="img" width={285} height={246}   />
                                </div>
                                <div className="member-info">
                                    <h4 className="title"><Link href="/team/team-details">{item.name}</Link></h4>
                                    <span className="position">{item.content}</span>
                                    <div className="social-box">
                                        <a href={item.facebook}><i className="bi bi-facebook"></i></a>
                                        <a href={item.twitter}><i className="bi bi-twitter-x"></i></a>
                                        <a href={item.linkedin}> <i className="bi bi-linkedin"></i></a>
                                        <a href={item.pinterest}><i className="bi bi-pinterest"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                         ))}
                    </div>
                </div>
            </section>
    );
};

export default Team4;