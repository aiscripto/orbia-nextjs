import BreadCumb from "@/app/Components/Common/BreadCumb";
import ProjectDetails from "@/app/Components/ProjectDetails/ProjectDetails";

const page = () => {
  return (
    <div>
        <BreadCumb Title="Project Details" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
        <ProjectDetails/>      
    </div>
  );
};

export default page;