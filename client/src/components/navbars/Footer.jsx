import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { navbarLinks, socialLinks } from "../../database/NavbarData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div>
      <Box className="bg-[#304FA1]">
        <Toolbar
          sx={{
            paddingY: "80px",
            alignItems: "unset !important",
            color: "#fff",
            flexWrap: "wrap",
          }}
        >
          <div style={{ flex: 6, padding: 5 }}>
            <Typography
              // variant="h5"
              fontSize={"clamp(1.2rem, 2.5vw, 1.8rem)"}
              fontFamily="Krona One"
            >
              <Typography
                variant="h4"
                sx={{
                  display: "inline",
                  fontWeight: 600,
                  fontFamily: "krona one",
                }}
              >
                SOLXRAF{" "}
              </Typography>
              Your Sales Partner
            </Typography>
            <Typography variant="h6" fontFamily={'Krona One'} letterSpacing={5} fontSize={"clamp(1.5rem, 1vw, 2rem)"}>
              Let Us Fire up 🔥 your Sales
            </Typography>
          </div>
          <div style={{ flex: 5, padding: 5, display: "flex" }}>
            <div style={{ flex: 4, padding: 5 }}>
              <Typography variant="h4" fontFamily={"Krona One"}>
                Menu
              </Typography>
              <div className="font-['Krona_One'] text-lg">
                {navbarLinks.map((data, i) => (
                  <Link key={i} to={data.to} style={{ display: "block" }}>
                    {data.name}
                  </Link>
                ))}
              </div>
            </div>
            <div style={{ flex: 5, padding: 5 }}>
              <Typography variant="h4" fontFamily={"Krona One"}>
                Contact
              </Typography>
              <Typography variant="body1" fontFamily={"Krona One"}>
                <Link to={"mailto:info@solxraf.com"}>info@solxraf.com</Link>
              </Typography>
              <Typography variant="body1" fontFamily={"Krona One"}>
                <Link to={"tel:+923041395525"}>+ (92) 304 1395525</Link>
              </Typography>
              <div style={{ display: "flex" }}>
                {socialLinks.map((data, i) => (
                  <IconButton size="small">{data.icon}</IconButton>
                ))}
              </div>
            </div>
          </div>
        </Toolbar>
        <Toolbar
          sx={{
            backgroundColor: "#0002",
            height: "100px",
            paddingX: "50px !important",
          }}
        >
          <Typography variant="" sx={{ fontWeight: 600, color: "#fff" }}>
            &copy; SolXraf. All Rights Reserved
          </Typography>
        </Toolbar>
      </Box>
    </div>
  );
};

export default Footer;
