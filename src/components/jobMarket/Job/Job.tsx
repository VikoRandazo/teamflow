import React, { FC } from 'react';
import styles from './Job.module.scss';

interface JobProps {}

const Job: FC<JobProps> = () => (
  <div className={styles.Job}>
    Job Component
  </div>
);

export default Job;
