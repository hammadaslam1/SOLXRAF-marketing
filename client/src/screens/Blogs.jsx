import { useEffect } from "react";
import PageHeading from "../components/navbars/PageHeading";
import { Box } from "@mui/material";
import BlogCard from "../components/cards/BlogCard";

const Blogs = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeading>Our Blogs</PageHeading>
      <Box sx={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly', margin: '50px'}}>
        {new Array(20).fill(0).map((data, i) => (
          <BlogCard />
        ))}
      </Box>
    </div>
  );
};

export default Blogs;
