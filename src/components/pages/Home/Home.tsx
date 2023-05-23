import React, { FC, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
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

  const [userCategories, setUserCategories] = useState<string[]>([]);
  const [categories, setCategories] = useState<string[]>([
    `Accounting`,
    `Information Technology`,
    `Healthcare`,
    `Education`,
    `Sales`,
    `Engineering`,
    `Marketing`,
    `Finance`,
    `Customer Service`,
    `Human Resources`,
    `Hi Tech`,
  ]);

  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const purpose = useSelector((state: StoreRootTypes) => state.database.purpose);
  const reduxUserCategories = useSelector((state: StoreRootTypes) => state.preferences.categories);

  const user: any = jwtDecode(token);
  const { firstName, lastName, username } = user.user;

  const handleActive = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    let categoryName = target.innerText;
    if (!target.classList.contains(styles.active)) {
      if (userCategories.includes(categoryName)) {
        return;
      }
      target.classList.add(styles.active);
      setUserCategories((prevState) => [...prevState, categoryName]);
      dispatch(preferencesActions.setCategories(userCategories));
    } else if (target.classList.contains(styles.active) || reduxUserCategories.includes(categoryName)) {
      target.classList.remove(styles.active);
      setUserCategories((prevState) => prevState.filter((category) => category !== categoryName));
      dispatch(preferencesActions.setCategories(userCategories));
    }
  };

  return (
    <div className={styles.Home}>
      <div className={styles.header}>
        <h5>Explore Your Path to a Dream Career</h5>
        <div className={styles.categories}>
          {categories.map((category) => {
            const uuid = uuidV4();
            return (
              <span onClick={handleActive} className={styles.badge}>
                {category}
              </span>
            );
          })}
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.title}>
          <p>Just for you</p>
        </div>
        <div className={styles.title}>
          <p>Recently watched</p>
        </div>
        <div className={styles.title}>
          <p>Browse by category</p>
        </div>
        <div className={styles.body}></div>
        <div className={styles.cards}>
          <div className={styles.applications}>
            {purpose === `jobOffers` &&
              jobOffers
                .filter((offer) => userCategories.includes(offer.category))
                .map((offer) => (
                  <Card>
                    <JobOffer
                      id={offer.id}
                      position={offer.position}
                      company={offer.company}
                      location={offer.location}
                      city={offer.city}
                      category={offer.category}
                      description={offer.description}
                      salary={offer.salary}
                      experience={offer.experience}
                    />
                  </Card>
                ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
