import React, { FC, useState } from "react";
import styles from "./Explore.module.scss";
import applicants from "../../../data/applicants.json";
import freelancers from "../../../data/freeLancers.json";
import jobOffers from "../../../data/jobOffers.json";
import Employer, { EmployerProps } from "../../jobMarket/Employer/Employer";
import Freelancer, { FreelancerProps } from "../../jobMarket/Freelancer/Freelancer";
import Job, { JobProps } from "../../jobMarket/Job/Job";
import { useDispatch } from "react-redux";
import { searchActions } from "../../../slices/search";

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => {
  const dispatch = useDispatch();
  const [tagName, setTagName] = useState<any>(jobOffers);
  const [results, setResults] = useState<any>([]);

  // const handleSearch = () => {

  // }

  const handleSelectTag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.currentTarget.id === "jobOffers") {
      setTagName(jobOffers);
    } else if (e.currentTarget.id === "applicants") {
      setTagName(applicants);
    } else if (e.currentTarget.id === "freelancers") {
      setTagName(freelancers);
    }
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (tagName === jobOffers) {
      setResults(jobOffers.filter((offer) => offer.position.toLowerCase().includes(value.toLowerCase())));
      dispatch(searchActions.setNewResults(results));
      console.log(results);
    } else if (tagName === applicants || freelancers)
      setResults(tagName.filter((result: any) => result.name.toLowerCase().includes(value.toLowerCase())));
    dispatch(searchActions.setNewResults(results));
    console.log(results);
  };

  return (
    <div className={styles.placeholder}></div>
  )

  // return (
  //   <div className={styles.Explore}>
  //     <div className={styles.search}>
  //       <input type="text" placeholder="search" onChange={handleSearch} />
  //     </div>
  //     <div className={styles.filter}>
  //       <div id={"jobOffers"} className={styles.badge} onClick={handleSelectTag}>
  //         job offers
  //       </div>
  //       <div id={"applicants"} className={styles.badge} onClick={handleSelectTag}>
  //         applicants
  //       </div>
  //       <div id={"freelancers"} className={styles.badge} onClick={handleSelectTag}>
  //         freelancers
  //       </div>
  //     </div>
  //     <div className={styles.results}>
  //       {tagName === jobOffers
  //         ? results.map((result: JobProps) => (
  //             <Job
  //               id={result.id}
  //               position={result.position}
  //               company={result.company}
  //               location={result.location}
  //               city={result.city}
  //               description={result.description}
  //               salary={result.salary}
  //               experience={result.experience}
  //             />
  //           ))
  //         : null}
  //       {tagName === applicants
  //         ? results.map((result: EmployerProps) => (
  //             <Employer
  //               id={result.id}
  //               name={result.name}
  //               contactInformation={{
  //                 address: {
  //                   city: result.contactInformation.address.city,
  //                 },
  //               }}
  //               positionAppliedFor={result.positionAppliedFor}
  //               resumeCV={result.resumeCV}
  //             />
  //           ))
  //         : null}
  //       {tagName === freelancers
  //         ? results.map((result: FreelancerProps) => (
  //             <Freelancer
  //               id={result.id}
  //               name={result.name}
  //               positionAppliedFor={result.positionAppliedFor}
  //               contactInformation={{
  //                 address: {
  //                   city: result.contactInformation.address.city,
  //                 },
  //               }}
  //               resumeCV={""}
  //             />
  //           ))
  //         : null}
  //     </div>
  //   </div>
  // );
};

export default Explore;
