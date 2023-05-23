import React, { FC, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router";
import { ReactReduxContext, useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import jwtDecode from "jwt-decode";
import Applicant, { ApplicantProps } from "../../jobMarket/Applicant/Applicant";
import JobOffer, { JobOfferProps } from "../../jobMarket/JobOffer/JobOffer";
import { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import applicants from "../../../data/applicants.json";
import jobOffers from "../../../data/jobOffers.json";
import freelancers from "../../../data/freeLancers.json";
import { v4 as uuidV4 } from "uuid";
import { preferencesActions } from "../../../slices/preferences";
import Card from "../../Cards/Card/Card";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();


  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const purpose = useSelector((state: StoreRootTypes) => state.database.purpose);
  const reduxUserCategories = useSelector((state: StoreRootTypes) => state.preferences.categories);
  const database = useSelector((state:StoreRootTypes) => state.database.data)
  const user: any = jwtDecode(token);
  const { firstName, lastName, username } = user.user;

  return (
    <div className={styles.Home}>
      <div className={styles.header}>
        <h5>Explore Your Path to a Dream Career</h5>
      </div>
      <div className={styles.body}>
        <div className={styles.forYou}>
          <div className={styles.title}>
            <h5>Just for you</h5>
          </div>
          <div className={styles.results}>

          </div>
        </div>
        <div className={styles.body}></div>
        <div className={styles.cards}>
          <div className={styles.applications}>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
