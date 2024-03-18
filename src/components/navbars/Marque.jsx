import React, { useRef, useEffect } from "react";
import { partners } from "../../database/NavbarData";
import "./marqueCSS.css";

const Marquee = (props) => {
  return (
    // <marquee direction={props.dir} loop>
    <div className="mainMarquee">
      <div
        style={{
          // display: "flex",
          // justifyContent: "space-evenly",
          padding: "15px",
        }}
        id="marquee"
      >
        {partners.map((data, i) => (
          <div
            className="item"
            style={{
              height: "50px",
              flex: 1,
              //   width: "fit-content",
              //   float: props.dir,
              //   aspectRatio: "1/1",
                display: "flex",
              //   alignItems: "center",
                justifyContent: "center",
              // border: "1px solid #023d65",
              // backgroundImage: `url(${data.icon})`,
              // backgroundSize: "contain",
              // backgroundRepeat: "no-repeat",
              //   borderRadius: "50%",
              //   marginLeft: "20px",
            }}
          >
            {/* {data.icon} */}
            <img src={data.icon} style={{ height: "50px" }} alt="" />
          </div>
        ))}
      </div>
      <div
        aria-hidden="true"
        style={{
          // display: "flex",
          // justifyContent: "space-evenly",
          padding: "15px",
        }}
        id="marquee"
      >
        {partners.map((data, i) => (
          <div
            className="item"
            style={{
              height: "50px",
              flex: 1,
              //   width: "fit-content",
              //   float: props.dir,
              //   aspectRatio: "1/1",
                display: "flex",
              //   alignItems: "center",
                justifyContent: "center",
              // border: "1px solid #023d65",
              // backgroundImage: `url(${data.icon})`,
              // backgroundSize: "contain",
              // backgroundRepeat: "no-repeat",
              //   borderRadius: "50%",
              //   marginLeft: "20px",
            }}
          >
            {/* {data.icon} */}
            <img src={data.icon} style={{ height: "50px" }} alt="" />
          </div>
        ))}
      </div>
    </div>
    // </marquee>
  );
};

export default Marquee;
