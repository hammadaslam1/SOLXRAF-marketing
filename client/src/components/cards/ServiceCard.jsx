/* eslint-disable jsx-a11y/alt-text */
import { Box, Typography } from "@mui/material";
import SERVICES from "../assets/backgrounds/textureBack.jpg";

const ServiceCard = (props) => {
  return (
    <Box className={props.className}>
      <div className="mainRoot" data-aos={props.animateLeft}>
        <div className="root">
          <div style={{ height: "117px" }}>
            <div
              //   src={SERVICES}
              //   width="360px"
              style={{
                boxShadow: "0px 15px 20px #0000006E",
                borderRadius: "10px",
                width: "360px",
                height: "250px",
                backgroundImage: `url(${SERVICES})`,
                backgroundAttachment: "fixed",
                backgroundSize: "cover",
                overflow: "hidden",
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  backgroundColor: "#304FA1aa",
                  fontFamily: "Krona One",
                  fontSize: "1.5rem",
                  textAlign: "center",
                }}
              >
                {props.title}
              </div>
            </div>
          </div>
          <div
            className="trapezoid"
            style={{ height: "165px", width: "360px" }}
          ></div>
        </div>
      </div>
      <div style={{ flex: 1 }}></div>
      <Box sx={{ flex: 3 }} data-aos={props.animateRight}>
        <Typography>
          {props.body}
        </Typography>
      </Box>
    </Box>
  );
};

export default ServiceCard;
