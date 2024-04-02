import { Box, Tab, Tabs } from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { toggleTab } from "../../reduxStore/tabs/tabSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router-dom";
import { PROFILE, SIGNOUT } from "../../router/Router";

const DashSidebar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { tabs } = useSelector((state) => state.tab);
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    dispatch(toggleTab(tabFromUrl));
  }, [dispatch, location.search]);
  return (
    <Box>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        aria-label="Vertical tabs example"
        sx={[DashboardCSS.sideMain, { borderRight: 1, borderColor: "divider" }]}
      >
        <Tab
          sx={
            tabs === "profile"
              ? [DashboardCSS.tabTitle, DashboardCSS.tabActive]
              : DashboardCSS.tabTitle
          }
          icon={<AccountBoxIcon sx={DashboardCSS.tabIcon} />}
          iconPosition="start"
          label="Profile"
          value={0}
          onClick={() => navigate(PROFILE)}
        />
        <Tab
          sx={
            tabs === "signout"
              ? [DashboardCSS.tabTitle, DashboardCSS.tabActive]
              : DashboardCSS.tabTitle
          }
          icon={<LogoutIcon sx={DashboardCSS.tabIcon} />}
          iconPosition="start"
          label="Sign out"
          value={1}
          onClick={() => navigate(SIGNOUT)}
        />
      </Tabs>
    </Box>
  );
};

export default DashSidebar;
