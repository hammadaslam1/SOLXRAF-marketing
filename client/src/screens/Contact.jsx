import { useEffect } from "react";
import PageHeading from "../components/navbars/PageHeading";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return <div><PageHeading>Contact Us</PageHeading></div>;
};

export default Contact;
