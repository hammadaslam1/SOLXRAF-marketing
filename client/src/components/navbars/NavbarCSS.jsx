export const NavbarCSS = {
  appbar: {
    backgroundColor: "#304FA1",
    px: "50px",
    position: "sticky",
    top: 0,
  },

  image: {
    flex: 1,
    display: "flex",
    alignItems: "center",
    height: "100px",
    minWidth: "fit-content",
  },
  logoImage: { width: "clamp(100px, 25vw, 200px)", cursor: "pointer" },

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
