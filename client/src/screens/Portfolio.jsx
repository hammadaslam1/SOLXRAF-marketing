/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import SERVICES from "../components/assets/backgrounds/textureBack.jpg";
import "../styles/portfolioCSS.css";
import PageHeading from "../components/navbars/PageHeading";

const Portfolio = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeading>Our Services</PageHeading>
      <Box className="about-body">
        <div className="root">
          <div style={{ height: "117px" }}>
            <img
              src={SERVICES}
              width="360px"
              style={{
                boxShadow: "0px 15px 20px #0000006E",
                borderRadius: "10px",
              }}
            />
          </div>
          <div
            className="trapezoid"
            style={{ height: "165px", width: "360px" }}
          ></div>
        </div>
        <div style={{ flex: 1 }}></div>
        <Box sx={{ flex: 3 }}>
          <Typography>
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
            adlkfja;lksdjf;alkdjf;lakdjsf;lakjsf;lakeoijflakdsgaoireutpgaoksfj;laksjf
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Portfolio;
