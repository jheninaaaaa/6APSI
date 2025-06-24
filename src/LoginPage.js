import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div class="loginContainer">
      {}
      <div class="leftSection">
          <div class="slogan">
            <h2>Hello, World!</h2>
            <h2><strong>Be Good To Me</strong></h2>
          </div>
      </div>

      {}
      <div class="rightSection">
        <div class="loginBox">
          <h2 class="loginTitle">Login</h2>

          <div class="inputGroup">
            <label>Username </label>
            <input type="email" placeholder="Enter username" />
          </div>

          <div class="inputGroup">
            <label>Password</label>
            <input type="password" placeholder="••••••••" />
          </div>

          <div class="rememberMe">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button class="loginButton">Login</button>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
