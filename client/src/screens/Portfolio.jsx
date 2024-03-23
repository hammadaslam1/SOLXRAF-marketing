/* eslint-disable jsx-a11y/alt-text */
import { useEffect } from "react";
import "../styles/portfolioCSS.css";
import PageHeading from "../components/navbars/PageHeading";
import ServiceCard from "../components/cards/ServiceCard";
import { servicesData } from "../database/ServicesData";

const Portfolio = () => {
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeading>Our Services</PageHeading>

      {/* <div style={{ display: "flex", justifyContent: "center" }}>
        <SolxrafAnimation />
      </div> */}
      {servicesData.map((data, i) => (
        <ServiceCard
          className={i % 2 === 0 ? "about-body" : "about-body-2"}
          title={data.title}
          heading={data.heading}
          body={data.body}
          animateLeft={i !== 0 && (i % 2 === 0 ? "" : "")}
          animateRight={i !== 0 && (i % 2 === 0 ? "fade-left" : "fade-right")}
        />
      ))}
    </div>
  );
};

export default Portfolio;
