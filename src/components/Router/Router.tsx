import React, { FC } from "react";
import styles from "./Router.module.scss";
import Login from "../AuthForm/Login/Login";
import Register from "../AuthForm/Register/Register";
import { Routes, Route } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import Home from "../pages/Home/Home";
import Job from "../jobMarket/Job/Job";
import Employer from "../jobMarket/Employer/Employer";
import Freelancer from "../jobMarket/Freelancer/Freelancer";
import Profile from "../pages/Profile/Profile";
import Favorites from "../pages/Favorites/Favorites";
import Explore from "../pages/Explore/Explore";

interface RouterProps {}

const Router: FC<RouterProps> = () => (
  <div className={styles.Router}>
    <Routes>
      {/* Auth */}

      <Route path={"/authForm"} element={<AuthForm />} />
      <Route path={"authForm/login"} element={<Login />} />
      <Route path={"authForm/register"} element={<Register />} />

      {/* Pages */}
      <Route path={"/home"} element={<Home />} />
      <Route path={"/explore"} element={<Explore />} />
      <Route path={"/favorites"} element={<Favorites />} />
      <Route path={"/profile"} element={<Profile />} />

      {/* Job Market */}
      <Route path={"/job"} element={<Job />} />
      <Route path={"/employer"} element={<Employer />} />
      <Route path={"/freelancer"} element={<Freelancer />} />


      {/* Defaultes */}
      {/* Default authenticated */}
      <Route path={"/"} element={<Login />} />

      {/* Default un-authenticated */}
      <Route path={"/default"} element={<Home />} />
    </Routes>
  </div>
);

export default Router;
