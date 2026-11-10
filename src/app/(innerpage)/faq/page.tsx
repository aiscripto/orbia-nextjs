import BreadCumb from "@/app/Components/Common/BreadCumb";
import Faq1 from "@/app/Components/Faq/Faq1";

const page = () => {
  return (
    <div>
        <BreadCumb Title="FAQs" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
        <Faq1/>      
    </div>
  );
};

export default page;