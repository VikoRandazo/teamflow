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
import { DataType } from "../../../utiles";
import { FaCircle } from "react-icons/fa";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [salaryAverage, setSalaryAverage] = useState(``);

  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const purpose = useSelector((state: StoreRootTypes) => state.database.purpose);
  const userCategory = useSelector((state: StoreRootTypes) => state.preferences.category);
  const database = useSelector((state: StoreRootTypes) => state.database.data);
  const user: any = jwtDecode(token);
  const { firstName, lastName, username } = user.user;

  const averageSalary = (database: JobOfferProps[]) => {
    if (database.map((result: any) => result.hasOwnProperty(`salary`))) {
      const salaries = database
        .filter((offer) => offer.category === userCategory)
        .map((offer) => parseInt(offer.salary));
      const sumSalaries = salaries.reduce((a: number, b: number) => a + b);
      const salariesAverage = sumSalaries / salaries.length;
      const average = `${salariesAverage.toFixed(2)}$`;
      setSalaryAverage(average);
    }
  }

  useEffect(() => {
    if (database.map((result: any) => result.hasOwnProperty(`salary`))) {
      averageSalary(database);
    }
  });

  return (
    <div className={styles.Home}>
      <div className={styles.header}>
        <h5>Explore Your Path to a Dream Career</h5>
      </div>
      <div className={styles.body}>
        <div className={styles.search}>
          <input type="text" placeholder="search anything..." />
        </div>
        <div className={styles.averageSalary}>
          <div className={styles.container}>
            <p>
              <FaCircle />
              Average salary in your industry:
              <span>{salaryAverage}</span>
            </p>
          </div>
        </div>
        <div className={styles.forYou}>
          <div className={styles.title}>
            <h5>Just for you</h5>
          </div>
          <div className={styles.results}>
            {purpose === `jobOffers` && userCategory ? (
              <div className={styles.resultsContainer}>
                {database
                  .filter((offer: JobOfferProps) => offer.category === userCategory)
                  .map((offer: JobOfferProps) => (
                    <Card>
                      <JobOffer
                        key={offer.id}
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
            ) : (
              <p>choose category to get some suggestions</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
