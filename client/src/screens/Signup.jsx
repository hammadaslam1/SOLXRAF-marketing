/* eslint-disable no-unused-vars */
import {
  Alert,
  Backdrop,
  Box,
  Card,
  CircularProgress,
  IconButton,
} from "@mui/material";
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
import PersonIcon from "@mui/icons-material/Person";
import { useNavigate } from "react-router-dom";
import { SIGNIN } from "../router/Router";
import { useDispatch, useSelector } from "react-redux";
import {
  signinFailure,
  signinSuccess,
  signinStart,
} from "../reduxStore/user/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.user);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    const emailRegex =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    try {
      dispatch(signinStart());
      if (!name || !password || !email) {
        return dispatch(signinFailure("Please fill all required fields"));
      } else if (!emailRegex.test(email)) {
        return dispatch(signinFailure("Please enter a valid email address"));
      }
      const res = await fetch("http://localhost:3001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          email: email,
          password: password,
        }),
      });
      const data = await res.json();
      if (data.success === false) {
        return dispatch(signinFailure(data.message));
      }
      if (res.ok) {
        dispatch(signinSuccess(data));
        navigate(SIGNIN);
      }
    } catch (error) {
      dispatch(signinFailure(error.message));
    }
  };
  return (
    <div onKeyDown={(e) => e.key === "Enter" && handleSubmit()}>
      <PageHeading>Signup</PageHeading>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
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
                Signup
              </Typography>

              <LoginInput
                type="text"
                value={name}
                label="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                startAdornment={<PersonIcon sx={{ color: "#304fa1", mr: 2 }} />}
                placeholder="John Doe"
              />
              <LoginInput
                type="email"
                value={email}
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value.trim());
                }}
                startAdornment={<Mail sx={{ color: "#304fa1", mr: 2 }} />}
                placeholder="example@email.com"
              />
              <LoginInput
                type={!showPassword ? "password" : "text"}
                value={password}
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value.trim());
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
              {error && (
                <Alert variant="filled" severity="error" sx={{ width: "100%" }}>
                  {error}
                </Alert>
              )}
              <PrimaryButton
                sx={SigninCSS.loginBtn}
                onClick={() => handleSubmit()}
              >
                Signup
              </PrimaryButton>
            </Card>
          </Box>
          <div style={SigninCSS.divider}></div>
          <Box sx={SigninCSS.loginBox}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Krona One", color: "#304fa1cc" }}
            >
              Already registered?{" "}
              <PrimaryButton
                sx={[
                  SigninCSS.loginBtn,
                  {
                    fontSize: "1rem",
                    height: "fit-content",
                    p: 0,
                    width: "unset",
                    m: 0,
                    backgroundColor: "#fff",
                    color: "#304fa1",
                    px: 2,
                  },
                ]}
                onClick={() => navigate(SIGNIN)}
              >
                Signin
              </PrimaryButton>
            </Typography>
          </Box>
        </div>
      </Box>
    </div>
  );
};

export default Signup;
