import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltIsLoggedIn } from "../../store/session/selector";
import Footer from "./components/Footer";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import { useState } from "react";
import Spacer from "../../commons/components/Spacer";
import { AnyCallback } from "../../commons/types/general";

export type OutletContext = AnyCallback[];

const Main = () => {
  const isLoggedIn = useAppSelector(sltIsLoggedIn);

  const [title, setTitle] = useState("");
  const [breadcrumb, setBreadcrumb] = useState<string[]>([]);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen">
      <SideNav />
      <div id="content" className="flex flex-col justify-between h-screen">
        <Header />
        <div className="flex-1 p-8 bg-gray-300">
          <div>{breadcrumb.join(" > ")}</div>
          <h1>{title}</h1>
          <Spacer height={20} />
          <Outlet context={[setTitle, setBreadcrumb]} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Main;
