import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  return (
    <div className="App">
      <LoadPost></LoadPost>
      <District name="Dhaka" specialty="Bakorkhani"></District>
      <District name="Bramman Baria" specialty="Jhoddah"></District>
      <District name="Comilla" specialty="Maynamoti"></District>
    </div>
  );
}
function LoadPost() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div>
      <h1>Post: {posts.length}</h1>
      {posts.map((post) => (
        <Post post={post}></Post>
      ))}
    </div>
  );
}
function Post(props) {
  const user = props.post;
  return (
    <div style={{ backgroundColor: "green", padding: "20px", margin: "20px" }}>
      <h3>Name: {user.name}</h3>
      <h5>ID: {user.id}</h5>
    </div>
  );
}

function District(props) {
  const [power, setPower] = useState(1);
  const boostPower = () => {
    const newPower = power * 2;
    setPower(newPower);
  };
  return (
    <div className="district">
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.specialty}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  );
}

export default App;
