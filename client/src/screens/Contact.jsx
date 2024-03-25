import { useEffect, useState } from "react";
import PageHeading from "../components/navbars/PageHeading";
import { Box, Button, Card, TextField, Typography } from "@mui/material";
import PlaceIcon from "@mui/icons-material/Place";
import PhoneIcon from "@mui/icons-material/Phone";
import { ContactCSS } from "../styles/ContactCSS";
import IMAGE from "../components/assets/logos/title_icon.png";
import LoginInput from "../components/inputs/LoginInput";
import ContactInput from "../components/inputs/ContactInput";
import PrimaryButton from "../components/buttons/PrimaryButton";

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
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      {/* <PageHeading>Contact Us</PageHeading> */}
      <Card sx={ContactCSS.main} elevation={5}>
        <Box sx={ContactCSS.left}>
          <Typography
            variant="h5"
            sx={[ContactCSS.font, { color: "#fff", fontWeight: "500" }]}
          >
            Let's Get In Touch
          </Typography>
          <Typography variant="body2" sx={ContactCSS.font}>
            For any query WhatsApp or call us at 0092-304-1395525 or email us at
            info@solxraf.com
          </Typography>
          <Box sx={ContactCSS.leftBox}>
            <span style={ContactCSS.iconSpan}>
              <PlaceIcon sx={{ fontSize: "1.5rem" }} />
            </span>
            <Typography variant="body1" sx={[ContactCSS.font, { flex: 5 }]}>
              Address:{" "}
              <Typography
                variant="body2"
                sx={[ContactCSS.font, { my: 0, mx: 1.5 }]}
              >
                Alkhidmat House # B-39, street # 6 Sikandar Town GT Road
                Peshawar
              </Typography>
            </Typography>
          </Box>
          <Box sx={ContactCSS.leftBox}>
            <span style={ContactCSS.iconSpan}>
              <PhoneIcon sx={{ fontSize: "1.5rem" }} />
            </span>
            <Typography
              variant="body1"
              sx={[ContactCSS.font, { flex: 5, textAlign: "justify" }]}
            >
              Phone:{" "}
              <Typography
                variant="body2"
                sx={[
                  ContactCSS.font,
                  {
                    fontWeight: "500",
                    mx: 1.5,
                    textDecoration: "underline",
                  },
                ]}
              >
                0092-304-1395525
              </Typography>
            </Typography>
            <Typography
              variant="body1"
              sx={[ContactCSS.font, { flex: 5, textAlign: "justify" }]}
            >
              WhatsApp:{" "}
              <Typography
                variant="body2"
                sx={[
                  ContactCSS.font,
                  {
                    fontWeight: "500",
                    mx: 1.5,
                    textDecoration: "underline",
                  },
                ]}
              >
                0092-304-1395525
              </Typography>
            </Typography>
          </Box>
        </Box>
        <Box sx={ContactCSS.right}>
          <div style={{ width: "fit-content" }}>
            <Typography
              variant="h5"
              sx={[ContactCSS.font, { color: "#555", fontWeight: "bold" }]}
            >
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
          <div style={ContactCSS.fieldDiv}>
            <Button variant="contained" sx={ContactCSS.button} disableElevation>
              Submit
            </Button>
          </div>
        </Box>
      </Card>
    </div>
  );
};

export default Contact;
