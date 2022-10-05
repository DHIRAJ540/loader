import { useState } from "react";
import "./App.css";

let intervalId = 0;
function App() {
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const startInterval = () => {
    if (!isLoading) {
      intervalId = setInterval(() => {
        setValue((value) => (value + 1) % 100);
      }, 100);
      setIsLoading(true);
    }
  };

  const stopInterval = () => {
    clearInterval(intervalId);
    setIsLoading(false);
  };

  return (
    <div className="App">
      <h1>LOADER</h1>
      <div className="loader">
        <svg>
          <circle cx="70" cy="70" r="70"></circle>
          <circle
            cx="70"
            cy="70"
            r="70"
            style={{ strokeDashoffset: ((100 - value) / 100) * 440 }}
          ></circle>
        </svg>
        <div className="percent">
          <h1>{value}%</h1>
        </div>
      </div>
      <div className="button_container">
        <button
          onClick={() => {
            startInterval();
          }}
        >
          Start
        </button>
        <button
          onClick={() => {
            stopInterval();
          }}
        >
          Stop
        </button>
      </div>
    </div>
  );
}

export default App;
