import { Box, Card, CardMedia, IconButton } from "@mui/material";
import { Typography } from "@mui/material";
import LoginInput from "../components/inputs/LoginInput";
import { Mail } from "@mui/icons-material";
import { useState } from "react";
import IMAGE from "../components/assets/logos/solxraf_blue01.png";
import { SigninCSS } from "../styles/SigninCSS";
import PageHeading from "../components/navbars/PageHeading";
import KeyIcon from "@mui/icons-material/Key";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import PrimaryButton from "../components/buttons/PrimaryButton";
import { HeaderCSS } from "../components/navbars/navbarCSS/HeaderCSS";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <PageHeading>Login</PageHeading>
      <Box sx={{ display: "flex", paddingY: 5, paddingX: 2, flexWrap: "wrap" }}>
        <div style={SigninCSS.left}>
          <Box sx={SigninCSS.imageBox}>
            <img src={IMAGE} style={SigninCSS.image} alt="" />
            <Typography variant="h3" sx={SigninCSS.title}>
              SOLXRAF
            </Typography>
            <Typography variant="h6" sx={SigninCSS.caption}>
              A LEADING AFFILIATE MARKETING AGENCY
            </Typography>
            <Typography variant="h5" sx={SigninCSS.caption}>
              Let's Fire Up Your Sales
            </Typography>
          </Box>
        </div>
        <div style={SigninCSS.right}>
          <Box sx={SigninCSS.loginBox}>
            <Card sx={SigninCSS.loginCard} elevation={0}>
              <Typography variant="h4" sx={SigninCSS.loginTitle}>
                Login
              </Typography>
              <LoginInput
                type="email"
                value={email}
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                  // setIsFilled(false);
                }}
                startAdornment={<Mail sx={{ color: "#304fa1", mr: 2 }} />}
                placeholder="example@email.com"
              />
              <LoginInput
                type={!showPassword ? "password" : "text"}
                value={password}
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                  // setIsFilled(false);
                }}
                startAdornment={<KeyIcon sx={{ color: "#304fa1", mr: 2 }} />}
                endAdornment={
                  <IconButton onClick={() => setShowPassword((show) => !show)}>
                    {showPassword ? (
                      <VisibilityIcon sx={{ color: "#304fa1" }} />
                    ) : (
                      <VisibilityOffIcon sx={{ color: "#304fa1" }} />
                    )}
                  </IconButton>
                }
                placeholder={!showPassword ? "xxxxxxxx" : "password"}
              />
              <PrimaryButton
                sx={SigninCSS.loginBtn}
                onClick={() => alert("login pressed")}
              >
                Login
              </PrimaryButton>
            </Card>
          </Box>
        </div>
      </Box>
    </>
  );
};

export default Signin;
