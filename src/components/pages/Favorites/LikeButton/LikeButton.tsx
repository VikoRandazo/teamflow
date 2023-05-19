import React, { FC, useEffect, useState } from "react";
import styles from "./LikeButton.module.scss";
import { FaHeart } from "react-icons/fa";
import { ApplicantProps } from "../../../jobMarket/Applicant/Applicant";
import { FreelancerProps } from "../../../jobMarket/Freelancer/Freelancer";
import { JobOfferProps } from "../../../jobMarket/JobOffer/JobOffer";
import Favorite from "../Favorite/Favorite";
import { useDispatch } from "react-redux";
import { favoritesActions } from "../../../../slices/favorites";

interface LikeButtonProps {
  favoriteObject?: (ApplicantProps | FreelancerProps | JobOfferProps);
}


const LikeButton: FC<LikeButtonProps> = ({favoriteObject}) => {

  const dispatch = useDispatch()


  const handleLike = () => {
    if (favoriteObject) {
      dispatch(favoritesActions.setFavorite(favoriteObject))
      localStorage.setItem("Favorite", JSON.stringify(favoriteObject))
    }
  };

  // useEffect(() => {
  //   console.log(favoriteObject);
  // }, [favoriteObject])

  return (
    <div className={styles.LikeButton}>
      <span className={styles.heartSVG} onClick={handleLike}>
        <FaHeart />
      </span>
    </div>
  );
};

export default LikeButton;
