import { useState, useEffect } from "react";
import "./index.css";
import Navbar from "./components/Navbar";
import CircularTimer from "./components/CircularTimer";

function App() {
  const [timeLeft, setTimeLeft] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);
  const [isWork, setIsWork] = useState(true);
  const [cycles, setCycles] = useState(0);
  const [customMinutes, setCustomMinutes] = useState(25);

  const audio = new Audio("/alarm.mp3");

  // Save to history
  const saveHistory = (mode, duration) => {
    const entry = {
      mode,
      duration,
      time: new Date().toLocaleString()
    };

    const prev = JSON.parse(localStorage.getItem("timerHistory")) || [];
    localStorage.setItem("timerHistory", JSON.stringify([entry, ...prev]));
  };

  useEffect(() => {
    let interval = null;

    if (isRunning && timeLeft > 0) {
      interval = setInterval(() => setTimeLeft((p) => p - 1), 1000);
    }

    if (timeLeft === 0) {
      audio.play();
      saveHistory(isWork ? "Work" : "Break", isWork ? "25m" : "5m");

      if (isWork) {
        setCycles(c => c + 1);

        if (cycles + 1 >= 4) {
          setTimeLeft(15 * 60);
          setCycles(0);
        } else {
          setTimeLeft(5 * 60);
        }

        setIsWork(false);
      } else {
        setTimeLeft(25 * 60);
        setIsWork(true);
      }

      setIsRunning(false);
    }

    return () => clearInterval(interval);
  }, [isRunning, timeLeft, isWork, cycles]);

  const setCustom = () => {
    if (customMinutes > 0) {
      setTimeLeft(customMinutes * 60);
      setIsWork(true);
      setIsRunning(false);
    }
  };

  return (
    <div className="fullscreen">
      <Navbar />

      <div className="content">

        <h1 className="title">Pomodoro Timer</h1>

        <CircularTimer
          totalSeconds={isWork ? 25 * 60 : 5 * 60}
          remainingSeconds={timeLeft}
        />

        <div className="timer-text">
          {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
          {String(timeLeft % 60).padStart(2, "0")}
        </div>

        <div className="mode">{isWork ? "Work Time" : "Break Time"}</div>

        <div className="controls">
          <button className="btn" onClick={() => setIsRunning(!isRunning)}>
            {isRunning ? "Pause" : "Start"}
          </button>
          <button className="btn" onClick={() => setTimeLeft(25 * 60)}>
            Reset
          </button>
        </div>

        <div className="manual-set">
          <input
            type="number"
            min="1"
            value={customMinutes}
            onChange={(e) => setCustomMinutes(e.target.value)}
          />
          <button className="btn" onClick={setCustom}>Set Minutes</button>
        </div>

        <div className="cycles">Cycles Completed: {cycles}</div>
      </div>
    </div>
  );
}

export default App;
