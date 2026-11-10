import About2 from "../Components/About/About2";
import Blog2 from "../Components/Blog/Blog2";
import Cta1 from "../Components/Cta/Cta1";
import Faq1 from "../Components/Faq/Faq1";
import Feature1 from "../Components/Feature/Feature1";
import HeroBanner2 from "../Components/HeroBanner/HeroBanner2";
import Marquee2 from "../Components/Marquee/Marquee2";
import Pricing2 from "../Components/Pricing/Pricing2";
import Project2 from "../Components/Project/Project2";
import Services2 from "../Components/Services/Services2";
import Team2 from "../Components/Team/Team2";
import Technology2 from "../Components/Technology/Technology2";
import Testimonial2 from "../Components/Testimonial/Testimonial2";
import Video1 from "../Components/Video/Video1";

const page = () => {
    return (
        <div className="home-two">
            <HeroBanner2/>
            <About2/>
            <Services2/>
            <Project2/>
            <Marquee2/>
            <Technology2/>
            <Cta1/>
            <Team2/>
            <Testimonial2/>
            <Faq1/>
            <Video1/>
            <Feature1/>
            <Pricing2/>
            <Blog2/>
        </div>
    );
};

export default page;