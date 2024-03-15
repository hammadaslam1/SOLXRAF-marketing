import { ArrowBack, ArrowForward } from "@mui/icons-material";
import { Box, Card, Typography } from "@mui/material";
import Carousel from "react-material-ui-carousel";

const Home = () => {
  const slides = [
    "https://learnphotographycanada.com/wp-content/uploads/2018/01/wallpaper.wiki-Awesome-bedroom-wallpaper-texture-black-PIC-WPC009500.jpg",
  ];
  // api = 'AIzaSyCRRLDe0UQGmY9tRulQnTls8h1OoHJ3zhA'
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {/* <Carousel NextIcon={<ArrowForward />} PrevIcon={<ArrowBack />}>
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
      </Carousel> */}
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      <Typography variant="h2">hammad</Typography>
      
    </div>
  );
};

export default Home;
