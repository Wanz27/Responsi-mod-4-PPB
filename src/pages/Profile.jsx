import React, { useState, useEffect } from "react";

export default function Profile() {

  /* ===== STATE & LOCAL STORAGE ===== */
  const [name, setName] = useState("");
  const [nim, setNim] = useState("");
  const [status, setStatus] = useState("");

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Load profile from localStorage
  useEffect(() => {
    const savedName = localStorage.getItem("profile_name") || "Wanz";
    const savedNim = localStorage.getItem("profile_nim") || "230XXXX";
    const savedStatus = localStorage.getItem("profile_status") || "Mahasiswa";

    setName(savedName);
    setNim(savedNim);
    setStatus(savedStatus);
  }, []);

  // Save profile to localStorage
  const saveProfile = () => {
    localStorage.setItem("profile_name", name);
    localStorage.setItem("profile_nim", nim);
    localStorage.setItem("profile_status", status);
    setIsModalOpen(false);
  };

  return (
    <div className="profile-page">
      {/* ===== GLOBAL CSS ===== */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500;700&display=swap');

        body {
          background: linear-gradient(120deg, #d9ecff, #eef6ff, #d9ecff);
          background-size: 300% 300%;
          animation: gradientFlow 16s ease infinite;
          min-height: 100vh;
          margin: 0;
          font-family: "Poppins", sans-serif;
        }

        @keyframes gradientFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .profile-page {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding-top: 40px;
        }

        .profile-title {
          font-family: "Quicksand", sans-serif;
          font-size: 2.8rem;
          font-weight: 700;
          background: linear-gradient(135deg, #4ea8de, #90e0ef, #caf0f8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: titleFloat 3s ease-in-out infinite;
        }

        @keyframes titleFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .profile-card {
          background: rgba(255,255,255,0.65);
          width: 420px;
          padding: 2rem;
          border-radius: 25px;
          text-align: center;
          backdrop-filter: blur(14px);
          box-shadow: 0px 6px 25px rgba(0,0,0,0.12);
          animation: popCard .7s ease forwards;
        }

        @keyframes popCard {
          from { opacity: 0; transform: translateY(20px) scale(.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .avatar {
          width: 120px;
          height: 120px;
          margin: 0 auto 1rem;
          animation: avatarBounce 2.2s infinite ease-in-out;
        }

        @keyframes avatarBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        .profile-name {
          font-size: 1.7rem;
          font-weight: 700;
        }

        .profile-info {
          font-size: 1.1rem;
          margin: .3rem 0;
        }

        .button-row {
          margin-top: 1.8rem;
          display: flex;
          gap: 1rem;
          justify-content: center;
        }

        .btn-profile {
          padding: 10px 18px;
          border: none;
          border-radius: 12px;
          cursor: pointer;
          font-weight: 600;
          background: #4ea8de;
          color: white;
          transition: .3s ease;
        }

        .btn-profile:hover {
          opacity: 0.85;
          transform: translateY(-2px);
        }

        /* ===== MODAL ===== */
        .modal-bg {
          position: fixed;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          animation: fadeIn .3s ease;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        .modal-box {
          background: white;
          width: 750px;
          height: auto;
          padding: 5.0rem;
          border-radius: 38px;
          animation: popUp .25s ease;
        }

        @keyframes popUp {
          from { transform: scale(.8); opacity: .5; }
          to { transform: scale(1); opacity: 1; }
        }

        .modal-title {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
        }

        .modal-input {
          width: 100%;
          padding: 20px;
          margin-bottom: 2rem;
          border-radius: 30px;
          border: 1px solid #ccc;
          font-size: 1rem;
        }

        .modal-btn-row {
          display: flex;
          justify-content: flex-end;
          gap: 10px;
        }

        .btn-cancel {
          background: #aaa;
          color: white;
          padding: 18px 24px;
          border-radius: 8px;
          cursor: pointer;
          transition-duration: 0.4s;
          border: none;
        }

        .btn-cancel:hover {
          background: #ff4141ff;
        }

        .btn-save {
          background: #4ea8de;
          color: white;
          padding: 18px 24px;
          border-radius: 8px;
          cursor: pointer;
          transition-duration: 0.4s;
          border: none;
        }

        .btn-save:hover {
          background: #00558aff;
        }
      `}</style>

      {/* ===== TITLE ===== */}
      <h2 className="profile-title">🌿 My Profile 🌿</h2>

      {/* ===== CARD ===== */}
      <div className="profile-card">

        <div className="avatar" aria-hidden>
          <svg viewBox="0 0 100 120" width="100" height="120" xmlns="http://www.w3.org/2000/svg">
            {/* Head */}
            <circle cx="50" cy="25" r="12" stroke="#0b1220" strokeWidth="3" fill="none" strokeLinecap="round" />
            {/* Body */}
            <line x1="50" y1="37" x2="50" y2="75" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" />
            {/* Arms */}
            <line x1="50" y1="48" x2="30" y2="60" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="48" x2="70" y2="60" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" />
            {/* Legs */}
            <line x1="50" y1="75" x2="35" y2="100" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" />
            <line x1="50" y1="75" x2="65" y2="100" stroke="#0b1220" strokeWidth="3" strokeLinecap="round" />
          </svg>
        </div>
        <h3 className="profile-name">{name}</h3>
        <p className="profile-info"><b>Student ID:</b> {nim}</p>
        <p className="profile-info"><b>Status:</b> {status}</p>

        <div className="button-row">
          <button className="btn-profile" onClick={() => setIsModalOpen(true)}>
            Edit Profile
          </button>
          <button className="btn-profile" onClick={() => window.location.href = "/"}>
            Back to Timer
          </button>
        </div>
      </div>

      {/* ===== EDIT MODAL ===== */}
      {isModalOpen && (
        <div className="modal-bg">
          <div className="modal-box">
            <div className="modal-title">Edit Profile</div>

            <input
              className="modal-input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your name"
            />

            <input
              className="modal-input"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              placeholder="Your NIM"
            />

            <input
              className="modal-input"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              placeholder="Your status"
            />

            <div className="modal-btn-row">
              <button className="btn-cancel" onClick={() => setIsModalOpen(false)}>
                Cancel
              </button>
              <button className="btn-save" onClick={saveProfile}>
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
