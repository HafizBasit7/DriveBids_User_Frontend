import LoginBox from "../../Components/AuthComponents/LoginBox";
import AuthLayout from "../../Layouts/AuthLayout";

const LoginPage = () => {
  document.title = 'Login';
  return (
    <AuthLayout>
      <LoginBox />
    </AuthLayout>
  );
};

export default LoginPage;
