import React, { FC } from "react";
import styles from "./Job.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import jobOffers from "../../../data/jobOffers.json";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";

interface JobProps {}

const Job: FC<JobProps> = () => {
  const dispatch = useDispatch();
  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);

  return (
    <div className={styles.Job}>
        {jobOffers.map((offer) => {
          return (
            <div key={offer.id} className={styles.applicant}>
              <div className={styles.applicantHeader}>
                <span className={styles.badge}>
                  {offer.company}
                </span>
                <span className={styles.applicantRate}>
                  <FaStar />
                  <span>{"4.5"}</span>
                  <span className={styles.heartSVG}>
                    <FaHeart />
                  </span>
                </span>
              </div>
              <div className={styles.applicantBody}>
                <h5>{offer.position}</h5>
                <div className={styles.applicantAddress}>
                  <span>
                    <FaMapMarkerAlt />
                  </span>
                  <span>{offer.city}</span>
                </div>
                <div className={styles.description}>
                  <p>{offer.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
  );
};

export default Job;
