import React, { FC, useEffect, useState } from "react";
import styles from "./RegisterStep3.module.scss";
import { ReactComponent as Svg } from "../../../../styles/assets/registerStep3.svg";
import { FaUserTie, FaBriefcase, FaLaptop, FaCircle } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authActions } from "../../../../slices/auth";
import { databaseActions } from "../../../../slices/database";
import applicants from "../../../../data/applicants.json";
import jobOffers from "../../../../data/jobOffers.json";
import freelancers from "../../../../data/freeLancers.json";
import { ApplicantProps, JobOfferProps, FreelancerProps } from "../../../../models/jobMarket";
import { preferencesActions } from "../../../../slices/preferences";

interface RegisterStep3Props {}

const RegisterStep3: FC<RegisterStep3Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState<(ApplicantProps | JobOfferProps | FreelancerProps)[]>();
  const [purpose, setPurpose] = useState<any>(`jobOffers`);
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

  const handleRegister = () => {
    dispatch(authActions.isLoggedIn(true));
    navigate("/home");
  };

  const handleGoBack = () => {
    setUserCategories([]);
    dispatch(preferencesActions.setCategories(userCategories));

    navigate("/authForm/register/step2");

  };

  return (
    <div className={styles.RegisterStep3}>
      <div className={styles.header}>
        <Svg />
      </div>
      <div className={styles.body}>
        <div className={styles.clipPath}>
          <div className={styles.steps}>
            <FaCircle />
            <FaCircle />
            <FaCircle />
          </div>
          <div className={styles.purposes}>
            <h5>What Do You Specialize In?</h5>
            <div className={styles.categories} onClick={handleActive}>
            {categories.map((category) => {
            return (
              <span onClick={handleActive} className={styles.badge}>
                {category}
              </span>
            );
          })}
            </div>
          </div>
          <div className={styles.navigation}>
            <button className={styles.primary} onClick={handleRegister}>
              Get started!
            </button>
            <button className={styles.secondary} onClick={handleGoBack}>
              Go back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep3;
