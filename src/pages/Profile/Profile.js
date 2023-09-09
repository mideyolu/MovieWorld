import { useSelector } from "react-redux";
import { Navbar } from "../../component/index";
import "./Profile.css";
import { selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";
import Plans from "../../component/Plans/Plans";

const Profile = () => {
  const user = useSelector(selectUser);
  return (
    <section className="profile__Screen">
      <Navbar />
      <section className="profilescreen__body">
        <h2>Edit Profile</h2>
        <section className="profileScreen__info">
          <img
            src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-88wkdmjrorckekha.jpg"
            alt="Avatar"
          />
          <section className="profilescreen__details">
            <h2>{user.email}</h2>
            <section className="profileScreen__plans">
              <h3>Plans (Current plan Basic)</h3>
              <p>Renewal date {new Date().getFullYear() + 1}</p>
              <Plans />

              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signout"
              >
                SIgn Out
              </button>
            </section>
          </section>
        </section>
      </section>
    </section>
  );
};

export default Profile;
