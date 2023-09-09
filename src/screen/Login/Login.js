import { useState } from "react";
import { Loader } from "../../component/index";
import SignUp from "../SignUp/SignUp";

import "./Login.css";

const Login = () => {
  const [signIn, setSignIn] = useState(false);
  const [showLoader, setShowLoader] = useState(false); // Add loader state

  const handleClick = () => {
    setSignIn(true);
    setShowLoader(true);

    setTimeout(() => {
      setShowLoader(false);
    }, 2000);
  };

  return (
    <section className="loginScreen">
      <section className="login__screen">
        <img
          src="https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media/netflix.svg"
          alt="logo"
          className="login__screen__logo"
        />
        <button className="login__btn" onClick={handleClick}>
          Sign In
        </button>
        <section className="login__screen__gradient" />
      </section>

      <section className="login__screen__body">
        {showLoader ? (
          <Loader />
        ) : signIn ? (
          <>
            <SignUp />
          </>
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>

            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <section className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button className="loginScreen__btn" onClick={handleClick}>
                  GET STARTED
                </button>
              </form>
            </section>
          </>
        )}
      </section>
    </section>
  );
};

export default Login;
