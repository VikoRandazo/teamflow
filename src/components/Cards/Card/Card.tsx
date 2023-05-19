import React, { FC } from 'react';
import styles from './Card.module.scss';

interface CardProps {
  children?: any
}

const Card: FC<CardProps> = ({children}) => (
  <div className={styles.Card}>
    {children}
  </div>
);

export default Card;
