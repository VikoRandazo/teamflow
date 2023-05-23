import React, { FC, useEffect, useState } from "react";
import styles from "./RegisterStep2.module.scss";
import { ReactComponent as Svg } from "../../../../styles/assets/registerStep2.svg";
import { FaUserTie, FaBriefcase, FaLaptop } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { authActions } from "../../../../slices/auth";
import { databaseActions } from "../../../../slices/database";
import applicants from "../../../../data/applicants.json";
import jobOffers from "../../../../data/jobOffers.json";
import freelancers from "../../../../data/freeLancers.json";
import { ApplicantProps, JobOfferProps, FreelancerProps } from "../../../../models/jobMarket";

interface RegisterStep2Props {}

const RegisterStep2: FC<RegisterStep2Props> = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [data, setData] = useState<(ApplicantProps | JobOfferProps | FreelancerProps)[]>();
  const [purpose, setPurpose] = useState<any>(`jobOffers`);

  const handleSelectCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const prevNode = document.getElementsByClassName(styles.card + ` ` + styles.active)[0];
    if (prevNode) {
      prevNode.classList.remove(styles.active);
    }
    const purposeNode = e.currentTarget;
    purposeNode.classList.add(styles.active);
    setPurpose(purposeNode.id);
  };

  useEffect(() => {
    if (purpose === `applicants`) {
      setData(applicants);
      console.log(data);
      dispatch(databaseActions.setPurpose(purpose));
      dispatch(databaseActions.setData(data));
    } else if (purpose === `jobOffers`) {
      setData(jobOffers);
      console.log(data);
      dispatch(databaseActions.setPurpose(purpose));
      dispatch(databaseActions.setData(data));
    } else if (purpose === `freelancers`) {
      setData(freelancers);
      console.log(data);
      dispatch(databaseActions.setPurpose(purpose));
      dispatch(databaseActions.setData(data));
    }
  }, [purpose]);

  const handleRegister = () => {
    dispatch(databaseActions.setPurpose(purpose));
    dispatch(databaseActions.setData(data));
    dispatch(authActions.isLoggedIn(true));
    navigate("/home");
  };

  return (
    <div className={styles.RegisterStep2}>
      <div className={styles.header}>
        <div className={styles.step}>
          <h4>2 of 2</h4>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.svg}>
          <Svg />
        </div>
        <div className={styles.role}>
          <p>choose your role:</p>
        </div>
        <div className={styles.cards}>
          <div id={`jobOffers`} onClick={handleSelectCard} className={styles.card + " " + styles.active}>
            <FaUserTie />
            <div className={styles.para}>
              <h4>im looking for a job</h4>
            </div>
          </div>

          <div id={`applicants`} onClick={handleSelectCard} className={styles.card}>
            <FaBriefcase />
            <div className={styles.para}>
              <h4>im looking for an employee</h4>
            </div>
          </div>

          <div id={`freelancers`} onClick={handleSelectCard} className={styles.card}>
            <FaLaptop />
            <div className={styles.para}>
              <h4>im looking for a freelancer</h4>
            </div>
          </div>
        </div>
        <>
          <button onClick={handleRegister} className={styles.secondary}>
            Sign Up
          </button>
        </>
      </div>
    </div>
  );
};

export default RegisterStep2;
