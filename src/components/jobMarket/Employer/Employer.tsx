import React, { FC } from 'react';
import styles from './Employer.module.scss';

interface EmployerProps {}

const Employer: FC<EmployerProps> = () => (
  <div className={styles.Employer}>
    Employer Component
  </div>
);

export default Employer;
