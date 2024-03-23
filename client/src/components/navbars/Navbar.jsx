/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Box, Toolbar } from "@mui/material";
import LOGO from "../assets/logos/solxraf01.png";
import { navbarLinks } from "../../database/NavbarData";
import { NavbarCSS } from "./NavbarCSS";
import NavButton from "../buttons/NavButton";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../router/Router";
import { useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { HeaderCSS } from "./navbarCSS/HeaderCSS";
import SolxrafAnimation from "../animations/SolxrafAnimation";

const Navbar = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState("Login");
  return (
    <div style={{ position: "sticky", top: 0, zIndex: 3 }}>
      <Box sx={NavbarCSS.appbar} elevation={0}>
        <Toolbar>
          <div style={NavbarCSS.image}>
            <img
              src={LOGO}
              style={NavbarCSS.logoImage}
              onClick={() => navigate(HOME)}
            />
            <SolxrafAnimation />
          </div>
          <div style={{ flex: 4, display: "flex", justifyContent: "center" }}>
            {navbarLinks.map((data, i) => (
              <NavButton
                index={i}
                key={i}
                onClick={data.onClick}
                to={data.to}
                name={data.name}
              />
            ))}
          </div>
          <div style={{ flex: 2, display: "flex", justifyContent: "right" }}>
            <PrimaryButton
              className="loginBtn"
              variant="outlined"
              disableElevation
              sx={[HeaderCSS.btn, NavbarCSS.authBtn]}
              onClick={() =>
                login === "Login" ? setLogin("Logout") : setLogin("Login")
              }
            >
              <Avatar className="avatar" sx={HeaderCSS.avatar} />
              {login}
            </PrimaryButton>
          </div>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Navbar;
