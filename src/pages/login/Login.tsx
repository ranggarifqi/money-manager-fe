import { useEffect } from "react";
import { initTE, Button, Ripple } from "tw-elements";

const Login = () => {
  useEffect(() => {
    initTE({ Button, Ripple });
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-main">
      <div className="container bg-light-shades">
        <div className="grid grid-cols-2">
          <div className="bg-dark-accent">Image</div>
          <div>
            <p className="font-nunito">Login page</p>
            <p>Login page</p>
            <p>Login page</p>
            <p>Login page</p>
            <p>Login page</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
