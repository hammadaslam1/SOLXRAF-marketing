/* eslint-disable no-use-before-define */
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { BLOGS, CASE_STUDY, CONTACT, HOME, PORTFOLIO } from "../router/Router";
import AWIN from "../components/assets/icons/svgs/Awin.svg";
import RAKUTEN from "../components/assets/icons/svgs/Rakuten.svg";
import SHAREASALE from "../components/assets/icons/svgs/ShareASale.svg";
import Tradedoubler from "../components/assets/icons/svgs/tradedoubler.svg";
import Partnerstack from "../components/assets/icons/svgs/partnerstack.svg";

const socialLinkStyle = {
  sociallinks: {
    color: "#fff",
    fontSize: "1.3rem",
    padding: 0,
    margin: 0,
    "&:hover": { color: "#f00" },
  },
};

export const partners = [
  {
    to: "/",
    icon: AWIN,
  },
  // {
  //   to: "/",
  //   icon: RAKUTEN,
  // },
  {
    to: "/",
    icon: SHAREASALE,
  },
  {
    to: "/",
    icon: Tradedoubler,
  },
  {
    to: "/",
    icon: Partnerstack,
  },
];

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
