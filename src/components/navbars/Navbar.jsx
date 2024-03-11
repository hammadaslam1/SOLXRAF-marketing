/* eslint-disable jsx-a11y/alt-text */
import { AppBar, Toolbar } from "@mui/material";
import LOGO from "../assets/logos/solxraf_navbar.png";

const Navbar = () => {
  return (
    <AppBar sx={{ backgroundColor: "#304FA1", px: "50px" }}>
      <Toolbar sx={{ display: "flex" }}>
        <div style={{ flex: 1 }}>
          <img src={LOGO} style={{ width: "10vw" }} />
        </div>
        <div style={{ flex: 4, backgroundColor: '#f00' }}>links</div>
        <div style={{ flex: 1, backgroundColor: '#0f0' }}>social</div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
