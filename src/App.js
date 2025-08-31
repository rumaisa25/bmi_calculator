import React, { useState } from "react";
import "./App.css";

function App() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (height > 0 && weight > 0) {
      const bmiValue = (weight / ((height / 100) ** 2)).toFixed(2);
      setBmi(bmiValue);

      if (bmiValue < 18.5) {
        setMessage("Underweight");
      } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
        setMessage("Normal weight");
      } else if (bmiValue >= 25 && bmiValue < 29.9) {
        setMessage("Overweight");
      } else {
        setMessage("Obesity");
      }
    } else {
      alert("Please enter valid height and weight!");
    }
  };



   const resetForm = () => {
    setHeight("");
    setWeight("");
    setBmi(null);
  };

  return (

    
    <div className="App">
  <h2>BMI Calculator</h2>
  <div className="formc">
    <form onSubmit={calculateBMI}>
      <div>
        <label>Height (cm): </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div>
        <label>Weight (kg): </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>

      <button type="submit">Calculate</button>
      <button type="button" onClick={resetForm}>Reset</button> 
      {/* changed to type="button" to prevent page reset */}

      {/* ✅ BMI Result inside the form card */}
      {bmi && (
        <div className="result">
          <h3>Your BMI: {bmi}</h3>
          <p>{message}</p>
        </div>
      )}
    </form>
  </div>
</div>
  );
}


export default App;

