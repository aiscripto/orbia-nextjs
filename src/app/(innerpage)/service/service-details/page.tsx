import BreadCumb from "@/app/Components/Common/BreadCumb";
import ServiceDetails from "@/app/Components/ServiceDetails/ServiceDetails";

const page = () => {
  return (
    <div>
            <BreadCumb Title="Services Details" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
            <ServiceDetails/>      
    </div>
  );
};

export default page;