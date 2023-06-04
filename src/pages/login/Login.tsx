import Spacer from "../../commons/components/Spacer";
import RippleButton from "../../commons/components/RippleButton";

import loginSVG from "/login.svg";
import TextInput from "../../commons/components/form/TextInput";
import { useForm } from "react-hook-form";

interface FormData {
  email: string;
  password: string;
}

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-main from-40% to-main-50">
      <div className="container h-full max-h-[500px] bg-light-shades flex flex-col sm:flex-row md:flex-wrap items-center justify-start">
        <div className="flex-1 h-full flex items-center p-10">
          <img src={loginSVG} className="w-full" alt="Login" />
        </div>
        <div className="flex-1 p-10 bg-white h-full flex items-center">
          <form onSubmit={onSubmit}>
            <h1 className="mb-0 mr-4">Welcome! Please Login to Continue</h1>
            <Spacer height={20} />
            <TextInput
              label="Email Address"
              {...register("email", { required: "Email Address is required" })}
              errorText={errors.email?.message ?? undefined}
            />
            <Spacer height={10} />
            <TextInput
              label="Password"
              {...register("password", { required: "Password is required" })}
              errorText={errors.password?.message ?? undefined}
            />
            <Spacer height={20} />
            <RippleButton block type="submit">
              Login
            </RippleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
