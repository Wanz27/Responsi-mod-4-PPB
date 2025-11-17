import React from "react";

export default function CircularTimer({ totalSeconds, remainingSeconds }) {
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const percent = remainingSeconds / totalSeconds;

  return (
    <svg width="220" height="220">
      <circle
        cx="110"
        cy="110"
        r={radius}
        stroke="#ddd"
        strokeWidth="12"
        fill="none"
      />

      <circle
        cx="110"
        cy="110"
        r={radius}
        stroke="#4b8ef1"
        strokeWidth="12"
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - percent)}
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.8s ease" }}
      />
    </svg>
  );
}
