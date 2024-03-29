/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Box, Toolbar } from "@mui/material";
import LOGO from "../assets/logos/solxraf01.png";
import { navbarLinks } from "../../database/NavbarData";
import { NavbarCSS } from "./NavbarCSS";
import NavButton from "../buttons/NavButton";
import { useNavigate } from "react-router-dom";
import { HOME, SIGNIN } from "../../router/Router";
import { useEffect, useState } from "react";
import PrimaryButton from "../buttons/PrimaryButton";
import { HeaderCSS } from "./navbarCSS/HeaderCSS";
import SolxrafAnimation from "../animations/SolxrafAnimation";
import { useSelector } from "react-redux";
import IMG from "../assets/logos/title_icon.png";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [login, setLogin] = useState("Login");
  console.log(currentUser.profilePicture);

  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isVisible = prevScrollPos > currentScrollPos;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      id="navbar"
      style={{
        position: "sticky",
        // top: 0,
        width: "100%",
        transition: "top 0.3s",
        zIndex: 1000,
        backgroundColor: "white",
        // Adjust other styles as needed
        top: visible ? "0" : "-100px", // Adjust the offset to hide the navbar completely
      }}
    >
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
              onClick={() => navigate(SIGNIN)}
            >
              <Avatar
                src={
                  currentUser.profilePicture ? currentUser.profilePicture : ""
                }
                className="avatar"
                sx={HeaderCSS.avatar}
              >
                {/* {currentUser.profilePicture ? currentUser.profilePicture : IMG} */}
              </Avatar>
              {currentUser ? currentUser.name.split(" ")[0] : login}
            </PrimaryButton>
          </div>
        </Toolbar>
      </Box>
    </nav>
  );
};

export default Navbar;
