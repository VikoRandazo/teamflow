import React, { FC } from "react";
import styles from "./Job.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import jobOffers from "../../../data/jobOffers.json";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";

export interface JobProps {
  id: number;
  position: string;
  company: string;
  location: string;
  city: string;
  description: string;
  salary: string;
  experience: string;
}

const Job: FC<JobProps> = ({ id, position, company, location, city, description, salary, experience }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);

  return (
    <div className={styles.Job}>
      <div key={id} className={styles.applicant}>
        <div className={styles.applicantHeader}>
          <span className={styles.badge}>{company}</span>
          <span className={styles.applicantRate}>
            <FaStar />
            <span>{"4.5"}</span>
            <span className={styles.heartSVG}>
              <FaHeart />
            </span>
          </span>
        </div>
        <div className={styles.applicantBody}>
          <h5>{position}</h5>
          <div className={styles.applicantAddress}>
            <span>
              <FaMapMarkerAlt />
            </span>
            <span>{city}</span>
          </div>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Job;
