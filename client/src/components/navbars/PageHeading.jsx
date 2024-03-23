import { Box, Typography } from "@mui/material";

const PageHeading = (props) => {
  return (
    <Box
      className="about-header"
      data-aos='fade-down'
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
        // backgroundColor: "#0f0",
        margin: "0",
        padding: "0",
      }}
    >
      <div
        style={{
          flex: 2,
          // border: "2px solid #fff",
          height: "60px",

          backgroundColor: "#304FA1",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            borderTopRightRadius: "30px",
          }}
        ></div>
      </div>
      <Typography
        fontSize="28px"
        sx={{
          flex: 1,
          // border: "2px solid #304FA1",
          color: "#fff",
          textAlign: "center",
          height: "60px",
          borderBottomLeftRadius: "38px",
          borderBottomRightRadius: "38px",
          backgroundColor: "#304FA1",
          fontFamily: "Krona One",
          minWidth: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "40%",
            height: "6px",
            // padding: "3px",
            backgroundColor: "#fff",
            borderBottomLeftRadius: "80%",
            borderBottomRightRadius: "80%",
            // position: "relative",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              // position: "absolute",
              width: "20px",
              height: "10px",
              borderRadius: "50%",
              backgroundColor: "#fff",
            }}
          ></div>
        </div>
        {props.children}
      </Typography>
      <div
        style={{
          flex: 2,
          // border: "2px solid #fff",
          height: "60px",

          backgroundColor: "#304FA1",
        }}
      >
        <div
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#fff",
            borderTopLeftRadius: "30px",
          }}
        ></div>
      </div>
    </Box>
  );
};

export default PageHeading;
