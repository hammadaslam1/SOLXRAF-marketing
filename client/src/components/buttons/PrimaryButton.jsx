import { Button } from "@mui/material";

const PrimaryButton = (props) => {
  return (
    <Button
      variant="contained"
      
      disableElevation
      {...props}
    >
      {props.children}
    </Button>
  );
};

export default PrimaryButton;
