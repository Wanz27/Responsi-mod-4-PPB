import { useState, useEffect } from "react";

export default function Profile() {
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    setName(localStorage.getItem("username") || "Anonymous");
    setAvatar(localStorage.getItem("avatar") || "🙂");
  }, []);

  const save = () => {
    localStorage.setItem("username", name);
    localStorage.setItem("avatar", avatar);
  };

  return (
    <div className="page">
      <h2>Profile</h2>

      <div className="profile-card">
        <div className="big-avatar">{avatar}</div>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          value={avatar}
          maxLength={2}
          onChange={(e) => setAvatar(e.target.value)}
        />

        <button className="btn" onClick={save}>Save</button>
      </div>
    </div>
  );
}
