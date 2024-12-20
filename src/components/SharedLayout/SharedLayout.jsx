import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";
import css from "./SharedLayout.module.css";

const SharedLayout = () => {
  return (
    <div>
      <div className={css.container}>
        <NavLink to={"/"} className={css}>
          Home
        </NavLink>
        <NavLink to={"movies"} end>
          Movies
        </NavLink>
      </div>
      <Suspense>
        <div>
          <Outlet />
        </div>
      </Suspense>
    </div>
  );
};

export default SharedLayout;
