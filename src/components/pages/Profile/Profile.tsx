import React, { FC, useEffect, useState, useRef } from "react";
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
import { userDataActions } from "../../../slices/userData";
import { isDisabled } from "@testing-library/user-event/dist/utils";
interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [editable, setEditable] = useState<boolean>(false);
  const [navSwitch, setNavSwitch] = useState<string>(`General`);
  const [distanceBarValue, setDistanceBarValue] = useState<number>(20);
  const user: any = useSelector((state: StoreRootTypes) => state.auth.user);
  const [userState, setUserState] = useState<User>({
    firstName: user.firstName,
    lastName: user.lastName,
    password: user.password,
    username: user.username,
  });

  const userCategory = useSelector((state: StoreRootTypes) => state.preferences.category);
  const categories = useSelector((state: StoreRootTypes) => state.database.categories);

  const [categoryState, setCategoryState] = useState(userCategory);
  const handleLogout = () => {
    dispatch(authActions.resetAuth());
    dispatch(databaseActions.resetDatabase());
    dispatch(userDataActions.resetUserData());
    dispatch(preferencesActions.resetPreferences());
    navigate("/authForm/login");
    logout();
  };

  const handeOpenPreference = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    if (e.currentTarget.classList.contains(styles.open)) {
      e.stopPropagation();
      e.currentTarget.classList.remove(styles.open);
    } else {
      e.currentTarget.classList.add(styles.open);
    }
  };

  const firstNameRef = useRef<HTMLInputElement>(null);
  const lastNameRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
    setEditable((prevState) => !prevState);
    if (editable === true) {
      const target = e.currentTarget;

      // lastNameRef;
      // usernameRef;
      // passwordRef;
    }
  };
  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.currentTarget;
    if (!target.disabled) {
      if (firstNameRef.current !== null) {
        setUserState((prevState) => {
          const updatedState = {
            ...prevState,
            [target.id]: target.value,
          };
          dispatch(authActions.setUser(updatedState));
          return updatedState;
        });
      }
    }
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

  const [activeTarget, setActiveTarget] = useState<HTMLSpanElement>();
  const [prevTarget, setPrevTarget] = useState<HTMLSpanElement>();

  const handleCategoryChange = (e: React.MouseEvent<HTMLSpanElement>) => {
    const target = e.currentTarget;
    e.stopPropagation();
    setCategoryState(e.currentTarget.innerText);
    dispatch(preferencesActions.setCategory(e.currentTarget.innerText));

    if (activeTarget && activeTarget.classList.contains(styles.active)) {
      activeTarget.classList.remove(styles.active);
      setPrevTarget(activeTarget);
    }

    target.classList.add(styles.active);
    setActiveTarget(target);
    setCategoryState(target.innerText);
  };

  const handleSalaryAssignment = () => {};

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
                  disabled={!editable}
                  value={editable ? userState.firstName : user.firstName}
                  ref={firstNameRef}
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
                  value={editable ? userState.lastName : user.lastName}
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
                  disabled={true}
                  value={`@` + user.username}
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
                  disabled={true}
                  value={user.password}
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
                <h5>how far would you go to work?</h5>
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
                  {categories.map((category) => (
                    <span key={category} className={styles.badge} onClick={handleCategoryChange}>
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
