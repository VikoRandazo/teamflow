import React, { FC, useEffect, useState } from "react";
import styles from "./Login.module.scss";
import logo from "../../../styles/assets/Logo horizontal.svg";
import { useDispatch } from "react-redux";
import { login } from "../../../auth/auth";
import { User } from "../../../models/User";
import { authSlice } from "../../../slices/auth";
import { useNavigate } from "react-router-dom";

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [credentials, setCredentials] = useState<User>({
    username: "",
    password: "",
  });

  const { username, password } = credentials;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, id } = e.target;
    setCredentials((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  };

  const handleLogin = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const token = await login(credentials);
    const savedToken = localStorage.getItem("jwt")
    if (savedToken || token) {
      console.log(token);
      dispatch(authSlice.actions.setToken(token));
      dispatch(authSlice.actions.setUser(credentials.username));
      navigate("/home");
    }
  };

  const handleNavigate = (e: React.MouseEvent<HTMLButtonElement>) => {
    navigate("/authForm/register");
  };

  return (
    <div className={styles.Login}>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo teamflow" />
        </div>
      </div>
      <div className={styles.body}>
        <h4>Sign into your account</h4>
        <div className={styles.inputs}>
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

          <label className={styles.rememberMe} htmlFor="rememeberMe">
            <input type="checkbox" name="rememeberMe" id="rememeberMe" />
            remember me
          </label>
        </div>
        <div className={styles.CTA}>
          <button className={styles.primary} onClick={handleLogin}>
            Sign in
          </button>
          <p>Forgot the password?</p>
        </div>
      </div>
      <div className={styles.footer}>
        <p>Dont have an account?</p>
        <span onClick={handleNavigate}>sign up</span>
      </div>
    </div>
  );
};

export default Login;
