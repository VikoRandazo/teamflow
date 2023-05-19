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

export interface FreelancerProps {
  id: number;
  name: string;
  hourlyPayment?: number;
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

export interface JobOfferProps {
  id: number;
  position: string;
  company: string;
  location: string;
  city: string;
  description: string;
  salary: string;
  experience: string;
}
