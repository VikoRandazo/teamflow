import React, { FC, useEffect, useState } from "react";
import styles from "./RegisterStep2.module.scss";
import { ReactComponent as Svg } from "../../../../styles/assets/registerStep2.svg";
import { FaUserTie, FaBriefcase, FaLaptop } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { StoreRootTypes } from "../../../../store";
import { authActions } from "../../../../slices/auth";
import { $CombinedState } from "redux";
interface RegisterStep2Props {}

const RegisterStep2: FC<RegisterStep2Props> = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const token = useSelector((state:StoreRootTypes) => state.auth.setToken)
  const user = useSelector((state:StoreRootTypes) => state.auth.user)
  
  const [activeCard, setActiveCard] = useState<any>(`jobOffers`);
  useEffect(() => {
console.log(activeCard);

  }, [activeCard])
    const handleRegister = () => {
      dispatch(authActions.setPurpose(activeCard))
      dispatch(authActions.isLoggedIn(true))
      navigate("/home")
    }

  const handleSelectCard = (e: React.MouseEvent<HTMLDivElement>) => {
    const activeCardNode = e.currentTarget;
    if (document.getElementsByClassName(styles.card + " " + styles.active)[0]) {
      const prevCard = document.getElementsByClassName(styles.card + " " + styles.active)[0];
      prevCard.classList.remove(styles.active);
    }
    setActiveCard(activeCardNode.id);
    activeCardNode.classList.add(styles.active);
  };

  return (
    <div className={styles.RegisterStep2}>
      <div className={styles.header}>
        <div className={styles.step}>
          <h4>2 of 2</h4>
        </div>
  
      </div>
      <div className={styles.body}>
        <div className={styles.svg}>
          <Svg />
        </div>
        <div className={styles.role}>
          <p>choose your role:</p>
        </div>
        <div className={styles.cards}>
          <div id={`jobOffers`} onClick={handleSelectCard} className={styles.card + " " + styles.active}>
            <FaUserTie />
            <div className={styles.para}>
              <h4>im looking for a job</h4>
            </div>
          </div>

          <div id={`applicants`} onClick={handleSelectCard} className={styles.card}>
            <FaBriefcase />
            <div className={styles.para}>
              <h4>im looking for an employee</h4>
            </div>
          </div>

          <div id={`freelancers`} onClick={handleSelectCard} className={styles.card}>
            <FaLaptop />
            <div className={styles.para}>
              <h4>im looking for a freelancer</h4>
            </div>
          </div>
        </div>
        <>
          <button onClick={handleRegister} className={styles.secondary}>Sign Up</button>
        </>
      </div>
    </div>
  );
};

export default RegisterStep2;
