import { ApplicantProps } from "./components/jobMarket/Applicant/Applicant";
import { FreelancerProps } from "./components/jobMarket/Freelancer/Freelancer";
import { JobOfferProps } from "./components/jobMarket/JobOffer/JobOffer";

export enum DataType {
  jobOffers,
  applicants,
  freelancers,
  purpose
}
export const handleSearch = (
  dataToMap: (ApplicantProps | JobOfferProps | FreelancerProps)[],
  searchValue: string,
  dataType: DataType) => {

  searchValue = searchValue.toLowerCase();
  if (dataType === DataType.jobOffers) {
    const searchResults: JobOfferProps[] = (dataToMap as JobOfferProps[]).filter(
      (object: JobOfferProps) =>
        object.position.toLowerCase().includes(searchValue) ||
        object.city.toLowerCase().includes(searchValue) ||
        object.category.toLowerCase().includes(searchValue) ||
        object.company.toLowerCase().includes(searchValue) ||
        object.salary.toLowerCase().includes(searchValue)
    );
    return searchResults;
  } else if (dataType === DataType.applicants) {
    const searchResults: ApplicantProps[] = (dataToMap as ApplicantProps[]).filter(
      (object: ApplicantProps) =>
        object.name.toLowerCase().includes(searchValue) ||
        object.contactInformation.address.city.toLowerCase().includes(searchValue) ||
        object.positionAppliedFor.toLowerCase().includes(searchValue) ||
        object.workExperience?.jobTitle?.toLowerCase().includes(searchValue)
    );
    return searchResults;
  } else if (dataType === DataType.freelancers) {
    const searchResults: FreelancerProps[] = (dataToMap as FreelancerProps[]).filter(
      (object: FreelancerProps) =>
        object.name.toLowerCase().includes(searchValue) ||
        object.positionAppliedFor.toLowerCase().includes(searchValue) ||
        object.workExperience?.jobTitle?.toLowerCase().includes(searchValue) ||
        object.contactInformation.address.city.toLowerCase().includes(searchValue)
    );
    return searchResults;
  }
};
