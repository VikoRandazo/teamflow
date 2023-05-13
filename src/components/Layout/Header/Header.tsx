import React, { FC } from 'react';
import styles from './Header.module.scss';
import { FaBell } from 'react-icons/fa';
import logo from "../../../styles/assets/Logo horizontal.svg"
interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header}>
    <div className={styles.icons}>
      <div className={styles.notifications}>
      <FaBell/>
      </div>
    </div>
    <div className={styles.logo}>
      <img src={logo} alt="logo teamflow" />
    </div>
  </div>
);

export default Header;
