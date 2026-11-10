import BlogDetails from "@/app/Components/BlogDetails/BlogDetails";
import BreadCumb from "@/app/Components/Common/BreadCumb";

const page = () => {
  return (
    <div>
        <BreadCumb Title="Blog Details" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
        <BlogDetails/>      
    </div>
  );
};

export default page;