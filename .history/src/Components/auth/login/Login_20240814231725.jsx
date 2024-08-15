

import Profile from "../../../assets/auth/logo.png";
import auth from "../../../assets/auth/auth.png";
import Styles from "../Styles.module.css";


import LoginEmail from "./LoginEmail";

const Login = () => {
  
  return (
    <main className={`${Styles.main} grid md:grid-cols-3 grid-cols-1 gap-4`}>
     
      <div className="grid grid-cols-1 ">
        {" "}
        <section className={Styles.sectionimg}>
          <img src={Profile} alt="img" />
        </section>
        <section className={Styles.sectionlogin}>
          <div className={Styles.parent}>
            <span className={Styles.started}>اهلا بك من جديد</span>

            <LoginEmail />
          </div>
        </section>
      </div>
      <div className=" col-span-2 hidden md:grid">
        <img src={auth} alt="" className="h-screen w-screen" />
      </div>
    </main>
  );
};

export default Login;
