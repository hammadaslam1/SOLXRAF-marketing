import { Box, Button, Typography } from "@mui/material";

const Header = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "60vh",
        textAlign: "center",
        fontSize: "5vw",
      }}
    >
      <div
        style={{ width: "100%", height: "100%", backgroundColor: "#304FA1aa" }}
      >
        <div className="flex flex-col  p-[20px] text-lg">
          <Typography
            fontSize="14pt"
            color="#fff"
            sx={{ marginY: "20px", fontFamily: "Krona One" }}
          >
            A LEADING AFFILIATE MARKETING AGENCY
          </Typography>
          <Typography
            fontSize="48pt"
            color="#fff"
            sx={{ marginBottom: "20px", fontFamily: "Krona One" }}
          >
            Let's Fire Up Your Sales
          </Typography>
        </div>
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            href="https://calendly.com/solxraf-tech/30min"
            target="_blank"
            sx={{
              backgroundColor: "#fff",
              fontSize: "18px",
              color: "#304FA1",
              fontWeight: "bold",
              border: "1px solid transparent",
              "&:hover": {
                backgroundColor: "#304FA100",
                color: "#fff",
                border: "1px solid #fff",
              },
            }}
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
