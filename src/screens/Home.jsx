import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Card } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Home = () => {
  const slides = [
    `https://cdn.wallpapersafari.com/15/5/gwrUlW.jpg`,
    "https://wallpapers.com/images/hd/very-rough-blue-texture-npbrxmygmpzvkxfx.jpg",
    "https://www.creativefabrica.com/wp-content/uploads/2021/06/15/Metallic-blue-texture-background-Graphics-13430044-1.jpg",
    "https://learnphotographycanada.com/wp-content/uploads/2018/01/wallpaper.wiki-Awesome-bedroom-wallpaper-texture-black-PIC-WPC009500.jpg",
  ];
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Carousel NextIcon={<ArrowForward />} PrevIcon={<ArrowBack />}>
        {slides.map((data, i) => (
          <Box
            sx={{
              //   padding: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              height: "50vh",
              backgroundImage: `url(${data})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              textAlign: "center",
              fontSize: "5vw",
              color: "#fff",
            }}
          >
            {i}
          </Box>
        ))}
      </Carousel>
    </div>
  );
};

export default Home;
