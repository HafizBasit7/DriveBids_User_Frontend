import ResetPassword from "../../Components/AuthComponents/ResetPassword";
import AuthLayout from "../../Layouts/AuthLayout";

const ResetPasswordPage = () => {
  document.title = 'Set new password';
  return (
    <AuthLayout>
      <ResetPassword />
    </AuthLayout>
  );
};

export default ResetPasswordPage;
