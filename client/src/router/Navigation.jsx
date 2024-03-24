import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BLOGS, CONTACT, HOME, SERVICES, SIGNIN, SIGNUP } from "./Router";
import Home from "../screens/Home";
import Blogs from "../screens/Blogs";
import Contact from "../screens/Contact";
import Navbar from "../components/navbars/Navbar";
import "../styles/global.css";
import Footer from "../components/navbars/Footer";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Services from "../screens/Services";

const Navigation = () => {
  return (
    <div className="navigations">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={HOME} element={<Home />} />
          <Route path={SIGNIN} element={<Signin />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route path={SERVICES} element={<Services />} />
          <Route path={BLOGS} element={<Blogs />} />
          <Route path={CONTACT} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
