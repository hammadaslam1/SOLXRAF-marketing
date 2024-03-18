import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return <div>Contact</div>;
};

export default Contact;
