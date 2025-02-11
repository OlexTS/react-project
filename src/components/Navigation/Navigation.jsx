import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Button from "@mui/material/Button";

const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <div>
      <Button component={NavLink} to="/" color="white">
        HOME
      </Button>
      {isLoggedIn && (
        <Button component={NavLink} to="/contacts" color="white">
          CONTACTS
        </Button>
      )}
    </div>
  );
};

export default Navigation;
