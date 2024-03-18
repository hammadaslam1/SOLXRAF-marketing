import { useEffect } from "react";

const CaseStudy = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return ( 
        <div>
            Case Study
        </div>
     );
}
 
export default CaseStudy;