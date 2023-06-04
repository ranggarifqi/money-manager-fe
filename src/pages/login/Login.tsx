import Spacer from "../../commons/components/Spacer";
import RippleButton from "../../commons/components/RippleButton";

import loginSVG from "/login.svg";
import TextInput from "../../commons/components/form/TextInput";

const Login = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-main from-40% to-main-50">
      <div className="container h-full max-h-[500px] bg-light-shades flex flex-col sm:flex-row md:flex-wrap items-center justify-start">
        <div className="flex-1 h-full flex items-center p-10">
          <img src={loginSVG} className="w-full" alt="Login" />
        </div>
        <div className="flex-1 p-10 bg-white h-full flex items-center">
          <form>
            <div className="flex flex-row items-center justify-center lg:justify-start">
              <h1 className="mb-0 mr-4">Welcome! Please Login to Continue</h1>
            </div>
            <Spacer height={20} />
            <TextInput label="Email Address" />
            <Spacer height={10} />
            <TextInput label="Password" />
            <Spacer height={20} />
            <RippleButton block>Login</RippleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
