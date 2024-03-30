import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
} from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";

const DashSidebar = () => {
  return (
    <Box sx={DashboardCSS.sideMain}>
      {/* <Toolbar variant="regular"> */}
      <Tabs
        orientation="vertical"
        variant="scrollable"
        // value={value}
        // onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        <Tab sx={DashboardCSS.tabTitle} label="Item One" />
        <Tab sx={DashboardCSS.tabTitle} label="Item Two" />
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
