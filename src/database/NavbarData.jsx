import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { BLOGS, CASE_STUDY, CONTACT, HOME, PORTFOLIO } from "../router/Router";

export const navbarLinks = [
  {
    to: HOME,
    name: "Home",
    onClick: () => console.log("pressed"),
  },
  {
    to: CASE_STUDY,
    name: "Case Study",
    onClick: () => console.log("pressed"),
  },
  {
    to: PORTFOLIO,
    name: "Portfolio",
    onClick: () => console.log("pressed"),
  },
  {
    to: BLOGS,
    name: "Blogs",
    onClick: () => console.log("pressed"),
  },
  {
    to: CONTACT,
    name: "Contact",
    onClick: () => console.log("pressed"),
  },
];

export const socialLinks = [
  {
    to: "/",
    icon: <Facebook sx={{ color: "#fff", fontSize: "1.3rem", '&:hover':{color: '#f00'} }} />,
    onClick: () => alert("pressed"),
  },
  {
    to: "/",
    icon: <LinkedIn sx={{ color: "#fff", fontSize: "1.3rem", '&:hover':{color: '#f00'} }} />,
    onClick: () => alert("pressed"),
  },
  {
    to: "/",
    icon: <Twitter sx={{ color: "#fff", fontSize: "1.3rem", '&:hover':{color: '#f00'} }} />,
    onClick: () => alert("pressed"),
  },
  {
    to: "/",
    icon: <Instagram sx={{ color: "#fff", fontSize: "1.3rem", '&:hover':{color: '#f00'} }} />,
    onClick: () => alert("pressed"),
  },
];
