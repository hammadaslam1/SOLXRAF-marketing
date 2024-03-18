/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";
import LOGO from "../assets/logos/solxraf_navbar.png";
import { navbarLinks, socialLinks } from "../../database/NavbarData";
import { NavbarCSS } from "./NavbarCSS";
import NavButton from "../buttons/NavButton";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../router/Router";

const Navbar = () => {
  const navigate = useNavigate();
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
          <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
            {socialLinks.map((data, i) => (
              <IconButton size="small" target="_blank" href={data.to}>
                {data.icon}
              </IconButton>
            ))}
          </div>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Navbar;
