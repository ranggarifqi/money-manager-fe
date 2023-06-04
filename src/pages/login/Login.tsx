import { useEffect } from "react";
import { initTE, Button, Ripple } from "tw-elements";

const Login = () => {
  useEffect(() => {
    initTE({ Button, Ripple });
  }, []);

  return (
    <div>
      <p>Login page</p>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="inline-block rounded text-white bg-main"
      >
        Click me
      </button>
    </div>
  );
};

export default Login;
