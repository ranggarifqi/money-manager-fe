import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltIsLoggedIn } from "../../store/session/selector";

const Main = () => {
  const isLoggedIn = useAppSelector(sltIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="mx-auto mt-6 flex max-w-sm items-center space-x-4 rounded-xl bg-white p-6 shadow-lg">
      <div className="shrink-0">
        <img
          className="h-12 w-12"
          src="https://mdbootstrap.com/img/new/avatars/1.jpg"
          alt="ChitChat Logo"
        />
      </div>
      <div>
        <div className="text-xl font-medium text-black">Wow, it works!</div>
        <p className="text-slate-500">
          This alert is build with Tailwind CSS classes
        </p>
      </div>
    </div>
  );
};

export default Main;
