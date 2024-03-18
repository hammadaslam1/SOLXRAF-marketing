/* eslint-disable no-use-before-define */
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { BLOGS, CASE_STUDY, CONTACT, HOME, PORTFOLIO } from "../router/Router";
import AWIN from "../components/assets/icons/Awin.png";
import RAKUTEN from "../components/assets/icons/Rakuten.png";
import SHAREASALE from "../components/assets/icons/ShareASale.png";
import Tradedoubler from "../components/assets/icons/svgs/Tradedoubler";

const socialLinkStyle = {
  sociallinks: {
    color: "#fff",
    fontSize: "1.3rem",
    padding: 0,
    margin: 0,
    "&:hover": { color: "#f00" },
  },
};

export const navbarLinks = [
  {
    to: HOME,
    name: "Home",
    onClick: () => console.log("pressed"),
  },
  {
    to: PORTFOLIO,
    name: "Our Services",
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
    to: "https://www.facebook.com/SolXraf/",
    icon: <Facebook sx={socialLinkStyle.sociallinks} />,
  },
  {
    to: "https://www.linkedin.com/company/solxraf/",
    icon: <LinkedIn sx={socialLinkStyle.sociallinks} />,
  },
  {
    to: "https://twitter.com/solxraf",
    icon: <Twitter sx={socialLinkStyle.sociallinks} />,
  },
  {
    to: "https://www.instagram.com/solxraf/",
    icon: <Instagram sx={socialLinkStyle.sociallinks} />,
  },
];

export const partners = [
  {
    to: "/",
    icon: AWIN,
  },
  {
    to: "/",
    icon: RAKUTEN,
  },
  {
    to: "/",
    icon: SHAREASALE,
  },
  {
    to: "/",
    icon: <Tradedoubler />,
  },
];
