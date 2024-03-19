import { useEffect } from "react";

const Blogs = () => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []);
    return ( 
        <div>
            Blogs
        </div>
     );
}
 
export default Blogs;