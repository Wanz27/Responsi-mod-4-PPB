import React from 'react';

export default function Profile() {
  return (
    <div className="profile-page">
      <h2>My Profile</h2>
      
      <p>Name: <b>Pomodoro Hero</b></p>
      <p>Completed Cycles: 42</p>
      <button className="btn">Back to Timer</button>
    </div>
  );
}
