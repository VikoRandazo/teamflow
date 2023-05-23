import React, { FC, useEffect, useState } from "react";
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
  FaAngleDown,
  FaAngleUp,
  FaArrowDown,
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
import { preferencesActions } from "../../../slices/preferences";
import { databaseActions } from "../../../slices/database";
import { favoritesActions } from "../../../slices/favorites";
interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [navSwitch, setNavSwitch] = useState<string>(`General`);
  const [tags, setTags] = useState("");
  const [distanceBarValue, setDistanceBarValue] = useState<number>(20);
  const user = useSelector((state: StoreRootTypes) => state.auth.user);
  const userCategories = useSelector((state: StoreRootTypes) => state.preferences.categories);

  useEffect(() => {
    console.log(userCategories);
  }, [userCategories]);

  const handleLogout = () => {
    dispatch(authActions.resetAuth());
    dispatch(databaseActions.resetDatabase());
    dispatch(favoritesActions.resetFavorites());
    dispatch(preferencesActions.resetPreferences());
    navigate("/authForm/login");
    logout();
  };

  const handeOpenPreference = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.classList.contains(styles.open)) {
      e.stopPropagation();
      e.currentTarget.classList.remove(styles.open);
    } else {
      e.currentTarget.classList.add(styles.open);
    }
  };

  const handleEdit = () => {
    setEditable((prevState) => !prevState);
  };

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const userValue = e.currentTarget.value;

  };

  const handleNavSwitch = () => {
    if (navSwitch === `General`) {
      setNavSwitch(`Preferences`);
    } else if (navSwitch === `Preferences`) setNavSwitch(`General`);
  };

  const handleDistanceBarValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDistanceBarValue(Number(e.target.value));
    dispatch(preferencesActions.setDistance(distanceBarValue));
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
        {navSwitch === `General` ? (
          <div className={styles.userData}>
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
                  value={ editable? ""  : user?.firstName}
                  onChange={handleChangeEvent}
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
                  onChange={handleChangeEvent}
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
                  onChange={handleChangeEvent}
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
                  onChange={handleChangeEvent}
                />
              </div>
            </div>
          </div>
        ) : (
          <div className={styles.preferences}>
            <div className={styles.preference} onClick={handeOpenPreference}>
              <div className={styles.title}>
                <FaRoute />
                <p>Distance from you</p>
                <FaAngleDown />
              </div>
              <div className={styles.body}>
                <div className={styles.displayDistance}>
                  <input
                    onChange={handleDistanceBarValue}
                    type="range"
                    name="distanceBar"
                    id="distanceBar"
                    min={0}
                    max={400}
                  />
                  <p>{distanceBarValue} km</p>
                </div>
              </div>
            </div>

            <div className={styles.preference} onClick={handeOpenPreference}>
              <div className={styles.title}>
                <FaDiceD6 />
                <p>Your categories</p>
                <FaAngleDown />
              </div>
              <div className={styles.body}>
                <div className={styles.categoriesContainer}>
                  {userCategories.map((category) => (
                    <span key={category} className={styles.badge}>
                      {category}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className={styles.preference} onClick={handeOpenPreference}>
              <div className={styles.title}>
                <FaMoneyBill />
                <p>Salary requirements</p>
                <FaAngleDown />
              </div>
            </div>
            <div className={styles.preference} onClick={handeOpenPreference}>
              <div className={styles.title}>
                <FaTags />
                <p>Your tags</p>
                <FaAngleDown />
              </div>
            </div>
            <div className={styles.preference + ` ` + styles.logOutBtn} onClick={handleLogout}>
              <div className={styles.title}>
                <FaAngleDown />
                <p>Logout</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Profile;
