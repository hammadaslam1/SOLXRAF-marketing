import { Box, Card, Typography } from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";

const DashProfile = () => {
  return (
    <Box sx={DashboardCSS.mainProfileBox}>
      <Box>
        <Typography>Profile</Typography>
      </Box>
      <Box sx={DashboardCSS.dataCard}>
        <Card sx={DashboardCSS.profileCard}>
          <Box></Box>
          <div style={DashboardCSS.divider}></div>
          <Box></Box>
        </Card>
        <Card sx={DashboardCSS.detailCard}>
          <Box></Box>
          <div style={DashboardCSS.divider}></div>
          <Box></Box>
        </Card>
      </Box>
    </Box>
  );
};

export default DashProfile;
