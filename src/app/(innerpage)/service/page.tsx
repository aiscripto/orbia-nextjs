import BreadCumb from "@/app/Components/Common/BreadCumb";
import Feature4 from "@/app/Components/Feature/Feature4";
import Pricing2 from "@/app/Components/Pricing/Pricing2";
import Services3 from "@/app/Components/Services/Services3";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Our Services" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
      <Services3/>
      <Feature4/>
      <Pricing2/>
    </div>
  );
};

export default page;