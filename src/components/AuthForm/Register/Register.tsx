import React, { FC, useState } from "react";
import styles from "./Register.module.scss";
import logo from "../../../styles/assets/Logo horizontal.svg";
import { useDispatch } from "react-redux";
import { User } from "../../../models/User";
import { authSlice } from "../../../slices/auth";
import { register } from "../../../auth/auth";
import {useNavigate } from "react-router-dom";

interface RegisterProps {}

const Register: FC<RegisterProps> = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState<User>({
    firstName: "",
    lastName: "",
    username: "",
    password: "",
  });

  const { firstName, lastName, username, password } = credentials;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setCredentials((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleRegister = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const token = await register(credentials);
    if (token) {
      dispatch(authSlice.actions.setToken(token));
      dispatch(authSlice.actions.setUser(credentials));
      navigate("/home")
    }
  };

  const handleNavigate = (e:React.MouseEvent<HTMLButtonElement>) => {
    navigate("/authForm/login")
    }
  

  return (
    <div className={styles.Register}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo teamflow" />
        </div>
      </div>
      <div className={styles.body}>
        <h4>Sign up for free</h4>
        <div className={styles.inputs}>
          <label className={styles.userInput} htmlFor="firstName">
            First Name*
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="First Name"
              value={firstName}
              onChange={handleInput}
            />
          </label>

          <label className={styles.userInput} htmlFor="lastName">
            Last Name*
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="Last Name"
              value={lastName}
              onChange={handleInput}
            />
          </label>

          <label className={styles.userInput} htmlFor="username">
            Username*
            <input
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              value={username}
              onChange={handleInput}
            />
          </label>

          <label className={styles.userInput} htmlFor="password">
            Password*
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={handleInput}
            />
          </label>
        </div>
        <div className={styles.CTA}>
          <button className={styles.primary} onClick={handleRegister}>Sign in</button>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Already have an account?</p>
        <span onClick={handleNavigate}>sign in</span>
      </div>
    </div>
  );
};

export default Register;
