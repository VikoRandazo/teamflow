import React, { FC } from "react";
import styles from "./Profile.module.scss";
import { logout } from "../../../auth/auth";
import { useNavigate } from "react-router";

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/authForm/login");
    logout();
  };

  return (
    <div className={styles.Profile}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <div className={styles.logout}>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>
    </div>
  );
};
export default Profile;
