import { Button } from "@mui/material";
import { SigninCSS } from "../../styles/SigninCSS";
import GoogleIcon from "@mui/icons-material/Google";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import { app } from "../../firebase";
import { useDispatch } from "react-redux";
import { signinFailure, signinSuccess } from "../../reduxStore/user/userSlice";
import { useNavigate } from "react-router-dom";
import { HOME } from "../../router/Router";

const GoogleButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const auth = getAuth(app);
  const handleClick = async () => {
    const provider = new GoogleAuthProvider();
    provider.setCustomParameters({
      prompt: "select_account",
    });
    try {
      const resultFromGoogle = await signInWithPopup(auth, provider);
      console.log(resultFromGoogle.user.photoURL);
      const res = await fetch("http://localhost:3001/api/auth/google", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          //   id: resultFromGoogle.user.uid,
          name: resultFromGoogle.user.displayName,
          photoURL: resultFromGoogle.user.photoURL,
          email: resultFromGoogle.user.email,
        }),
      });
      console.log("--------------------------------");
      const data = await res.json();
      if (res.ok) {
        console.log(resultFromGoogle);
        dispatch(signinSuccess(data));
        navigate(HOME);
      } else if (!data.success) {
        dispatch(signinFailure(data.message));
      }
    } catch (error) {
      console.log(error);
      dispatch(signinFailure(error.message));
    }
  };
  return (
    <Button
      variant="contained"
      sx={SigninCSS.googleBtn}
      startIcon={<GoogleIcon sx={{ fontSize: "2rem" }} />}
      disableElevation
      onClick={handleClick}
    >
      Continue with Google
    </Button>
  );
};

export default GoogleButton;
