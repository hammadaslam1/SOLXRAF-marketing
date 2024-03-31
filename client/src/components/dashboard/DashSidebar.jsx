import { Box, Tab, Tabs } from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { toggleTab } from "../../reduxStore/tabs/tabSlice";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

const DashSidebar = () => {
  const tabsArray = ["profile", "signout"];
  const { tabs } = useSelector((state) => state.tab);
  const dispatch = useDispatch();
  const [value, setValue] = useState("");
  const handleChange = (e, value) => {
    // console.log(value);
    setValue(value);
    dispatch(toggleTab(tabsArray[value]));
  };
  return (
    <Box>
      {/* <Toolbar variant="regular"> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        // sx={{ borderRight: 1, borderColor: "divider" }}
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
        />
      </Tabs>
      {/* </Toolbar> */}
    </Box>
  );
};

export default DashSidebar;

/*

<Drawer
        variant="permanent"
        sx={{
            zIndex: -2,
        //   width: 50,
        //   flexShrink: 0,
        //   [`& .MuiDrawer-paper`]: { width: 50, boxSizing: "border-box" },
        }}
      >
        <Toolbar />
        <Typography>hammad</Typography>
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["All mail", "Trash", "Spam"].map((text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                   {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>

*/
