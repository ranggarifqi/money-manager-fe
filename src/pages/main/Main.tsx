import { Navigate } from "react-router-dom";
import { useAppSelector } from "../../commons/hooks/useAppSelector";
import { sltIsLoggedIn } from "../../store/session/selector";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Main = () => {
  const isLoggedIn = useAppSelector(sltIsLoggedIn);

  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="h-screen flex flex-col justify-between">
      <Header />
      <div className="h-full">
        Content
      </div>
      <Footer />
    </div>
  );
};

export default Main;
