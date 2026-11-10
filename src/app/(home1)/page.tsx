import About1 from "../Components/About/About1";
import Blog1 from "../Components/Blog/Blog1";
import Brand1 from "../Components/Brand/Brand1";
import Contact1 from "../Components/Contact/Contact1";
import HeroBanner1 from "../Components/HeroBanner/HeroBanner1";
import HowWork1 from "../Components/HowWork/HowWork1";
import Marquee1 from "../Components/Marquee/Marquee1";
import Pricing1 from "../Components/Pricing/Pricing1";
import Project1 from "../Components/Project/Project1";
import Services1 from "../Components/Services/Services1";
import Team1 from "../Components/Team/Team1";
import Technology1 from "../Components/Technology/Technology1";
import Testimonial1 from "../Components/Testimonial/Testimonial1";
import WhyChoose1 from "../Components/WhyChoose/WhyChoose1";

const page = () => {
    return (
        <div>
            <HeroBanner1/>
            <About1/>
            <Services1/> 
            <Project1/> 
            <Marquee1/>
            <WhyChoose1/>
            <Brand1/>
            <HowWork1/>
            <Testimonial1/>
            <Technology1/>
            <Pricing1/>
            <Team1/>
            <Contact1/>
            <Blog1/>
        </div>
    );
};

export default page;