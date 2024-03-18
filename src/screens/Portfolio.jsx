import { useEffect } from "react";

const Portfolio = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return ( 
        <div>Portfolio</div>
     );
}
 
export default Portfolio;