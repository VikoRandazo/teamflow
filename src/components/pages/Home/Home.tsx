import React, { FC, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { FaBriefcase, FaLaptop, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import jwtDecode from "jwt-decode";
import Employer from "../../jobMarket/Employer/Employer";
import Job from "../../jobMarket/Job/Job";
import Freelancer from "../../jobMarket/Freelancer/Freelancer";
import applicants from "../../../data/applicants.json";
import jobOffers from "../../../data/jobOffers.json";
import freelancers from "../../../data/freeLancers.json";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);
  const { firstName, lastName, username } = user.user;

  const [activeCard, setActiveCard] = useState<any>(jobOffers);

  const routeRecommendations = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/recommendations");
  };

  const handleSelectTag = (e: React.MouseEvent<HTMLDivElement>) => {
    const activeCardNode = e.currentTarget;
    if (document.getElementsByClassName(styles.card + " " + styles.active)[0]) {
      const prevCard = document.getElementsByClassName(styles.card + " " + styles.active)[0];
      prevCard.classList.remove(styles.active);
    }
    setActiveCard(activeCardNode.id);
    activeCardNode.classList.add(styles.active);
  };

  useEffect(() => {
    console.log(activeCard);
  }, [activeCard]);

  return (
    <div className={styles.Home}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h3>Welcom Back {firstName}! </h3>
        </div>
        <h5>What are you looking for?</h5>
        <div className={styles.cards}>
          <div id={`jobOffers`} onClick={handleSelectTag} className={styles.card + " " + styles.active}>
            <FaUserTie />
            <div className={styles.para}>
              <p>im looking for a job</p>
            </div>
          </div>

          <div id={`applicants`} onClick={handleSelectTag} className={styles.card}>
            <FaBriefcase />
            <div className={styles.para}>
              <p>im looking for an employee</p>
            </div>
          </div>

          <div id={`freelancers`} onClick={handleSelectTag} className={styles.card}>
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
            {activeCard === jobOffers
              ? jobOffers.map((offer) => (
                  <Job
                    id={offer.id}
                    position={offer.position}
                    company={offer.company}
                    location={offer.location}
                    city={offer.city}
                    description={offer.description}
                    salary={offer.salary}
                    experience={offer.experience}
                  />
                ))
              : null}
            {activeCard === applicants
              ? applicants.map((result) => (
                  <Employer
                    id={result.id}
                    name={result.name}
                    contactInformation={{
                      address: {
                        city: result.contactInformation.address.city,
                      },
                    }}
                    positionAppliedFor={result.positionAppliedFor}
                    resumeCV={result.resumeCV}
                  />
                ))
              : null}

            {activeCard === freelancers
              ? freelancers.map((result) => (
                  <Freelancer
                    id={result.id}
                    name={result.name}
                    contactInformation={{
                      address: {
                        city: result.contactInformation.address.city,
                      },
                    }}
                    positionAppliedFor={result.positionAppliedFor}
                    resumeCV={result.resumeCV}
                  />
                ))
              : null}
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
