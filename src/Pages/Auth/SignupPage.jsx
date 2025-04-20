import Signup from "../../Components/AuthComponents/SignupBox";
import AuthLayout from "../../Layouts/AuthLayout";

const SignupPage = () => {
  document.title = 'Create Account';
  return (
    <AuthLayout>
      <Signup/>
    </AuthLayout>
  );
};

export default SignupPage;
