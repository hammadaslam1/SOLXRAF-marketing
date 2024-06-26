export const ContactCSS = {
  main: {
    display: "flex",
    margin: 10,
    borderRadius: 3,
    lineHeight: 3,
    fontFamily: "Krona One",
    flexWrap: "wrap",
  },
  left: {
    flex: 1,
    paddingY: 5,
    paddingX: 3,
    backgroundColor: "#304fa1",
    color: "#fff",
    lineHeight: 3,
    fontFamily: "Krona One",
    minWidth: "250px",
  },
  right: {
    flex: 2,
    padding: 5,
    lineHeight: 3,
    fontFamily: "Krona One",
    minWidth: "400px",
  },
  font: {
    fontFamily: "Krona One",
    my: 1,
    // fontWeight: "100",
    // color: "#555",
  },
  divider: {
    width: "35%",
    height: 3,
    backgroundColor: "#304fa1",
  },
  contactImg: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginY: 5,
    borderRadius: 2,
    lineHeight: 3,
    fontFamily: "Krona One",
  },
  img: {
    height: 35,
  },
  fieldDiv: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
  },
  fields: {
    display: "flex",
    flexWrap: "wrap",
    // gap: "2em",
  },
  login: {
    flex: "1 1 auto",
    // backgroundColor: "#304fa111",
    color: "#304fa1",
    fontFamily: "Krona One",
    minWidth: "300px",
  },
  textField: {
    flex: "1 1 auto",
    margin: "10px",
    backgroundColor: "#f8f8f8",
    color: "#304fa1",
    minWidth: "300px",
  },
  button: {
    marginX: "10px",
    flex: "1 1 auto",
    backgroundColor: "#304fa1",
    color: "#fff",
    border: "2px solid #304fa1",
    fontFamily: "Krona One",
    py: 1.7,
    boxSizing: "border-box",
    textTransform: "capitalize",
    fontSize: "1rem",
    "&:hover": {
      backgroundColor: "#fff",
      color: "#304fa1",
    },
  },
  leftBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
  },
  iconSpan: {
    width: "50px",
    height: "50px",
    // backgroundColor: "#f00",
    margin: 5,
    border: "1px solid #fff",
    borderRadius: "50px",
    // fontSize: "50px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};
