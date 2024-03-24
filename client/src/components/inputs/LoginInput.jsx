// import { Input } from "@mui/joy";

import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const LoginInput = ({ ...props }) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        marginY: "10px",
        borderRadius: "8px",
        width: "100%",
      }}
    >
      <InputLabel htmlFor="input-with-icon-adornment">{props.label}</InputLabel>
      <OutlinedInput
        id="input-with-icon-adornment"
        sx={{
          backgroundColor: "#f8f8f8",
        }}
        {...props}
      />
    </FormControl>
  );
};

export default LoginInput;
