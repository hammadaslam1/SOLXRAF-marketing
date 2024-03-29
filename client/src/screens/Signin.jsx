/* eslint-disable no-unused-vars */
import {
  Alert,
  Backdrop,
  Box,
  Button,
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
import { HOME, SIGNUP } from "../router/Router";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import {
  signinFailure,
  signinSuccess,
  signinStart,
} from "../reduxStore/user/userSlice";
import GoogleButton from "../components/buttons/GoogleButton";

const Signin = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      dispatch(signinStart());
      const emailRegex =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      // setOpen(true);
      if (!emailRegex.test(email)) {
        return dispatch(signinFailure("Please enter a valid email address"));
      }
      const res = await fetch("http://localhost:3001/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
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
        navigate(HOME);
      }
    } catch (error) {
      return dispatch(signinFailure(error.message));
    }
  };
  return (
    <div onKeyDown={(e) => e.key === "Enter" && handleSubmit()}>
      <PageHeading>Login</PageHeading>
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
                Login
              </Typography>
              <LoginInput
                type="email"
                value={email}
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
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
                Login
              </PrimaryButton>
            </Card>
          </Box>
          <div style={SigninCSS.divider}></div>
          <Box sx={SigninCSS.loginBox}>
            <Typography
              variant="body2"
              sx={{ fontFamily: "Krona One", color: "#304fa1cc" }}
            >
              Not have an account?{" "}
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
                onClick={() => navigate(SIGNUP)}
              >
                Signup
              </PrimaryButton>
            </Typography>
          </Box>
          <div
            style={{
              textAlign: "center",
              fontFamily: "Krona One",
              color: "#304fa1",
              marginTop: "10px",
              marginBottom: "10px",
            }}
          >
            OR
          </div>
          <GoogleButton />
        </div>
      </Box>
    </div>
  );
};

export default Signin;
