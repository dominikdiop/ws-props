import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  return (
    <div className="App">
      <Profile
        name="Tarek Essid"
        bio="I  live in bardo and i am 22 years old"
        profession="Web Developer"
      >
        <img
          src="https://www.oseyo.co.uk/wp-content/uploads/2020/05/empty-profile-picture-png-2-2.png"
          alt="pic"
        />
      </Profile>
    </div>
  );
}

export default App;
