import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { socialLinks } from "../../database/NavbarData";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Footer = () => {
  useEffect(()=>{
    AOS.init()
  }, [])
  return (
    <div data-aos="zoom-out-up" data-aos-duration="5000">
      <Box className="bg-[#304FA1]" >
      <Toolbar sx={{ paddingY: "80px", alignItems: "unset !important", color: '#fff' }}>
        <div style={{ flex: 7, padding: 5 }}>
          <Typography variant="h4" data-aos="zoom-out-right" data-aos-duration="5000">
            It's Time to Pull in a{" "}
            <span style={{ fontWeight: 600 }}>Professional</span>
          </Typography>
        </div>
        <div style={{ flex: 4, padding: 5 }}>
          <Typography variant="h6" data-aos="zoom-out-up" data-aos-duration="5000">Menu</Typography>
          <ul>
            <li data-aos="zoom-out-up" data-aos-duration="5000">Homepage</li>
            <li data-aos="zoom-out-up" data-aos-duration="5000">Case Study</li>
            <li data-aos="zoom-out-up" data-aos-duration="5000">Portfolio</li>
            <li data-aos="zoom-out-up" data-aos-duration="5000">Blogs</li>
            <li data-aos="zoom-out-up" data-aos-duration="5000">Contact</li>
          </ul>
        </div>
        <div style={{ flex: 5, padding: 5 }}>
          <Typography variant="h6" data-aos="zoom-out-left" data-aos-duration="5000">Contact</Typography>
          <div style={{ display: "flex" }}>
            {socialLinks.map((data, i) => (
              <IconButton size="small"  data-aos="zoom-out-left" data-aos-duration="5000">{data.icon}</IconButton>
            ))}
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
