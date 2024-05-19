import {
  Alert,
  Avatar,
  Box,
  Button,
  Card,
  IconButton,
  Typography,
} from "@mui/material";
import { DashboardCSS } from "../../styles/DashboardCSS";
import { useDispatch, useSelector } from "react-redux";
import { ContactCSS } from "../../styles/ContactCSS";
import { useEffect, useRef, useState } from "react";
import ContactInput from "../inputs/ContactInput";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { HOME } from "../../router/Router";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import LoginInput from "../inputs/LoginInput";
import {
  updateFailure,
  updateStart,
  updateSuccess,
} from "../../reduxStore/user/userSlice";
import { useNavigate } from "react-router-dom";

const DashProfile = () => {
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProgress, setImageProgress] = useState(null);
  const [imageError, setError] = useState(null);
  const [formData, setFormData] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  console.log(imageProgress);
  const filePickerRef = useRef();
  console.log(currentUser._id);
  const handleDetails = async () => {
    if (email && username && password && name) {
      setFormData({
        ...formData,
        username: username,
        name: name,
        email: email,
        password: password,
      });
      try {
        dispatch(updateStart());
        const emailRegex =
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        // setOpen(true);
        if (!emailRegex.test(email)) {
          return dispatch(updateFailure("Please enter a valid email address"));
        }
        const res = await fetch(
          `http://localhost:3001/api/user/update/${currentUser._id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
          }
        );
        const data = await res.json();
        if (data.success === false) {
          return dispatch(updateFailure(data.message));
        }
        if (res.ok) {
          dispatch(updateSuccess(data));
          navigate(HOME);
        }
      } catch (error) {
        dispatch(updateFailure(error.message));
      }
    } else {
      dispatch(updateFailure("Please fill all required fields."));
    }
  };
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
      uploadImage(file);
    }
    // console.log(imageFile, imageUrl);
  };
  useEffect(() => {
    if (imageFile) {
      // uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async (imageFile) => {
    console.log(1);
    const storage = getStorage(app);
    console.log(2);
    const fileName = currentUser.username;
    console.log(3);
    const storageRef = ref(storage, fileName);
    console.log(imageFile);
    console.log(4);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    console.log(uploadTask);
    console.log(5);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageProgress(progress.toFixed(0));
        setError(null);
        // console.log("Download");
      },
      (error) => {
        // setError(`image couldn't be uploaded \nit should be less than 2MB`);
        setError(error.message);
        console.log(error.message);
        // setImageUrl(null);
      },
      async () => {
        console.log("Download");
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
          console.log(downloadURL);
          setFormData({ ...formData, profilePicture: downloadURL });
        });
      }
    );
  };
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
      defaultValue: currentUser.username,
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
      defaultValue: currentUser.name,
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
      defaultValue: currentUser.email,
    },
    {
      value: password,
      label: "New Password",
      type: !showPassword ? "password" : "text",
      onChange: (e) => {
        setPassword(e.target.value);
        // setIsFilled(false);
      },
      endAdornment: (
        <IconButton onClick={() => setShowPassword((show) => !show)}>
          {showPassword ? (
            <VisibilityIcon sx={{ color: "#304fa1" }} />
          ) : (
            <VisibilityOffIcon sx={{ color: "#304fa1" }} />
          )}
        </IconButton>
      ),
      placeholder: !showPassword ? "xxxxxxxx" : "password",
      required: true,
      defaultValue: "",
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
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              ref={filePickerRef}
              hidden
            />
            <div
              style={{
                width: "fit-content",
                // padding: "5px",
                backgroundColor: "transparent",
                borderRadius: "50%",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {imageProgress && (
                <CircularProgressbar
                  value={imageProgress || 0}
                  // text={`${imageProgress}%`}
                  strokeWidth={5}
                  styles={{
                    root: {
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    },
                    path: {
                      stroke: `rgb(48, 78, 161)`,
                    },
                  }}
                />
              )}
              <IconButton
                sx={{
                  padding: "0px",
                }}
                onClick={() => filePickerRef.current.click()}
              >
                <Avatar
                  src={imageUrl || currentUser.profilePicture}
                  sx={{
                    width: 110,
                    height: 110,
                    opacity: imageProgress && imageProgress < 100 && 0.6,
                    border:
                      imageProgress && imageProgress < 100
                        ? "5px solid transparent"
                        : "5px solid #e6e6e6",
                  }}
                />
              </IconButton>
            </div>
            <Typography>
              {imageProgress > 0 && imageProgress < 100 && `${imageProgress}%`}
            </Typography>
            {imageError && <Alert severity="error">{imageError}</Alert>}
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
                {error && (
                  <Alert
                    variant="filled"
                    severity="error"
                    sx={{ width: "100%" }}
                  >
                    {error}
                  </Alert>
                )}
                {fields.map((data, i) => (
                  <LoginInput
                    type={data.type}
                    value={data.value}
                    label={data.label}
                    onChange={data.onChange}
                    // startAdornment={<KeyIcon sx={{ color: "#304fa1", mr: 2 }} />}
                    endAdornment={data.endAdornment}
                    placeholder={data.placeholder}
                  />
                ))}
              </div>
            </div>
          </Box>
          <div style={DashboardCSS.divider}></div>
          <Box sx={DashboardCSS.detailBottom}>
            <Button
              variant="plain"
              sx={DashboardCSS.detailBtn}
              disableElevation
              onClick={handleDetails}
            >
              Save Details
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default DashProfile;
