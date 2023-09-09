import { useNavigate } from "react-router-dom";
import "./Plans.css";

const Plans = () => {
  const history = useNavigate();
  return (
    <section className="planscreen__info">
      <section className="description">
        <h3>Premium</h3>
        <p>4k + HDR </p>
        <button onClick={() => history("/")}>Subscribe</button>
      </section>
      <section className="description">
        <h3>Basic</h3>
        <p>720p</p>
        <button className="on" onClick={() => history("/")}>
          Subscribe
        </button>
      </section>
      <section className="description">
        <h3>Standard</h3>
        <p className="">1080p</p>
        <button onClick={() => history("/")}>Subscribe</button>
      </section>
    </section>
  );
};

export default Plans;
