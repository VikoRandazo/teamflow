import React, { FC } from "react";
import styles from "./Employer.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import applicants from "../../../data/applicants.json";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";

interface EmployerProps {}

const Employer: FC<EmployerProps> = () => {
  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);
  console.log(applicants);
  
  return (
    <div className={styles.Employer}>
      {applicants.employees.map((applicant) => {
        return (
          <div key={applicant.id} className={styles.applicant}>
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
  );
};

export default Employer;
