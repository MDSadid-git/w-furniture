import { useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Footer/Footer";
import WeChatWhatsup from "../../Components/WeChatWhatsup/WeChatWhatsup";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";

const Main = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return (
    <div>
      <Navbar />
      <WeChatWhatsup />
      <Outlet />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Main;
