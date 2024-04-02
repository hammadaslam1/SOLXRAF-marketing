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
import { useSelector } from "react-redux";
import { ContactCSS } from "../../styles/ContactCSS";
import { useEffect, useRef, useState } from "react";
import ContactInput from "../inputs/ContactInput";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../../firebase";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const DashProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);
  const [imageProgress, setImageProgress] = useState(null);
  const [error, setError] = useState(null);
  console.log(imageProgress);
  const filePickerRef = useRef();
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      uploadImage();
      setImageFile(file);
      setImageUrl(URL.createObjectURL(file));
    }
    // console.log(imageFile, imageUrl);
  };
  useEffect(() => {
    if (imageFile) {
      // uploadImage();
    }
  }, [imageFile]);
  const uploadImage = async () => {
    const storage = getStorage(app);
    const fileName = currentUser.username;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, imageFile);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setImageProgress(progress.toFixed(0));
        setError(null);
      },
      (error) => {
        setError(`image couldn't be uploaded \nit should be less than 2MB`);
        console.log(error.message);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setImageUrl(downloadURL);
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
      defaultValue: currentUser.isAdmin ? "Admin" : "User",
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
            {error && <Alert severity="error">{error}</Alert>}
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
                    // startAdornment={data.startAdornment}
                    placeholder={data.placeholder}
                    inputComponent="input"
                    required={data.required}
                    defaultValue={data.defaultValue}
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
