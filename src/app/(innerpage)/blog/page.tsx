import Blog4 from "@/app/Components/Blog/Blog4";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Blog Grid" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
      <Blog4/>      
    </div>
  );
};

export default page;