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
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [url, setUrl] = useState("");
  const [affProgram, setAffProgram] = useState("");
  const [about, setAbout] = useState("");
  const fields = [
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
      required: true,
    },
    {
      value: phone,
      label: "Phone Number",
      type: "tel",
      onChange: (e) => {
        setPhone(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "Phone Number",
      required: true,
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
      placeholder: "example@company.com",
      required: true,
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
      required: true,
    },
    {
      value: url,
      label: "Website URL",
      type: "url",
      onChange: (e) => {
        setUrl(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "www.example.com",
      required: true,
    },
    {
      value: affProgram,
      label: "Have an Affiliate Program",
      type: "text",
      onChange: (e) => {
        setName(e.target.value);
        // setIsFilled(false);
      },
      // startAdornment: <PlaceIcon sx={{ color: "#304fa1", mr: 2 }} />,
      placeholder: "No",
      required: true,
    },
  ];
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
          <Box sx={DashboardCSS.detailTop}>
            <Typography variant="h6">Profile</Typography>
            <Typography variant="body2">
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
                <ContactInput
                  label="About me"
                  placeholder="I'm a ..."
                  // color="error"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                  multiline={true}
                  sx={ContactCSS.textField}
                  // required
                />
              </div>
            </div>
          </Box>
          <div style={DashboardCSS.divider}></div>
          <Box sx={DashboardCSS.detailBottom}>
            <Button variant="contained">Subimit</Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default DashProfile;
