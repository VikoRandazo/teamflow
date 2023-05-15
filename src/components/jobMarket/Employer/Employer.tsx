import React, { FC } from "react";
import styles from "./Employer.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import applicants from "../../../data/applicants.json";
import jwtDecode from "jwt-decode";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";

export interface EmployerProps {
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

const Employer: FC<EmployerProps> = ({ id, positionAppliedFor, name, contactInformation, resumeCV }) => {
  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);
  console.log(applicants);

  return (
    <div className={styles.Employer}>
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

export default Employer;
