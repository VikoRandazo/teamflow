import React, { FC } from "react";
import styles from "./Menu.module.scss";
import { FaHome, FaHouseUser, FaRegHeart, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface MenuProps {}

const Menu: FC<MenuProps> = () => (
  <div className={styles.Menu}>
    <NavLink to={"/profile"}>
      <div className={styles.navItem}>
        <FaHouseUser />
        <p>Profile</p>
      </div>
    </NavLink>
    <hr />
    
    <NavLink to={"/favorites"}>
      <div className={styles.navItem}>
        <FaRegHeart />
        <p>Favorites</p>
      </div>
    </NavLink>
    <hr />

    <NavLink to={"/explore"}>
      <div className={styles.navItem}>
        <FaSearch />
        <p>Explore</p>
      </div>
    </NavLink>
    <hr />

    <NavLink to={"/home"}>
      <div className={styles.navItem}>
        <FaHome />
        <p>Home</p>
      </div>
    </NavLink>
  </div>
);

export default Menu;
