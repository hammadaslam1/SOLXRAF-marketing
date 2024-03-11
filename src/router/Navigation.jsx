import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HOME } from "./Router";
import Home from "../screens/Home";
import Navbar from "../components/navbars/Navbar";

const Navigation = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path={HOME} element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Navigation;
