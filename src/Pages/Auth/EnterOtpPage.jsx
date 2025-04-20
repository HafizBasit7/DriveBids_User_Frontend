import Enteropt from "../../Components/AuthComponents/EnterOtp";
import AuthLayout from "../../Layouts/AuthLayout";

const EnterOtpPage = () => {
  document.title = 'Enter Otp';
  return (
    <AuthLayout>
      <Enteropt />
    </AuthLayout>
  );
};

export default EnterOtpPage;
