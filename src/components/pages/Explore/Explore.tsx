import React, { FC, useEffect, useState } from "react";
import styles from "./Explore.module.scss";
import applicants from "../../../data/applicants.json";
import freelancers from "../../../data/freeLancers.json";
import jobOffers from "../../../data/jobOffers.json";
import { useDispatch, useSelector } from "react-redux";
import { databaseActions } from "../../../slices/database";
import Applicant, { ApplicantProps } from "../../jobMarket/Applicant/Applicant";
import Freelancer, { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import JobOffer, { JobOfferProps } from "../../jobMarket/JobOffer/JobOffer";
import Card from "../../Cards/Card/Card";
import { StoreRootTypes } from "../../../store";
import { DataType, handleSearch } from "../../../utiles";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const dispatch = useDispatch();
  const purpose = useSelector((state: StoreRootTypes) => state.database.purpose);

  const [searchResults, setSearchResults] = useState<(ApplicantProps | JobOfferProps | FreelancerProps)[]>();
  const database = useSelector((state: StoreRootTypes) => state.database.data);

  const handleChangeEvent = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.value) {
      const searchValue = e.currentTarget.value;
      if (searchValue === "") {
        setSearchResults([]);
      } else if (purpose === `jobOffers`) {
        setSearchResults(handleSearch(database, searchValue, DataType.jobOffers));
      } else if (purpose === `applicants`) {
        setSearchResults(handleSearch(database, searchValue, DataType.applicants));
      } else if (purpose === `freelancers`) {
        setSearchResults(handleSearch(database, searchValue, DataType.freelancers));
      }
    }
  };

  useEffect(() => {
    console.log(searchResults);
  }, [searchResults]);

  return (
    <div className={styles.Explore}>
      <div className={styles.search}>
        <input type="text" placeholder="search" onChange={handleChangeEvent} />
      </div>
      <div className={styles.filter}></div>
      <div className={styles.results}>
        {searchResults?.map((result) => (
          <>
            {purpose === `jobOffers` && searchResults.length > 0
              ? (database as JobOfferProps[])
                  .filter((offer) => searchResults.map((result) => result.id).includes(offer.id))
                  .map((offer) => (
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

            {purpose === `applicants` && searchResults.length > 0
              ? (database as ApplicantProps[])
                  .filter((applicant) => searchResults.map((result) => result.id).includes(applicant.id))
                  .map((applicant) => (
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

            {purpose === `freelancers` && searchResults.length > 0
              ? (database as FreelancerProps[])
                  .filter((freelancer) => searchResults.map((result) => result.id).includes(freelancer.id))
                  .map((freelancer) => (
                    <Card>
                      <Freelancer
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
          </>
        ))}
      </div>
    </div>
  );
};

export default Explore;
