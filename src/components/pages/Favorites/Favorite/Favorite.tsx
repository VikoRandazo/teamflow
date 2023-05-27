import React, { FC } from "react";
import styles from "./Favorite.module.scss";
import Applicant from "../../../jobMarket/Applicant/Applicant";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../../store";

interface FavoriteProps {}

const Favorite: FC<FavoriteProps> = () => {
  return <div className={styles.Favorite}></div>;
};

export default Favorite;
