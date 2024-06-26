// import { Input } from "@mui/joy";

import {
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

const ContactInput = ({ sx = {}, ...props }) => {
  return (
    <FormControl
      variant="outlined"
      sx={{
        margin: "10px",
        borderRadius: "8px",
        //   width: "100%",
        // display: "inline-block",
        ...sx,
      }}
      required={props.required}
      defaultValue={props.defaultValue}
    >
      <InputLabel
        htmlFor="input-with-icon-adornment"
        sx={{ fontFamily: "Krona One", fontSize: "0.9rem" }}
      >
        {props.label}
      </InputLabel>
      <OutlinedInput
        id="input-with-icon-adornment"
        sx={{
          backgroundColor: "#304fa111",
          color: "#304fa1",
          fontFamily: "Krona One",
        }}
        {...props}
        defaultValue={props.defaultValue}
      />
    </FormControl>
  );
};

export default ContactInput;
