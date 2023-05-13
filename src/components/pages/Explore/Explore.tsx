import React, { FC } from 'react';
import styles from './Explore.module.scss';

interface ExploreProps {}

const Explore: FC<ExploreProps> = () => (
  <div className={styles.Explore}>
<div className={styles.search}>
  <input type="text" placeholder='search'/>
</div>
  </div>
);

export default Explore;
