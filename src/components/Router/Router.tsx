import React, { FC } from "react";
import styles from "./Router.module.scss";
import Login from "../AuthForm/Login/Login";
import Register from "../AuthForm/Register/Register";
import { Routes, Route } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import Home from "../pages/Home/Home";
import JobOffer from "../jobMarket/JobOffer/JobOffer";
import Applicant from "../jobMarket/Applicant/Applicant";
import Freelancer from "../jobMarket/Freelancer/Freelancer";
import Profile from "../pages/Profile/Profile";
import Favorites from "../pages/Favorites/Favorites";
import Explore from "../pages/Explore/Explore";

import RegisterStep2 from "../AuthForm/Register/RegisterStep2/RegisterStep2";

interface RouterProps {}

const Router: FC<RouterProps> = () => (
  <div className={styles.Router}>
    <Routes>
      {/* Auth */}
      <Route path={"/authForm"} element={<AuthForm />} />
      <Route path={"authForm/login"} element={<Login />} />
      <Route path={"authForm/register/step1"} element={<Register />} />
      <Route path={"authForm/register/step2"} element={<RegisterStep2 />} />

      {/* Pages */}
      <Route path={"/home"} element={<Home />} />
      <Route path={"/explore"} element={<Explore />} />
      <Route path={"/favorites"} element={<Favorites />} />
      <Route path={"/profile"} element={<Profile />} />

      {/* Job Market */}
      <Route
        path={"/job"}
        element={
          <JobOffer
            id={0}
            position={""}
            company={""}
            location={""}
            city={""}
            description={""}
            salary={""}
            experience={""}
          />
        }
      />
      <Route
        path={"/employer"}
        element={
          <Applicant
            id={0}
            name={""}
            contactInformation={{
              email: undefined,
              phone: undefined,
              address: {
                city: "",
                street: undefined,
                number: undefined,
                zip: undefined,
              },
              age: undefined,
            }}
            positionAppliedFor={""}
            resumeCV={""}
          />
        }
      />
      <Route
        path={"/freelancer"}
        element={
          <Freelancer
            id={0}
            name={""}
            contactInformation={{
              email: undefined,
              phone: undefined,
              address: {
                city: "",
                street: undefined,
                number: undefined,
                zip: undefined,
              },
              age: undefined,
            }}
            positionAppliedFor={""}
            resumeCV={""}
          />
        }
      />

      {/* Defaultes */}
      {/* Default un-authenticated */}
      <Route path={"/"} element={<Login />} />

      {/* Default authenticated */}
      <Route path={"/default"} element={<Home />} />
    </Routes>
  </div>
);

export default Router;
