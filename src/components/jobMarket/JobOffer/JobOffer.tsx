import React, { FC } from "react";
import styles from "./JobOffer.module.scss";
import { FaHeart, FaMapMarkerAlt, FaStar } from "react-icons/fa";
import jwtDecode from "jwt-decode";
import { useDispatch, useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";

export interface JobOfferProps {
    id: number;
    position: string;
    company: string;
    location: string;
    city: string;
    category:string;
    description: string;
    salary: string;
    experience: string;

}

const JobOffer: FC<JobOfferProps> = ({id,
  position,
  company,
  location,
  city,
  description,
  salary,
  experience }) => {
  const dispatch = useDispatch();
  const token = useSelector((state: StoreRootTypes) => state.auth.setToken);
  const user: any = jwtDecode(token);


  const handleApplyPosition = (e:React.MouseEvent<HTMLButtonElement>) => {
    const target = e.currentTarget
    
    
  }
  return (
    <div className={styles.Job}>
      <div key={id} className={styles.jobOffer}>
        <div className={styles.jobOfferHeader}>
          <span>{company}</span>
        </div>
        <div className={styles.jobOfferBody}>
          <h5>{position}</h5>
            <div className={styles.description}>
            <p>{description}</p>
          </div>
      <div className={styles.buttons}>
      <button className={styles.secondary} onClick={handleApplyPosition}>Apply position</button>
      <button className={styles.secondary}><FaHeart/></button>
      </div>
        </div>
      </div>
    </div>
  );
};

export default JobOffer;
