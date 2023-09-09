import { useEffect, useRef, useState } from "react";
import "./SignUp.css";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

const SignUp = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [user, setUser] = useState(null);

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  const Register = async (e) => {
    e.preventDefault();
    clearErrors();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.message);
      if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email address");
      } else if (error.code === "auth/weak-password") {
        setPasswordError("Password is too weak");
      } else if (error.code === "auth/email-already-in-use") {
        setEmailError("Email is already in use");
      } else {
        setEmailError("An error occurred");
      }
    }
  };

  const SignIn = async (e) => {
    e.preventDefault();
    clearErrors();

    const email = emailRef.current.value;
    const password = passRef.current.value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User signed in successfully!");
    } catch (error) {
      console.error("Error signing in:", error.message);
      if (error.code === "auth/invalid-email") {
        setEmailError("Invalid email address");
      } else if (error.code === "auth/user-not-found") {
        setEmailError("User not found");
      } else if (error.code === "auth/wrong-password") {
        setPasswordError("Wrong password");
      } else {
        setEmailError("An error occurred");
      }
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (authUser) => {
      if (authUser) {
        setUser(authUser);
        console.log("User signed in:", authUser);
      } else {
        setUser(null);
        console.log("No user is signed in");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <section className="signup__screen">
      <form>
        <h2>Sign In</h2>
        <input
          ref={emailRef}
          type="email"
          placeholder="Email"
          onChange={clearErrors}
        />
        {emailError && <p className="error__message">{emailError}</p>}

        <input
          ref={passRef}
          type="password"
          placeholder="Password"
          onChange={clearErrors}
        />

        {passwordError && <p className="error__message">{passwordError}</p>}

        <button type="submit" onClick={SignIn}>
          Sign In
        </button>

        <h4>
          <span className="signup__grey">New to Netflix? </span>
          <span className="signup__link" onClick={Register}>
            {" "}
            Sign Up Now
          </span>
        </h4>
      </form>
    </section>
  );
};

export default SignUp;
