import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import CustomAppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import MenuBookIcon from "@mui/icons-material/MenuBook";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <MenuBookIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component={NavLink}
            to="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            PHONEBOOK
          </Typography>
          <Navigation />
          {isLoggedIn ? <Box sx={{ marginLeft: "auto" }}><UserMenu /></Box> : <AuthNav />}
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

export default AppBar;
