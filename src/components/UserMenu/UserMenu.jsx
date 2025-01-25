import { useDispatch } from "react-redux";
import { logout } from "../../redux/auth/authOps";
import useAuth from "../../hooks/useAuth";

const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <p>`Welcome ${user.name}`</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
