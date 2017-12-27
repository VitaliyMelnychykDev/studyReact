import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import User from './components/User';
import Blog from './components/Blog';
import Account from './components/Account';
import Task from './components/Task';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <div>
              <Link to='/'>Home</Link><br/>
              <Link to='/blog'>Blog</Link><br/>
              <Link to='/account'>Account</Link><br/>
              <Link to='/task'>Task</Link><br/>
            </div>
            <hr/>
            <Route exact path='/' component={User} />
            <Route path='/blog' component={Blog} />
            <Route path='/account' component={Account} />
            <Route path='/task' component={Task}/>
          </div>
        </Router>
    );
  }
}

export default App;
