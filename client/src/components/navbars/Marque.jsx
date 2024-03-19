import React from "react";
import { partners } from "../../database/NavbarData";
import "./marqueCSS.css";

const Marquee = (props) => {
  const handleClick = (link) => {
    window.open(link);
  };
  return (
    <div className="mainMarquee">
      <div
        style={{
          padding: "15px",
        }}
        id={props.id}
      >
        {partners.map((data, i) => (
          <div
            className="item"
            style={{
              height: "50px",
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => handleClick(data.to)}
          >
            <img
              src={data.icon}
              style={{ height: "50px" }}
              alt=""
              onClick={() => handleClick(data.to)}
            />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        style={{
          padding: "15px",
        }}
        id={props.id}
      >
        {partners.map((data, i) => (
          <div
            className="item"
            style={{
              height: "50px",
              flex: 1,
              display: "flex",
              justifyContent: "center",
            }}
            onClick={() => handleClick(data.to)}
          >
            <img
              src={data.icon}
              style={{ height: "50px" }}
              alt=""
              onClick={() => handleClick(data.to)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
