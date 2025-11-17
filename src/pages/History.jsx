import { useEffect, useState } from "react";

export default function History() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("timerHistory")) || [];
    setHistory(saved);
  }, []);

  return (
    <div className="page">
      <h2>Timer History</h2>

      <table className="history-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Mode</th>
            <th>Duration</th>
            <th>Finished</th>
          </tr>
        </thead>

        <tbody>
          {history.map((h, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{h.mode}</td>
              <td>{h.duration}</td>
              <td>{h.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
