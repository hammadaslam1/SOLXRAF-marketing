import { Box, IconButton, Toolbar, Typography } from "@mui/material";
import { socialLinks } from "../../database/NavbarData";

const Footer = () => {
  return (
    <Box className="bg-[#304FA1]">
      <Toolbar sx={{ paddingY: "80px", alignItems: "unset !important", color: '#fff' }}>
        <div style={{ flex: 7, padding: 5 }}>
          <Typography variant="h4">
            It's Time to Pull in a{" "}
            <span style={{ fontWeight: 600 }}>Professional</span>
          </Typography>
        </div>
        <div style={{ flex: 4, padding: 5 }}>
          <Typography variant="h6">Menu</Typography>
          <ul>
            <li>Homepage</li>
            <li>Case Study</li>
            <li>Portfolio</li>
            <li>Blogs</li>
            <li>Contact</li>
          </ul>
        </div>
        <div style={{ flex: 5, padding: 5 }}>
          <Typography variant="h6">Contact</Typography>
          <div style={{ display: "flex" }}>
            {socialLinks.map((data, i) => (
              <IconButton size="small">{data.icon}</IconButton>
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
  );
};

export default Footer;
