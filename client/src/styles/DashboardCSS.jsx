export const DashboardCSS = {
  main: {
    display: "flex",
    minHeight: "80vh",
  },
  sideMain: {
    // position: 'relative',
    // backgroundColor: "#304fa177",
    minWidth: "300px",
    height: "80vh",
    p: 1,
    // overflowY: "scroll",
    // overflowX: "hidden",
  },
  tabTitle: {
    m: 1,
    py: 0,
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    textTransform: "capitalize",
    textAlign: "left",
    fontFamily: "Krona One",
    fontSize: "1rem",
    display: "flex",
    height: "20px !important",
    justifyContent: "start",
    alignItems: "center",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#304fa1",
      color: "#fff",
    },
  },
  tabActive: {
    backgroundColor: "#304fa1",
    color: "#fff !important",
  },
  tabIcon: {
    width: "30px",
    height: "30px",
    mr: "15px",
  },
};
