import About4 from "@/app/Components/About/About4";
import About5 from "@/app/Components/About/About5";
import Brand2 from "@/app/Components/Brand/Brand2";
import BreadCumb from "@/app/Components/Common/BreadCumb";
import Counter1 from "@/app/Components/Counter/Counter1";
import Cta4 from "@/app/Components/Cta/Cta4";
import Process1 from "@/app/Components/Process/Process1";
import Team1 from "@/app/Components/Team/Team1";
import Technology3 from "@/app/Components/Technology/Technology3";
import Testimonial3 from "@/app/Components/Testimonial/Testimonial3";

const page = () => {
  return (
    <div>
      <BreadCumb Title="About Us" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
      <About4/>
      <Counter1/>
      <Cta4/>
      <About5/>
      <Process1/>
      <Team1/>
      <Technology3/>
      <Brand2/>
      <Testimonial3/>      
    </div>
  );
};

export default page;