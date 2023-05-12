import React, { FC } from "react";
import styles from "./Layout.module.scss";
import Main from "../Main/Main";
import Menu from "../Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../store";
import { authActions } from "../../slices/auth";
import Home from "../pages/Home/Home";
interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const dispatch = useDispatch();
  let isLoggedIn = useSelector(
    (state: StoreRootTypes) => state.auth.isLoggedIn
  );
  return (
    <div className={styles.Layout}>
      <div
        className={styles.Main}
        style={isLoggedIn ? { height: "90vh" } :{ height: "100vh" }  }
      >
        <Main />
      </div>
      {isLoggedIn ? <Menu /> : null}
      </div> 
  );
};

export default Layout;
