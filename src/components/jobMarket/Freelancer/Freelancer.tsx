import React, { FC } from "react";
import styles from "./Freelancer.module.scss";
import freelancers from "../../../data/freeLancers.json";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";


interface FreelancerProps {}

const Freelancer: FC<FreelancerProps> = () => {
  return (
    <div className={styles.Freelancer}>
      {freelancers.freelancers.map((Freelancer) => {
        return (
          <div key={Freelancer.id} className={styles.applicant}>
            <div className={styles.applicantHeader}>
              <span className={styles.badge}>
                {Freelancer.workExperience.jobTitle}
              </span>
              <span className={styles.applicantRate}>
                <FaStar />
                <span>{"4.5"}</span>
              </span>
            </div>
            <div className={styles.applicantBody}>
              <h5>{Freelancer.applicantName}</h5>
              <div className={styles.applicantAddress}>
                <span>
                  <FaMapMarkerAlt />
                </span>
                <span>{Freelancer.contactInformation.address.city}</span>
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

export default Freelancer;
