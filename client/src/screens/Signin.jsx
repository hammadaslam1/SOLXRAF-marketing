import { Box, Card, CardMedia, Typography } from "@mui/material";
import LoginInput from "../components/inputs/LoginInput";
import { Mail } from "@mui/icons-material";

const Signin = () => {
  return (
    <Box>
      <div className="left">
        <CardMedia />
      </div>
      <div className="right">
        <Card>
          <Typography variant="h4">Login</Typography>
          <LoginInput
            type="email"
            // value={email}
            // onChange={(e) => {
            //   setEmail(e.target.value);
            //   setIsFilled(false);
            // }}
            startDecorator={<Mail sx={{ color: "#112d4e" }} />}
            placeholder="example@email.com"
          />
        </Card>
      </div>
    </Box>
  );
};

export default Signin;
