import {
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";
import { useSelector } from "react-redux";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  return (
    <Box sx={DashboardCSS.mainProfileBox}>
      <Box>
        <Typography>Profile</Typography>
      </Box>
      <Box sx={DashboardCSS.dataCard}>
        <Card sx={DashboardCSS.profileCard} elevation={0}>
          <Box sx={DashboardCSS.innerProfileCard}>
            <IconButton
              sx={{
                padding: "0px",
                border: "1px solid #e6e6e6",
              }}
            >
              <Avatar
                src={currentUser.profilePicture}
                sx={{ width: 110, height: 110 }}
              />
            </IconButton>
            <Typography
              variant="h6"
              className="text-700"
              sx={{
                color: "#304fa1",
                // lineHeight: "3",
                fontFamily: "Krona One",
                textAlign: "center",
                mt: 1,
              }}
            >
              {currentUser.name}
            </Typography>
            <Typography
              variant="caption"
              className="text-700"
              sx={{
                color: "#304fa1aa",
                lineHeight: "3",
                fontFamily: "Krona One",
                textAlign: "center",
              }}
            >
              @{currentUser.username}
            </Typography>
          </Box>
          <div style={DashboardCSS.divider}></div>
          <Box sx={DashboardCSS.lowerProfile}>
            <Button sx={DashboardCSS.uploadBtn}>Upload Picture</Button>
          </Box>
        </Card>
        <Card sx={DashboardCSS.detailCard} elevation={0}>
          <Box></Box>
          <div style={DashboardCSS.divider}></div>
          <Box></Box>
        </Card>
      </Box>
    </Box>
  );
};

export default DashProfile;
