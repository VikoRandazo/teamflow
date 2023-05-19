import React, { FC } from 'react';
import styles from './CardCol.module.scss';

interface CardColProps {}

const CardCol: FC<CardColProps> = () => (
  <div className={styles.CardCol}>
    CardCol Component
  </div>
);

export default CardCol;
