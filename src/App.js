import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route} from 'react-router-dom'
import HomePage from './container/HomePage';
import LoginPage from './container/LoginPage';
import Registration from './container/Registration';
function App() {
  return (
    <div>
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={Registration} />
      </Router>
    </div>
  );
}

export default App;
