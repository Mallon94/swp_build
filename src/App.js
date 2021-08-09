//* Modules *//
import React from 'react';
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//* Components *//
import Navbar from './components/Navbar';
import Home from './components/pages/Home';
import Services from './components/pages/Schedule';
import RollUp from './components/pages/rollup';
import RollUp2 from './components/pages/rollup2';
import Schedule from './components/pages/Schedule';
import Portal from './components/pages/Portal';
import LoginPage from './components/pages/Login';
import Help from './components/pages/Help';
import Contact from './components/pages/Contact';
import Video from './components/pages/Video';

//* Icons & CSS *//
import './App.css';

function App() {
  return (
    <div className="App">
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/rollup' component={RollUp} />
          <Route path='/rollup2' component={RollUp2} />
          <Route path='/Schedule' exact component={Schedule} />
          <Route path='/Portal' component={Portal} />
          <Route path='/Login' exact component={LoginPage} />
          <Route path='/Help' exact component={Help} />
          <Route path='/Contact' exact component={Contact} />
          <Route path='/Video' exact component={Video} />
        </Switch>
      </Router>
    </>
      
    </div>
  );
}

export default App;
