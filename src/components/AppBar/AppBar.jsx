import useAuth from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import Navigation from "../Navigation/Navigation";
import UserMenu from "../UserMenu/UserMenu";
// import AppBar from '@mui/material/AppBar';
const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default AppBar;
