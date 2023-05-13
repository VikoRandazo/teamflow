import { FC, useState } from "react";
import styles from "./Menu.module.scss";
import { FaHeart, FaHome, FaHouseUser, FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

interface MenuProps {}

const Menu: FC<MenuProps> = () => {
  const handleCardClick = (cardName: any) => {
    setActiveCard(cardName);
  };

  const [activeCard, setActiveCard] = useState("home") 

   return(
  <div className={styles.Menu}>
    <div className={styles.container}>

    <NavLink to={"/profile"}  onClick={() => handleCardClick(`profile`)}>
      <div className={styles.navItem + (" ") + (activeCard === `profile` ? styles.active : "")}>
        <FaHouseUser />
        <p>Profile</p>
      </div>
    </NavLink>
    <hr />
    
    <NavLink to={"/favorites"} onClick={() => handleCardClick(`favorites`)}>
    <div className={styles.navItem + (" ") + (activeCard === `favorites` ? styles.active : "")}>      
        <FaHeart />
        <p>Favorites</p>
      </div>
    </NavLink>
    <hr />

    <NavLink to={"/explore"}  onClick={() => handleCardClick(`explore`)}>
    <div className={styles.navItem + (" ") + (activeCard === `explore` ? styles.active : "")}>       
        <FaSearch />
        <p>Explore</p>
      </div>
    </NavLink>
    <hr />

    <NavLink to={"/home"}  onClick={() => handleCardClick(`home`)}>
    <div className={styles.navItem + (" ") + (activeCard === `home` ? styles.active : "")}>     
        <FaHome />
        <p>Home</p>
      </div>
    </NavLink>
    </div>
  </div>
  )
}

export default Menu;
