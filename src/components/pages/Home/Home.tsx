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

  const [data, setData] = useState<(ApplicantProps | JobOfferProps | FreelancerProps)[]>();
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
  const [searchResults, setSearchResults] = useState<(ApplicantProps | JobOfferProps | FreelancerProps)[]>();

  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const purpose = useSelector((state: StoreRootTypes) => state.auth.purpose);

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
    } else if (target.classList.contains(styles.active)) {
      target.classList.remove(styles.active);
      setUserCategories((prevState) => prevState.filter((category) => category !== categoryName));
      dispatch(preferencesActions.setCategories(userCategories));
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.currentTarget.value;
    if (purpose === `jobOffers`) {
      const searchResults = jobOffers.filter(
        (offer) =>
          offer.position.toLowerCase().includes(searchValue.toLowerCase()) ||
          offer.category.toLowerCase().includes(searchValue.toLowerCase()) ||
          offer.city.toLowerCase().includes(searchValue.toLowerCase()) ||
          offer.company.toLowerCase().includes(searchValue.toLowerCase()) ||
          offer.salary.toLowerCase().includes(searchValue.toLowerCase())
      );
      setSearchResults(searchResults);
    }
  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  useEffect(() => {
    if (purpose === `applicants`) {
      setData(applicants);
    } else if (purpose === `jobOffers`) {
      setData(jobOffers);
    } else if (purpose === `freelancers`) {
      setData(freelancers);
    }
  }, [data]);

  return (
    <div className={styles.Home}>
      <div className={styles.header}>
        <h3>
          Hello, <br /> {firstName} {lastName}!
        </h3>
      </div>
      <div className={styles.body}>
        <div className={styles.searchContainer}>
          <input type="text" onChange={handleSearch} placeholder="Search somthing..." />
        </div>
        <div className={styles.categories}>
          <div className={styles.title}></div>
          <div className={styles.body}>
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
        <div className={styles.title}>
          <p>Browse by category</p>
        </div>
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
