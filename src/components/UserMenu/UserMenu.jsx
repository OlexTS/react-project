import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOps";
import useAuth from "../../hooks/useAuth";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Typography
        variant="h6"
        color="inherit"
        component="div"
        sx={{ marginRight: "20px" }}
      >
        `Welcome ${user.name}`
      </Typography>
      <Button variant="outlined" color="black" onClick={handleLogout}>
        Logout
      </Button>
    </Box>
  );
};

export default UserMenu;
