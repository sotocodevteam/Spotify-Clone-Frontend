import AuthCard from "../templates/auth-card";
import AuthLayout from "../templates/auth-layout";
import SocialAuth from "../ui/molecules/social-auth";
import LoginForm from "../ui/organims/login-form";
import SingUp from "../ui/organims/sign-up";

const LoginPage = () => {
  return (
    <AuthLayout>
      <AuthCard title="Log in to Spotify">
        <SocialAuth />
        <hr className="divider" />
        <LoginForm />
        <hr className="divider" />
        <SingUp />
      </AuthCard>
    </AuthLayout>
  );
};

export default LoginPage;
