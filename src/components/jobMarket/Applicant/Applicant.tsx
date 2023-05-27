import React, { FC } from "react";
import styles from "./Applicant.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";

export interface ApplicantProps {
  id: number;
  name: string;
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

const Applicant: FC<ApplicantProps> = ({ id, positionAppliedFor, name, contactInformation, resumeCV }) => {
  const applicantObject = {
    id,
    name,
    contactInformation: {
      address: {
        city: contactInformation.address.city,
      },
    },
    positionAppliedFor,
    resumeCV,
  };


  return (
    <div className={styles.Employer}>
      <div key={id} className={styles.applicant}>
        <div className={styles.applicantHeader}>
          <span className={styles.badge}>{positionAppliedFor}</span>
          <span className={styles.applicantRate}>
            <FaStar />
            <span>{"4.5"}</span>
          </span>
        </div>
        <div className={styles.applicantBody}>
          <h5>{name}</h5>
          <div className={styles.applicantAddress}>
            <span>
              <FaMapMarkerAlt />
            </span>
            <span>{contactInformation.address.city}</span>
          </div>
          <div className={styles.description}>
            <p>{resumeCV}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Applicant;
