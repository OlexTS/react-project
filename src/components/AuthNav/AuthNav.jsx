import { NavLink } from "react-router-dom";
import Button from "@mui/material/Button";

const AuthNav = () => {
  return (
    <>
      <Button component={NavLink} to="/register" color="white">
        Register
      </Button>
      <Button component={NavLink} to="/login" color="white">
        Login
      </Button>
    </>
  );
};

export default AuthNav;
