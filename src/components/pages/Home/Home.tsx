import React, { FC, useState } from "react";
import styles from "./Home.module.scss";
import { FaBriefcase, FaLaptop, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import jwtDecode from "jwt-decode";
import Employer from "../../jobMarket/Employer/Employer";
import Job from "../../jobMarket/Job/Job";
import Freelancer from "../../jobMarket/Freelancer/Freelancer";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);
  const { firstName, lastName, username } = user.user;
  const [activeCard, setActiveCard] = useState("job");

  const routeRecommendations = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/recommendations");
  };

  const handleCardClick = (cardName: any) => {
    setActiveCard(cardName);
  };

  return (
    <div className={styles.Home}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h3>Welcom Back {firstName}! </h3>
        </div>
        <h5>What are you looking for?</h5>
        <div className={styles.cards}>
          <div
            onClick={() => handleCardClick(`job`)}
            className={styles.card + (" ") + (activeCard === `job` ? styles.active : "")}
          >
            <FaUserTie />
            <div className={styles.para}>
              <p>im looking for a job</p>
            </div>
          </div>

          <div
            onClick={() => handleCardClick(`employer`)}
            className={
              styles.card + (" ") + (activeCard === `employer` ? styles.active : "")
            }
          >
            <FaBriefcase />
            <div className={styles.para}>
              <p>im looking for an employee</p>
            </div>
          </div>

          <div
            onClick={() => handleCardClick(`freelancer`)}
            className={
              styles.card + (" ") + (activeCard === `freelancer` ? styles.active : "")
            }
          >
            <FaLaptop />
            <div className={styles.para}>
              <p>im looking for a freelancer</p>
            </div>
          </div>
        </div>

        <div className={styles.recommendations}>
          <div className={styles.title}>
            <h5>Recommendations</h5>
            <span onClick={routeRecommendations}>see all</span>
          </div>
          <div className={styles.applications}>
          {activeCard === `job` ?  <Job />  : null}
          {activeCard === `employer` ?  <Employer /> : null}
          {activeCard === `freelancer` ?     <Freelancer /> : null}
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
