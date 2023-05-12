import React, { FC } from 'react';
import styles from './Freelancer.module.scss';

interface FreelancerProps {}

const Freelancer: FC<FreelancerProps> = () => (
  <div className={styles.Freelancer}>
    Freelancer Component
  </div>
);

export default Freelancer;
