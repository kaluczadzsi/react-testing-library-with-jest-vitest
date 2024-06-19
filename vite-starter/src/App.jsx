import { useState } from "react";
import "./App.css";

function App() {
  const [btnValues, setBtnValues] = useState({
    color: "red",
    label: "Change to blue",
  });

  const handleChange = () => {
    setBtnValues((prevState) => ({
      color: prevState.color === "red" ? "blue" : "red",
      label: prevState.color === "red" ? "Change to red" : "Change to blue",
    }));
  };

  return (
    <div>
      <button onClick={handleChange} className={btnValues.color}>
        {btnValues.label}
      </button>
      <br />
      <label htmlFor="disable-button-checkbox">Disable button</label>
      <input
        type="checkbox"
        id="disable-button-checkbox"
        defaultChecked={false}
      />
    </div>
  );
}

export default App;
