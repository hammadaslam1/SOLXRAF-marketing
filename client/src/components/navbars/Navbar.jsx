/* eslint-disable jsx-a11y/alt-text */
import { Avatar, Box, Button, IconButton, Toolbar } from "@mui/material";
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
import { useDispatch, useSelector } from "react-redux";
import IMG from "../assets/logos/title_icon.png";
import Menu from "./Menu";
import MenuList from "./Menu";
import { toggleTheme } from "../../reduxStore/theme/ThemeSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.user);
  const [login, setLogin] = useState("Login");

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

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
            {currentUser ? (
              <MenuList
                handleCloseUserMenu={handleCloseUserMenu}
                handleOpenUserMenu={handleOpenUserMenu}
                anchorElUser={anchorElUser}
                image={currentUser.profilePicture}
                name={currentUser.username}
              />
            ) : (
              <PrimaryButton
                className="loginBtn"
                variant="outlined"
                disableElevation
                sx={[HeaderCSS.btn, NavbarCSS.authBtn]}
                onClick={() => navigate(SIGNIN)}
              >
                <Avatar className="avatar" sx={HeaderCSS.avatar} />
                {login}
              </PrimaryButton>
            )}
          </div>
          {/* <Button onClick={() => dispatch(toggleTheme())}>toggle</Button> */}
        </Toolbar>
      </Box>
    </nav>
  );
};

export default Navbar;
