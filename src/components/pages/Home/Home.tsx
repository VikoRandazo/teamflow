import React, { FC, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { FaBriefcase, FaLaptop, FaUserTie } from "react-icons/fa";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import jwtDecode from "jwt-decode";
import Applicants, { ApplicantProps } from "../../jobMarket/Applicant/Applicant";
import JobOffer, { JobOfferProps } from "../../jobMarket/JobOffer/JobOffer";
import Freelancer, { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import applicants from "../../../data/applicants.json";
import jobOffers from "../../../data/jobOffers.json";
import freelancers from "../../../data/freeLancers.json";
import Card from "../../Cards/CardRow/CardRow";
import CardRow from "../../Cards/CardRow/CardRow";

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);
  const { firstName, lastName, username } = user.user;

  const purpose = useSelector((state: StoreRootTypes) => state.auth.purpose);

  const [data, setData] = useState<(ApplicantProps | JobOfferProps | FreelancerProps)[]>();

  useEffect(() => {
    if (purpose === `applicants`) {
      setData(applicants);
    } else if (purpose === `jobOffers`) {
      setData(jobOffers);
    } else if (purpose === `freelancers`) {
      setData(freelancers);
    }

    console.log(data);
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
          <input type="text" placeholder="Search somthing..." />
        </div>
          <div className={styles.title}>
            <p>Just for You</p>
          </div>
        <div className={styles.cards}>
          <div className={styles.applications}>
            <CardRow />
          </div>
        </div>
        <div className={styles.footer}></div>
      </div>
    </div>
  );
};

export default Home;
