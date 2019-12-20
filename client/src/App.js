import React from 'react';
import {Route} from "react-router-dom";
import {Link} from "react-router-dom";

import RegisterPage from "./components/registerPage";
import HomePage from "./components/homePage";
import LoginPage from "./components/loginPage";

import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/login">Login</Link>
      </nav>


      <div className="routes">
        <Route exact path ="/" component={HomePage}/>
        <Route exact path="/register" component={RegisterPage}/>
        <Route exact path="/login" component={LoginPage}/>
      </div>
    </div>
  );
}

export default App;
