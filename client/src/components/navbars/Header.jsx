import { Box, Button, Typography } from "@mui/material";
import { HeaderCSS } from "./navbarCSS/HeaderCSS";

const Header = () => {
  return (
    <Box sx={HeaderCSS.mainBox}>
      <div className="flex flex-col justify-center" style={HeaderCSS.mainDiv}>
        <div className="flex flex-col p-[20px] text-lg">
          <Typography
            fontSize="clamp(0.8rem, 2vw, 1.5rem)"
            color="#fff"
            sx={{ marginY: "20px", fontFamily: "Krona One" }}
          >
            A LEADING AFFILIATE MARKETING AGENCY
          </Typography>
          <Typography
            fontSize="clamp(1.3rem, 4vw, 3.5rem)"
            color="#fff"
            sx={{ marginBottom: "20px", fontFamily: "Krona One" }}
          >
            Let's Fire Up Your Sales
          </Typography>
        </div>
        <div style={HeaderCSS.btnDiv}>
          <Button
            variant="contained"
            href="https://calendly.com/solxraf-tech/30min"
            target="_blank"
            sx={HeaderCSS.btn}
            disableElevation
          >
            Book Meeting
          </Button>
        </div>
      </div>
    </Box>
  );
};

export default Header;
