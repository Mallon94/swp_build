import './App.css';
import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import RollUp from './components/pages/RollUp';
import SignUp from './components/pages/SignUp';

import { FaHeart } from "react-icons/fa";
import { FaGem } from "react-icons/fa";

import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';


function App() {
  return (
    <div className="App">
         <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/services' component={Services} />
          <Route path='/rollup' component={RollUp} />
          <Route path='/sign-up' component={SignUp} />
        </Switch>
      </Router>
    </>
      
    </div>
  );
}

export default App;
