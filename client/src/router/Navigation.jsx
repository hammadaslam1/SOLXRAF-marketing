import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BLOGPAGE,
  BLOGS,
  CONTACT,
  DASHBOARD,
  HOME,
  SERVICES,
  SIGNIN,
  SIGNUP,
} from "./Router";
import Home from "../screens/Home";
import Blogs from "../screens/Blogs";
import Contact from "../screens/Contact";
import Navbar from "../components/navbars/Navbar";
import "../styles/global.css";
import Footer from "../components/navbars/Footer";
import Signin from "../screens/Signin";
import Signup from "../screens/Signup";
import Services from "../screens/Services";
import BlogPage from "../screens/BlogPage";
import Dashboard from "../screens/Dashboard";
import PrivateRoute from "../components/private/PrivateRoute";

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
          <Route path={BLOGPAGE} element={<BlogPage />} />
          <Route element={<PrivateRoute />}>
            <Route path={DASHBOARD} element={<Dashboard />} />
          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
