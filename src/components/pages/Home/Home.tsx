import React, { FC } from "react";
import styles from "./Home.module.scss";
import { User } from "../../../models/User";
import {
  FaBriefcase,
  FaHeart,
  FaLaptop,
  FaMapMarkerAlt,
  FaStar,
  FaUserTie,
} from "react-icons/fa";
import { useNavigate } from "react-router";
import applicants from "../../../data/applicants.json";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import jwtDecode from "jwt-decode";
import { Link, NavLink } from "react-router-dom";

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);
  console.log(user);
  const { firstName, lastName, username } = user.user;

  const routeRecommendations = (e: React.MouseEvent<HTMLDivElement>) => {
    navigate("/recommendations");
  };

  return (
    <div className={styles.Home}>
      <div className={styles.body}>
        <div className={styles.title}>
          <h2>Welcom Back {firstName}! </h2>
        </div>
        <h5>What are you looking for?</h5>
        <div className={styles.cards}>
          <NavLink to={"/job"} replace={true}>
            <div className={styles.card}>
              <FaUserTie />
              <div className={styles.para}>
                <p>im looking for a job</p>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/emloyer"} replace={true}>
            <div className={styles.card}>
              <FaBriefcase />
              <div className={styles.para}>
                <p>im looking for an employee</p>
              </div>
            </div>
          </NavLink>

          <NavLink to={"/freelancer"} replace={true}>
            <div className={styles.card}>
              <FaLaptop />
              <div className={styles.para}>
                <p>im looking for a freelancer</p>
              </div>
            </div>
          </NavLink>
        </div>

        <div className={styles.recommendations}>
          <div className={styles.title}>
            <h5>Recommendations</h5>
            <span onClick={routeRecommendations}>see all</span>
          </div>
          <div className={styles.applications}>
            {applicants.employees.map((applicant) => {
              return (
                <div className={styles.applicant}>
                  <div className={styles.applicantHeader}>
                    <span className={styles.badge}>
                      {applicant.workExperience.jobTitle}
                    </span>
                    <span className={styles.applicantRate}>
                      <FaStar />
                      <span>{"4.5"}</span>
                    </span>
                  </div>
                  <div className={styles.applicantBody}>
                    <h5>{applicant.applicantName}</h5>
                    <div className={styles.applicantAddress}>
                      <span>
                        <FaMapMarkerAlt />
                      </span>
                      <span>{applicant.contactInformation.address.city}</span>
                    </div>
                    <div className={styles.downloadCV}>
                      <p>Download CV</p>
                      <span>
                        <FaHeart />
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className={styles.footer}></div>
    </div>
  );
};

export default Home;
