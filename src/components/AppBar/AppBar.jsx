import { NavLink } from "react-router-dom";
import { useContext } from "react";
import useAuth from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
import CustomAppBar from "@mui/material/AppBar";
import { Box, Toolbar, Typography, Container, IconButton } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import { ThemeContext } from "../../theme/themeContext";
import { Brightness4, Brightness7 } from "@mui/icons-material";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const { isDarkMode, toggleMode } = useContext(ThemeContext);
  return (
    <CustomAppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters >
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
          <Box sx={{marginLeft: 'auto', display: 'flex', alignItems: 'center'}}>
          {isLoggedIn ? (
            <Box sx={{ marginLeft: "auto" }}>
              <UserMenu />
            </Box>
          ) : (
            <AuthNav />
          )}
          <IconButton onClick={toggleMode} color="inherit" sx={{marginLeft: '5px'}} >
            {isDarkMode ? <Brightness7 /> : <Brightness4 />}
          </IconButton></Box>
        </Toolbar>
      </Container>
    </CustomAppBar>
  );
};

export default AppBar;
