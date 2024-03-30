export const DashboardCSS = {
  main: {
    display: "flex",
    minHeight: "80vh",
  },
  sideMain: {
    minWidth: "300px",
    // minHeight: "100%",
    p: 1,
    // overflowY: "scroll",
    overflowX: "hidden",
  },
  tabTitle: {
    m: 1,
    borderRadius: "5px",
    transition: "all 0.3s ease-in-out",
    textTransform: "capitalize",
    textAlign: "left",
    "&:hover": {
      backgroundColor: "#304fa1",
      color: "#fff",
    },
  },
  tabActive: {
    backgroundColor: "#304fa1",
    color: "#fff !important",
  },
};
