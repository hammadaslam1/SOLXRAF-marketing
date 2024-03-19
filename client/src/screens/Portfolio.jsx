import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import SERVICES from "../components/assets/backgrounds/textureBack.jpg";

const Portfolio = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Box
        className="about-header"
        sx={{
          // backgroundImage: `url(${SERVICES})`,
          // backgroundPosition: "center",
          // backgroundSize: "cover",
          // backgroundRepeat: "no-repeat",
          // height: "67vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          // color: "#fff",
          margin: "0",
          padding: "0",
        }}
      >
        <Typography fontSize="36px">Our Services</Typography>
      </Box>
    </div>
  );
};

export default Portfolio;