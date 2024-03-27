import { Avatar, Box, Card, Typography } from "@mui/material";
import PageHeading from "../components/navbars/PageHeading";
import IMAGE from "../components/assets/backgrounds/textureBack.jpg";
import { BlogCSS } from "../styles/BlogCSS";

const BlogPage = (props) => {
  return (
    <div>
      <PageHeading>Blog</PageHeading>
      <Card sx={BlogCSS.mainBox} elevation={5}>
        <Box sx={BlogCSS.title}>
          <Typography variant="h4" sx={BlogCSS.font}>
            Here will be the title of the blog
          </Typography>
          <Box sx={BlogCSS.titleInfo}>
            <Avatar />
            <Typography variant="caption" sx={BlogCSS.font}>
              Name
            </Typography>
            <div style={BlogCSS.dot}></div>
            <Typography variant="caption" sx={BlogCSS.font}>
              category
            </Typography>
            <div style={BlogCSS.dot}></div>
            <Typography variant="caption" sx={BlogCSS.font}>
              date
            </Typography>
          </Box>
        </Box>
        <Box sx={BlogCSS.imageBox}>
          <Box sx={[BlogCSS.innerImgBox]} className="parent">
            <img
              src={IMAGE}
              style={BlogCSS.topImage}
              className="child"
              alt=""
            />
          </Box>
        </Box>
      </Card>
    </div>
  );
};

export default BlogPage;
