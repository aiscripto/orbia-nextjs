import BreadCumb from "@/app/Components/Common/BreadCumb";
import TeamDetails from "@/app/Components/TeamDetails/TeamDetails";

const page = () => {
  return (
    <div>
        <BreadCumb Title="Team Details" bgimg="/assets/images/innerpage/bg/page-bg.jpg" />
        <TeamDetails/>      
    </div>
  );
};

export default page;