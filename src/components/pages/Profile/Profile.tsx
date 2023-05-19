import React, { FC, useState } from "react";
import styles from "./Profile.module.scss";
import { logout } from "../../../auth/auth";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../../../slices/auth";
import { ReactComponent as ProfileSVG } from "../../../styles/assets/profilePics/profile-01.svg";
import { StoreRootTypes } from "../../../store";
import { User } from "../../../models/User";
import {
  FaAddressCard,
  FaCogs,
  FaDiceD6,
  FaLockOpen,
  FaMoneyBill,
  FaRoute,
  FaTags,
  FaUser,
  FaUserAstronaut,
  FaUserSecret,
} from "react-icons/fa";
interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: StoreRootTypes) => state.auth.user);

  const handleLogout = () => {
    dispatch(authActions.setToken(""));
    dispatch(authActions.isLoggedIn(false));
    dispatch(authActions.setUser(null));
    dispatch(authActions.setPurpose(null));
    navigate("/authForm/login");
    logout();
  };

  const [editable, setEditable] = useState<boolean>(false);
  const [navSwitch, setNavSwitch] = useState<string>(`General`);
  const [tags, setTags] = useState("");
  const [distanceBarValue, setDistanceBarValue] = useState<number>(20);

  const handeOpenPreference = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains(styles.open)) {
      e.stopPropagation();
      e.currentTarget.classList.remove(styles.open);
      console.log("isOpen");
    } else {
      console.log("isClosed");
      e.currentTarget.classList.add(styles.open);
    }
  };

  const handleEdit = () => {
    setEditable((prevState) => !prevState);
  };

  const handleNavSwitch = () => {
    if (navSwitch === `General`) {
      setNavSwitch(`Preferences`);
    } else if (navSwitch === `Preferences`) setNavSwitch(`General`);
  };

  const handleDistanceBarValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistanceBarValue(Number(e.target.value));
  };
  return (
    <div className={styles.Profile}>
      <div className={styles.header}>
        <div className={styles.image}>
          <ProfileSVG />
        </div>
        <div className={styles.details}>
          <h4>
            {user?.firstName} {user?.lastName}
          </h4>
          <p>@{user?.username}</p>
          <button onClick={handleEdit} className={styles.primary}>
            Edit profile
          </button>
        </div>
      </div>
      <div className={styles.body}>
        <nav className={styles.nav}>
          <span
            onClick={handleNavSwitch}
            className={navSwitch === `General` ? styles.navSwitch + ` ` + styles.active : styles.navSwitch}
          >
            <FaAddressCard />
            General
          </span>
          <span
            onClick={handleNavSwitch}
            className={navSwitch === `Preferences` ? styles.navSwitch + ` ` + styles.active : styles.navSwitch}
          >
            <FaCogs />
            Preferences
          </span>
        </nav>
        {/* <div className={styles.logout}>
          <button onClick={handleLogout}>Logout</button>
        </div> */}

        {/* <div className={styles.userData}>
          <div className={styles.inputContainer}>
            <label htmlFor="firstName">First name</label>
            <div className={styles.inputBox}>
              <FaUser />
              <input
                className={editable ? "" : styles.active}
                id="firstName"
                type="text"
                placeholder="First Name"
                disabled={editable ? false : true}
                value={user?.firstName}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="lastName">Last name</label>
            <div className={styles.inputBox}>
              <FaUser />
              <input
                id="lastName"
                className={editable ? "" : styles.active}
                type="text"
                placeholder="Last Name"
                disabled={editable ? false : true}
                value={user?.lastName}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="username">Username</label>
            <div className={styles.inputBox}>
              <FaUserAstronaut />
              <input
                id="username"
                className={editable ? "" : styles.active}
                type="text"
                placeholder="Username"
                disabled={editable ? false : true}
                value={`@` + user?.username}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label htmlFor="password">Password</label>
            <div className={styles.inputBox}>
              <FaUserSecret />
              <input
                className={editable ? "" : styles.active}
                id="password"
                type="password"
                placeholder="Password"
                disabled={editable ? false : true}
                value={user?.password}
              />
            </div>
          </div>
        </div> */}
        <div className={styles.preferences}>
          <div onClick={handeOpenPreference} className={styles.preference}>
            <div className={styles.title}>
              <FaRoute />
              <p>Distance from you</p>
            </div>
            <div className={styles.preferenceContent}>
              <div className={styles.displayDistance}>
                <p>{distanceBarValue} km</p>
              </div>
              <input
                onChange={handleDistanceBarValue}
                type="range"
                name="distanceBar"
                id="distanceBar"
                min={0}
                max={400}
              />
              <button className={styles.primary}>save changes</button>
            </div>
          </div>
          <div onClick={handeOpenPreference} className={styles.preference}>
            <FaDiceD6 />
            <p>Your categories</p>
          </div>
          <div onClick={handeOpenPreference} className={styles.preference}>
            <FaMoneyBill />
            <p>Salary requirements</p>
          </div>
          <div onClick={handeOpenPreference} className={styles.preference}>
            <FaTags />
            <p>Your tags</p>
          </div>
          <div className={styles.preference + ` ` + styles.logOutBtn}>
            <FaLockOpen />
            <p>Logout</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
