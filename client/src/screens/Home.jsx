/* eslint-disable react-hooks/exhaustive-deps */
import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/navbars/Header";
import Marquee from "../components/navbars/Marque";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Scroll to the top when the component mounts
    // window.scrollTo(0, 0);
    axios
      .get("mongodb://localhost/solxraf")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
    console.log(items);
  }, []);
  // api = 'AIzaSyCRRLDe0UQGmY9tRulQnTls8h1OoHJ3zhA'
  return (
    <div className="home" style={{ display: "flex", flexDirection: "column" }}>
      <Marquee id={"marqueeTop"} />
      <Header />
      <Marquee id={"marquee"} />
      <Box
        className="about-header"
        sx={{
          // height: "67vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          backgroundColor: '#304FA1aa',
          margin: "0",
          padding: "0",
        }}
      >
        <Typography fontSize="36px" fontFamily={'Krona One'}>Our Services</Typography>
      </Box>
    </div>
  );
};

export default Home;
