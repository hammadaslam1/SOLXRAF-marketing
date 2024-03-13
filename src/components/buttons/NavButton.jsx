import { Button } from "@mui/material";
import { useState } from "react";
import { NavButtonCSS } from "./NavButtonCSS";
import { Link } from "react-router-dom";

const NavButton = (props) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <Button style={NavButtonCSS.button} onClick={props.onClick}>
      <li
        // style={links}
        style={
          hoveredIndex === props.index
            ? { ...NavButtonCSS.listItem, ...NavButtonCSS.listItemHover }
            : NavButtonCSS.listItem
        }
        onMouseEnter={() => setHoveredIndex(props.index)}
        onMouseLeave={() => setHoveredIndex(null)}
      >
        <Link style={NavButtonCSS.link} to={props.to}>
          {props.name}
        </Link>
      </li>
      <div
        style={
          hoveredIndex === props.index
            ? { ...NavButtonCSS.borderDiv, ...NavButtonCSS.borderDivHover }
            : NavButtonCSS.borderDiv
        }
        onMouseEnter={() => setHoveredIndex(props.index)}
        onMouseLeave={() => setHoveredIndex(null)}
      ></div>
    </Button>
  );
};

export default NavButton;
