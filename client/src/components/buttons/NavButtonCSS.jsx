export const NavButtonCSS = {
  link: {
    textDecoration: "none",
    color: "#fff",
    fontFamily: "Krona One",
  },
  listItem: {
    listStyle: "none",
    WebkitTransition: "all 0.5s",
    transition: "all 0.5s",
    transitionTimingFunction: "ease",
    marginLeft: "10px",
    marginRight: "10px",
  },
  listItemHover: {
    fontSize: "18",
    transitionTimingFunction: "ease",
  },
  button: {
    padding: "0",
    display: "flex",
    flexDirection: "column",
    position: "relative",
    fontSize: "0.8rem",
    fontWeight: "600",
  },

  borderDiv: {
    paddingTop: 1,
    paddingBottom: 1,
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 0,
    width: "0%",
    WebkitTransition: "all 0.5s",
    transition: "all 0.5s",
    transitionTimingFunction: "ease",
  },
  borderDivHover: {
    width: "60%",
    transitionTimingFunction: "ease",
  },
};
