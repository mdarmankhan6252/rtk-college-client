import { Outlet } from "react-router-dom";
import Nav from "../shared/Nav";
import Footer from "../shared/Footer";
import ScrollToTop from "../components/ScrollToTop";

const Root = () => {
   return (
      <div className="overflow-hidden">
         <Nav />
         <ScrollToTop />
         <Outlet />
         <Footer />
      </div>
   );
};

export default Root;