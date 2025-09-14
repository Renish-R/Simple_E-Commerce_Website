import React from 'react';
import Wgrid from './wgrid';
import "./LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-page">
      <Wgrid />
      <div className="landing-content">
        <h1>Welcome to Shopy 🎉</h1>
        <p>Login to Continue...!</p>
      </div>
    </div>
  );
}

export default LandingPage;
