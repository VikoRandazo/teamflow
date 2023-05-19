import React, { FC, ReactNode } from "react";
import styles from "./CardRow.module.scss";

interface CardRowProps {
  children?: any ;
}

const CardRow: FC<CardRowProps> = ({ children }) => (
  <div className={styles.CardRow}>
    {children}
  </div>
);

export default CardRow;
