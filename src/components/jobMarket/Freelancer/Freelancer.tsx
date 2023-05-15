import React, { FC } from "react";
import styles from "./Freelancer.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";

export interface FreelancerProps {
  id: number;
  name: string;
  hourlyPayment?: number;
  contactInformation: {
    email?: string;
    phone?: string;
    address: {
      city: string;
      street?: string;
      number?: string;
      zip?: string;
    };
    age?: number;
  };
  positionAppliedFor: string;
  resumeCV: string;
  workExperience?: {
    jobTitle?: string;
    experience?: number;
  };
}

const Freelancer: FC<FreelancerProps> = ({ id, positionAppliedFor, name, contactInformation, resumeCV }) => {
  return (
    <div className={styles.Freelancer}>
      <div key={id} className={styles.applicant}>
        <div className={styles.applicantHeader}>
          <span className={styles.badge}>{positionAppliedFor}</span>
          <span className={styles.applicantRate}>
            <FaStar />
            <span>{"4.5"}</span>
            <span className={styles.heartSVG}>
              <FaHeart />
            </span>
          </span>
        </div>
        <div className={styles.applicantBody}>
          <h5>{name}</h5>
          <div className={styles.applicantAddress}>
            <span>
              <FaMapMarkerAlt />
            </span>
            <span>{contactInformation.address.city} </span>
          </div>
          <div className={styles.description}>
            <p>{resumeCV}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freelancer;
