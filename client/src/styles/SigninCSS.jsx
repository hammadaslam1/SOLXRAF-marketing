export const SigninCSS = {
  left: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 15
    minWidth: "300px",
  },
  right: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 15
    minWidth: "300px",
  },
  imageBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 15
  },
  image: {
    width: "clamp(100px,15vw, 300px)",
    // height: 100,
    // borderRadius: 50,
    margin: 10,
  },
  loginBox: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // borderBottom: "1px solid #304fa1",
    // pb: 3,
    // padding: 15
  },
  divider:{
    width: "50%",
    height: "2px",
    backgroundColor: "#304fa1",
    marginTop: '20px',
    marginBottom: '20px',
  },
  loginCard: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // padding: 15,
    width: "clamp(300px, 50vw, 400px)",
  },
  title: {
    fontSize: "clamp(1.5rem, 3vw, 3rem)",
    fontFamily: "Krona One",
    fontWeight: 700,
    color: "#304FA1",
  },
  caption: {
    // fontSize: "clamp(1rem, 3vw, 2.5rem)",
    fontFamily: "Krona One",
    fontWeight: 400,
    color: "#304FA1dd",
  },
  loginTitle: {
    fontSize: "clamp(1.5rem, 3vw, 3rem)",
    fontFamily: "Krona One",
    fontWeight: 700,
    color: "#304FA1",
    mb: 4,
  },
  loginBtn: {
    fontSize: "clamp(0.6rem, 1.4vw, 1.3rem)",
    fontFamily: "Krona One",
    // fontWeight: 500,
    color: "#fff",
    width: "clamp(80px, 20vw, 160px)",
    height: "clamp(35px, 7vw, 50px)",
    mt: 3,
    borderRadius: "5px",
    border: "2px solid #304FA1",
    cursor: "pointer",
    textTransform: "capitalize",
    backgroundColor: "#304fa1",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#304FA1",
    },
  },
};
