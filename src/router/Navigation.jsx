import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BLOGS, CASE_STUDY, CONTACT, HOME, PORTFOLIO } from "./Router";
import Home from "../screens/Home";
import CaseStudy from "../screens/CaseStudy";
import Portfolio from "../screens/Portfolio";
import Blogs from "../screens/Blogs";
import Contact from "../screens/Contact";
import Navbar from "../components/navbars/Navbar";
import "../styles/global.css";
import Footer from "../components/navbars/Footer";

const Navigation = () => {
  return (
    <div className="navigations">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={HOME} element={<Home />} />
          <Route path={CASE_STUDY} element={<CaseStudy />} />
          <Route path={PORTFOLIO} element={<Portfolio />} />
          <Route path={BLOGS} element={<Blogs />} />
          <Route path={CONTACT} element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
