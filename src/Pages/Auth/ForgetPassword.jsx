import ForgetPassword from "../../Components/AuthComponents/ForgetPassword";
import AuthLayout from "../../Layouts/AuthLayout";

const ForgetPasswordPage = () => {
  document.title = 'Reset Password';
  return (
    <AuthLayout>
      <ForgetPassword />
    </AuthLayout>
  );
};

export default ForgetPasswordPage;
