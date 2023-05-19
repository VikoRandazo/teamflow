import React, { FC } from "react";
import styles from "./Layout.module.scss";
import Main from "./Main/Main";
import Menu from "./Menu/Menu";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../store";
import { authActions } from "../../slices/auth";
import Home from "../pages/Home/Home";
import Header from "./Header/Header";
interface LayoutProps {}

const Layout: FC<LayoutProps> = () => {
  const dispatch = useDispatch();
  let isLoggedIn = useSelector(
    (state: StoreRootTypes) => state.auth.isLoggedIn
  );
  return (
    <div className={styles.Layout}>
      <div
        className={styles.header}
        style={isLoggedIn ? { height: "8vh" } : { height: "0vh" }}
      >
        {isLoggedIn ? <Header /> : null}
      </div>
      <div
        className={styles.Main}
        style={isLoggedIn ? { height: "84vh" } : { height: "100vh" }}
      >
        <Main />
      </div>
      <div
        className={styles.Menu}
        style={isLoggedIn ? { height: "8vh" } : { height: "0vh" }}
      >
        {isLoggedIn ? <Menu /> : null}
      </div>
    </div>
  );
};

export default Layout;
