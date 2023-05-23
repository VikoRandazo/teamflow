import React, { FC } from "react";
import styles from "./CardRow.module.scss";
import applicants from "../../../data/applicants.json";
import jobOffers from "../../../data/jobOffers.json";
import freelancers from "../../../data/freeLancers.json";
import Applicant, { ApplicantProps } from "../../jobMarket/Applicant/Applicant";
import JobOffer, { JobOfferProps } from "../../jobMarket/JobOffer/JobOffer";
import Freelancer, { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import { useSelector } from "react-redux";
import { StoreRootTypes } from "../../../store";
import Card from "../Card/Card";

interface CardRowProps {

}

const CardRow: FC<CardRowProps> = () => {
  const purpose = useSelector((state: StoreRootTypes) => state.database.purpose);

  return (
    <div className={styles.CardRow}>
      {purpose === `applicants` &&
        applicants.map((applicant) => {
          return (
            <Card key={applicant.id}>
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
                resumeCV={applicant.resumeCV} workExperience={{
                }}              />
            </Card>
          );
        })}

      {purpose === `jobOffers` &&
        jobOffers.map((offer) => {
          return (
            <Card key={offer.id}>
              <JobOffer
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
          );
        })}

      {purpose === `freelancers` &&
        freelancers.map((freelancer) => {
          return (
            <Card key={freelancer.id}>
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
          );
        })}
    </div>
  );
};

export default CardRow;
