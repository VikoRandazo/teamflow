import React, { FC, useEffect, useState } from "react";
import styles from "./RegisterStep2.module.scss";
import { ReactComponent as Svg } from "../../../../styles/assets/registerStep2.svg";
import { FaUserTie, FaBriefcase, FaLaptop, FaCircle } from "react-icons/fa";
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
    const prevNode = document.getElementsByClassName(styles.purpose + ` ` + styles.active)[0];
    console.log(prevNode);
    
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
    navigate("/authForm/register/step3");
  };

  const handleGoBack = () => {
    navigate("/authForm/register/step1")
  }

  return (
    <div className={styles.RegisterStep2}>
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
            <h5>Tell Us: What Are You Looking For?</h5>
            <div id="jobOffers" className={styles.purpose} onClick={handleSelectCard}>
              <FaUserTie />
              <h5>Jobs</h5>
            </div>
            <div id={"applicants"} className={styles.purpose} onClick={handleSelectCard}>
              <FaBriefcase />
              <h5>Employees</h5>
            </div>
            <div id={"freelancers"} className={styles.purpose} onClick={handleSelectCard}>
              <FaLaptop />
              <h5>Freelancers</h5>
            </div>
          </div>
            <div className={styles.navigation}>
              <button className={styles.primary} onClick={handleRegister}>Get started!</button>
              <button className={styles.secondary} onClick={handleGoBack}>Go back</button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterStep2;
