import React, { FC } from "react";
import styles from "./Header.module.scss";
import { FaBell } from "react-icons/fa";
import logo from "../../../styles/assets/Logo horizontal.svg";
import { ReactComponent as ProfileSVG } from "../../../styles/assets/profilePics/profile-01.svg";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import { User } from "../../../models/User";
interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const user: User | null = useSelector((state: StoreRootTypes) => state.auth.user);

  return (
    <div className={styles.Header}>
      <div className={styles.userContainer}>
        <ProfileSVG />
        <h5>
          Hi, {user?.firstName} {user?.lastName}!
        </h5>
      </div>
      <div className={styles.logo}>
        <FaBell />
      </div>
    </div>
  );
};

export default Header;
