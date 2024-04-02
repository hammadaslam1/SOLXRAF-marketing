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
import { ContactCSS } from "../../styles/ContactCSS";
import { useState } from "react";
import ContactInput from "../inputs/ContactInput";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const fields = [
    {
      value: username,
      label: "Username",
      type: "text",
      onChange: (e) => {
        setUsername(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "johndoe10",
      required: false,
    },
    {
      value: name,
      label: "Full Name",
      type: "text",
      onChange: (e) => {
        setName(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "John Doe",
      // required: false,
    },
    {
      value: email,
      label: "Company Email",
      type: "email",
      onChange: (e) => {
        setEmail(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "johndoe@company.com",
      required: false,
    },
    {
      value: role,
      label: "Your Role",
      type: "text",
      onChange: (e) => {
        setRole(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "Manager",
      required: false,
    },
  ];
  return (
    <Box sx={DashboardCSS.mainProfileBox}>
      <Box>
        <Typography variant="h4" sx={DashboardCSS.profileTitle}>
          Profile
        </Typography>
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
          <Box sx={DashboardCSS.detailTop}>
            <Typography variant="h6" sx={DashboardCSS.detailHead}>
              Profile
            </Typography>
            <Typography variant="body2" sx={DashboardCSS.detailCaption}>
              The information can be edited.
            </Typography>
          </Box>
          <div style={DashboardCSS.divider}></div>
          <Box sx={DashboardCSS.detailMiddle}>
            <div style={ContactCSS.fieldDiv}>
              <div style={ContactCSS.fields}>
                {fields.map((data, i) => (
                  <ContactInput
                    key={i}
                    type={data.type}
                    value={data.value}
                    label={data.label}
                    sx={ContactCSS.login}
                    onChange={data.onChange}
                    startAdornment={data.startAdornment}
                    placeholder={data.placeholder}
                    required={data.required}
                  />
                ))}
              </div>
            </div>
          </Box>
          <div style={DashboardCSS.divider}></div>
          <Box sx={DashboardCSS.detailBottom}>
            <Button variant="plain" sx={DashboardCSS.detailBtn}>
              Save Details
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default DashProfile;
