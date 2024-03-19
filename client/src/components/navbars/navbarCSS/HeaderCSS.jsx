export const HeaderCSS = {
  mainBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "clamp(350px, 60vh, 500px)",
    textAlign: "center",
    fontSize: "5vw",
  },
  mainDiv: {
    width: "100%",
    height: "100%",
    backgroundColor: "#304FA1aa",
    position: "relative",
  },
  btnDiv: {
    padding: "20px",
    display: "flex",
    justifyContent: "center",
  },
  btn: {
    backgroundColor: "#fff",
    fontSize: "clamp(0.7rem, 1.8vw, 1.2rem)",
    color: "#304FA1",
    fontWeight: "bold",
    border: "1px solid transparent",
    fontFamily: "Krona One",
    textTransform: "capitalize",
    "&:hover": {
      backgroundColor: "#304FA100",
      color: "#fff",
      border: "1px solid #fff",
    },
  },
};
