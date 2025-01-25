import useAuth from "../../hooks/useAuth";
import AuthNav from "../AuthNav/AuthNav";
import UserMenu from "../UserMenu/UserMenu";

const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return <div>{isLoggedIn ? <UserMenu /> : <AuthNav />}</div>;
};

export default AppBar;
