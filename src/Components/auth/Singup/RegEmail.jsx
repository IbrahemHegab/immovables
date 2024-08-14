import React, { useState } from "react";
import Styles from "../Styles.module.css";
// import  IoEyeSharp  from "react-icons/io5";
import facebook from "../../../assets/auth/facebook.svg";
import gmail from "../../../assets/auth/gmail.png";
import apple from "../../../assets/auth/apple.svg";
import axios from "axios";
import { NavLink } from "react-router-dom";


const RegEmail = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const { name, email, password, passwordConfirm } = user;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const [NoMatch, SetNoMatch] = useState("");
  const [ShowPassword, setShowPassword] = useState(true);
  const TogglePassword = () => {
    setShowPassword(!ShowPassword);
  };
  const Signup = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8008/api/v1/auth/signup", user)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(user);
        console.log(error);
      });
  };

  return (
    <form className={Styles.pusodo} onSubmit={Signup}>
      <input
        className={Styles.form}
        type="text"
        placeholder="اسم المستخدم"
        aria-label="default input example"
        value={name}
        name="name"
        onChange={handleChange}
      />
      <input
        className={Styles.form}
        type="text"
        placeholder="البريد الالكتروني"
        aria-label="default input example"
        name="email"
        value={email}
        onChange={handleChange}
      />

      <div className={Styles.pusodo}>
        <input
          className={Styles.form}
          type={ShowPassword ? "password" : "text"}
          placeholder="اكتب الباسورد"
          aria-label="default input example"
          name="password"
          value={password}
          onChange={handleChange}
        />
        <a
          onClick={() => {
            TogglePassword();
          }}
        />
      </div>
      <div className={Styles.pusodo}>
        <input
          className={Styles.form}
          type={ShowPassword ? "password" : "text"}
          placeholder="اكتب الباسورد مره اخري"
          aria-label="default input example"
          name="passwordConfirm"
          value={passwordConfirm}
          onChange={handleChange}
        />
        <a
          onClick={() => {
            TogglePassword();
          }}
        />
      </div>

      <div className={`${Styles.loginbtn} d-flex justify-content-center`}>
      <button
          type="submit"
          className="bg-gray-900 p-3 rounded-lg text-gray-50"
        >
          تسجيل
        </button>
      </div>
      <NavLink to={"/auth"} className="text-gray-900 m-3 underline  underline-offset-2	">لديك ايميل ؟ تسجيل الدخول</NavLink>
{/* 
      <footer>
        <div className="Continue text-center">
          <span>Or Continue with</span>
        </div>
        <div
          className={`${Styles.footerdiv} container  d-flex justify-content-between col-xxl-12`}
        >
          <div className="d-flex justify-content-center align-items-center">
            <img src={facebook} alt="" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={apple} alt="" />
          </div>
          <div className="d-flex justify-content-center align-items-center">
            <img src={gmail} alt="" />
          </div>
        </div>
        <div id="recaptcha-container"></div>
      </footer> */}
    </form>
  );
};

export default RegEmail;
