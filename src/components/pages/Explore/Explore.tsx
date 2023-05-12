import React, { FC } from 'react';
import styles from './Explore.module.scss';

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => (
  <div className={styles.Explore}>
    Explore Component
  </div>
);

export default Explore;
