import React from 'react';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Header from "../Header/Header";
import Home from "../Home/Home";
// import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      <Switch>
        <Route path="/" exact component={Home}/>
      </Switch>
      </div>
    </Router>
  );
}

export default App;
