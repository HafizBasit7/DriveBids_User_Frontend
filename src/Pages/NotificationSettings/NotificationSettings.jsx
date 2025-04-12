import { useNavigate } from "react-router-dom";
import MainLayout from "../../Layouts/MainLayout";


const NotificationSettings = () => {
  const navigate = useNavigate();


  return (
    <MainLayout
      title="Notification Settings"
      subtitle='Update Notification Settings'
      buttonText="Back"
      onClick={() => navigate("/home")}
      isnotSellMyCar={true}
    >
        
    </MainLayout>
  );
};

export default NotificationSettings;