import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <District name="Dhaka" specialty="Bakorkhani"></District>
      <District name="Bramman Baria" specialty="Jhodda"></District>
      <District name="Comilla" specialty="Maynamoti"></District>
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
