import Registration from './Forms/Registration';
import React from 'react';
import './App.css';
import logo from "./Images/logo.png"

function App() {
  return (
    <>
    <div className='navBar'>
      <nav>
        <ul>
          <li><img src={logo} alt='Logo'></img></li>
          <li>Home</li>
          <li>Login</li>
          <li>Register</li>
        </ul>
      </nav>
      <Registration/>
    </div>
    </>
  );
}

export default App;
