import React, { FC, useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import applicants from "../../../data/applicants.json";
import freelancers from "../../../data/freeLancers.json";
import jobOffers from "../../../data/jobOffers.json";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../slices/search";
import Applicant, { ApplicantProps } from "../../jobMarket/Applicant/Applicant";
import Freelancer, { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import JobOffer, { JobOfferProps } from "../../jobMarket/JobOffer/JobOffer";
import Card from "../../Cards/CardRow/CardRow";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const dispatch = useDispatch();
  const [activeTag, setActiveTag] = useState<any>(`jobOffers`);

  const [results, setResults] = useState<any>([]);

  const hanleSelectTag = (e: React.MouseEvent<HTMLDivElement>) => {
    const activeTagNode = e.currentTarget;
    if (document.getElementsByClassName(styles.badge + " " + styles.active)[0]) {
      const prevTag = document.getElementsByClassName(styles.badge + " " + styles.active)[0];
      prevTag.classList.remove(styles.active);
    }
    setActiveTag(activeTagNode.id);

    if (e.currentTarget.id === `jobOffers`) {
      setResults(jobOffers);
    } else if (e.currentTarget.id === `applicants`) {
      setResults(applicants);
    } else if (e.currentTarget.id === `freelancers`) {
      setResults(freelancers);
    }
    activeTagNode.classList.add(styles.active);
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (Array.isArray(results) && activeTag === `jobOffers`) {
      setResults(jobOffers.filter((offer) => offer.position.toLowerCase().includes(value.toLowerCase())));
      dispatch(searchActions.setNewResults(results));
    } else if (Array.isArray(results) && (activeTag === `applicants` || `freelancers`)) {
      setResults(results.filter((result) => result.name.toLowerCase().includes(value.toLowerCase())));
      dispatch(searchActions.setNewResults(results));
    }
  };

  useEffect(() => {
  }, [results]);

  return (
    <div className={styles.Explore}>
      <div className={styles.search}>
        <input type="text" placeholder="search" onChange={handleSearch} />
      </div>
      <div className={styles.filter}>
        <div id={"jobOffers"} className={styles.badge + " " + styles.active} onClick={hanleSelectTag}>
          job offers
        </div>
        <div id={"applicants"} className={styles.badge} onClick={hanleSelectTag}>
          applicants
        </div>
        <div id={"freelancers"} className={styles.badge} onClick={hanleSelectTag}>
          freelancers
        </div>
      </div>
      <div className={styles.results}>
        {activeTag === `jobOffers` && Array.isArray(results)
          ? results.map((offer: JobOfferProps) => (
              <Card>
                <JobOffer
                  key={offer.id}
                  id={offer.id}
                  position={offer.position}
                  company={offer.company}
                  location={offer.location}
                  city={offer.city}
                  category={offer.category}
                  description={offer.description}
                  salary={offer.salary}
                  experience={offer.experience}
                />
              </Card>
            ))
          : null}

        {activeTag === `applicants` && Array.isArray(results)
          ? results.map((applicant: ApplicantProps) => (
              <Card>
                <Applicant
                  key={applicant.id}
                  id={applicant.id}
                  name={applicant.name}
                  contactInformation={{
                    address: {
                      city: applicant.contactInformation.address.city,
                    },
                  }}
                  positionAppliedFor={applicant.positionAppliedFor}
                  resumeCV={applicant.resumeCV}
                />
              </Card>
            ))
          : null}

        {activeTag === `freelancers` && Array.isArray(results)
          ? results.map((freelancer: FreelancerProps) => (
              <Card>
                <Freelancer
                  key={freelancer.id}
                  id={freelancer.id}
                  name={freelancer.name}
                  contactInformation={{
                    address: {
                      city: freelancer.contactInformation.address.city,
                    },
                  }}
                  positionAppliedFor={freelancer.positionAppliedFor}
                  resumeCV={freelancer.resumeCV}
                />
              </Card>
            ))
          : null}
      </div>
    </div>
  );
};

export default Explore;
