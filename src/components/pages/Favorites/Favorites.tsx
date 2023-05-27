import React, { FC, useState } from "react";
import styles from "./Favorites.module.scss";
import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
import Applicant, { ApplicantProps } from "../../jobMarket/Applicant/Applicant";
import { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import { JobOfferProps } from "../../jobMarket/JobOffer/JobOffer";
import Favorite from "./Favorite/Favorite";

interface FavoritesProps {
  favoriteObject?: ApplicantProps | FreelancerProps | JobOfferProps;
}

const Favorites: FC<FavoritesProps> = ({ favoriteObject }) => {
  const [favorites, setFavorites] = useState([]);

  return (
    <div className={styles.Favorites}>
      <div className={styles.header}>
        <div className={styles.title}>
          <h3>My Favorites</h3>
        </div>
      </div>
      <div className={styles.body}></div>
    </div>
  );
};

export default Favorites;
