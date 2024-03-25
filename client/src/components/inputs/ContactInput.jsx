// import { Input } from "@mui/joy";

import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const ContactInput = ({ ...props }) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        margin: "10px",
        borderRadius: "8px",
        //   width: "100%",
        // display: "inline-block",
      }}
    >
      <InputLabel htmlFor="input-with-icon-adornment">{props.label}</InputLabel>
      <OutlinedInput
        id="input-with-icon-adornment"
        sx={{
          backgroundColor: "#f8f8f8",
          color: "#304fa1",
        }}
        {...props}
      />
    </FormControl>
  );
};

export default ContactInput;
