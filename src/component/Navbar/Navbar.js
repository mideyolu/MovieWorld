import Logo from "../../assets/images/logo.jpg";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const history = useNavigate();

  const TransitionNavbar = () => {
    window.scrollY > 100 ? setShow(true) : setShow(false);
  };
  useEffect(() => {
    window.addEventListener("scroll", TransitionNavbar);
    return () => window.removeEventListener("scroll", TransitionNavbar);
  }, []);
  return (
    <nav className={`nav ${show && "nav__black"}`}>
      <section className="nav__contents">
        <img
          onClick={() => history("/")}
          className="nav__logo"
          src={Logo}
          alt="Logo"
        />

        <img
          onClick={() => history("/profile")}
          src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
          className="nav__avatar"
          alt=""
        />
      </section>
    </nav>
  );
};

export default Navbar;
