import React, { useEffect, useState } from 'react';
import './LoginPage.css';
import { FaAngleLeft } from 'react-icons/fa';
import LandingPage from './LandingPage';

function LoginPage() {
  const [fade, setFade] = useState(false);

  useEffect(() => {
    setFade(true);
  }, []);

  const [goTo, setGoTo] = useState(false);
      const GoToLanding = (val) => {
          setGoTo(true)
      };
  
      if (goTo){
          return <LandingPage />;
      };

  return (
    <div className={`loginContainer ${fade ? 'fade-in' : ''}`}>
      <div className="leftSection">
            <FaAngleLeft className="backIcon" onClick={GoToLanding} />
        <div className="slogan">
          <h2>Hello, World!</h2>
          <h2><strong>Be Good To Me</strong></h2>
        </div>
      </div>

      <div className="rightSection">
        <div className="loginBox">
          <h2 className="loginTitle">Login</h2>

          <div className="inputGroup">
            <label>Username</label>
            <input type="email" placeholder="Enter username" />
          </div>

          <div className="inputGroup">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <button className="loginButton">Login</button>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
