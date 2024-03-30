import {
  Avatar,
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
} from "@mui/material";
import { MenuData } from "../../database/MenuData";
import { useSelector } from "react-redux";
import { PROFILE } from "../../router/Router";
import { useNavigate } from "react-router-dom";
import { MenuCSS } from "./navbarCSS/MenuCSS";

const MenuList = (props) => {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const handleClick = () => {};
  return (
    <Box>
      <Tooltip title={currentUser.name}>
        <IconButton onClick={props.handleOpenUserMenu} sx={{ p: 0 }}>
          <Avatar
            alt={currentUser.name.split(" ")[0]}
            src={currentUser.profilePicture}
          />
        </IconButton>
      </Tooltip>
      <Menu
        sx={{ mt: "45px" }}
        id="menu-appbar"
        anchorEl={props.anchorElUser}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(props.anchorElUser)}
        onClose={props.handleCloseUserMenu}
      >
        <div style={MenuCSS.menuAvatar}>
          <Avatar
            src={currentUser.profilePicture}
            sx={{ marginLeft: "20px", width: 52, height: 52 }}
          />
          <div style={MenuCSS.menuProfile}>
            <Typography fontSize={15} fontWeight={600} color={"#023d65"}>
              {currentUser.name}
            </Typography>
            <Button
              size="small"
              sx={[MenuCSS.profileBtn]}
              onClick={() => {
                navigate(PROFILE);
              }}
            >
              Profile
            </Button>
          </div>
        </div>
        {MenuData.map((data, i) => (
          <MenuItem key={i} onClick={() => navigate(data.to)}>
            <Typography textAlign="center">{data.name}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuList;
