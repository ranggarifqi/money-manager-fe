import { useEffect } from "react";
import { initTE, Input } from "tw-elements";
import Spacer from "../../commons/components/Spacer";
import RippleButton from "../../commons/components/RippleButton";

import loginSVG from "/login.svg";

const Login = () => {
  useEffect(() => {
    initTE({ Input });
  }, []);

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
            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="text"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput2"
                placeholder="Email address"
              />
              <label
                htmlFor="exampleFormControlInput2"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Email address
              </label>
            </div>

            <div className="relative mb-6" data-te-input-wrapper-init>
              <input
                type="password"
                className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                id="exampleFormControlInput22"
                placeholder="Password"
              />
              <label
                htmlFor="exampleFormControlInput22"
                className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
              >
                Password
              </label>
            </div>

            <RippleButton block>Login</RippleButton>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
