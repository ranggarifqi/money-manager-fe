import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltIsLoggedIn } from "../../store/session/selector";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNav from "./components/SideNav";

const Main = () => {
  const isLoggedIn = useAppSelector(sltIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <SideNav />
      <div id="content" className="h-screen flex flex-col justify-between">
        <Header />
        <div className="h-full p-8 bg-light-shades">
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Main;
