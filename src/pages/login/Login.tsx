import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as yup from "yup";

import Spacer from "../../commons/components/Spacer";
import RippleButton from "../../commons/components/buttons/RippleButton";

import loginSVG from "/login.svg";
import TextInput from "../../commons/components/form/TextInput";
import { useLoginMutation } from "../../store/session/api";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltIsLoggedIn, sltSessionError } from "../../store/session/selector";
import Spinner from "../../commons/components/Spinner";
import { Navigate } from "react-router-dom";

const formSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof formSchema>;

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: yupResolver(formSchema),
  });

  const sessionError = useAppSelector(sltSessionError);
  const isLoggedIn = useAppSelector(sltIsLoggedIn);

  const [login, loginState] = useLoginMutation();

  const onSubmit = handleSubmit((data) => {
    login({
      email: data.email,
      password: data.password,
    });
  });

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

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
              {...register("email")}
              errorText={errors.email?.message ?? undefined}
            />
            <Spacer height={10} />
            <TextInput
              type="password"
              label="Password"
              {...register("password")}
              errorText={errors.password?.message ?? undefined}
            />
            <Spacer height={20} />
            {loginState.isLoading ? (
              <Spinner />
            ) : (
              <>
                <RippleButton block type="submit">
                  Login
                </RippleButton>
                {sessionError && (
                  <p className="text-danger text-sm mt-1">{sessionError}</p>
                )}
              </>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
