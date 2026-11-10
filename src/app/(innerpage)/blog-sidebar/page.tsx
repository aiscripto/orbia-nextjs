import BlogStandard from "@/app/Components/BlogStandard/BlogStandard";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
      <BreadCumb Title="Blog Standard" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
      <BlogStandard/>      
    </div>
  );
};

export default page;