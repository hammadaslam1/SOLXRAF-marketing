export const NavbarCSS = {
  appbar: {
    backgroundColor: "#304FA1",
    px: "20px",
    position: "sticky",
    top: 0,
  },

  image: {
    flex: 2,
    display: "flex",
    alignItems: "center",
    height: "100px",
    minWidth: "fit-content",
  },
  logoImage: { width: "clamp(25px, 10vw, 60px)", cursor: "pointer", marginright: "5px"},

  authBtn: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "0.8rem",
    height: "30px",
    width: "100px",
    padding: "0",
    position: "relative",
    borderBottomRightRadius: "50px",
    borderTopRightRadius: "50px",
    backgroundColor: "transparent",
    color: "#FFFFFF",
    border: "2px solid #fff",
    fontweight: 500,
  },
};
