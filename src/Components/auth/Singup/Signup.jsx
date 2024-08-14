import React from "react";
import Profile from "../../../assets/auth/profileLogin.svg" ;


import { NavLink } from "react-router-dom";
import RegEmail from "./RegEmail";
import Styles from "../Styles.module.css";

const Signup = () => {
  return (
    <main className={Styles.main}>
      <section className={Styles.sectionimg}>
        <img src={Profile} alt="img" />
      </section>
      <section className={Styles.sectionlogin}>
        <div className={Styles.parent}>
         
          
          <span className={ Styles.started}>اهلا بك مره اخري</span>
       

          <RegEmail />
        </div>
      </section>
    </main>
  );
};

export default Signup;
