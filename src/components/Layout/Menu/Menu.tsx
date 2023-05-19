import React, { FC, useState } from "react";
import { FaHeart, FaHome, FaHouseUser, FaPlus, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import styles from "./Menu.module.scss";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const handleCardClick = (cardName: any) => {
    setActiveCard(cardName);
  };

  const [activeCard, setActiveCard] = useState("home");
  const isLoggedIn = useSelector((state: StoreRootTypes) => state.auth.isLoggedIn);
  if (!isLoggedIn) {
    return null;
  }
  return isLoggedIn ? (
    <div className={styles.Menu}>
      <div className={styles.layout}>
        <div className={styles.container}>
          <NavLink to={"/profile"} onClick={() => handleCardClick("profile")}>
            <div className={`${styles.navItem} ${activeCard === "profile" ? styles.active : ""}`}>
              <FaHouseUser />
              <p>Profile</p>
            </div>
          </NavLink>
          <hr />

          <NavLink to={"/favorites"} onClick={() => handleCardClick("favorites")}>
            <div className={`${styles.navItem} ${activeCard === "favorites" ? styles.active : ""}`}>
              <FaHeart />
              <p>Favorites</p>
            </div>
          </NavLink>
          <hr />

          <NavLink to={"/addModal"} onClick={() => handleCardClick("addModal")}>
            <div className={`${styles.navItem} ${styles.add}`}>
              <FaPlus />
            </div>
          </NavLink>

          <NavLink to={"/explore"} onClick={() => handleCardClick("explore")}>
            <div className={`${styles.navItem} ${activeCard === "explore" ? styles.active : ""}`}>
              <FaSearch />
              <p>Explore</p>
            </div>
          </NavLink>
          <hr />

          <NavLink to={"/home"} onClick={() => handleCardClick("home")}>
            <div className={`${styles.navItem} ${activeCard === "home" ? styles.active : ""}`}>
              <FaHome />
              <p>Home</p>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  ) : null;
};

export default Menu;
