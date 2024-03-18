import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../components/navbars/Header";
import Marquee from "../components/navbars/Marque";

const Home = () => {
  const [items, setItems] = useState([]);
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
    axios
      .get("mongodb://localhost/solxraf")
      .then((response) => setItems(response.data))
      .catch((error) => console.error(error));
    console.log(items);
  }, []);
  // api = 'AIzaSyCRRLDe0UQGmY9tRulQnTls8h1OoHJ3zhA'
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Marquee dir={"right"} /> */}
      <Header />
      <Marquee dir={"right"} />
    </div>
  );
};

export default Home;
