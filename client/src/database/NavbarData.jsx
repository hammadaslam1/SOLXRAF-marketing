/* eslint-disable no-use-before-define */
import { Facebook, Instagram, LinkedIn, Twitter } from "@mui/icons-material";
import { BLOGS, CONTACT, HOME, SERVICES } from "../router/Router";
import AWIN from "../components/assets/icons/svgs/Awin.svg";
// import RAKUTEN from "../components/assets/icons/svgs/Rakuten.svg";
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
    to: "https://www.awin.com/",
    icon: AWIN,
  },
  // {
  //   to: "https://www.rakuten.com/",
  //   icon: RAKUTEN,
  // },
  {
    to: "https://www.shareasale.com/",
    icon: SHAREASALE,
  },
  {
    to: "https://www.tradedoubler.com/en/",
    icon: Tradedoubler,
  },
  {
    to: "https://partnerstack.com/",
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
    to: SERVICES,
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
