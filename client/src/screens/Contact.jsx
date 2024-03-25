import { useEffect, useState } from "react";
import PageHeading from "../components/navbars/PageHeading";
import { Box, Card, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { ContactCSS } from "../styles/ContactCSS";
import IMAGE from "../components/assets/logos/title_icon.png";
import LoginInput from "../components/inputs/LoginInput";
import ContactInput from "../components/inputs/ContactInput";

const Contact = () => {
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
  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <PageHeading>Contact Us</PageHeading>
      <Card sx={ContactCSS.main} elevation={5}>
        <Box sx={ContactCSS.left}>
          <Typography variant="h5">Let's Get In Touch</Typography>
          <Typography variant="body2">
            For any query WhatsApp or call us at 0092 304 1395525 or email us at
            info@solxraf.com
          </Typography>
          <Box>
            <span>
              <PlaceIcon />
            </span>
            <Typography variant="body2">
              Address:{" "}
              <span>
                Alkhidmat House # B-39, street # 6 Sikandar Town GT Road
                Peshawar
              </span>
            </Typography>
          </Box>
          <Box>
            <span>
              <PhoneIcon sx={{ fontSize: "2rem" }} />
            </span>
            <Typography variant="body2">
              Phone:{" "}
              <span>
                Alkhidmat House # B-39, street # 6 Sikandar Town GT Road
                Peshawar
              </span>
            </Typography>
            <Typography variant="body2">
              WhatsApp:{" "}
              <span>
                Alkhidmat House # B-39, street # 6 Sikandar Town GT Road
                Peshawar
              </span>
            </Typography>
          </Box>
        </Box>
        <Box sx={ContactCSS.right}>
          <div style={{ width: "fit-content" }}>
            <Typography variant="h5" sx={[ContactCSS.font]}>
              CONTACT{" "}
              <span style={{ color: "#304fa1", fontFamily: "Krona One" }}>
                US
              </span>
            </Typography>
            <div style={ContactCSS.contactImg}>
              <div style={ContactCSS.divider}></div>
              <img src={IMAGE} style={ContactCSS.img} alt="" />
              <div style={ContactCSS.divider}></div>
            </div>
          </div>
          <div style={ContactCSS.fieldDiv}>
            <div style={ContactCSS.fields}>
              {fields.map((data, i) => (
                <ContactInput
                  type={data.type}
                  value={data.value}
                  label={data.label}
                  sx={ContactCSS.login}
                  onChange={data.onChange}
                  startAdornment={data.startAdornment}
                  placeholder={data.placeholder}
                />
              ))}
            </div>
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default Contact;
