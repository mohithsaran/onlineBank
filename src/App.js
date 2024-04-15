import Registration from './Forms/Registration';
import React from 'react';
import './App.css';
import logo from "./Images/logo.png"
import Home from './Home';
import Login from './Forms/Login';
import AccountDetails from './Forms/AccountDetails';
import {BrowserRouter as Router, Routes, Route,Link} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
    <div className='navBar'>
      <nav>
        <ul>
          <li><Link className="nav-link" to="/"><img src={logo} alt='Logo'></img></Link></li>
          <li><Link className="nav-link" to="/">Home</Link></li>
          <li><Link className="nav-link" to="/login">Login</Link></li>
          <li><Link className="nav-link" to="/register">Register</Link></li>
          <li><Link className="nav-link" to="/accDetails">Account Details</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
      </Routes>

    </div>
    </Router>
    </>
  );
}

export default App;
