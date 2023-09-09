import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomeScreen, Login, MovieDetails, Profile } from "./pages/index";
import { auth } from "./firebase";
import { onAuthStateChanged } from "firebase/auth";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth.email,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return () => {
      unsubscribe();
    };
  }, [dispatch]);
  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <Routes>
            <Route index path="/" element={<HomeScreen />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/movie/:movieid" element={<MovieDetails />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
