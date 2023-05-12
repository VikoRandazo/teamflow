import React, { FC } from 'react';
import styles from './Main.module.scss';
import Router from '../Router/Router';
import Home from '../pages/Home/Home';
interface MainProps {}

const Main: FC<MainProps> = () => (
  <div className={styles.Main}>
    <Router/>
  </div>
);

export default Main;
